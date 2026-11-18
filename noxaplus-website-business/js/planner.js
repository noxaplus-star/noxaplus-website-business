'use strict';

(() => {
  const DRAFT_KEY = 'noxaplus_planner_draft_v1';
  const LANG_KEY = 'noxaplus_lang';
  const THEME_KEY = 'noxaplus_theme';
  // Illustrative, not a price list: cost is in million toman, duration in working weeks.
  const types = { landing: [15, 2], business: [30, 4], store: [55, 6], webapp: [80, 8] };
  const features = { cms: [10, 1], multilingual: [8, 1], seo: [6, 0.5], booking: [15, 1.5], payment: [10, 1], account: [14, 1.5], analytics: [4, 0.5], content: [8, 1] };
  const scopes = { small: 1, medium: 1.4, large: 1.9 };
  const translations = {
    fa: {
      skip: 'رفتن به برنامه‌ریز', back: 'بازگشت به خانه', eyebrow: 'ابزار برنامه‌ریزی پروژه', title: 'از ایده تا برنامه', intro: 'چند انتخاب ساده، تصویری روشن‌تر از مسیر پیش رو. محدوده پروژه‌تان را مشخص کنید و یک برآورد اولیه بسازید.', introSide: 'از ایده تا تصویر اولیه، در چند قدم کوتاه.',
      stepOne: 'نقطه شروع', typeTitle: 'چه چیزی می‌سازیم؟', typeHelp: 'یک نوع پروژه را به عنوان پایه انتخاب کنید.', typeLegend: 'نوع پروژه', landing: 'صفحه فرود', landingDesc: 'معرفی یک محصول یا کمپین', business: 'وب‌سایت شرکتی', businessDesc: 'معرفی کسب‌وکار و خدمات', store: 'فروشگاه آنلاین', storeDesc: 'نمایش و فروش محصولات', webapp: 'اپلیکیشن وب', webappDesc: 'ابزار یا پنل تعاملی',
      stepTwo: 'جزئیات پروژه', featuresTitle: 'چه امکاناتی نیاز دارید؟', featuresHelp: 'هر تعداد گزینه که با هدف شما هماهنگ است انتخاب کنید.', featuresLegend: 'امکانات پروژه', cms: 'مدیریت محتوا', cmsDesc: 'ویرایش مستقل متن و محتوا', multilingual: 'چندزبانه', multilingualDesc: 'یک زبان اضافه و چیدمان آن', seo: 'سئوی پایه', seoDesc: 'ساختار و تنظیمات اولیه جست‌وجو', booking: 'رزرو و نوبت‌دهی', bookingDesc: 'درخواست و مدیریت نوبت', payment: 'پرداخت آنلاین', paymentDesc: 'اتصال به یک درگاه پرداخت', account: 'حساب کاربری', accountDesc: 'ثبت‌نام و ورود کاربران', analytics: 'تحلیل و آمار', analyticsDesc: 'راه‌اندازی ابزار تحلیل بازدید', content: 'تولید محتوا', contentDesc: 'آماده‌سازی محتوای اولیه',
      stepThree: 'اندازه کار', scopeTitle: 'مقیاس پروژه چقدر است؟', scopeHelp: 'پیچیدگی طراحی و تعداد بخش‌های مورد نیاز را در نظر بگیرید.', scopeLegend: 'مقیاس پروژه', small: 'جمع‌وجور', smallDesc: 'محدوده ساده', medium: 'متوسط', mediumDesc: 'جزئیات بیشتر', large: 'گسترده', largeDesc: 'پیچیدگی بالاتر', saved: 'پیش‌نویس فقط در این دستگاه ذخیره می‌شود.', storageError: 'ذخیره محلی در دسترس نیست؛ تغییرات پس از خروج باقی نمی‌مانند.', clear: 'پاک‌کردن پیش‌نویس', clearConfirm: 'پیش‌نویس ذخیره‌شده پاک و انتخاب‌ها بازنشانی شوند؟', cleared: 'پیش‌نویس پاک شد.',
      summaryKicker: 'نمای کلی پروژه', summaryTitle: 'برآورد اولیه شما', live: 'زنده', estimatedCost: 'بازه هزینه تقریبی', currency: 'میلیون تومان', estimatedTime: 'زمان تقریبی اجرا', week: 'هفته کاری', projectLabel: 'نوع پروژه', scopeLabel: 'مقیاس', selectedFeatures: 'امکانات انتخاب‌شده', none: 'بدون امکانات اضافه', how: 'این برآورد چگونه محاسبه می‌شود؟', formula: 'پایه نوع پروژه + مجموع امکانات، ضربدر ضریب مقیاس؛ سپس بازه هزینه با ۲۰٪ عدم‌قطعیت و زمان با ۲۵٪ عدم‌قطعیت محاسبه می‌شود.', exclusions: 'مبالغ فرضی و به میلیون تومان‌اند. هزینه دامنه، میزبانی، اشتراک سرویس‌ها، مالیات، نگهداری و تولید محتوای اضافی لحاظ نشده‌اند. زمان به هفته کاری و با فرض آماده‌بودن ورودی‌ها و بازخورد به‌موقع است.', disclaimer: 'این اعداد صرفاً فرضی و برای برنامه‌ریزی‌اند؛ قیمت یا زمان قطعی و تعهد نوکساپلاس نیستند.', copy: 'کپی خلاصه', download: 'دانلود متن', print: 'چاپ', share: 'کپی لینک اشتراک انتخاب‌ها', privacy: 'لینک فقط نوع پروژه، امکانات و مقیاس را دارد؛ نام، ایمیل یا پیام ندارد. هیچ اطلاعاتی به سرور ارسال نمی‌شود. هر کس لینک را داشته باشد انتخاب‌ها را می‌بیند.', asideNote: 'برای شروع گفت‌وگو، این خلاصه را نگه دارید و جزئیات واقعی پروژه را با تیم در میان بگذارید.', footer: ' / ایده‌های روشن‌تر، شروع‌های بهتر', themeLabel: 'تغییر ظاهر', languageLabel: 'Switch to English', copied: 'خلاصه کپی شد.', shared: 'لینک انتخاب‌ها کپی شد.', copyFail: 'کپی خودکار ممکن نبود؛ از مرورگری با دسترسی به کلیپ‌بورد استفاده کنید.', downloadDone: 'فایل متنی آماده شد.', base: 'پایه', additions: 'امکانات', multiplier: 'ضریب مقیاس', beforeRange: 'قبل از اعمال بازه', shareLoaded: 'انتخاب‌های لینک بارگذاری و در این دستگاه ذخیره شدند.', invalidShare: 'لینک انتخاب نامعتبر است؛ پیش‌نویس محلی حفظ شد.'
    },
    en: {
      skip: 'Skip to planner', back: 'Back to home', eyebrow: 'PROJECT PLANNING TOOL', title: 'From idea to plan', intro: 'A few simple choices, a clearer picture of what comes next. Define your scope and get a starting estimate.', introSide: 'From an idea to a first picture, in a few short steps.',
      stepOne: 'THE STARTING POINT', typeTitle: 'What are we building?', typeHelp: 'Choose a project type as your starting point.', typeLegend: 'Project type', landing: 'Landing page', landingDesc: 'Introduce a product or campaign', business: 'Business website', businessDesc: 'Present your business and services', store: 'Online store', storeDesc: 'Display and sell products', webapp: 'Web application', webappDesc: 'An interactive tool or dashboard',
      stepTwo: 'THE DETAILS', featuresTitle: 'What features do you need?', featuresHelp: 'Choose as many options as fit your goals.', featuresLegend: 'Project features', cms: 'Content management', cmsDesc: 'Edit content independently', multilingual: 'Multilingual', multilingualDesc: 'One extra language and layout', seo: 'Basic SEO', seoDesc: 'Initial search structure and settings', booking: 'Bookings', bookingDesc: 'Request and manage appointments', payment: 'Online payments', paymentDesc: 'Connect one payment gateway', account: 'User accounts', accountDesc: 'User registration and sign-in', analytics: 'Analytics', analyticsDesc: 'Set up visitor analytics', content: 'Content creation', contentDesc: 'Prepare initial content',
      stepThree: 'THE SCOPE', scopeTitle: 'How big is the project?', scopeHelp: 'Consider design complexity and the number of sections.', scopeLegend: 'Project scope', small: 'Compact', smallDesc: 'Simple scope', medium: 'Medium', mediumDesc: 'More details', large: 'Extensive', largeDesc: 'Higher complexity', saved: 'Your draft is saved only on this device.', storageError: 'Local storage is unavailable; changes will not persist after leaving.', clear: 'Clear draft', clearConfirm: 'Clear the saved draft and reset your choices?', cleared: 'Draft cleared.',
      summaryKicker: 'PROJECT OVERVIEW', summaryTitle: 'Your initial estimate', live: 'LIVE', estimatedCost: 'Approximate cost range', currency: 'million Iranian tomans', estimatedTime: 'Approximate delivery', week: 'working weeks', projectLabel: 'Project type', scopeLabel: 'Scope', selectedFeatures: 'Selected features', none: 'No additional features', how: 'How is this calculated?', formula: 'Project type base + total features, multiplied by the scope factor; the cost range then allows 20% uncertainty and time 25%.', exclusions: 'Amounts are illustrative and in million Iranian tomans. Domain, hosting, service subscriptions, taxes, maintenance and additional content production are excluded. Time is in working weeks, assuming inputs and feedback arrive on time.', disclaimer: 'These figures are hypothetical planning estimates, not a final quote, schedule or commitment from NoxaPlus.', copy: 'Copy summary', download: 'Download text', print: 'Print', share: 'Copy choices share link', privacy: 'The link contains only project type, features and scope; no name, email or message. No information is sent to a server. Anyone with the link can see these choices.', asideNote: 'Keep this summary to start a conversation and discuss the actual project details with the team.', footer: ' / Clearer ideas, better beginnings', themeLabel: 'Toggle theme', languageLabel: 'تغییر به فارسی', copied: 'Summary copied.', shared: 'Choices link copied.', copyFail: 'Could not copy automatically; use a browser with clipboard access.', downloadDone: 'Text file prepared.', base: 'Base', additions: 'Features', multiplier: 'Scope factor', beforeRange: 'Before range', shareLoaded: 'Shared choices loaded and saved on this device.', invalidShare: 'Invalid choices link; the local draft was retained.'
    }
  };
  const form = document.getElementById('planner-form');
  const status = document.getElementById('action-status');
  const saveStatus = document.getElementById('save-status');
  let lang = document.documentElement.lang === 'en' ? 'en' : 'fa';
  let theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  let storageAvailable = true;
  let statusKey = '';
  const t = key => translations[lang][key] || key;
  const num = value => new Intl.NumberFormat(lang === 'fa' ? 'fa-IR' : 'en-US', { maximumFractionDigits: 1 }).format(value);
  const roundUp = value => Math.ceil(value * 10 - 1e-9) / 10;
  const roundDown = value => Math.floor(value * 10 + 1e-9) / 10;
  const range = (low, high) => `${num(roundDown(low))} – ${num(roundUp(high))}`;
  const has = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  const defaults = () => ({ type: 'landing', scope: 'small', features: [] });

  function validate(value) {
    if (!value || typeof value !== 'object' || !has(types, value.type) || !has(scopes, value.scope) || !Array.isArray(value.features) || value.features.some(item => typeof item !== 'string' || !has(features, item))) return null;
    return { type: value.type, scope: value.scope, features: [...new Set(value.features)] };
  }
  function current() {
    return { type: form.elements.type.value, scope: form.elements.scope.value, features: Array.from(form.querySelectorAll('input[name="feature"]:checked'), input => input.value) };
  }
  function applyChoices(value) {
    form.querySelectorAll('input[name="type"]').forEach(input => { input.checked = input.value === value.type; });
    form.querySelectorAll('input[name="scope"]').forEach(input => { input.checked = input.value === value.scope; });
    form.querySelectorAll('input[name="feature"]').forEach(input => { input.checked = value.features.includes(input.value); });
  }
  function persist() {
    try { localStorage.setItem(DRAFT_KEY, JSON.stringify(current())); storageAvailable = true; }
    catch (_) { storageAvailable = false; }
    saveStatus.textContent = t(storageAvailable ? 'saved' : 'storageError');
  }
  function estimate(value) {
    const base = types[value.type];
    const extras = value.features.reduce((sum, name) => [sum[0] + features[name][0], sum[1] + features[name][1]], [0, 0]);
    const factor = scopes[value.scope];
    const cost = (base[0] + extras[0]) * factor;
    const time = (base[1] + extras[1]) * factor;
    return { base, extras, factor, cost, time, costRange: range(cost * .8, cost * 1.2), timeRange: range(time * .75, time * 1.25) };
  }
  function calculation(result) {
    return `(${t('base')}: ${num(result.base[0])} ${t('currency')} / ${num(result.base[1])} ${t('week')} + ${t('additions')}: ${num(result.extras[0])} ${t('currency')} / ${num(result.extras[1])} ${t('week')}) × ${t('multiplier')}: ${num(result.factor)}. ${t('beforeRange')}: ${num(result.cost)} ${t('currency')} / ${num(result.time)} ${t('week')}.`;
  }
  function update() {
    const value = current();
    const result = estimate(value);
    document.getElementById('cost').textContent = result.costRange;
    document.getElementById('time').textContent = `${result.timeRange} ${t('week')}`;
    document.getElementById('summary-type').textContent = t(value.type);
    document.getElementById('summary-scope').textContent = t(value.scope);
    document.getElementById('summary-features').textContent = value.features.length ? value.features.map(t).join(lang === 'fa' ? '، ' : ', ') : t('none');
    document.getElementById('calculation').textContent = calculation(result);
  }
  function summary() {
    const value = current();
    const result = estimate(value);
    return [t('summaryTitle'), '', `${t('projectLabel')}: ${t(value.type)}`, `${t('scopeLabel')}: ${t(value.scope)}`, `${t('selectedFeatures')}: ${value.features.length ? value.features.map(t).join(lang === 'fa' ? '، ' : ', ') : t('none')}`, '', `${t('estimatedCost')}: ${result.costRange} ${t('currency')}`, `${t('estimatedTime')}: ${result.timeRange} ${t('week')}`, '', t('formula'), calculation(result), t('exclusions'), '', t('disclaimer')].join('\n');
  }
  function setStatus(key) { statusKey = key; status.textContent = key ? t(key) : ''; }
  function setLanguage(next, remember = true) {
    lang = next === 'en' ? 'en' : 'fa';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    document.title = lang === 'fa' ? 'برنامه‌ریز پروژه | نوکساپلاس' : 'Project planner | NoxaPlus';
    document.querySelectorAll('[data-t]').forEach(element => { element.textContent = t(element.dataset.t); });
    document.getElementById('language').textContent = lang === 'fa' ? 'EN' : 'فا';
    document.getElementById('language').setAttribute('aria-label', t('languageLabel'));
    document.getElementById('theme').setAttribute('aria-label', t('themeLabel'));
    saveStatus.textContent = t(storageAvailable ? 'saved' : 'storageError');
    if (statusKey) status.textContent = t(statusKey);
    if (remember) { try { localStorage.setItem(LANG_KEY, lang); } catch (_) {} }
    update();
  }
  function setTheme(next, remember = true) {
    theme = next === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    if (remember) { try { localStorage.setItem(THEME_KEY, theme); } catch (_) {} }
  }
  async function copyText(text, success) {
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text);
      setStatus(success);
    } catch (_) { setStatus('copyFail'); }
  }
  function readShared() {
    const params = new URLSearchParams(location.hash.slice(1));
    if (!params.has('type') && !params.has('scope') && !params.has('features')) return null;
    const raw = { type: params.get('type'), scope: params.get('scope'), features: params.get('features') ? params.get('features').split(',') : [] };
    return validate(raw) || false;
  }
  function shareUrl() {
    const value = current();
    const url = new URL(location.href);
    url.search = '';
    const params = new URLSearchParams();
    params.set('type', value.type);
    params.set('scope', value.scope);
    params.set('features', value.features.join(','));
    url.hash = params.toString();
    return url.href;
  }
  let restored = defaults();
  try { restored = validate(JSON.parse(localStorage.getItem(DRAFT_KEY))) || restored; }
  catch (_) { storageAvailable = false; }
  const shared = readShared();
  if (shared) restored = shared;
  applyChoices(restored);
  setTheme(theme, false);
  setLanguage(lang, false);
  if (shared) { persist(); setStatus('shareLoaded'); }
  else if (shared === false) setStatus('invalidShare');

  form.addEventListener('change', () => { update(); persist(); setStatus(''); });
  document.getElementById('language').addEventListener('click', () => setLanguage(lang === 'fa' ? 'en' : 'fa'));
  document.getElementById('theme').addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark'));
  document.getElementById('clear').addEventListener('click', () => {
    if (!window.confirm(t('clearConfirm'))) return;
    applyChoices(defaults());
    try { localStorage.removeItem(DRAFT_KEY); storageAvailable = true; } catch (_) { storageAvailable = false; }
    if (location.hash) { try { history.replaceState(null, '', location.pathname + location.search); } catch (_) {} }
    update();
    saveStatus.textContent = t(storageAvailable ? 'saved' : 'storageError');
    setStatus(storageAvailable ? 'cleared' : 'storageError');
  });
  document.getElementById('copy').addEventListener('click', () => copyText(summary(), 'copied'));
  document.getElementById('share').addEventListener('click', () => copyText(shareUrl(), 'shared'));
  document.getElementById('download').addEventListener('click', () => {
    const blob = new Blob(['\ufeff', summary()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = 'noxaplus-project-plan.txt';
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus('downloadDone');
  });
  document.getElementById('print').addEventListener('click', () => window.print());
  window.addEventListener('hashchange', () => {
    const choices = readShared();
    if (choices) { applyChoices(choices); update(); persist(); setStatus('shareLoaded'); }
    else if (choices === false) setStatus('invalidShare');
  });
  window.addEventListener('storage', event => {
    if (event.key === LANG_KEY) setLanguage(event.newValue === 'en' ? 'en' : 'fa', false);
    if (event.key === THEME_KEY && (event.newValue === 'light' || event.newValue === 'dark')) setTheme(event.newValue, false);
  });
})();
