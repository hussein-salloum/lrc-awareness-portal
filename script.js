function openPDF(path) {
  window.open(path, '_blank');
}

function setLanguage(lang) {
  // Set text direction and language attribute
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  // Switch font based on language
  document.body.style.fontFamily = lang === 'ar'
    ? '"Cairo", sans-serif'
    : '"Open Sans", sans-serif';

  // Update text content for titles
  document.querySelectorAll('.lang-text').forEach(el => {
    el.textContent = el.parentElement.getAttribute(`data-${lang}`);
  });

  // Update text content for descriptions
  document.querySelectorAll('.lang-desc').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  // Update other language switchable texts
  document.querySelectorAll('.lang-switch').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  // Highlight the selected language button
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`.lang-toggle button[onclick*="${lang}"]`);
  if (activeBtn) activeBtn.classList.add('active');
}


