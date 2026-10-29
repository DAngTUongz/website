/* ==========================================================
   DangTuong Portfolio - Multilingual + existing interactions
   Languages: Vietnamese (vi), English (en), Traditional Chinese (zh)
========================================================== */

const translations = {
  en: {
     //
      language_label: "Language",
      loaderTitle: 'DangTuong', loaderText: 'Loading Portfolio...',
      nav: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
      hello: "Hello, I'm",
      name: "Dang Ngoc Tuong",
      role: 'Embedded Systems Developer',
      description: 'Passionate about Embedded Systems, IoT, PLC, Automation, and Web Development.',
      projectsButton: 'View Projects', aboutTitle: 'About Me',
      contactEyebrow: 'CONTACT',
      contactHeading: "Let's work together?",
      contactDescription: 'I would love to discuss job opportunities and technical projects.',
      contactButton: 'Email me',
      phoneLabel: 'PHONE',
      phoneValue: 'Update phone number',
      footerRole: 'Embedded Systems Developer',
      about: [
       'Hello! I am Dang Ngoc Tuong, passionate about embedded systems, robotics, automatic control, and industrial electronics.',
       'From 2023 to 2026, I participated in robotics and automation projects, including four-wheel AGVs, two-wheel AGVs, a bidirectional two-wheel AGV, SCARA robots, and Techman robots. My responsibilities involved electrical system design, control programming, and hardware integration.',
       'In embedded systems, I have hands-on experience with STM32F1, STM32F4, and STM32H7 microcontroller families, as well as ESP32, ESP32-S3, and Arduino platforms. I have used STM32CubeIDE, STM32 HAL, and Arduino IDE to develop applications involving sensor acquisition, data processing, PWM control, motors, encoders, and peripheral communication.',
       'In industrial automation, I have worked with Mitsubishi FX1N, FX3U, and FX5U PLCs, including control programming and pulse generation for stepper motors and servos. I have also worked with or explored communication protocols such as UART, SPI, I2C, RS485, Modbus RTU, Modbus TCP, and industrial device communication.',
       'I have also developed IoT applications, collected sensor data, connected ESP32 to Ethernet through the W5500 module, and worked with IMU, RFID, DS18B20 sensors, SPI Flash memory, and SD cards. Additionally, I have experience developing web applications using HTML, CSS, and JavaScript.',
       'In 2025, my team won First Prize in the Electrical Cabinet Design and Assembly Competition organized by the Faculty of Mechatronics and Electronics at Lac Hong University. I aim to further develop my expertise in embedded systems, control programming, and industrial robotics while contributing to practical and reliable engineering solutions.'
     ],
    skillsTitle: 'Skills', projectsTitle: 'Projects',
    projectNames: ['Temperature Controller', 'ESP32 Smart Home', 'Minecraft Server', 'Legacy Launcher Guide'],
    projectDescriptions: ['STM32 + LCD + EEPROM', 'IoT + WiFi + Google Sheets', 'PaperMC + Plugins', 'Tutorial Website'],
    stats: ['Projects', 'Technologies', 'Learning'], contactTitle: 'Contact', emailTitle: 'Email',
    footer: '© 2026 DangTuong. All Rights Reserved.', languageLabel: 'Language'
  },
  vi: {
     //
      language_label: "Ngôn ngữ",
      loaderTitle: 'DangTuong', loaderText: 'Đang tải Portfolio...',
      nav: ['Trang chủ', 'Giới thiệu', 'Kỹ năng', 'Dự án', 'Liên hệ'],
      hello: 'Xin chào, tôi là',
      name: "Đặng Ngọc Tưởng",
      role: 'Lập trình viên hệ thống nhúng',
      description: 'Đam mê hệ thống nhúng, IoT, PLC, tự động hóa và phát triển web.',
      projectsButton: 'Xem dự án', aboutTitle: 'Giới thiệu',
      contactEyebrow: 'LIÊN HỆ',
      contactHeading: 'Cùng hợp tác nhé?',
      contactDescription: 'Rất vui được trao đổi về cơ hội việc làm và các dự án kỹ thuật.',
      contactButton: 'Gửi email cho tôi',
      phoneLabel: 'ĐIỆN THOẠI',
      phoneValue: 'Cập nhật số điện thoại',
      footerRole: 'Lập trình viên hệ thống nhúng',
      about: [
       'Xin chào! Tôi là Đặng Ngọc Tưởng, có niềm đam mê với hệ thống nhúng, robot, điều khiển tự động và điện tử công nghiệp.',
       'Từ năm 2023 đến 2026, tôi đã tham gia các dự án robot và tự động hóa, bao gồm xe tự hành AGV 4 bánh, AGV 2 bánh, AGV 2 bánh có khả năng di chuyển hai chiều, robot SCARA và robot Techman. Tôi đảm nhiệm các công việc liên quan đến thiết kế hệ thống điện, lập trình điều khiển và tích hợp phần cứng.',
       'Về hệ thống nhúng, tôi đã thực hành với các dòng vi điều khiển STM32F1, STM32F4 và STM32H7, cùng ESP32, ESP32-S3 và Arduino. Tôi có kinh nghiệm lập trình với STM32CubeIDE, STM32 HAL và Arduino IDE, phát triển các ứng dụng đọc cảm biến, xử lý dữ liệu, điều khiển PWM, động cơ, encoder và giao tiếp với các thiết bị ngoại vi.',
       'Về tự động hóa công nghiệp, tôi đã làm việc với PLC Mitsubishi FX1N, FX3U và FX5U, lập trình điều khiển, phát xung điều khiển động cơ bước và servo, đồng thời tìm hiểu các giao thức truyền thông như UART, SPI, I2C, RS485, Modbus RTU, Modbus TCP và giao tiếp với thiết bị công nghiệp.',
       'Ngoài ra, tôi đã thực hiện các ứng dụng IoT, thu thập dữ liệu cảm biến, kết nối ESP32 với Ethernet W5500, làm việc với cảm biến IMU, RFID, DS18B20, bộ nhớ SPI Flash và thẻ SD. Tôi cũng có kinh nghiệm phát triển ứng dụng web bằng HTML, CSS và JavaScript.',
       'Năm 2025, tôi cùng đội thi đạt giải Nhất tại cuộc thi Thiết kế và Lắp ráp Tủ điện do Khoa Cơ Điện - Điện Tử, Trường Đại học Lạc Hồng tổ chức. Tôi mong muốn tiếp tục phát triển chuyên môn về hệ thống nhúng, lập trình điều khiển và robot công nghiệp, đồng thời tạo ra những giải pháp kỹ thuật có tính ứng dụng cao.'
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
      hello: '你好，我是',
      name: "鄧玉祥",
      role: '嵌入式系統開發者',
      description: '熱衷於嵌入式系統、物聯網、PLC、自動化與網頁開發。',
      projectsButton: '查看專案', aboutTitle: '關於我',
      contactEyebrow: '聯絡我',
      contactHeading: '一起合作吧？',
      contactDescription: '歡迎與我交流工作機會及技術專案。',
      contactButton: '寄送電子郵件',
      phoneLabel: '電話',
      phoneValue: '請更新電話號碼',
      footerRole: '嵌入式系統開發者',
      about: [
       '您好！我叫鄧玉祥（Dang Ngoc Tuong），熱衷於嵌入式系統、機器人、自動控制及工業電子技術。',
       '從 2023 年至 2026 年，我參與了多項機器人與自動化專案，包括四輪自動導引車（AGV）、雙輪 AGV、具備雙向行駛能力的雙輪 AGV、SCARA 機器人及 Techman 機器人。我的工作內容包括電氣系統設計、控制程式開發及硬體整合。',
       '在嵌入式系統方面，我曾實作 STM32F1、STM32F4、STM32H7 系列微控制器，以及 ESP32、ESP32-S3 和 Arduino 平台。我使用 STM32CubeIDE、STM32 HAL 與 Arduino IDE 開發應用程式，涉及感測器資料擷取、資料處理、PWM 控制、馬達控制、編碼器及周邊裝置通訊。',
       '在工業自動化方面，我曾使用 Mitsubishi FX1N、FX3U 和 FX5U PLC，進行控制程式開發，以及步進馬達與伺服馬達的脈衝控制。我也曾實作或研究 UART、SPI、I2C、RS485、Modbus RTU、Modbus TCP 等通訊協定，以及工業設備通訊。',
       '此外，我也開發過物聯網（IoT）應用、感測器資料收集系統，並使用 W5500 乙太網路模組連接 ESP32。我曾接觸 IMU、RFID、DS18B20 感測器、SPI Flash 記憶體及 SD 卡，也具備使用 HTML、CSS 與 JavaScript 開發網頁應用程式的經驗。',
       '2025 年，我與團隊參加由藍紅大學機電與電子學院舉辦的電控箱設計與組裝競賽，並獲得第一名。我期望持續精進嵌入式系統、控制程式設計及工業機器人領域的專業能力，並致力於開發實用且可靠的工程解決方案。'
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
   window.currentLang = 'en';
   const t = translations[language] || translations.en;
   window.currentLang = language;
   document.documentElement.lang = language === 'zh' ? 'zh-Hant' : language;
   setText('#loader h1', t.loaderTitle);
   setText('#loader p', t.loaderText);
   setTexts('nav ul li a', t.nav);
   setText('.hero .hello', t.hello);
   setText('.hero h1', t.name);
   setText('.hero h2', t.role);
   setText('.hero .description', t.description);
   setText('.hero .buttons .btn', t.projectsButton);
   setText('.contact-eyebrow', t.contactEyebrow);
   setText('.contact-heading', t.contactHeading);
   setText('.contact-description', t.contactDescription);
   setText('.contact-button', t.contactButton);
   setText('.contact-label', t.emailTitle);
   setText('.contact-item:nth-child(2) .contact-label', t.phoneLabel);
   setText('.contact-item:nth-child(2) a', t.phoneValue);
   setText('.site-footer p:last-child', t.footerRole);
   setText('.language-label', t.languageLabel);


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
  } catch (e) {}
   
   if (typeof renderProject === 'function') {
    renderProject(0);
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

const projects = [
  {
    title: {
      vi: "Xe tự hành AGV 4 bánh",
      en: "Four-Wheel Autonomous AGV",
      zh: "四輪自動導引車"
    },
    description: {
      vi: "Tham gia phát triển robot AGV 4 bánh do nhóm tự thiết kế, tập trung vào hệ thống điện và điều khiển chuyển động.",
      en: "Contributed to a team-designed four-wheel AGV, focusing on electrical systems and motion control.",
      zh: "參與團隊自主設計的四輪自動導引車專案，負責電氣系統與運動控制相關工作。"
    },
    tags: ["AGV", "Embedded Systems", "Motor Control"],
    image: "assets/projects/agv-4w.JPG",
    link: "projects/agv-4w.html"
  },
  {
    title: {
      vi: "Xe tự hành AGV 2 bánh",
      en: "Two-Wheel Autonomous AGV",
      zh: "雙輪自動導引車"
    },
    description: {
      vi: "Tham gia thiết kế hệ thống điện và lập trình điều khiển cho nền tảng AGV 2 bánh.",
      en: "Contributed to electrical system design and control programming for a two-wheel AGV.",
      zh: "參與雙輪自動導引車的電氣系統設計與控制程式開發。"
    },
    tags: ["AGV", "Electrical Design", "Programming"],
    image: "assets/projects/agv-2w.JPG",
    link: "projects/agv-2w.html"
  },
  {
    title: {
      vi: "Robot SCARA",
      en: "SCARA Robot",
      zh: "SCARA 機器人"
    },
    description: {
      vi: "Tham gia lập trình và thiết kế hệ thống điện cho dự án robot SCARA.",
      en: "Contributed to robot programming and electrical system design for a SCARA robot project.",
      zh: "參與 SCARA 機器人專案的程式開發與電氣系統設計。"
    },
    tags: ["Robotics", "Control", "Electrical Design"],
    image: "assets/projects/scara.JPG",
    link: "projects/scara.html"
  },
  {
    title: {
      vi: "Robot Techman",
      en: "Techman Robot",
      zh: "Techman 機器人"
    },
    description: {
      vi: "Tham gia lập trình và thiết kế hệ thống điện trong dự án tích hợp robot công nghiệp Techman.",
      en: "Contributed to programming and electrical system design for an industrial Techman robot integration project.",
      zh: "參與 Techman 工業機器人整合專案的程式開發與電氣系統設計。"
    },
    tags: ["Industrial Robotics", "Programming", "Automation"],
    image: "assets/projects/techman.JPG",
    link: "projects/techman.html"
  }
];

const slider = document.getElementById("projectSlider");

if (slider) {
  const titleEl = document.getElementById("projectTitle");
  const descriptionEl = document.getElementById("projectDescription");
  const numberEl = document.getElementById("projectNumber");
  const tagsEl = document.getElementById("projectTags");
  const imageEl = document.getElementById("projectImage");
  const imageLink = document.getElementById("projectImageLink");
  const projectLink = document.getElementById("projectLink");
  const dotsEl = document.getElementById("projectDots");
  const prevBtn = document.getElementById("projectPrev");
  const nextBtn = document.getElementById("projectNext");

  let currentIndex = 0;
  let timer = null;
  let isPaused = false;
  let isChanging = false;

  // Sử dụng biến ngôn ngữ của website nếu đã có.
  function getProjectLanguage() {
    const lang = window.currentLang || document.documentElement.lang || "vi";
    return ["vi", "en", "zh"].includes(lang) ? lang : "vi";
  }

  function renderProject(index) {
    currentIndex = (index + projects.length) % projects.length;

    const project = projects[currentIndex];
    const lang = getProjectLanguage();

    slider.classList.add("is-changing");
    isChanging = true;

    titleEl.textContent = project.title[lang];
    descriptionEl.textContent = project.description[lang];
    numberEl.textContent =
      `${String(currentIndex + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;

    tagsEl.replaceChildren();

    project.tags.forEach(tag => {
      const span = document.createElement("span");
      span.textContent = tag;
      tagsEl.appendChild(span);
    });

    imageEl.alt = project.title[lang];
    imageLink.href = project.link;
    projectLink.href = project.link;

    const dots = dotsEl.querySelectorAll(".project-dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
      dot.setAttribute("aria-current", i === currentIndex ? "true" : "false");
    });

    imageEl.onload = () => {
      slider.classList.remove("is-changing");
      isChanging = false;
    };

    imageEl.onerror = () => {
      slider.classList.remove("is-changing");
      isChanging = false;
      console.warn("Không tải được ảnh dự án:", project.image);
    };

    imageEl.src = project.image;

    // Đảm bảo hiệu ứng không bị kẹt khi dùng ảnh đã được cache.
    if (imageEl.complete) {
      slider.classList.remove("is-changing");
      isChanging = false;
    }
  }

  projects.forEach((project, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "project-dot";
    dot.setAttribute("aria-label", `Go to project ${index + 1}`);

    dot.addEventListener("click", () => {
      renderProject(index);
      restartAutoplay();
    });

    dotsEl.appendChild(dot);
  });

  function stopAutoplay() {
    clearInterval(timer);
    timer = null;
  }

  function startAutoplay() {
    stopAutoplay();

    if (isPaused || projects.length < 2) return;

    timer = setInterval(() => {
      if (!isChanging && !document.hidden) {
        renderProject(currentIndex + 1);
      }
    }, 5000);
  }

  function restartAutoplay() {
    startAutoplay();
  }

  function pauseAutoplay() {
    isPaused = true;
    stopAutoplay();
  }

  function resumeAutoplay() {
    isPaused = false;
    startAutoplay();
  }

  prevBtn.addEventListener("click", () => {
    renderProject(currentIndex - 1);
    restartAutoplay();
  });

  nextBtn.addEventListener("click", () => {
    renderProject(currentIndex + 1);
    restartAutoplay();
  });

  // Dừng khi chuột ở trên ảnh; tiếp tục khi chuột rời ảnh.
  imageLink.addEventListener("mouseenter", pauseAutoplay);
  imageLink.addEventListener("mouseleave", resumeAutoplay);

  // Hỗ trợ bàn phím và màn hình cảm ứng.
  imageLink.addEventListener("focus", pauseAutoplay);
  imageLink.addEventListener("blur", resumeAutoplay);

  slider.addEventListener("touchstart", pauseAutoplay, { passive: true });
  slider.addEventListener("touchend", resumeAutoplay, { passive: true });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAutoplay();
    else startAutoplay();
  });

  // Cho phép gọi lại sau khi đổi ngôn ngữ.
  window.refreshProjectLanguage = () => renderProject(currentIndex);

  renderProject(0);
  startAutoplay();
}

console.log('%cWelcome to DangTuong Portfolio', 'color:#18181b;font-size:18px;font-weight:bold;');


/* =========================================
   CUSTOM LANGUAGE DROPDOWN
========================================= */

const languageSwitcher = document.getElementById("languageSwitcher");

const languageToggle = document.getElementById("languageToggle");

const languageMenu = document.getElementById("languageMenu");

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
