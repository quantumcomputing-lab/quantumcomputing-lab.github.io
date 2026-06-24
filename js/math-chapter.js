'use strict';

// ── Fade-in on scroll ───────────────────────────────────────────────────
const fadeObs = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); fadeObs.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll('.fade-in').forEach(el => fadeObs.observe(el));

// ── Back to top ─────────────────────────────────────────────────────────
const btt = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btt.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
