/* ============================================
   MAIN.JS — Toggle, Animaciones, localStorage
   ============================================ */

(function () {
  'use strict';

  // ---- DOM refs ----
  const body = document.body;
  const toggleSwitch = document.getElementById('toggleSwitch');
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  // ---- MODE TOGGLE ----
  const STORAGE_KEY = 'luis-portfolio-mode';

  function setMode(mode) {
    body.setAttribute('data-mode', mode);
    localStorage.setItem(STORAGE_KEY, mode);
  }

  function loadSavedMode() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'pm' || saved === 'dev') {
      setMode(saved);
    }
  }

  loadSavedMode();

  toggleSwitch.addEventListener('click', function () {
    var current = body.getAttribute('data-mode');
    setMode(current === 'pm' ? 'dev' : 'pm');
    // Re-trigger counters for the new mode's visible stats
    initCounters();
  });

  // ---- HAMBURGER MENU ----
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
  });

  // Close menu on nav link click
  nav.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav__link')) {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
    }
  });

  // ---- SCROLL: FADE-IN (Intersection Observer) ----
  function initFadeIn() {
    var elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---- ANIMATED COUNTERS ----
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    if (isNaN(target)) return;

    var duration = 1500;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out quad
      var eased = 1 - (1 - progress) * (1 - progress);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }

  function initCounters() {
    var counters = document.querySelectorAll('.stat-pill__number[data-target]');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Only animate if currently visible (correct mode)
          var parent = entry.target.closest('.hero__text');
          if (parent && getComputedStyle(parent).display !== 'none') {
            animateCounter(entry.target);
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) {
      el.textContent = '0';
      observer.observe(el);
    });
  }

  // ---- HEADER SHRINK ON SCROLL ----
  var header = document.getElementById('header');

  function onScroll() {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- SMOOTH SCROLL for anchor links ----
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var targetId = link.getAttribute('href');
    if (targetId === '#') return;
    var targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      var offset = 80; // header height
      var top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  });

  // ---- INIT ----
  initFadeIn();
  initCounters();

})();
