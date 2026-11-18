const STORAGE_LANG = "noxaplus_lang";
const STORAGE_THEME = "noxaplus_theme";

const translations = {
  fa: {
    dir: "rtl",
    lang: "fa",
    langBtn: "EN",
    "title.home": "نوکساپلاس | راه‌حل‌های دیجیتال کسب‌وکار",
    "title.about": "درباره ما | نوکساپلاس",
    "title.services": "خدمات | نوکساپلاس",
    "title.portfolio": "نمونه‌کارها | نوکساپلاس",
    "title.contact": "تماس با ما | نوکساپلاس",
    "nav.home": "خانه",
    "nav.about": "درباره ما",
    "nav.services": "خدمات",
    "nav.portfolio": "نمونه‌کارها",
    "nav.contact": "تماس",
    "nav.planner": "برنامه‌ریز",
    "btn.planner": "برنامه‌ریزی پروژه",
    "btn.prepare": "آماده‌سازی متن",
    "btn.copy": "کپی متن",
    "form.output": "متن آماده‌شده",
    "contact.unconfigured": "تنظیم نشده",
    "demo.notice": "این سایت یک قالب نمایشی است؛ اطلاعات نمونه باید با اطلاعات واقعی جایگزین شوند.",
    "demo.section": "اطلاعات این بخش نمونه و صرفاً نمایشی است.",
    "aria.skip": "رفتن به محتوای اصلی",
    "aria.close": "بستن پنجره",
    "toast.copied": "متن کپی شد.",
    "toast.copyFail": "کپی خودکار ممکن نیست؛ متن را انتخاب و کپی کنید.",
    cta: "شروع همکاری",
    "aria.lang": "تغییر زبان",
    "aria.theme": "تغییر تم",
    "aria.menu": "باز کردن منو",
    "aria.top": "بازگشت به بالا",
    "aria.prev": "قبلی",
    "aria.next": "بعدی",
    "hero.badge": "شریک رشد کسب‌وکارهای در حال توسعه",
    "hero.title": "ایده‌های بزرگ، رشد واقعی",
    "hero.lead": "نوکساپلاس وب‌سایت، فروشگاه، هویت برند و سئو را طوری می‌سازد که سریع باشد، دیده شود و مشتری بیاورد.",
    "btn.services": "مشاهده خدمات",
    "btn.contact": "تماس با ما",
    "btn.portfolio": "همه نمونه‌کارها",
    "btn.quote": "درخواست قیمت",
    "btn.more": "جزئیات بیشتر",
    "btn.send": "ارسال پیام",
    "stat.projects": "پروژه تحویل‌شده",
    "stat.clients": "مشتری همراه",
    "stat.years": "سال تجربه",
    "stat.score": "رضایت مشتریان",
    "why.title": "چرا نوکساپلاس؟",
    "why.lead": "ترکیب طراحی دقیق، مهندسی تمیز و همراهی بعد از انتشار.",
    "why.1.t": "طراحی مدرن",
    "why.1.d": "ظاهر اختصاصی که با هویت برند شما یکی است، نه یک قالب تکراری.",
    "why.2.t": "اول موبایل",
    "why.2.d": "چیدمان، دکمه‌ها و خوانایی روی موبایل همان‌قدر جدی است که روی دسکتاپ.",
    "why.3.t": "سرعت بالا",
    "why.3.d": "صفحات سبک و بهینه تا کاربر و موتور جستجو هر دو راضی بمانند.",
    "why.4.t": "ساختار سئو",
    "why.4.d": "عنوان، ساختار و سرعت از روز اول برای دیده‌شدن ساخته می‌شود.",
    "why.5.t": "امن و قابل نگهداری",
    "why.5.d": "کد خوانا و قابل توسعه، بدون وابستگی پنهان.",
    "why.6.t": "پشتیبانی ادامه دارد",
    "why.6.d": "بعد از انتشار هم برای به‌روزرسانی، رفع اشکال و رشد کنارتان هستیم.",
    "svc.title": "خدمات ما",
    "svc.lead": "هر آنچه برای حضور آنلاین جدی لازم است، در یک تیم.",
    "svc.web.t": "طراحی وب‌سایت",
    "svc.web.d": "سایت شرکتی سریع، واکنش‌گرا و هماهنگ با برند.",
    "svc.land.t": "صفحه فرود",
    "svc.land.d": "صفحه کمپین با مسیر روشن تا ثبت درخواست.",
    "svc.shop.t": "فروشگاه اینترنتی",
    "svc.shop.d": "فروشگاه با کاتالوگ، سبد خرید و مسیر پرداخت.",
    "svc.seo.t": "بهینه‌سازی سئو",
    "svc.seo.d": "بهبود دیده‌شدن در جستجو با ساختار و محتوای درست.",
    "svc.brand.t": "برندینگ",
    "svc.brand.d": "هویت بصری، رنگ و قواعدی که برند را به‌یادماندنی می‌کند.",
    "svc.care.t": "پشتیبانی فنی",
    "svc.care.d": "نگهداری، پایش و به‌روزرسانی بعد از انتشار.",
    "svc.f1": "چیدمان واکنش‌گرا",
    "svc.f2": "آماده سئو",
    "svc.f3": "بارگذاری سریع",
    "svc.f4": "نگهداری ساده",
    "svc.l1": "دعوت به اقدام روشن",
    "svc.l2": "آماده آزمایش",
    "svc.l3": "بهینه موبایل",
    "svc.l4": "اتصال آمار",
    "svc.s1": "کاتالوگ محصول",
    "svc.s2": "سبد و تسویه",
    "svc.s3": "آماده پرداخت",
    "svc.s4": "پنل مدیریت",
    "svc.e1": "سئو داخلی",
    "svc.e2": "سئو فنی",
    "svc.e3": "استراتژی محتوا",
    "svc.e4": "گزارش نتیجه",
    "svc.b1": "نشانه و لوگو",
    "svc.b2": "پالت رنگ",
    "svc.b3": "راهنمای برند",
    "svc.b4": "فایل‌های آماده",
    "svc.c1": "رفع اشکال",
    "svc.c2": "به‌روزرسانی",
    "svc.c3": "پایش",
    "svc.c4": "نسخه پشتیبان",
    "work.title": "نمونه‌کارهای منتخب",
    "work.lead": "بخشی از پروژه‌هایی که برای کسب‌وکارها ساخته‌ایم.",
    "work.alpha.t": "پروژه آلفا",
    "work.alpha.d": "وب‌سایت شرکتی با معرفی خدمات و مسیر تماس کوتاه.",
    "work.beta.t": "پروژه بتا",
    "work.beta.d": "صفحه فرود کمپین با تمرکز روی یک اقدام مشخص.",
    "work.gamma.t": "پروژه گاما",
    "work.gamma.d": "فروشگاه با چیدمان محصول و تسویه ساده.",
    "work.delta.t": "پروژه دلتا",
    "work.delta.d": "بازطراحی هویت بصری یک برند خدماتی.",
    "work.epsilon.t": "پروژه اپسیلون",
    "work.epsilon.d": "سایت نمونه‌کار برای یک استودیوی خلاق.",
    "work.zeta.t": "پروژه زتا",
    "work.zeta.d": "صفحه معرفی محصول با توضیح ارزش و ثبت نام.",
    "work.eta.t": "پروژه اتا",
    "work.eta.d": "فروشگاه پوشاک با دسته‌بندی و فیلتر محصول.",
    "work.theta.t": "پروژه تتا",
    "work.theta.d": "هویت بصری یک استارتاپ فناوری.",
    "work.iota.t": "پروژه یوتا",
    "work.iota.d": "وب‌سایت آژانس با معرفی تیم و فرآیند کار.",
    "quotes.title": "حرف مشتری‌ها",
    "quotes.lead": "تجربه همکاری، از زبان تیم‌هایی که با ما کار کرده‌اند.",
    "quotes.1": "تحویل به‌موقع بود و سایت دقیقاً همان حسی را دارد که برای برندمان می‌خواستیم.",
    "quotes.2": "تیم حرفه‌ای و شفاف. از جلسه اول تا انتشار، مسیر کار روشن بود.",
    "quotes.3": "بعد از انتشار هم پشتیبانی واقعی داشتیم، نه فقط یک تحویل و خداحافظ.",
    "quotes.1n": "الکس",
    "quotes.1r": "مدیرعامل",
    "quotes.2n": "سارا",
    "quotes.2r": "بنیان‌گذار",
    "quotes.3n": "مایک",
    "quotes.3r": "مدیر محصول",
    "price.title": "پلن‌های همکاری",
    "price.lead": "شروع مشخص، توسعه بر اساس اندازه پروژه. قیمت نهایی بعد از بررسی نیاز اعلام می‌شود.",
    "price.popular": "پیشنهاد ما",
    "price.1n": "شروع",
    "price.1a": "۱۸ میلیون",
    "price.1u": "تومان، برای یک صفحه فرود",
    "price.1f1": "یک صفحه اصلی",
    "price.1f2": "طراحی اختصاصی",
    "price.1f3": "نسخه موبایل",
    "price.1f4": "فرم تماس",
    "price.2n": "رشد",
    "price.2a": "۴۵ میلیون",
    "price.2u": "تومان، برای وب‌سایت چندصفحه‌ای",
    "price.2f1": "تا شش صفحه",
    "price.2f2": "سئو پایه",
    "price.2f3": "دو زبان",
    "price.2f4": "یک ماه پشتیبانی",
    "price.3n": "سازمانی",
    "price.3a": "سفارشی",
    "price.3u": "فروشگاه، برند و محصول بزرگ‌تر",
    "price.3f1": "محدوده اختصاصی",
    "price.3f2": "هویت بصری",
    "price.3f3": "آموزش تیم",
    "price.3f4": "پشتیبانی ادامه دار",
    "cta.title": "پروژه بعدی‌تان را شروع کنیم؟",
    "cta.lead": "چند خط درباره هدف‌تان بنویسید. مسیر، زمان و برآورد را شفاف برمی‌گردانیم.",
    "about.title": "درباره نوکساپلاس",
    "about.lead": "یک تیم دیجیتال که به کسب‌وکارها کمک می‌کند آنلاین، دقیق و قابل اعتماد دیده شوند.",
    "story.title": "داستان ما",
    "story.p1": "نوکساپلاس برای ساختن تجربه وب مدرن، سریع و زیبا شکل گرفت؛ از کسب‌وکارهای کوچک تا تیم‌هایی که آماده مقیاس‌اند.",
    "story.p2": "باور داریم طراحی خوب و مهندسی محکم از هم جدا نیستند. خلاقیت را با اجرای قابل نگهداری همراه می‌کنیم.",
    "mission.t": "مأموریت",
    "mission.d": "به کسب‌وکارها ابزار دیجیتالی بدهیم که واقعاً رشد را جلو ببرد.",
    "vision.t": "چشم‌انداز",
    "vision.d": "شریک قابل اعتماد تحول دیجیتال برای برندهایی که کیفیت می‌خواهند.",
    "values.title": "ارزش‌ها",
    "values.1t": "کیفیت",
    "values.1d": "جزئیات دیده می‌شود و در کار باقی می‌ماند.",
    "values.2t": "شفافیت",
    "values.2d": "زمان، هزینه و تصمیم‌ها را روشن می‌گوییم.",
    "values.3t": "نوآوری",
    "values.3d": "راه‌حل تازه وقتی مسئله واقعاً آن را بخواهد.",
    "values.4t": "تمرکز بر مشتری",
    "values.4d": "موفقیت پروژه با نتیجه کسب‌وکار سنجیده می‌شود.",
    "team.title": "تیم",
    "team.lead": "نقش‌ها کوچک‌اند، مسئولیت تحویل مشترک است.",
    "team.1n": "آرمان کاظمی",
    "team.1r": "طراح ارشد",
    "team.1d": "مسئول حس بصری و جزئیات رابط.",
    "team.2n": "سارا لی",
    "team.2r": "توسعه‌دهنده رابط",
    "team.2d": "سازنده صفحه‌های سریع و واکنش‌گرا.",
    "team.3n": "مایک براون",
    "team.3r": "متخصص سئو",
    "team.3d": "رشد دیده‌شدن ارگانیک.",
    "team.4n": "نینا پارک",
    "team.4r": "مدیر پروژه",
    "team.4d": "هماهنگ‌کننده زمان و تحویل.",
    "process.title": "فرآیند همکاری",
    "process.lead": "چهار قدم روشن، از شناخت نیاز تا پشتیبانی.",
    "process.1n": "۱",
    "process.1t": "شناخت",
    "process.1d": "هدف، مخاطب و محدودیت‌ها را دقیق می‌شنویم.",
    "process.2n": "۲",
    "process.2t": "برنامه",
    "process.2d": "ساختار، زمان و محدوده را مکتوب می‌کنیم.",
    "process.3n": "۳",
    "process.3t": "طراحی و ساخت",
    "process.3d": "رابط را طراحی و سپس پیاده می‌کنیم.",
    "process.4n": "۴",
    "process.4t": "انتشار و پشتیبانی",
    "process.4d": "تحویل، آموزش و همراهی بعد از اجرا.",
    "port.title": "نمونه‌کارها",
    "port.lead": "پروژه‌ها را بر اساس نوع کار ببینید و جزئیات هر کدام را باز کنید.",
    "filter.all": "همه",
    "filter.website": "وب‌سایت",
    "filter.landing": "صفحه فرود",
    "filter.ecommerce": "فروشگاه",
    "filter.branding": "برندینگ",
    "filter.empty": "در این دسته نمونه‌ای نیست.",
    "modal.tech": "تکنولوژی",
    "modal.cat": "دسته‌بندی",
    "contact.title": "تماس با ما",
    "contact.lead": "متن درخواستتان را آماده و از مسیر ارتباطی دلخواه ارسال کنید.",
    "contact.info": "راه‌های ارتباط",
    "contact.email": "ایمیل",
    "contact.phone": "تلفن",
    "contact.address": "آدرس",
    "contact.hours": "ساعات کاری",
    "contact.addr": "تهران، ایران",
    "contact.time": "شنبه تا پنجشنبه، ۹ تا ۱۸",
    "form.name": "نام کامل",
    "form.email": "ایمیل",
    "form.phone": "شماره تماس",
    "form.subject": "موضوع",
    "form.message": "پیام",
    "form.hint": "هیچ ارسالی انجام نمی‌شود؛ متن فقط برای کپی در همین صفحه آماده می‌شود.",
    "err.name": "نام را وارد کنید.",
    "err.email": "ایمیل را وارد کنید.",
    "err.emailBad": "فرمت ایمیل درست نیست.",
    "err.message": "پیام را بنویسید.",
    "err.phone": "شماره تماس معتبر نیست.",
    "faq.title": "پرسش‌های متداول",
    "faq.lead": "اگر پاسخ اینجاست، لازم نیست منتظر بمانید.",
    "faq.searchPh": "جستجو در پرسش‌ها",
    "faq.empty": "پرسشی با این عبارت پیدا نشد.",
    "faq.1q": "یک پروژه چقدر زمان می‌برد؟",
    "faq.1a": "بسته به محدوده، معمولاً بین دو تا شش هفته.",
    "faq.2q": "قیمت‌ها چطور حساب می‌شود؟",
    "faq.2a": "بعد از شنیدن نیاز، برآورد شفاف می‌دهیم. پلن‌ها فقط نقطه شروع‌اند.",
    "faq.3q": "بعد از انتشار پشتیبانی دارید؟",
    "faq.3a": "بله. نگهداری، رفع اشکال و به‌روزرسانی قابل توافق است.",
    "faq.4q": "سایت برای سئو آماده است؟",
    "faq.4a": "ساختار، سرعت و عنوان‌ها از ابتدا با سئو هماهنگ می‌شوند.",
    "faq.5q": "چند نوبت اصلاح دارید؟",
    "faq.5a": "در هر فاز طراحی، چند نوبت اصلاح داخل محدوده پروژه است.",
    "faq.6q": "سایت فعلی را بازطراحی می‌کنید؟",
    "faq.6a": "بله. بازطراحی را با حفظ محتوا و بهبود ساختار انجام می‌دهیم.",
    "foot.blurb": "راه‌حل دیجیتال برای کسب‌وکارهایی که کیفیت می‌خواهند.",
    "foot.links": "صفحات",
    "foot.services": "خدمات",
    "foot.contact": "ارتباط",
    "foot.copy": "© ۲۰۲۶ نوکساپلاس. همه حقوق محفوظ است.",
    credit: "توسعه‌یافته توسط نوکساپلاس",
    "soc.ig": "اینستاگرام",
    "soc.tg": "تلگرام",
    "soc.in": "لینکدین",
    "soc.gh": "گیت‌هاب"
  },
  en: {
    dir: "ltr",
    lang: "en",
    langBtn: "فا",
    "title.home": "NoxaPlus | Digital solutions for business",
    "title.about": "About | NoxaPlus",
    "title.services": "Services | NoxaPlus",
    "title.portfolio": "Portfolio | NoxaPlus",
    "title.contact": "Contact | NoxaPlus",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.portfolio": "Work",
    "nav.contact": "Contact",
    "nav.planner": "Planner",
    "btn.planner": "Plan your project",
    "btn.prepare": "Prepare message",
    "btn.copy": "Copy text",
    "form.output": "Prepared message",
    "contact.unconfigured": "Not configured",
    "demo.notice": "This is a demonstration template; replace the sample information with your own verified details.",
    "demo.section": "The information in this section is for demonstration only.",
    "aria.skip": "Skip to main content",
    "aria.close": "Close dialog",
    "toast.copied": "Text copied.",
    "toast.copyFail": "Could not copy automatically; select and copy the text instead.",
    cta: "Start a project",
    "aria.lang": "Switch language",
    "aria.theme": "Toggle theme",
    "aria.menu": "Open menu",
    "aria.top": "Back to top",
    "aria.prev": "Previous",
    "aria.next": "Next",
    "hero.badge": "A partner for growing businesses",
    "hero.title": "Big ideas, real growth",
    "hero.lead": "NoxaPlus designs websites, stores, brand identity, and SEO that load fast, get found, and bring customers in.",
    "btn.services": "View services",
    "btn.contact": "Contact us",
    "btn.portfolio": "All projects",
    "btn.quote": "Request a quote",
    "btn.more": "Learn more",
    "btn.send": "Send message",
    "stat.projects": "Projects delivered",
    "stat.clients": "Clients",
    "stat.years": "Years of work",
    "stat.score": "Client satisfaction",
    "why.title": "Why NoxaPlus?",
    "why.lead": "Precise design, clean engineering, and support after launch.",
    "why.1.t": "Modern design",
    "why.1.d": "A look made for your brand, not a recycled template.",
    "why.2.t": "Mobile first",
    "why.2.d": "Layout, buttons, and reading comfort matter as much on a phone as on a desktop.",
    "why.3.t": "Fast performance",
    "why.3.d": "Light pages that keep people and search engines happy.",
    "why.4.t": "SEO structure",
    "why.4.d": "Titles, structure, and speed are built to be found from day one.",
    "why.5.t": "Secure and maintainable",
    "why.5.d": "Readable code you can grow, without hidden lock-in.",
    "why.6.t": "Support that stays",
    "why.6.d": "Updates, fixes, and growth help after the site goes live.",
    "svc.title": "Services",
    "svc.lead": "What a serious online presence needs, from one team.",
    "svc.web.t": "Website design",
    "svc.web.d": "A fast company site that matches the brand.",
    "svc.land.t": "Landing pages",
    "svc.land.d": "A campaign page with one clear next step.",
    "svc.shop.t": "Online stores",
    "svc.shop.d": "Catalog, cart, and a checkout path that makes sense.",
    "svc.seo.t": "SEO",
    "svc.seo.d": "Better visibility through structure and content.",
    "svc.brand.t": "Branding",
    "svc.brand.d": "A visual identity people can remember.",
    "svc.care.t": "Technical care",
    "svc.care.d": "Maintenance, monitoring, and updates after launch.",
    "svc.f1": "Responsive layout",
    "svc.f2": "SEO ready",
    "svc.f3": "Fast loading",
    "svc.f4": "Easy to maintain",
    "svc.l1": "Clear call to action",
    "svc.l2": "Ready to test",
    "svc.l3": "Mobile optimized",
    "svc.l4": "Analytics ready",
    "svc.s1": "Product catalog",
    "svc.s2": "Cart and checkout",
    "svc.s3": "Payment ready",
    "svc.s4": "Admin area",
    "svc.e1": "On-page SEO",
    "svc.e2": "Technical SEO",
    "svc.e3": "Content strategy",
    "svc.e4": "Reporting",
    "svc.b1": "Logo and mark",
    "svc.b2": "Color palette",
    "svc.b3": "Brand guidelines",
    "svc.b4": "Ready assets",
    "svc.c1": "Bug fixes",
    "svc.c2": "Updates",
    "svc.c3": "Monitoring",
    "svc.c4": "Backups",
    "work.title": "Selected work",
    "work.lead": "A few of the projects we have shipped.",
    "work.alpha.t": "Project Alpha",
    "work.alpha.d": "A company website with services and a short path to contact.",
    "work.beta.t": "Project Beta",
    "work.beta.d": "A campaign landing page focused on one action.",
    "work.gamma.t": "Project Gamma",
    "work.gamma.d": "A store with clear products and simple checkout.",
    "work.delta.t": "Project Delta",
    "work.delta.d": "A visual identity refresh for a services brand.",
    "work.epsilon.t": "Project Epsilon",
    "work.epsilon.d": "A portfolio site for a creative studio.",
    "work.zeta.t": "Project Zeta",
    "work.zeta.d": "A product page with a clear offer and signup.",
    "work.eta.t": "Project Eta",
    "work.eta.d": "A fashion shop with categories and filters.",
    "work.theta.t": "Project Theta",
    "work.theta.d": "Visual identity for a technology startup.",
    "work.iota.t": "Project Iota",
    "work.iota.d": "An agency site presenting the team and process.",
    "quotes.title": "Clients, in their words",
    "quotes.lead": "What it felt like to build with us.",
    "quotes.1": "Delivery was on time, and the site feels exactly like the brand we wanted.",
    "quotes.2": "A clear, professional team from the first meeting through launch.",
    "quotes.3": "Support after launch was real, not a handover and goodbye.",
    "quotes.1n": "Alex",
    "quotes.1r": "CEO",
    "quotes.2n": "Sara",
    "quotes.2r": "Founder",
    "quotes.3n": "Mike",
    "quotes.3r": "Product manager",
    "price.title": "Ways to work together",
    "price.lead": "A clear starting point. The final number follows the real scope.",
    "price.popular": "Recommended",
    "price.1n": "Start",
    "price.1a": "18M",
    "price.1u": "Toman, for a landing page",
    "price.1f1": "One main page",
    "price.1f2": "Custom design",
    "price.1f3": "Mobile layout",
    "price.1f4": "Contact form",
    "price.2n": "Growth",
    "price.2a": "45M",
    "price.2u": "Toman, for a multi-page site",
    "price.2f1": "Up to six pages",
    "price.2f2": "Base SEO",
    "price.2f3": "Two languages",
    "price.2f4": "One month of care",
    "price.3n": "Studio",
    "price.3a": "Custom",
    "price.3u": "Stores, brands, and larger products",
    "price.3f1": "Custom scope",
    "price.3f2": "Visual identity",
    "price.3f3": "Team walkthrough",
    "price.3f4": "Ongoing support",
    "cta.title": "Ready to start the next project?",
    "cta.lead": "Tell us the goal in a few lines. We reply with a clear path, timeline, and estimate.",
    "about.title": "About NoxaPlus",
    "about.lead": "A digital team helping businesses show up online with precision and trust.",
    "story.title": "Our story",
    "story.p1": "NoxaPlus was built to make modern, fast, and beautiful web experiences for small companies and teams ready to scale.",
    "story.p2": "Good design and solid engineering belong together. We pair creativity with work that stays maintainable.",
    "mission.t": "Mission",
    "mission.d": "Give businesses digital tools that actually move growth forward.",
    "vision.t": "Vision",
    "vision.d": "A trusted partner for brands that care about quality.",
    "values.title": "Values",
    "values.1t": "Quality",
    "values.1d": "Details are noticed, and they stay in the work.",
    "values.2t": "Transparency",
    "values.2d": "Time, cost, and decisions are said out loud.",
    "values.3t": "Innovation",
    "values.3d": "A new approach only when the problem asks for it.",
    "values.4t": "Customer focus",
    "values.4d": "A project succeeds when the business result does.",
    "team.title": "Team",
    "team.lead": "Roles are specific. Delivery is shared.",
    "team.1n": "Arman Kazemi",
    "team.1r": "Lead designer",
    "team.1d": "Owns the visual feel and interface detail.",
    "team.2n": "Sara Lee",
    "team.2r": "Interface developer",
    "team.2d": "Builds fast, responsive pages.",
    "team.3n": "Mike Brown",
    "team.3r": "SEO specialist",
    "team.3d": "Grows organic visibility.",
    "team.4n": "Nina Park",
    "team.4r": "Project manager",
    "team.4d": "Keeps time and delivery aligned.",
    "process.title": "How we work",
    "process.lead": "Four clear steps, from discovery to support.",
    "process.1n": "1",
    "process.1t": "Discovery",
    "process.1d": "We listen for the goal, the audience, and the limits.",
    "process.2n": "2",
    "process.2t": "Planning",
    "process.2d": "Structure, time, and scope go in writing.",
    "process.3n": "3",
    "process.3t": "Design and build",
    "process.3d": "We design the interface, then implement it.",
    "process.4n": "4",
    "process.4t": "Launch and care",
    "process.4d": "Handover, a walkthrough, and support after go-live.",
    "port.title": "Portfolio",
    "port.lead": "Filter by kind of work and open any project for details.",
    "filter.all": "All",
    "filter.website": "Website",
    "filter.landing": "Landing",
    "filter.ecommerce": "Store",
    "filter.branding": "Branding",
    "filter.empty": "Nothing in this category.",
    "modal.tech": "Technologies",
    "modal.cat": "Category",
    "contact.title": "Contact",
    "contact.lead": "Prepare a message to send through your preferred contact channel.",
    "contact.info": "Reach us",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.address": "Address",
    "contact.hours": "Hours",
    "contact.addr": "Tehran, Iran",
    "contact.time": "Saturday to Thursday, 9 to 18",
    "form.name": "Full name",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.hint": "Nothing is sent; the text is prepared here for you to copy.",
    "err.name": "Enter your name.",
    "err.email": "Enter your email.",
    "err.emailBad": "That email format is not valid.",
    "err.message": "Write a message.",
    "err.phone": "That phone number is not valid.",
    "faq.title": "Questions",
    "faq.lead": "If the answer is here, you do not have to wait.",
    "faq.searchPh": "Search questions",
    "faq.empty": "No question matches that.",
    "faq.1q": "How long does a project take?",
    "faq.1a": "Usually two to six weeks, depending on scope.",
    "faq.2q": "How do you price work?",
    "faq.2a": "After we hear the need, you get a clear estimate. Plans are only a starting point.",
    "faq.3q": "Do you support the site after launch?",
    "faq.3a": "Yes. Care, fixes, and updates can be agreed.",
    "faq.4q": "Is the site built for SEO?",
    "faq.4a": "Structure, speed, and titles are aligned with SEO from the start.",
    "faq.5q": "How many revisions are included?",
    "faq.5a": "Each design phase includes a few revision rounds inside the scope.",
    "faq.6q": "Can you redesign an existing site?",
    "faq.6a": "Yes. We redesign while keeping useful content and improving structure.",
    "foot.blurb": "Digital work for businesses that care about quality.",
    "foot.links": "Pages",
    "foot.services": "Services",
    "foot.contact": "Contact",
    "foot.copy": "© 2026 NoxaPlus. All rights reserved.",
    credit: "Developed by NoxaPlus",
    "soc.ig": "Instagram",
    "soc.tg": "Telegram",
    "soc.in": "LinkedIn",
    "soc.gh": "GitHub"
  }
};

const pageTitles = {
  home: "title.home",
  about: "title.about",
  services: "title.services",
  portfolio: "title.portfolio",
  contact: "title.contact"
};

let currentLang = localStorage.getItem(STORAGE_LANG) || document.documentElement.lang || "fa";
if (!translations[currentLang]) currentLang = "fa";
let currentTheme = localStorage.getItem(STORAGE_THEME) || document.documentElement.getAttribute("data-theme") || "light";

function t(key) {
  const dict = translations[currentLang] || translations.fa;
  return dict[key] !== undefined ? dict[key] : translations.fa[key];
}

function applyTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem(STORAGE_THEME, currentTheme);
  const btn = document.querySelector(".theme-toggle");
  if (btn) btn.setAttribute("aria-label", t("aria.theme"));
}

function initTheme() {
  applyTheme(currentTheme);
}

function applyLang(lang) {
  currentLang = translations[lang] ? lang : "fa";
  const pack = translations[currentLang];
  document.documentElement.lang = pack.lang;
  document.documentElement.dir = pack.dir;
  localStorage.setItem(STORAGE_LANG, currentLang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = t(el.getAttribute("data-i18n"));
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const val = t(el.getAttribute("data-i18n-placeholder"));
    if (val !== undefined) el.setAttribute("placeholder", val);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const val = t(el.getAttribute("data-i18n-aria"));
    if (val !== undefined) el.setAttribute("aria-label", val);
  });
  const page = document.body.dataset.page;
  if (page && pageTitles[page]) document.title = t(pageTitles[page]);
  const langBtn = document.querySelector(".lang-switch");
  if (langBtn) langBtn.textContent = pack.langBtn;
  document.querySelector("#faqSearch")?.dispatchEvent(new Event("input"));
}

function initLang() {
  applyLang(currentLang);
}

function closeNav() {
  document.querySelector(".nav-links")?.classList.remove("open");
  document.querySelector(".hamburger")?.classList.remove("open");
  document.querySelector(".nav-backdrop")?.classList.remove("show");
  document.querySelector(".hamburger")?.setAttribute("aria-expanded", "false");
  document.body.style.overflow = document.querySelector(".modal:not([hidden])") ? "hidden" : "";
}

function bindHeader() {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");
  const backdrop = document.querySelector(".nav-backdrop");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      backdrop?.classList.toggle("show", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
  }
  backdrop?.addEventListener("click", closeNav);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav?.classList.contains("open")) {
      closeNav();
      burger?.focus();
    }
  });
  nav?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
  document.querySelector(".lang-switch")?.addEventListener("click", () => {
    applyLang(currentLang === "fa" ? "en" : "fa");
  });
  document.querySelector(".theme-toggle")?.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
  const page = document.body.dataset.page;
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const on = a.dataset.nav === page;
    a.classList.toggle("active", on);
    if (on) a.setAttribute("aria-current", "page");
  });
  const onScroll = () => {
    document.querySelector(".site-header")?.classList.toggle("scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function bindPageTransition() {
  window.addEventListener("pageshow", () => document.body.classList.remove("is-leaving"));
  document.querySelectorAll("a[href]").forEach((a) => {
    a.addEventListener("click", (e) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (a.target && a.target !== "_self") return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname && url.search === location.search) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      e.preventDefault();
      document.body.classList.add("is-leaving");
      window.setTimeout(() => { location.href = url.href; }, 340);
    });
  });
}

function bindScrollProgress() {
  const bar = document.querySelector(".progress > span");
  if (!bar) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0%";
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function bindReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length || !("IntersectionObserver" in window)) {
    nodes.forEach((n) => n.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  nodes.forEach((n) => io.observe(n));
}

function bindCounters() {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;
  const run = (el) => {
    const target = Number(el.dataset.count);
    const start = performance.now();
    const dur = 1100;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString(currentLang === "fa" ? "fa-IR" : "en-US");
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (!("IntersectionObserver" in window)) {
    nums.forEach(run);
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      run(entry.target);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.6 });
  nums.forEach((n) => io.observe(n));
}

function bindCarousel() {
  const root = document.querySelector("[data-quotes]");
  if (!root) return;
  const slides = [...root.querySelectorAll(".quote-slide")];
  const dots = document.querySelector("[data-dots]");
  let index = 0;
  let timer;
  const show = (i) => {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle("is-active", n === index));
    dots?.querySelectorAll("button").forEach((d, n) => {
      d.classList.toggle("on", n === index);
      d.setAttribute("aria-current", String(n === index));
    });
  };
  slides.forEach((_, n) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", `${n + 1} / ${slides.length}`);
    b.addEventListener("click", () => { show(n); restart(); });
    dots?.appendChild(b);
  });
  const restart = () => {
    clearInterval(timer);
    timer = setInterval(() => show(index + 1), 5200);
  };
  document.querySelector("[data-prev]")?.addEventListener("click", () => { show(index - 1); restart(); });
  document.querySelector("[data-next]")?.addEventListener("click", () => { show(index + 1); restart(); });
  root.addEventListener("mouseenter", () => clearInterval(timer));
  root.addEventListener("mouseleave", restart);
  show(0);
  restart();
}

function bindToTop() {
  const btn = document.querySelector(".to-top");
  if (!btn) return;
  const onScroll = () => btn.classList.toggle("show", window.scrollY > 500);
  window.addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 3200);
}

function initPortfolio() {
  const cards = [...document.querySelectorAll(".project-card")];
  const buttons = [...document.querySelectorAll(".filter-btn")];
  const empty = document.querySelector(".filter-empty");
  if (!cards.length) return;
  const apply = (filter) => {
    let shown = 0;
    cards.forEach((card) => {
      const ok = filter === "all" || card.dataset.cat === filter;
      card.hidden = !ok;
      if (ok) shown += 1;
    });
    if (empty) empty.hidden = shown !== 0;
  };
  buttons.forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.classList.contains("active")));
    btn.addEventListener("click", () => {
      buttons.forEach((b) => { b.classList.remove("active"); b.setAttribute("aria-pressed", "false"); });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      apply(btn.dataset.filter || "all");
    });
  });

  const modal = document.querySelector(".modal");
  if (!modal) return;
  let activeCard;
  const open = (card) => {
    activeCard = card;
    modal.querySelector(".modal-cover").className = `cover modal-cover ${card.dataset.cover || "c1"}`;
    modal.querySelector(".modal-cover").innerHTML = card.querySelector(".cover")?.innerHTML || "";
    modal.querySelector(".modal-title").textContent = card.querySelector("h3")?.textContent || "";
    modal.querySelector(".modal-desc").textContent = card.querySelector("p")?.textContent || "";
    modal.querySelector(".modal-tech").textContent = card.dataset.tech || "";
    modal.querySelector(".modal-cat").textContent = card.querySelector(".tag")?.textContent || "";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close")?.focus();
  };
  const close = () => {
    modal.hidden = true;
    document.body.style.overflow = "";
    activeCard?.focus();
  };
  cards.forEach((card) => {
    card.addEventListener("click", () => open(card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(card);
      }
    });
  });
  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!modal.hidden) close();
      else closeNav();
    }
  });
}

function initFaq() {
  const items = [...document.querySelectorAll(".faq-item")];
  items.forEach((item) => {
    const q = item.querySelector(".faq-q");
    q?.addEventListener("click", () => {
      const was = item.classList.contains("open");
      items.forEach((i) => {
        i.classList.remove("open");
        i.querySelector(".faq-q")?.setAttribute("aria-expanded", "false");
      });
      if (!was) {
        item.classList.add("open");
        q.setAttribute("aria-expanded", "true");
      }
    });
  });
  const search = document.querySelector("#faqSearch");
  const empty = document.querySelector(".faq-empty");
  if (!search) return;
  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    items.forEach((item) => {
      const ok = !q || item.textContent.toLowerCase().includes(q);
      item.hidden = !ok;
      if (ok) shown += 1;
    });
    if (empty) empty.hidden = shown !== 0;
  });
}

function initContactForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;
  const result = document.querySelector("#contactResult");
  const output = document.querySelector("#contactOutput");
  const setErr = (name, msg) => {
    const field = form.elements.namedItem(name);
    const slot = form.querySelector(`[data-for="${name}"]`);
    field.classList.toggle("error", Boolean(msg));
    field.setAttribute("aria-invalid", String(Boolean(msg)));
    if (slot) slot.textContent = msg || "";
  };
  form.addEventListener("input", () => { result.hidden = true; });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = form.elements;
    const name = fields.namedItem("name").value.trim();
    const email = fields.namedItem("email").value.trim();
    const phone = fields.namedItem("phone").value.trim();
    const subject = fields.namedItem("subject").value.trim();
    const message = fields.namedItem("message").value.trim();
    const normalizedPhone = phone.replace(/[۰-۹٠-٩]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit) < 0 ? "٠١٢٣٤٥٦٧٨٩".indexOf(digit) : "۰۱۲۳۴۵۶۷۸۹".indexOf(digit)));
    setErr("name", name ? "" : t("err.name"));
    setErr("email", !email ? t("err.email") : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : t("err.emailBad"));
    setErr("phone", phone && !/^[0-9+\-\s()]{8,}$/.test(normalizedPhone) ? t("err.phone") : "");
    setErr("message", message ? "" : t("err.message"));
    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    if (firstInvalid) { firstInvalid.focus(); return; }
    output.value = [[t("form.name"), name], [t("form.email"), email], [t("form.phone"), phone], [t("form.subject"), subject], [t("form.message"), message]]
      .filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`).join("\n");
    result.hidden = false;
  });
  document.querySelector("#copyContact").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(output.value);
      showToast(t("toast.copied"));
    } catch (_) {
      output.focus();
      output.select();
      showToast(t("toast.copyFail"));
    }
  });
  document.querySelector("#contactFields").disabled = false;
  document.querySelector("#contactUnavailable").hidden = true;
}

function initCommon() {
  document.documentElement.classList.add("js-ready");
  initTheme();
  initLang();
  bindHeader();
  bindPageTransition();
  bindScrollProgress();
  bindReveal();
  bindCounters();
  bindCarousel();
  bindToTop();
  initPortfolio();
  initFaq();
  initContactForm();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initCommon);
else initCommon();
