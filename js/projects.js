/**
 * Rohit Kumar - Projects Module (Elite Edition)
 * GitHub Repositories from https://github.com/rohit-kr-dev + Live Production Deployments
 */

const projectsData = [
  {
    id: 'resume-extractor',
    title: 'AI Resume Extractor & Ranker',
    repoName: 'Resume_Eextractor',
    category: 'aiml',
    categoryLabel: 'AI / ML & NLP',
    badge: 'Live Production App',
    shortDesc: 'Automated AI pipeline to parse, extract semantic skill vectors, and score candidate resumes against job criteria.',
    fullDesc: 'Engineered an intelligent talent evaluation platform using Python, Flask, Tesseract OCR, and NLP techniques for structured document extraction. The system parses PDF and image resumes, standardizes candidate attributes, and computes cosine similarity scores against job requirements with candidate ranking analytics.',
    techStack: ['Python', 'Flask', 'Tesseract OCR', 'NLP (Spacy)', 'Pandas', 'Render Deployment'],
    highlights: [
      'Live deployed web application handling multi-format resume uploads & parsing',
      'Automated optical character recognition (OCR) for scanned documents and vector PDFs',
      'Extracted structured entities (skills, experience, education) using regex and NLP pipelines',
      'Implemented weighted scoring algorithms for automated candidate ranking'
    ],
    apiPreview: {
      endpoint: 'POST https://resume-eextractor.onrender.com/api/v1/resume/parse-and-rank',
      payload: '{\n  "job_criteria": "Python, Flask, PostgreSQL, Docker",\n  "file": "candidate_cv.pdf"\n}',
      response: '{\n  "status": "success",\n  "similarity_score": 0.94,\n  "matched_skills": ["Python", "Flask", "PostgreSQL", "Docker"],\n  "experience_years": 3.5,\n  "rank": 1\n}'
    },
    github: 'https://github.com/rohit-kr-dev/Resume_Eextractor',
    altRepo: 'https://github.com/rohit-kr-dev/multiple_resume_extractor',
    demo: 'https://resume-eextractor.onrender.com/'
  },
  {
    id: 'voice-screenplay',
    title: 'Voice Screenplay AI Studio',
    repoName: 'voice2screenplay',
    category: 'aiml',
    categoryLabel: 'Generative AI & Audio',
    badge: 'Speech & GenAI',
    shortDesc: 'AI-driven screenplay generator with multi-speaker voice synthesis, real-time audio transcription, and script formatting.',
    fullDesc: 'Developed a generative creative suite that transforms prompts and vocal dictations into standardized cinematic screenplays. Features voice-driven character dialog generation, speech-to-text transcription, and contextual scene continuation.',
    techStack: ['HTML5', 'JavaScript', 'Python', 'Web Audio API', 'Speech-to-Text', 'OpenAI APIs'],
    highlights: [
      'Multi-character voice synthesis with dynamic pitch and emotional tone controls',
      'Real-time voice dictation with automatic screenplay formatting and scene headers',
      'Streaming generative script continuations and character dialogue trees',
      'Export support for standard screenplay formats and interactive audio playback'
    ],
    apiPreview: {
      endpoint: 'POST /api/v1/screenplay/generate-dialogue',
      payload: '{\n  "characters": ["Neo", "Morpheus"],\n  "scene_tone": "Sci-Fi Thriller",\n  "prompt": "The Matrix red pill revelation"\n}',
      response: '{\n  "scene_heading": "INT. NEBUCHADNEZZAR - NIGHT",\n  "dialogue": "MORPHEUS\\nYou take the blue pill, the story ends...",\n  "audio_stream_url": "/stream/audio_hash_948.mp3"\n}'
    },
    github: 'https://github.com/rohit-kr-dev/voice2screenplay',
    demo: '#'
  },
  {
    id: 'property-pulse',
    title: 'PropertyPulse — Real Estate Platform',
    repoName: 'property-pulse',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web',
    badge: 'Enterprise Platform',
    shortDesc: 'High-performance property discovery and agent management portal with spatial filtering, real-time chat, and lead pipelines.',
    fullDesc: 'Architected a responsive full-stack real estate web application featuring interactive property browsing, advanced faceted search (location, price, amenities), agent scheduling, and customer inquiry management powered by TypeScript, React/Next.js, and PostgreSQL.',
    techStack: ['TypeScript', 'React.js', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
    highlights: [
      'Interactive geo-spatial map exploration with custom pins and clustered markers',
      'Faceted search with sub-second SQL queries and Redis caching for hot properties',
      'Secure agent portal for property uploads, image management, and lead tracking',
      'Responsive design with optimized Core Web Vitals and SSR speed'
    ],
    apiPreview: {
      endpoint: 'GET /api/v1/properties/search?city=Bengaluru&type=Villa',
      payload: '{\n  "filters": {\n    "min_price": 5000000,\n    "bedrooms": 3\n  }\n}',
      response: '{\n  "total": 42,\n  "cached": true,\n  "latency_ms": 18,\n  "data": [{ "id": 101, "title": "Skyline Villa", "price": 8500000 }]\n}'
    },
    github: 'https://github.com/rohit-kr-dev/property-pulse',
    altRepo: 'https://github.com/rohit-kr-dev/real-estate-react-app',
    demo: '#'
  },
  {
    id: 'ecommerce-app',
    title: 'E-Commerce & Inventory Hub',
    repoName: 'ecommerce-app',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & Cloud',
    badge: 'Production Ready',
    shortDesc: 'Full-stack e-commerce catalog and inventory management system with cart management, order workflows, and payment gateway hooks.',
    fullDesc: 'Designed and built a modular e-commerce web platform featuring dynamic product catalogs, category filtering, persistent shopping carts, user checkout workflows, and administrative inventory replenishment controls.',
    techStack: ['JavaScript', 'React', 'Node.js / Express', 'MongoDB / SQL', 'REST APIs', 'JWT Auth'],
    highlights: [
      'Responsive product grid with live stock status and instant price updates',
      'Secure checkout pipeline with cart state persistence and order tracking',
      'Admin dashboard for inventory management, SKU categorization, and sales logs',
      'Modular REST backend architecture designed for seamless payment integration'
    ],
    apiPreview: {
      endpoint: 'POST /api/v1/orders/checkout',
      payload: '{\n  "cart_id": "cart_9918",\n  "payment_method": "UPI / Card",\n  "currency": "INR"\n}',
      response: '{\n  "order_id": "ORD-2026-8812",\n  "status": "confirmed",\n  "inventory_updated": true,\n  "invoice_url": "/invoices/8812.pdf"\n}'
    },
    github: 'https://github.com/rohit-kr-dev/ecommerce-app',
    altRepo: 'https://github.com/rohit-kr-dev/Poly-exhibition',
    demo: '#'
  },
  {
    id: 'polymetalz-crm',
    title: 'Polymetalz Enterprise CRM & Mobile',
    repoName: 'crm',
    category: 'fullstack',
    categoryLabel: 'Production Enterprise',
    badge: 'Production Flagship',
    shortDesc: 'Complete CRM ecosystem: Web portal, Flutter Android app, 20+ REST APIs, and an 8-step proprietary credit pricing calculation engine.',
    fullDesc: 'As the sole software engineer at Polymetalz Pvt. Ltd., architected and deployed the company\'s core business operating system. Built the mobile Flutter application, Python/Flask REST backends, Redis caching, phone-OTP security, midnight auto-logout, and automated n8n webhook pipelines.',
    techStack: ['TypeScript / Python', 'Flutter (Dart)', 'PostgreSQL', 'Firebase', 'Redis', 'n8n'],
    highlights: [
      'Sole developer owning the complete software lifecycle from design to cloud deployment',
      'Engineered an 8-step per-kilogram credit calculation pricing engine (epr_calculations)',
      'Designed zero-trust security: Phone-OTP, RBAC, section permissions, midnight auto-logout',
      'Integrated Redis caching + Firebase Realtime synchronization across 20+ endpoints'
    ],
    apiPreview: {
      endpoint: 'POST /api/v1/crm/pricing/calculate-8step',
      payload: '{\n  "weight_kg": 250,\n  "grade_purity": 0.92,\n  "credit_days": 30,\n  "spot_rate": 840\n}',
      response: '{\n  "step1_base_weight": 250,\n  "step2_pure_metal_val": 193200,\n  "step5_credit_interest": 1906.50,\n  "step7_gst_18pct": 34800.75,\n  "final_invoice_inr": 228185.00\n}'
    },
    github: 'https://github.com/rohit-kr-dev/crm',
    altRepo: 'https://github.com/rohit-kr-dev/loginapp',
    demo: '#architecture'
  },
  {
    id: 'whatsapp-integration',
    title: 'WhatsApp Automation & Webhook Integration',
    repoName: 'whatsapp--integration',
    category: 'fullstack',
    categoryLabel: 'Automation & APIs',
    badge: 'Webhook Gateway',
    shortDesc: 'Automated notification and customer engagement gateway integrating WhatsApp Cloud API with business backend event queues.',
    fullDesc: 'Engineered an asynchronous webhook integration service in TypeScript to dispatch automated order notifications, invoice alerts, and customer support triggers directly via WhatsApp Cloud API.',
    techStack: ['TypeScript', 'Node.js', 'Express', 'WhatsApp Cloud API', 'Webhooks', 'REST APIs'],
    highlights: [
      'Webhook listener handling incoming customer replies with automated routing',
      'Templated automated notifications for ERP invoice dispatches and payment reminders',
      'Robust retry logic and signature verification for secure webhook delivery'
    ],
    apiPreview: {
      endpoint: 'POST /api/v1/webhook/whatsapp/event',
      payload: '{\n  "event": "invoice_generated",\n  "phone": "+919876543210",\n  "invoice_num": "INV-2026-04"\n}',
      response: '{\n  "message_id": "wamid.HBgLMOTE3OTc1MTk...",\n  "delivery_status": "dispatched",\n  "timestamp": 1787391200\n}'
    },
    github: 'https://github.com/rohit-kr-dev/whatsapp--integration',
    demo: '#'
  },
  {
    id: 'course-diary',
    title: 'Course Coordinator\'s Diary',
    repoName: 'course_coordinator_dairy',
    category: 'cloud',
    categoryLabel: 'Academic Systems',
    badge: 'Academic Management',
    shortDesc: 'Departmental workflow and academic scheduling management platform for syllabus tracking and faculty lesson planning.',
    fullDesc: 'Developed a comprehensive academic record system for university department heads and faculty to monitor curriculum pacing, exam question banks, lab session logs, and student performance metrics in compliance with academic accreditation standards.',
    techStack: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Bootstrap'],
    highlights: [
      'Automated syllabus completion progress tracking against semester deadlines',
      'Role-based dashboard for Course Coordinators, Professors, and HODs',
      'Exportable audit reports and exam question coverage analytics'
    ],
    apiPreview: {
      endpoint: 'GET /api/academic/syllabus/progress?course_id=CS801',
      payload: '{\n  "semester": 8,\n  "academic_year": "2024-2025"\n}',
      response: '{\n  "course": "Cloud Architectures & DevOps",\n  "syllabus_completed_pct": 92,\n  "labs_conducted": 12,\n  "audit_status": "APPROVED"\n}'
    },
    github: 'https://github.com/rohit-kr-dev/course_coordinator_dairy',
    demo: '#'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  initProjectFilters();
  initModal();
});

function renderProjects(filter) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => `
    <div class="project-card spotlight-card reveal ${p.badge.includes('Flagship') ? 'featured-card' : ''}" data-category="${p.category}">
      <div class="project-header-banner">
        <div class="banner-bg-icon">💻</div>
        <span class="project-category-tag">${p.categoryLabel}</span>
        <span class="project-card-badge">${p.badge}</span>
      </div>
      <div class="project-body">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <h3 class="project-title" style="margin-bottom: 0;">
            ${p.title}
          </h3>
        </div>
        
        <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--accent-cyan); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          <span>github.com/rohit-kr-dev/${p.repoName}</span>
        </div>

        <p class="project-desc">${p.shortDesc}</p>
        
        <div class="project-tags">
          ${p.techStack.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        
        <div class="project-actions" style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
          ${p.demo && p.demo !== '#' && !p.demo.startsWith('#') ? `
            <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" title="Launch Live App (${p.demo})">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              Live Demo 🚀
            </a>
          ` : ''}
          <button class="btn btn-outline btn-sm" onclick="openProjectModal('${p.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            Deep Dive &amp; API
          </button>
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="View Source on GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  `).join('');

  // Re-run scroll & spotlight observer on new elements
  const reveals = container.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  container.querySelectorAll('.spotlight-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.soundFX) window.soundFX.playClick();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });
}

/* --------------------------------------------------------------------------
   Interactive Modal Deep Dive & Simulated Live API Payload Preview
   -------------------------------------------------------------------------- */
function initModal() {
  const modalOverlay = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close-btn');

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      if (window.soundFX) window.soundFX.playClick();
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

window.openProjectModal = function(projectId) {
  if (window.soundFX) window.soundFX.playStepChime();
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBadge = document.getElementById('modal-badge');
  const modalDesc = document.getElementById('modal-desc');
  const modalHighlights = document.getElementById('modal-highlights');
  const modalTags = document.getElementById('modal-tags');
  const modalGithub = document.getElementById('modal-github');
  const modalDemo = document.getElementById('modal-demo');
  const modalApiBox = document.getElementById('modal-api-playground');

  if (modalTitle) modalTitle.textContent = project.title;
  if (modalBadge) modalBadge.textContent = project.badge;
  if (modalDesc) modalDesc.textContent = project.fullDesc;
  
  if (modalHighlights) {
    modalHighlights.innerHTML = project.highlights.map(h => `
      <li style="display: flex; gap: 10px; margin-bottom: 8px; color: var(--text-secondary); font-size: 0.92rem;">
        <span style="color: var(--accent-cyan);">▹</span> ${h}
      </li>
    `).join('');
  }

  if (modalTags) {
    modalTags.innerHTML = project.techStack.map(t => `
      <span class="project-tag" style="font-size: 0.8rem; padding: 4px 10px;">${t}</span>
    `).join('');
  }

  if (modalGithub) {
    modalGithub.setAttribute('href', project.github);
  }

  if (modalDemo) {
    if (project.demo && project.demo !== '#' && !project.demo.startsWith('#')) {
      modalDemo.style.display = 'inline-flex';
      modalDemo.setAttribute('href', project.demo);
    } else {
      modalDemo.style.display = 'none';
    }
  }

  if (modalApiBox && project.apiPreview) {
    modalApiBox.innerHTML = `
      <div style="background: rgba(4, 8, 16, 0.95); border: 1px solid var(--border-glow); border-radius: var(--radius-sm); padding: 14px; font-family: var(--font-mono); font-size: 0.78rem; margin-top: 14px;">
        <div style="display: flex; justify-content: space-between; color: var(--accent-cyan); font-weight: 700; margin-bottom: 8px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 4px;">
          <span>⚡ Live REST API Contract Preview</span>
          <span style="color: #22c55e;">200 OK</span>
        </div>
        <div style="color: #38bdf8; margin-bottom: 4px;">${project.apiPreview.endpoint}</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div>
            <div style="color: var(--text-muted); font-size: 0.72rem; margin-bottom: 2px;">REQUEST PAYLOAD:</div>
            <pre style="margin: 0; color: #a5f3fc; white-space: pre-wrap;">${project.apiPreview.payload}</pre>
          </div>
          <div>
            <div style="color: var(--text-muted); font-size: 0.72rem; margin-bottom: 2px;">RESPONSE JSON:</div>
            <pre style="margin: 0; color: #86efac; white-space: pre-wrap;">${project.apiPreview.response}</pre>
          </div>
        </div>
      </div>
    `;
  }

  if (modalOverlay) {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};
