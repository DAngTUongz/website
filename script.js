/* ==========================================================
   DangTuong Portfolio - Multilingual + existing interactions
   Languages: Vietnamese (vi), English (en), Traditional Chinese (zh)
========================================================== */

const translations = {
  en: {
    language_label: "Language",
    loaderTitle: 'DangTuong', loaderText: 'Loading Portfolio...',
    nav: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
    hello: "Hello, I'm", role: 'Embedded Systems Developer',
    description: 'Passionate about Embedded Systems, IoT, PLC, Automation, and Web Development.',
    projectsButton: 'View Projects', aboutTitle: 'About Me',
    about: [
      'Welcome to my portfolio website.',
      'I enjoy building embedded systems, automation solutions, and web applications.',
      'Most of my projects involve STM32, ESP32, Arduino, PLC programming, communication protocols, and modern web technologies.'
    ],
    skillsTitle: 'Skills', projectsTitle: 'Projects',
    projectNames: ['Temperature Controller', 'ESP32 Smart Home', 'Minecraft Server', 'Legacy Launcher Guide'],
    projectDescriptions: ['STM32 + LCD + EEPROM', 'IoT + WiFi + Google Sheets', 'PaperMC + Plugins', 'Tutorial Website'],
    stats: ['Projects', 'Technologies', 'Learning'], contactTitle: 'Contact', emailTitle: 'Email',
    footer: '© 2026 DangTuong. All Rights Reserved.', languageLabel: 'Language'
  },
  vi: {
    language_label: "Ngôn ngữ",
    loaderTitle: 'DangTuong', loaderText: 'Đang tải Portfolio...',
    nav: ['Trang chủ', 'Giới thiệu', 'Kỹ năng', 'Dự án', 'Liên hệ'],
    hello: 'Xin chào, tôi là', role: 'Lập trình viên hệ thống nhúng',
    description: 'Đam mê hệ thống nhúng, IoT, PLC, tự động hóa và phát triển web.',
    projectsButton: 'Xem dự án', aboutTitle: 'Giới thiệu',
    about: [
      'Chào mừng bạn đến với website portfolio của tôi.',
      'Tôi yêu thích phát triển hệ thống nhúng, giải pháp tự động hóa và ứng dụng web.',
      'Các dự án của tôi chủ yếu liên quan đến STM32, ESP32, Arduino, lập trình PLC, giao thức truyền thông và công nghệ web hiện đại.'
    ],
    skillsTitle: 'Kỹ năng', projectsTitle: 'Dự án',
    projectNames: ['Bộ điều khiển nhiệt độ', 'Nhà thông minh ESP32', 'Máy chủ Minecraft', 'Hướng dẫn Legacy Launcher'],
    projectDescriptions: ['STM32 + LCD + EEPROM', 'IoT + WiFi + Google Sheets', 'PaperMC + Plugin', 'Website hướng dẫn'],
    stats: ['Dự án', 'Công nghệ', 'Học hỏi'], contactTitle: 'Liên hệ', emailTitle: 'Email',
    footer: '© 2026 DangTuong. Bảo lưu mọi quyền.', languageLabel: 'Ngôn ngữ'
  },
  zh: {
    language_label: "語言",
    loaderTitle: 'DangTuong', loaderText: '作品集載入中...',
    nav: ['首頁', '關於我', '技能', '專案', '聯絡我'],
    hello: '你好，我是', role: '嵌入式系統開發者',
    description: '熱衷於嵌入式系統、物聯網、PLC、自動化與網頁開發。',
    projectsButton: '查看專案', aboutTitle: '關於我',
    about: [
      '歡迎來到我的個人作品集網站。',
      '我喜歡開發嵌入式系統、自動化解決方案與網頁應用程式。',
      '我的專案主要涉及 STM32、ESP32、Arduino、PLC 程式設計、通訊協定與現代網頁技術。'
    ],
    skillsTitle: '技能', projectsTitle: '專案',
    projectNames: ['溫度控制器', 'ESP32 智慧家庭', 'Minecraft 伺服器', 'Legacy Launcher 教學'],
    projectDescriptions: ['STM32 + LCD + EEPROM', '物聯網 + WiFi + Google 試算表', 'PaperMC + 外掛', '教學網站'],
    stats: ['專案', '技術', '持續學習'], contactTitle: '聯絡我', emailTitle: '電子郵件',
    footer: '© 2026 DangTuong。保留所有權利。', languageLabel: '語言'
  }
};

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}
function setTexts(selector, values) {
  document.querySelectorAll(selector).forEach((el, i) => {
    if (values[i] !== undefined) el.textContent = values[i];
  });
}

function applyLanguage(language) {
  const t = translations[language] || translations.en;
  document.documentElement.lang = language === 'zh' ? 'zh-Hant' : language;
  setText('#loader h1', t.loaderTitle);
  setText('#loader p', t.loaderText);
  setTexts('nav ul li a', t.nav);
  setText('.hero .hello', t.hello);
  setText('.hero h1', 'Dang Tuong');
  setText('.hero h2', t.role);
  setText('.hero .description', t.description);
  setText('.hero .buttons .btn', t.projectsButton);

  const sectionTitles = document.querySelectorAll('.section-title h2');
  if (sectionTitles[0]) sectionTitles[0].textContent = t.aboutTitle;
  if (sectionTitles[1]) sectionTitles[1].textContent = t.skillsTitle;
  if (sectionTitles[2]) sectionTitles[2].textContent = t.projectsTitle;
  if (sectionTitles[3]) sectionTitles[3].textContent = t.contactTitle;

  setTexts('#about .about-content p', t.about);
  setTexts('.project-card h3', t.projectNames);
  setTexts('.project-card p', t.projectDescriptions);
  setTexts('#stats .stat p', t.stats);
  setText('.contact-card h3', t.emailTitle);
  setText('footer p', t.footer);

  
  // Update language label
  setText('.language-label', t.language_label);

  // Synchronize language selector
  const selector = document.getElementById('languageSelect');

  if (selector && selector.value !== language) {
    selector.value = language;
  }

  // Save selected language
  try {
    localStorage.setItem('portfolioLanguage', language);
  } catch (e) {
    // Ignore storage errors
  }
}

// Loading screen
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  loader.style.opacity = '0';
  setTimeout(() => { loader.style.display = 'none'; }, 800);
});

// Language selector
const languageSelect = document.getElementById('languageSelect');
if (languageSelect) {
  languageSelect.addEventListener('change', () => applyLanguage(languageSelect.value));
}
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('portfolioLanguage') || 'en'; } catch (e) {}
applyLanguage(savedLanguage);

// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('active'));
  document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('active')));
}

// Header appearance
const header = document.querySelector('header');
function updateHeader() {
  if (!header) return;
  header.style.background = window.scrollY > 50 ? 'rgba(255,255,255,.97)' : 'rgba(255,255,255,.94)';
  header.style.boxShadow = window.scrollY > 50 ? '0 4px 20px rgba(0,0,0,.04)' : 'none';
}
window.addEventListener('scroll', updateHeader);
updateHeader();

// Back to top
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  if (topBtn) topBtn.style.display = window.scrollY > 500 ? 'block' : 'none';
});
if (topBtn) topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Scroll reveal
const sections = document.querySelectorAll('section');
if ('IntersectionObserver' in window) {
  sections.forEach(el => el.classList.add('hidden'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show'); });
  }, { threshold: 0.15 });
  sections.forEach(el => observer.observe(el));

  // Animate skill bars when visible
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('bar-animated');
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.bar').forEach(bar => skillObserver.observe(bar));

  // Animate numeric counters once
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const counter = entry.target;
      const original = counter.textContent;
      const number = parseInt(original, 10);
      if (Number.isNaN(number)) { counterObserver.unobserve(counter); return; }
      let count = 0;
      const step = Math.max(1, Math.ceil(number / 60));
      const update = () => {
        count = Math.min(number, count + step);
        counter.textContent = count + '+';
        if (count < number) requestAnimationFrame(update);
        else counter.textContent = original;
      };
      update();
      counterObserver.unobserve(counter);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat h2').forEach(counter => counterObserver.observe(counter));
}

// Avatar tilt (desktop pointer only)
const avatar = document.querySelector('.hero-right img');
if (avatar && window.matchMedia('(hover: hover)').matches) {
  avatar.addEventListener('mousemove', e => {
    const rect = avatar.getBoundingClientRect();
    const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    avatar.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });
  avatar.addEventListener('mouseleave', () => { avatar.style.transform = ''; });
}

// Subtle project-card hover
 document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => { card.style.boxShadow = '0 14px 35px rgba(0,0,0,.08)'; });
  card.addEventListener('mouseleave', () => { card.style.boxShadow = ''; });
});

document.body.classList.add('fade');
console.log('%cWelcome to DangTuong Portfolio', 'color:#18181b;font-size:18px;font-weight:bold;');


/* =========================================
   CUSTOM LANGUAGE DROPDOWN
========================================= */

const languageSwitcher = document.getElementById("languageSwitcher");

const languageToggle = document.getElementById("languageToggle");

const languageMenu = document.getElementById("languageMenu");

const selectedLanguage = document.getElementById("selectedLanguage");

if (
    languageSwitcher &&
    languageToggle &&
    languageMenu &&
    selectedLanguage &&
    languageSelect
) {
    const options = languageMenu.querySelectorAll(
        ".language-option"
    );

    const languageNames = {
        en: "English",
        vi: "Tiếng Việt",
        zh: "中文"
    };

    function closeLanguageMenu() {
        languageSwitcher.classList.remove("open");
        languageToggle.setAttribute("aria-expanded", "false");
    }

    languageToggle.addEventListener("click", () => {
        const isOpen =
            languageSwitcher.classList.toggle("open");

        languageToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    function syncLanguageUI(lang) {
        selectedLanguage.textContent =
            languageNames[lang] || "English";

        options.forEach(option => {
            const isActive = option.dataset.lang === lang;

            option.classList.toggle("active", isActive);
            option.setAttribute(
                "aria-selected",
                String(isActive)
            );
        });
    }

    options.forEach(option => {
        option.addEventListener("click", () => {
            const lang = option.dataset.lang;

            languageSelect.value = lang;

            // Trigger the existing translation handler
            languageSelect.dispatchEvent(
                new Event("change", { bubbles: true })
            );

            syncLanguageUI(lang);
            closeLanguageMenu();
        });
    });

    // Close when clicking outside
    document.addEventListener("click", event => {
        if (!languageSwitcher.contains(event.target)) {
            closeLanguageMenu();
        }
    });

    // Close with Escape
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeLanguageMenu();
            languageToggle.focus();
        }
    });

    // Keep the custom menu synchronized with the select
    languageSelect.addEventListener("change", () => {
        syncLanguageUI(languageSelect.value);
    });

    syncLanguageUI(languageSelect.value || "en");
}
