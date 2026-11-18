const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const files = ["index.html", "about.html", "services.html", "portfolio.html", "contact.html"];

try {
  const source = fs.readFileSync(path.join(__dirname, "main.js"), "utf8");
  // Parse the translation declaration with the JavaScript engine, without
  // executing the browser initialization code that follows it.
  const declaration = source.match(/\bconst\s+translations\s*=/);
  if (!declaration) throw new Error("Translation declaration not found in js/main.js");
  const remainder = source.slice(declaration.index + declaration[0].length);
  let script;
  for (let end = remainder.indexOf(";"); end !== -1; end = remainder.indexOf(";", end + 1)) {
    try {
      script = new vm.Script(`(${remainder.slice(0, end)}\n)`);
      break;
    } catch (error) {
      if (!(error instanceof SyntaxError)) throw error;
    }
  }
  if (!script) throw new Error("Could not parse translation declaration in js/main.js");
  const translations = script.runInNewContext({}, { timeout: 1000 });
  if (!translations || !translations.fa || !translations.en ||
      typeof translations.fa !== "object" || typeof translations.en !== "object") {
    throw new Error("Could not load both fa and en translation dictionaries from js/main.js");
  }

  const used = new Map();
  const attribute = /\b(data-i18n(?:-aria|-placeholder)?)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/gi;
  for (const file of files) {
    const html = fs.readFileSync(path.join(root, file), "utf8");
    for (const match of html.matchAll(attribute)) {
      const key = match[2] ?? match[3] ?? match[4];
      if (!used.has(key)) used.set(key, new Set());
      used.get(key).add(file);
    }
  }

  const faKeys = new Set(Object.keys(translations.fa));
  const enKeys = new Set(Object.keys(translations.en));
  const missing = Object.fromEntries(["fa", "en"].map((lang) => [lang,
    [...used].filter(([key]) => !Object.hasOwn(translations[lang], key))
      .map(([key, locations]) => ({ key, files: [...locations] }))
  ]));
  const onlyFa = [...faKeys].filter((key) => !enKeys.has(key)).sort();
  const onlyEn = [...enKeys].filter((key) => !faKeys.has(key)).sort();

  console.log(JSON.stringify({
    filesChecked: files.length,
    keysUsed: used.size,
    missing,
    onlyFa,
    onlyEn
  }, null, 2));
  if (missing.fa.length || missing.en.length || onlyFa.length || onlyEn.length) {
    process.exitCode = 1;
  }
} catch (error) {
  console.error(`i18n check failed: ${error.message}`);
  process.exitCode = 1;
}
