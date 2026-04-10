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
    // Re-trigger counters and typing for the new mode
    initCounters();
    if (body.getAttribute('data-mode') === 'dev') {
      initTyping();
    }
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

  // ---- PARTICLE SYSTEM (Canvas) ----
  function initParticles() {
    var canvas = document.getElementById('particles');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var particles = [];
    var maxParticles = 60;
    var connectDistance = 120;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function getAccentColor() {
      var mode = body.getAttribute('data-mode');
      return mode === 'dev'
        ? { r: 16, g: 185, b: 129 }
        : { r: 59, g: 130, b: 246 };
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1
      };
    }

    for (var i = 0; i < maxParticles; i++) {
      particles.push(createParticle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var color = getAccentColor();

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + p.opacity + ')';
        ctx.fill();

        // Draw connections
        for (var j = i + 1; j < particles.length; j++) {
          var p2 = particles[j];
          var dx = p.x - p2.x;
          var dy = p.y - p2.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectDistance) {
            var lineOpacity = (1 - dist / connectDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + lineOpacity + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  // ---- TYPING ANIMATION (Dev hero) ----
  var typingLines = [
    '> claude --init portfolio',
    '> deploying multi-agent systems...',
    '> python automate.py --all',
    '> building the future with AI',
    '> from Venezuela to the world'
  ];
  var typingEl = document.getElementById('typingText');
  var typingTimeout = null;

  function initTyping() {
    if (!typingEl) return;
    // Clear any running animation
    if (typingTimeout) clearTimeout(typingTimeout);
    typingEl.textContent = '';

    var lineIndex = 0;
    var charIndex = 0;
    var deleting = false;

    function type() {
      var currentLine = typingLines[lineIndex];

      if (!deleting) {
        typingEl.textContent = currentLine.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentLine.length) {
          // Pause before deleting
          typingTimeout = setTimeout(function () {
            deleting = true;
            type();
          }, 2000);
          return;
        }
        typingTimeout = setTimeout(type, 60);
      } else {
        typingEl.textContent = currentLine.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          lineIndex = (lineIndex + 1) % typingLines.length;
          typingTimeout = setTimeout(type, 400);
          return;
        }
        typingTimeout = setTimeout(type, 30);
      }
    }

    type();
  }

  // ---- INIT ----
  initFadeIn();
  initCounters();
  initParticles();
  // Start typing if in dev mode on load
  if (body.getAttribute('data-mode') === 'dev') {
    initTyping();
  }

})();
