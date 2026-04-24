/**
 * ==========================================
 * CASE STUDY — SHARED JS
 * ==========================================
 * Scroll reveal animations for case study pages
 */

(function () {
  'use strict';

  function initReveal() {
    const elements = document.querySelectorAll('.reveal-fade');

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    window.addEventListener('load', () => {
      elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) {
          el.classList.add('visible');
        }
      });
    });
  }

  function init() {
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
