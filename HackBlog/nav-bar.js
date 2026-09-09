document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('is-open'); toggle.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false');
    }
  });
  const current = location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('a').forEach(a => {
    const target = a.getAttribute('href').split('/').pop();
    if (target === current) a.classList.add('active');
  });
});