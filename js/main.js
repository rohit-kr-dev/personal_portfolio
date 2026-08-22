/**
 * Rohit Kumar Portfolio - Main Orchestrator (Elite Edition)
 * Spotlight Tracking, Live Clock, Sound FX Toggle & Theme Switcher
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  initAudioToggle();
  initTypingAnimation();
  initThemeToggle();
  initMobileDrawer();
  initScrollEffects();
  initSpotlight();
  initTiltCards();
});

/* --------------------------------------------------------------------------
   1. Live Bengaluru Clock (IST)
   -------------------------------------------------------------------------- */
function initLiveClock() {
  const clockEl = document.getElementById('live-time-ist');
  if (!clockEl) return;

  function updateTime() {
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    clockEl.textContent = new Intl.DateTimeFormat([], options).format(new Date());
  }

  updateTime();
  setInterval(updateTime, 1000);
}

/* --------------------------------------------------------------------------
   2. Web Audio FX Button Toggle
   -------------------------------------------------------------------------- */
function initAudioToggle() {
  const audioBtn = document.getElementById('audio-toggle-btn');
  if (!audioBtn) return;

  audioBtn.addEventListener('click', () => {
    if (window.soundFX) {
      const isEnabled = window.soundFX.toggle();
      audioBtn.classList.toggle('active', isEnabled);
      audioBtn.title = `Sound FX: ${isEnabled ? 'ON 🔊' : 'OFF 🔇'}`;
      audioBtn.style.color = isEnabled ? 'var(--accent-cyan)' : 'var(--text-muted)';
      audioBtn.style.borderColor = isEnabled ? 'var(--accent-cyan)' : 'var(--border-subtle)';
      if (isEnabled && window.showToast) {
        window.showToast('🔊 Sound FX Enabled (Spatial Cyber Blips)');
      }
    }
  });

  // Attach hover sounds to interactive elements
  const interactives = document.querySelectorAll('a, button, .quick-cmd-btn, .skill-pill, .roadmap-checkpoint-node, .arch-node');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (window.soundFX) window.soundFX.playHover();
    });
  });
}

/* --------------------------------------------------------------------------
   3. Dynamic Typing Hero
   -------------------------------------------------------------------------- */
function initTypingAnimation() {
  const phrases = [
    "Full-Stack Developer @ Polymetalz",
    "Python / FastAPI / Flask Architect",
    "React.js & Next.js Frontend Engineer",
    "Flutter Android Mobile Creator",
    "PostgreSQL, Redis & Cloud Specialist",
    "AI/ML & NLP Pipeline Builder"
  ];
  
  const textEl = document.querySelector('.typed-text');
  if (!textEl) return;

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 70;

  function typeLoop() {
    const currentPhrase = phrases[phraseIdx];
    
    if (isDeleting) {
      textEl.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 35;
    } else {
      textEl.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 70;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      typeSpeed = 1800; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typeSpeed = 400; // Pause before typing new phrase
    }

    setTimeout(typeLoop, typeSpeed);
  }

  typeLoop();
}

/* --------------------------------------------------------------------------
   4. Theme Toggle (Dark / Light)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeBtns = document.querySelectorAll('.theme-toggle-btn');
  const html = document.documentElement;
  
  const savedTheme = localStorage.getItem('rk_portfolio_theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.soundFX) window.soundFX.playClick();
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('rk_portfolio_theme', next);
      updateThemeIcons(next);
    });
  });

  function updateThemeIcons(theme) {
    const suns = document.querySelectorAll('.icon-sun');
    const moons = document.querySelectorAll('.icon-moon');
    if (theme === 'dark') {
      suns.forEach(s => s.style.display = 'block');
      moons.forEach(m => m.style.display = 'none');
    } else {
      suns.forEach(s => s.style.display = 'none');
      moons.forEach(m => m.style.display = 'block');
    }
  }
}

/* --------------------------------------------------------------------------
   5. Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const closeBtn = document.querySelector('.drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-nav a');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   6. Scroll Effects & Top Progress Bar
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const progressBar = document.getElementById('scroll-progress');
  const header = document.querySelector('.header');
  const reveals = document.querySelectorAll('.reveal');

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + '%';

    if (header) {
      if (winScroll > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   7. Mouse Cursor Spotlight Glow
   -------------------------------------------------------------------------- */
function initSpotlight() {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* --------------------------------------------------------------------------
   8. 3D Card Tilt Physics
   -------------------------------------------------------------------------- */
function initTiltCards() {
  const tiltElements = document.querySelectorAll('.tilt-card');
  tiltElements.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}
