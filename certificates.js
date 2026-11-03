/* Certificates page: category filtering and multilingual labels. */
(() => {
  const copy = {
    en: { eyebrow:'MY JOURNEY', title:'Certificates & Achievements', intro:'A collection of academic certificates, professional training, awards and milestones throughout my learning journey.', all:'All', certificates:'Certificates', awards:'Awards & Achievements', count:n=>`${n} items`, placeholderCertificate:'Certificate title', placeholderDesc:'Add the certificate image or PDF and its details here later.', placeholderAward:'Award / achievement title', placeholderAwardDesc:'Add the award image or supporting document and details here later.', issuer:'Issuing organization', awardIssuer:'Organizing organization' },
    vi: { eyebrow:'HÀNH TRÌNH CỦA TÔI', title:'Chứng chỉ & Thành tích', intro:'Tổng hợp các chứng chỉ học tập, đào tạo chuyên môn, giải thưởng và dấu mốc trong quá trình học tập, phát triển kỹ năng.', all:'Tất cả', certificates:'Chứng chỉ', awards:'Giải thưởng & Thành tích', count:n=>`${n} mục`, placeholderCertificate:'Tên chứng chỉ', placeholderDesc:'Bạn có thể bổ sung ảnh hoặc PDF chứng chỉ cùng thông tin chi tiết tại đây.', placeholderAward:'Tên giải thưởng / thành tích', placeholderAwardDesc:'Bạn có thể bổ sung ảnh hoặc tài liệu minh chứng cùng thông tin chi tiết tại đây.', issuer:'Đơn vị cấp', awardIssuer:'Đơn vị tổ chức' },
    zh: { eyebrow:'我的歷程', title:'證書與成就', intro:'整理學習證書、專業培訓、競賽獎項，以及學習與技能成長過程中的重要成果。', all:'全部', certificates:'證書', awards:'獎項與成就', count:n=>`${n} 個項目`, placeholderCertificate:'證書名稱', placeholderDesc:'之後可在此新增證書圖片或 PDF，以及相關詳細資訊。', placeholderAward:'獎項／成就名稱', placeholderAwardDesc:'之後可在此新增獎項圖片或證明文件，以及相關詳細資訊。', issuer:'頒發單位', awardIssuer:'主辦單位' }
  };
  let activeFilter = 'all';
  const grid = document.getElementById('certificateGrid');
  const count = document.querySelector('.certificate-count');
  function lang() { return window.currentLang || document.getElementById('languageSelect')?.value || 'en'; }
  function updateLanguage(language = lang()) {
    const t = copy[language] || copy.en;
    document.querySelectorAll('[data-cert]').forEach(el => {
      const key = el.dataset.cert;
      if (key === 'count') return;
      if (key === 'issuer') { el.textContent = t.issuer; return; }
      if (key in t && typeof t[key] === 'string') el.textContent = t[key];
    });
    document.querySelectorAll('.certificate-category').forEach((el, i) => { el.textContent = i === 0 ? t.certificates : t.awards; });
    document.querySelectorAll('.certificate-meta span:first-child').forEach((el, i) => { el.textContent = i === 0 ? t.issuer : t.awardIssuer; });
    updateFilter();
  }
  function updateFilter() {
    const cards = [...grid.querySelectorAll('.certificate-card')];
    let visible = 0;
    cards.forEach(card => { const show = activeFilter === 'all' || card.dataset.category === activeFilter; card.hidden = !show; if (show) visible++; });
    const t = copy[lang()] || copy.en;
    count.textContent = t.count(visible);
    document.querySelectorAll('.certificate-filter').forEach(btn => btn.classList.toggle('active', btn.dataset.filter === activeFilter));
  }
  document.querySelectorAll('.certificate-filter').forEach(btn => btn.addEventListener('click', () => { activeFilter = btn.dataset.filter; updateFilter(); }));
  document.getElementById('languageSelect')?.addEventListener('change', e => updateLanguage(e.target.value));
  window.addEventListener('storage', () => updateLanguage());
  const originalApplyLanguage = window.applyLanguage;
  if (typeof originalApplyLanguage === 'function') { window.applyLanguage = function(language) { originalApplyLanguage(language); updateLanguage(language); }; }
  updateLanguage();
})();
