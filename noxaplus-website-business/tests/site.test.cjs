'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');
const { pathToFileURL, fileURLToPath } = require('node:url');

const root = path.resolve(__dirname, '..');
const pages = ['index.html', 'about.html', 'services.html', 'portfolio.html', 'contact.html', 'planner.html'];
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const stripComments = (html) => html.replace(/<!--[\s\S]*?-->/g, '');

// The site uses static HTML. Ignore comments and raw script/style contents when
// extracting tags so example markup in JavaScript is not mistaken for a link.
function tags(html) {
  return [...stripComments(html).replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, (s) => s.match(/^<[^>]*>/)[0]).matchAll(/<([a-z][\w:-]*)\b((?:"[^"]*"|'[^']*'|[^'">])*)>/gi)]
    .map((m) => ({ name: m[1].toLowerCase(), attrs: attributes(m[2]) }));
}
function attributes(text) {
  const result = Object.create(null);
  for (const m of text.matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g)) {
    result[m[1].toLowerCase()] = decodeHtml(m[2] ?? m[3] ?? m[4] ?? '');
  }
  return result;
}
function decodeHtml(value) {
  return value.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi, (entity) => {
    const named = { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' };
    if (named[entity.toLowerCase()]) return named[entity.toLowerCase()];
    const number = entity.slice(2, -1);
    return String.fromCodePoint(number[0].toLowerCase() === 'x' ? parseInt(number.slice(1), 16) : parseInt(number, 10));
  });
}

// Resolve paths with URL semantics: query strings are not filenames, fragments
// refer to an element in the destination, and external schemes are not files.
function localTarget(from, reference) {
  const value = reference.trim();
  if (!value || value.startsWith('//') || /^[a-z][a-z\d+.-]*:/i.test(value)) return null;
  const base = pathToFileURL(path.join(root, from));
  let url;
  if (value.startsWith('/')) {
    url = new URL(value.slice(1), pathToFileURL(root + path.sep));
  } else {
    url = new URL(value, base);
  }
  const fragment = url.hash ? decodeURIComponent(url.hash.slice(1)) : '';
  url.hash = '';
  url.search = '';
  return { file: fileURLToPath(url), fragment };
}
function checkReference(from, reference, checkFragment = false) {
  const target = localTarget(from, reference);
  if (!target) return;
  assert.ok(fs.existsSync(target.file) && fs.statSync(target.file).isFile(), `${from}: missing local target ${reference}`);
  if (checkFragment && target.fragment && /\.html?$/i.test(target.file)) {
    const destination = tags(fs.readFileSync(target.file, 'utf8'));
    assert.ok(destination.some(({ name, attrs }) => attrs.id === target.fragment || (name === 'a' && attrs.name === target.fragment)),
      `${from}: missing fragment ${reference}`);
  }
}

test('repository entry redirects to the actual homepage for file and HTTP URLs', () => {
  const entryPath = path.join(root, '..', 'index.html');
  const html = fs.readFileSync(entryPath, 'utf8');
  const elements = tags(html);
  const destination = 'noxaplus-website-business/index.html';
  const refresh = elements.find(({ name, attrs }) => name === 'meta' && attrs['http-equiv']?.toLowerCase() === 'refresh');
  assert.equal(refresh?.attrs.content, `0; url=${destination}`);
  const links = elements.filter(({ name, attrs }) => name === 'a' && attrs.href);
  assert.ok(links.length >= 2);
  for (const link of links) assert.equal(link.attrs.href, destination);
  const script = html.match(/<script>([\s\S]*?)<\/script>/i)?.[1];
  assert.ok(script, 'entry redirect script missing');
  let redirected;
  vm.runInNewContext(script, { location: { replace(value) { redirected = value; } } }, { timeout: 1000 });
  assert.equal(redirected, destination);
  const fileUrl = new URL(destination, pathToFileURL(entryPath));
  assert.equal(fileURLToPath(fileUrl), path.join(root, 'index.html'));
  assert.ok(fs.statSync(fileURLToPath(fileUrl)).isFile());
  assert.equal(new URL(destination, 'https://localhost/site/').pathname, '/site/noxaplus-website-business/index.html');
});

for (const page of pages) {
  test(`${page}: document, local resources and links`, () => {
    const html = read(page);
    assert.match(html, /<!doctype\s+html\s*>/i);
    assert.match(html, /<html\b/i);
    assert.match(html, /<\/html\s*>/i);
    const elements = tags(html);
    for (const { name, attrs } of elements) {
      if (name === 'a' && Object.hasOwn(attrs, 'href')) checkReference(page, attrs.href, true);
      if (['script', 'img', 'source', 'video', 'audio', 'iframe', 'embed', 'input'].includes(name) && attrs.src) checkReference(page, attrs.src);
      if (name === 'link' && attrs.href) checkReference(page, attrs.href);
      if (name === 'video' && attrs.poster) checkReference(page, attrs.poster);
      if (name === 'object' && attrs.data) checkReference(page, attrs.data);
      if (attrs.srcset) {
        for (const candidate of attrs.srcset.split(',')) {
          const url = candidate.trim().split(/\s+/)[0];
          if (url) checkReference(page, url);
        }
      }
      if (attrs.style) {
        for (const match of attrs.style.matchAll(/url\(\s*(['"]?)(.*?)\1\s*\)/gi)) checkReference(page, match[2]);
      }
    }
  });
  test(`${page}: no example email or placeholder telephone`, () => {
    const html = stripComments(read(page));
    assert.doesNotMatch(html, /[\w.+%-]+@[\w.-]+\.example\b/i);
    for (const match of html.matchAll(/\btel\s*:\s*([^\s"'<>]+)/gi)) {
      const number = decodeURIComponent(match[1]).replace(/[^\d]/g, '');
      assert.ok(number && !/^(?:0+|1+|1234567890*|9876543210*|(?:\d)\1{5,})$/.test(number) && !/^1555\d{7}$/.test(number), `${page}: placeholder telephone ${match[0]}`);
    }
  });
  test(`${page}: brand marks exist and are referenced`, () => {
    const images = tags(read(page)).filter((tag) => tag.name === 'img').map((tag) => tag.attrs.src);
    for (const logo of ['assets/brand/mark-dark.png', 'assets/brand/mark-light.png']) {
      assert.ok(fs.existsSync(path.join(root, logo)), `missing ${logo}`);
      assert.ok(images.includes(logo), `${page}: missing image ${logo}`);
    }
  });
}

for (const page of pages.slice(0, 5)) {
  test(`${page}: sample data notice and planner link`, () => {
    const html = read(page);
    assert.match(html, /data-i18n\s*=\s*["']demo\.notice["'][^>]*>[^<]*(?:نمونه|نمایشی)/i);
    assert.ok(tags(html).some(({ name, attrs }) => name === 'a' && attrs.href && localTarget(page, attrs.href)?.file === path.join(root, 'planner.html')), `${page}: missing planner link`);
  });
}

test('stylesheets reference existing local resources', () => {
  for (const css of ['css/style.css', 'css/planner.css']) {
    const source = read(css).replace(/\/\*[\s\S]*?\*\//g, '');
    for (const match of source.matchAll(/url\(\s*(['"]?)(.*?)\1\s*\)/gi)) checkReference(css, match[2]);
    for (const match of source.matchAll(/@import\s+(?:url\(\s*)?['"]([^'"]+)['"]/gi)) checkReference(css, match[1]);
  }
});

test('contact form explicitly offers local output without server submission', () => {
  const html = read('contact.html');
  const match = html.match(/<form\b([^>]*)>([\s\S]*?)<\/form\s*>/gi)?.find((form) => /\bid\s*=\s*["']contactForm["']/i.test(form));
  assert.ok(match, 'contact form missing');
  const formTags = tags(match);
  const form = formTags.find((tag) => tag.name === 'form');
  assert.ok(!form.attrs.action, 'contact form must not submit to a server');
  assert.match(match, /<fieldset\b[^>]*\bid=["']contactFields["'][^>]*\bdisabled\b[^>]*>[\s\S]*?<input\b[\s\S]*?<button\b[^>]*type=["']submit["'][\s\S]*?<\/fieldset>/i, 'form controls must be disabled until JavaScript starts');
  assert.ok(formTags.some(({ name, attrs }) => name === 'p' && attrs.id === 'contactUnavailable'), 'JavaScript fallback message missing');
  assert.ok(formTags.some(({ name, attrs }) => name === 'textarea' && attrs.id === 'contactOutput' && Object.hasOwn(attrs, 'readonly')), 'read-only local output missing');
  assert.ok(formTags.some(({ name, attrs }) => name === 'button' && attrs.id === 'copyContact' && attrs.type === 'button'), 'copy button missing');
  assert.match(match, /data-i18n\s*=\s*["']form\.hint["'][^>]*>[^<]*(?:ارسال|صفحه)/i);
  // Execute only the form initializer, with a small deterministic DOM stub.
  const main = read('js/main.js');
  const start = main.indexOf('function initContactForm()');
  const end = main.indexOf('\nfunction initCommon()', start);
  assert.ok(start >= 0 && end > start, 'contact initializer missing');
  let submit;
  const values = { name: 'Test User', email: 'user@domain.test', phone: '', message: 'Hello', subject: 'Project' };
  const fields = Object.fromEntries(Object.entries(values).map(([name, value]) => [name, { value, classList: { toggle() {} }, setAttribute() {} }]));
  const output = { value: '' };
  const result = { hidden: true };
  const copy = { addEventListener() {} };
  const fieldset = { disabled: true };
  const unavailable = { hidden: false };
  const stub = { ...fields, elements: { namedItem(name) { return fields[name]; } }, addEventListener(type, fn) { if (type === 'submit') submit = fn; }, querySelector(selector) { return selector === '#contactOutput' ? output : selector === '#contactResult' ? result : null; }, reset() {} };
  const document = { querySelector(selector) { return selector === '#contactForm' ? stub : selector === '#contactOutput' ? output : selector === '#contactResult' ? result : selector === '#copyContact' ? copy : selector === '#contactFields' ? fieldset : selector === '#contactUnavailable' ? unavailable : null; }, getElementById(id) { return id === 'contactOutput' ? output : id === 'contactResult' ? result : null; } };
  vm.runInNewContext(`${main.slice(start, end)}\ninitContactForm();`, { document, t: (key) => key, showToast() {} }, { timeout: 1000 });
  assert.equal(typeof submit, 'function', 'submit handler missing');
  assert.equal(fieldset.disabled, false);
  assert.equal(unavailable.hidden, true);
  let prevented = false;
  submit({ preventDefault() { prevented = true; } });
  assert.ok(prevented, 'submit must be handled locally');
  assert.ok(output.value.includes('Test User') && output.value.includes('Hello') && !result.hidden, 'valid submission must display the prepared local output');
});

test('planner share links never expose a local file path', () => {
  const source = read('js/planner.js');
  const start = source.indexOf('  function shareUrl()');
  const end = source.indexOf('\n  let restored =', start);
  assert.ok(start >= 0 && end > start, 'planner share function missing');
  const run = (href) => vm.runInNewContext(`${source.slice(start, end)}\nshareUrl();`, {
    URL, URLSearchParams, location: { href },
    current: () => ({ type: 'business', scope: 'medium', features: ['seo', 'cms'] }),
  }, { timeout: 1000 });
  assert.equal(run('file:///C:/Users/Example/planner.html'), null);
  const shared = new URL(run('https://localhost/planner.html?ignored=1'));
  assert.equal(shared.search, '');
  assert.equal(shared.pathname, '/planner.html');
  assert.equal(shared.hash, '#type=business&scope=medium&features=seo%2Ccms');
});

test('translation checker reports complete, consistent dictionaries', () => {
  const result = spawnSync(process.execPath, [path.join(root, 'js/check-i18n.js')], { cwd: root, encoding: 'utf8', timeout: 10000 });
  assert.ifError(result.error);
  assert.equal(result.status, 0, `checker failed: ${result.stderr}\n${result.stdout}`);
  const report = JSON.parse(result.stdout);
  assert.equal(report.filesChecked, 5);
  assert.ok(report.keysUsed > 0);
  assert.deepEqual(report.missing, { fa: [], en: [] });
  assert.deepEqual(report.onlyFa, []);
  assert.deepEqual(report.onlyEn, []);
});

test('translation checker detects missing keys without changing project files', () => {
  const checker = read('js/check-i18n.js');
  const actualMain = read('js/main.js');
  let stdout = '';
  const processStub = { exitCode: 0 };
  const fakeFs = { readFileSync(file, encoding) {
    const filename = path.basename(file);
    if (filename === 'main.js') return actualMain;
    if (filename === 'index.html') return `${read(filename)}\n<div data-i18n="test.key.missing"></div>`;
    return fs.readFileSync(file, encoding);
  } };
  const sandbox = { require(name) { return name === 'fs' ? fakeFs : require(name); }, __dirname: path.join(root, 'js'), process: processStub, console: { log(value) { stdout += value; }, error(value) { throw new Error(value); } } };
  vm.createContext(sandbox);
  sandbox.require = (name) => name === 'fs' ? fakeFs : name === 'vm' ? { Script: vm.Script, } : require(name);
  // The checker catches SyntaxError while probing declaration boundaries;
  // use the host constructor so exceptions from vm.Script are recognized.
  sandbox.SyntaxError = SyntaxError;
  vm.runInContext(checker, sandbox, { timeout: 5000 });
  const report = JSON.parse(stdout);
  assert.equal(processStub.exitCode, 1);
  for (const language of ['fa', 'en']) assert.ok(report.missing[language].some((item) => item.key === 'test.key.missing' && item.files.includes('index.html')), `${language}: missing key not reported`);
});
