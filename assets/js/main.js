
(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const header = $('[data-header]');
  const menu = $('.menu-toggle');
  const nav = $('#primary-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'ปิดเมนู' : 'เปิดเมนู');
    });
    $$('.nav-link, .nav-cta', nav).forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open'); menu.setAttribute('aria-expanded','false');
    }));
  }
  const progress = $('[data-scroll-progress]');
  const back = $('[data-back-top]');
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + '%';
    if (header) header.classList.toggle('is-scrolled', scrollY > 8);
    if (back) back.classList.toggle('is-visible', scrollY > 500);
  };
  addEventListener('scroll', onScroll, {passive:true}); onScroll();

  $$('[data-faq]').forEach(item => {
    const q = $('.faq-q', item), a = $('.faq-a', item);
    if (!q || !a) return;
    q.addEventListener('click', () => {
      const open = item.classList.toggle('is-open');
      q.setAttribute('aria-expanded', String(open));
    });
  });

  const reveal = $$('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    }), {threshold:.12});
    reveal.forEach(el => io.observe(el));
  } else reveal.forEach(el => el.classList.add('is-visible'));

  $$('[data-current-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
