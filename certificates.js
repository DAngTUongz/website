/* Certificates page. Add/edit records in CERTIFICATE_ITEMS. */
(() => {
  "use strict";

  // Place PDFs in assets/certificates/ and use their exact filenames below.
  const CERTIFICATE_ITEMS = [
    {
      id: "certificate-01",
      category: "certificate", // "certificate" or "award"
      file: "assets/certificates/certificate-01.pdf",
      image: "", // Optional preview: assets/certificates/certificate-01.jpg
      title: { vi: "Tên chứng chỉ", en: "Certificate title", zh: "證書名稱" },
      description: {
        vi: "Mô tả ngắn về chứng chỉ này.",
        en: "A short description of this certificate.",
        zh: "此證書的簡短說明。"
      },
      issuer: { vi: "Đơn vị cấp", en: "Issuing organization", zh: "頒發單位" },
      date: "2026"
    }

    /*
    // Copy this object to add another certificate:
    ,{
      id: "certificate-02",
      category: "certificate", // or "award"
      file: "assets/certificates/certificate-02.pdf",
      image: "assets/certificates/certificate-02.jpg", // optional
      title: { vi: "Tên chứng chỉ", en: "Certificate title", zh: "證書名稱" },
      description: { vi: "Mô tả", en: "Description", zh: "說明" },
      issuer: { vi: "Đơn vị cấp", en: "Issuer", zh: "頒發單位" },
      date: "2026"
    }
    */
  ];

  const TEXT = {
    vi: {
      eyebrow: "HÀNH TRÌNH CỦA TÔI", title: "Chứng chỉ & Thành tích",
      intro: "Tổng hợp các chứng chỉ học tập, đào tạo chuyên môn, giải thưởng và dấu mốc trong quá trình học tập, phát triển kỹ năng.",
      all: "Tất cả", certificates: "Chứng chỉ", awards: "Giải thưởng & Thành tích",
      certificate: "Chứng chỉ", award: "Giải thưởng & Thành tích",
      view: "Xem tài liệu", open: "Mở PDF", empty: "Chưa có nội dung trong danh mục này.",
      count: n => `${n} mục`
    },
    en: {
      eyebrow: "MY JOURNEY", title: "Certificates & Achievements",
      intro: "A collection of academic certificates, professional training, awards and milestones throughout my learning journey.",
      all: "All", certificates: "Certificates", awards: "Awards & Achievements",
      certificate: "Certificate", award: "Award & Achievement",
      view: "View document", open: "Open PDF", empty: "There are no items in this category yet.",
      count: n => `${n} items`
    },
    zh: {
      eyebrow: "我的歷程", title: "證書與成就",
      intro: "整理學習證書、專業培訓、競賽獎項，以及學習與技能成長過程中的重要成果。",
      all: "全部", certificates: "證書", awards: "獎項與成就",
      certificate: "證書", award: "獎項與成就",
      view: "查看文件", open: "開啟 PDF", empty: "此分類目前沒有項目。",
      count: n => `${n} 個項目`
    }
  };

  const grid = document.getElementById("certificateGrid");
  const countEl = document.getElementById("certificateCount");
  if (!grid || !countEl) return;
  let activeFilter = "all";

  function currentLanguage() {
    const value = window.currentLang || document.getElementById("languageSelect")?.value || "en";
    return TEXT[value] ? value : "en";
  }
  function tr(value, lang) {
    if (value && typeof value === "object") return value[lang] || value.en || value.vi || "";
    return value || "";
  }
  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[c]);
  }

  function render() {
    const lang = currentLanguage();
    const t = TEXT[lang];
    const items = CERTIFICATE_ITEMS.filter(item =>
      activeFilter === "all" || item.category === activeFilter
    );
    countEl.textContent = t.count(items.length);

    if (!items.length) {
      grid.innerHTML = `<div class="certificate-empty"><i class="fa-regular fa-folder-open"></i>${escapeHTML(t.empty)}</div>`;
      return;
    }

    grid.innerHTML = items.map(item => {
      const award = item.category === "award";
      const title = tr(item.title, lang);
      const file = item.file || "";
      const preview = item.image
        ? `<img src="${escapeHTML(item.image)}" alt="${escapeHTML(title)}" loading="lazy">`
        : `<div class="certificate-file-icon"><i class="${award ? "fa-solid fa-award" : "fa-regular fa-file-pdf"}"></i><span>PDF</span></div>`;

      return `
        <article class="certificate-card" data-category="${award ? "award" : "certificate"}">
          <a class="certificate-preview" href="${escapeHTML(file || "#")}"
             ${file ? 'target="_blank" rel="noopener noreferrer"' : 'aria-disabled="true"'}
             aria-label="${escapeHTML(t.view)}: ${escapeHTML(title)}">
            ${preview}<span class="certificate-preview-label">${escapeHTML(t.view)}</span>
          </a>
          <div class="certificate-info">
            <span class="certificate-category">${escapeHTML(award ? t.award : t.certificate)}</span>
            <h3>${escapeHTML(title)}</h3>
            <p>${escapeHTML(tr(item.description, lang))}</p>
            <div class="certificate-meta">
              <span>${escapeHTML(tr(item.issuer, lang))}</span>
              <span>${escapeHTML(item.date || "—")}</span>
            </div>
            ${file ? `<a class="certificate-open-link" href="${escapeHTML(file)}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${escapeHTML(t.open)}</a>` : ""}
          </div>
        </article>`;
    }).join("");
  }

  function updateLanguage() {
    const t = TEXT[currentLanguage()];
    document.querySelectorAll("[data-cert]").forEach(el => {
      const key = el.dataset.cert;
      if (typeof t[key] === "string") el.textContent = t[key];
    });
    render();
  }

  document.querySelectorAll(".certificate-filter").forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll(".certificate-filter").forEach(b =>
        b.classList.toggle("active", b === button)
      );
      render();
    });
  });
  document.getElementById("languageSelect")?.addEventListener("change", updateLanguage);

  const selectedLanguage = document.getElementById("selectedLanguage");
  if (selectedLanguage && "MutationObserver" in window) {
    new MutationObserver(updateLanguage).observe(selectedLanguage, {
      childList: true, characterData: true, subtree: true
    });
  }
  updateLanguage();
})();
