/**
 * Rohit Kumar - Projects Module (Engineering Case Studies Edition)
 * Formatted as: Problem -> Architecture -> My Contribution -> Technical Challenges -> Defensible Results -> Links
 */

const projectsData = [
  {
    id: 'polymetalz-crm',
    title: 'Polymetalz Enterprise CRM & Mobile Platform',
    repoName: 'crm',
    category: 'fullstack',
    categoryLabel: 'Production Enterprise',
    badge: 'Production Commercial System',
    shortDesc: 'Production CRM ecosystem: Web portal, Flutter Android app, 20+ REST APIs, and an 8-step proprietary credit pricing calculation engine.',
    
    // Structured Case Study Data
    problem: 'Polymetalz needed to replace manual paper records and spreadsheets with a unified, secure system to manage commodity metal inventory, customer credit approvals, and multi-step commercial pricing across both office admins and field operations.',
    
    architectureAscii: `[ Flutter Mobile App ]    [ Web Admin Portal ]
          │                         │
          └────────────┬────────────┘
                       ▼
            [ Flask REST API Gateway ]
          (Phone-OTP & Role-Based Auth)
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
   [ PostgreSQL ]   [ Redis ]    [ n8n Engine ]
   (ACID Records)   (Caching)    (Price Alerts)`,

    contribution: [
      'Served as sole software developer owning the entire lifecycle from database modeling to production deployment.',
      'Developed 20+ REST APIs in Python/Flask covering authentication, inventory ledger, credit checks, and transactions.',
      'Built a cross-platform Android mobile application in Flutter for field sales agents to query customer accounts in real time.',
      'Re-engineered financial calculation workflows into an 8-step credit pricing engine with dynamic commodity rate offsets.',
      'Implemented zero-trust security including Phone-OTP verification, section-level permissions, and automated session expiry.'
    ],

    challenges: [
      'Multi-Step Pricing Accuracy: Required deterministic, zero-rounding-error calculations across metal weight, chemical grade purity, spot rate offsets, and credit tenures.',
      'Mobile-to-Backend Sync: Ensured low-latency response times for field reps on mobile networks by caching frequent customer metadata in Redis.'
    ],

    results: [
      '20+ production REST APIs deployed and active.',
      'Reduced manual price quotation calculation time from 15+ minutes to sub-second automated generation.',
      'Single centralized database serving web and mobile clients with zero transactional conflicts.'
    ],

    techStack: ['Python', 'Flask', 'Flutter (Dart)', 'PostgreSQL', 'Redis', 'Firebase', 'n8n', 'REST APIs'],
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
    id: 'resume-extractor',
    title: 'AI Resume Extractor & Candidate Ranker',
    repoName: 'Resume_Eextractor',
    category: 'aiml',
    categoryLabel: 'AI / ML & NLP',
    badge: 'Live Production App',
    shortDesc: 'Automated document parsing pipeline that extracts candidate attributes via OCR and NLP, scoring resumes against job criteria.',
    
    problem: 'Recruiters spend hours manually screening unstructured resume PDFs and scanned images, leading to slow hiring turnaround and inconsistent keyword evaluation.',
    
    architectureAscii: `[ Resume Upload (PDF / Image) ]
                 │
                 ▼
     [ Tesseract OCR Preprocessor ]
                 │
                 ▼
       [ Spacy NLP Entity Parser ]
      (Extract Skills, Exp, Education)
                 │
                 ▼
    [ Vector Similarity & Ranker ]
                 │
                 ▼
    [ Ranked Candidate Dashboard ]`,

    contribution: [
      'Engineered an end-to-end resume evaluation web application in Python and Flask deployed live on Render.',
      'Integrated Tesseract OCR image preprocessing to extract readable text from scanned images and formatted PDFs.',
      'Implemented regular expressions and NLP entity extraction to identify key attributes (skills, contact info, experience).',
      'Developed cosine similarity scoring against job requirement descriptions to generate ranked candidate match tables.'
    ],

    challenges: [
      'Handling Noisy Scans: Applied thresholding and grayscale filters to improve OCR accuracy on low-resolution image resumes.',
      'Non-Standard Formats: Handled multi-column layouts and varying section headings across diverse resume templates.'
    ],

    results: [
      'Live deployed and functioning at https://resume-eextractor.onrender.com/',
      'Processes and parses typical 2-page resume PDFs in ~1.5–2.5 seconds.',
      'Supports automated batch evaluation and structured score exports.'
    ],

    techStack: ['Python', 'Flask', 'Tesseract OCR', 'NLP (Spacy)', 'Pandas', 'Render Cloud'],
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
    id: 'property-pulse',
    title: 'PropertyPulse — Real Estate Portal',
    repoName: 'property-pulse',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web',
    badge: 'Full-Stack Web Portal',
    shortDesc: 'High-performance property discovery portal with faceted search, geospatial filtering, and agent inquiry pipelines.',
    
    problem: 'Property buyers require fast, filterable discovery tools with verified listings, while listing agents need a simple portal to publish properties and manage customer leads.',
    
    architectureAscii: `[ Next.js / React Frontend ]
                 │
                 ▼ (SSR & Client Fetch)
       [ REST API Routes ]
                 │
         ┌───────┴───────┐
         ▼               ▼
   [ PostgreSQL ]    [ Cloudinary ]
   (Listings / DB)  (Media Storage)`,

    contribution: [
      'Built a full-stack real estate web application utilizing React, Next.js, and PostgreSQL.',
      'Developed faceted search filters by city, property type, price range, and bedroom count with sub-second queries.',
      'Created property submission workflows with multi-image uploads, location coordinates, and lead contact forms.'
    ],

    challenges: [
      'Database Query Optimization: Indexed price and location columns in PostgreSQL to ensure fast search response times.',
      'Responsive UI: Engineered modern glassmorphism layouts optimized for mobile and desktop screens.'
    ],

    results: [
      'Sub-200ms API response time for property search queries.',
      'Fully responsive UI with server-side rendered listing pages for SEO optimization.'
    ],

    techStack: ['TypeScript', 'React.js', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
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
    title: 'E-Commerce & Inventory Management Hub',
    repoName: 'ecommerce-app',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web',
    badge: 'E-Commerce Platform',
    shortDesc: 'Full-stack e-commerce catalog and inventory management system with cart state, checkout workflows, and admin logs.',
    
    problem: 'Small retail merchants need a dependable web storefront with synchronized inventory tracking to prevent overselling.',
    
    architectureAscii: `[ React Web Storefront ]  [ Admin Inventory Panel ]
                 │                    │
                 └─────────┬──────────┘
                           ▼
                 [ Node.js / Express ]
                 (JWT Auth & Validation)
                           │
                           ▼
                  [ Relational / SQL ]
                  (Products, Orders, SKUs)`,

    contribution: [
      'Designed and developed the frontend catalog in React with persistent client-side shopping cart storage.',
      'Built backend REST API endpoints in Node.js/Express for product CRUD, order processing, and stock updates.',
      'Created an administrative dashboard for updating stock levels, categories, and tracking customer orders.'
    ],

    challenges: [
      'Cart State Synchronization: Implemented synchronized state management ensuring prices and stock levels match the database on checkout.',
      'Authentication: Implemented JWT-based session tokens with role protection for admin and customer routes.'
    ],

    results: [
      'Complete end-to-end checkout simulation with real-time stock deduction.',
      'Clean modular REST backend architecture ready for payment gateway integration.'
    ],

    techStack: ['JavaScript', 'React', 'Node.js / Express', 'SQL / MongoDB', 'REST APIs', 'JWT Auth'],
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
    id: 'voice-screenplay',
    title: 'Voice Screenplay AI Studio',
    repoName: 'voice2screenplay',
    category: 'aiml',
    categoryLabel: 'Generative AI & Audio',
    badge: 'GenAI & Audio Project',
    shortDesc: 'Creative writing platform combining speech-to-text dictation, character voice synthesis, and screenplay formatting.',
    
    problem: 'Writers often struggle with the mechanics of standardized script formatting when brainstorming dialogue and scene ideas.',
    
    architectureAscii: `[ Voice Dictation / Prompt ]
                 │
                 ▼
       [ Web Speech-to-Text ]
                 │
                 ▼
     [ LLM Dialogue Formatter ]
                 │
                 ▼
   [ Audio Playback & Export ]`,

    contribution: [
      'Developed an interactive studio interface with real-time voice capture and script formatting tools.',
      'Integrated generative AI API calls to expand scene prompts into formatted character dialogue trees.',
      'Implemented Web Audio synthesis for previewing character voices with varying pitch.'
    ],

    challenges: [
      'Audio Buffer Handling: Managed client-side audio recording and transcription without blocking UI rendering.',
      'Screenplay Grammar: Formatted outputs to industry sluglines, character names, and parentheticals.'
    ],

    results: [
      'Generates industry-standard script format directly from vocal prompts.',
      'Interactive audio dialogue preview for creative brainstorms.'
    ],

    techStack: ['HTML5', 'JavaScript', 'Python', 'Web Audio API', 'Speech-to-Text', 'OpenAI APIs'],
    apiPreview: {
      endpoint: 'POST /api/v1/screenplay/generate-dialogue',
      payload: '{\n  "characters": ["Neo", "Morpheus"],\n  "scene_tone": "Sci-Fi Thriller",\n  "prompt": "The Matrix red pill revelation"\n}',
      response: '{\n  "scene_heading": "INT. NEBUCHADNEZZAR - NIGHT",\n  "dialogue": "MORPHEUS\\nYou take the blue pill, the story ends...",\n  "audio_stream_url": "/stream/audio_hash_948.mp3"\n}'
    },
    github: 'https://github.com/rohit-kr-dev/voice2screenplay',
    demo: '#'
  },
  {
    id: 'whatsapp-integration',
    title: 'WhatsApp Automation & Webhook Integration',
    repoName: 'whatsapp--integration',
    category: 'fullstack',
    categoryLabel: 'Automation & APIs',
    badge: 'API & Webhooks',
    shortDesc: 'Automated notification and customer engagement gateway connecting Meta WhatsApp Cloud API with backend events.',
    
    problem: 'Businesses need automated, reliable WhatsApp notifications for invoice dispatches and customer service alerts without manual intervention.',
    
    architectureAscii: `[ Business Event / Invoice Trigger ]
                 │
                 ▼
    [ Webhook Dispatch Gateway ]
                 │
                 ▼
    [ Meta WhatsApp Cloud API ]
                 │
                 ▼
       [ Customer Handset ]`,

    contribution: [
      'Built a webhook integration service in TypeScript/Node.js to send automated WhatsApp notifications on ERP events.',
      'Implemented webhook signature verification and payload validation to ensure secure message delivery.',
      'Constructed modular notification templates for payment confirmations and order updates.'
    ],

    challenges: [
      'Webhook Reliability: Handled idempotent delivery and retry logic for failed network attempts.',
      'Meta API Compliance: Configured approved template message formats and phone number IDs.'
    ],

    results: [
      'Instant automated dispatch of invoice alerts upon order approval.',
      'Secure webhook verification preventing unauthorized injection.'
    ],

    techStack: ['TypeScript', 'Node.js', 'Express', 'Meta WhatsApp Cloud API', 'Webhooks', 'REST APIs'],
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
    shortDesc: 'Academic workflow management system for tracking syllabus progress, lab session logs, and faculty lesson planning.',
    
    problem: 'University departments require structured compliance records to track syllabus completion against semester schedules for academic audits.',
    
    architectureAscii: `[ Faculty / HOD Portal ]
            │
            ▼
    [ PHP REST Endpoints ]
            │
            ▼
    [ MySQL Database ]
  (Courses, Logs, Audits)`,

    contribution: [
      'Developed a multi-role academic portal for professors, course coordinators, and department heads.',
      'Implemented syllabus milestone tracking with automated completion percentage calculations.',
      'Created audit-ready report generation for department compliance reviews.'
    ],

    challenges: [
      'Role Permissions: Ensured professors could only edit their assigned courses while HODs had department-wide view access.',
      'Schema Design: Modeled relational tables to link courses, semesters, lab batches, and faculty logs.'
    ],

    results: [
      'Replaced manual paper diary entries with structured digital records.',
      'Real-time percentage progress tracking for curriculum milestones.'
    ],

    techStack: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Bootstrap'],
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
    <div class="project-card spotlight-card reveal ${p.badge.includes('Production') ? 'featured-card' : ''}" data-category="${p.category}">
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
        
        <div class="project-actions" style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-top: 16px;">
          ${p.demo && p.demo !== '#' && !p.demo.startsWith('#') ? `
            <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" title="Launch Live Application">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              Live Demo 🚀
            </a>
          ` : ''}
          <button class="btn btn-outline btn-sm" onclick="openProjectModal('${p.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            Case Study &amp; Architecture
          </button>
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="View Source on GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  `).join('');

  // Re-run scroll & spotlight observer
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
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });
}

/* --------------------------------------------------------------------------
   Structured Case Study Modal (Problem -> Architecture -> Contribution -> Results)
   -------------------------------------------------------------------------- */
function initModal() {
  const modalOverlay = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close-btn');

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
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
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBadge = document.getElementById('modal-badge');
  const modalCaseStudyBody = document.getElementById('modal-case-study-body');
  const modalTags = document.getElementById('modal-tags');
  const modalGithub = document.getElementById('modal-github');
  const modalDemo = document.getElementById('modal-demo');

  if (modalTitle) modalTitle.textContent = project.title;
  if (modalBadge) modalBadge.textContent = project.badge;

  if (modalCaseStudyBody) {
    modalCaseStudyBody.innerHTML = `
      <!-- 1. Problem Statement -->
      <div class="modal-section-block">
        <h4 class="modal-section-title">
          <span style="color: var(--accent-cyan);">01.</span> Problem Statement
        </h4>
        <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.95rem;">
          ${project.problem}
        </p>
      </div>

      <!-- 2. System Architecture -->
      <div class="modal-section-block">
        <h4 class="modal-section-title">
          <span style="color: var(--accent-cyan);">02.</span> System Architecture Flow
        </h4>
        <pre class="modal-ascii-architecture">${project.architectureAscii}</pre>
      </div>

      <!-- 3. What Rohit Built -->
      <div class="modal-section-block">
        <h4 class="modal-section-title">
          <span style="color: var(--accent-cyan);">03.</span> My Technical Contribution
        </h4>
        <ul style="list-style: none; padding: 0;">
          ${project.contribution.map(c => `
            <li style="display: flex; gap: 10px; margin-bottom: 8px; color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6;">
              <span style="color: var(--accent-cyan); flex-shrink: 0;">▹</span>
              <span>${c}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- 4. Technical Challenges & Solutions -->
      <div class="modal-section-block">
        <h4 class="modal-section-title">
          <span style="color: var(--accent-cyan);">04.</span> Technical Challenges &amp; Solutions
        </h4>
        <ul style="list-style: none; padding: 0;">
          ${project.challenges.map(ch => `
            <li style="display: flex; gap: 10px; margin-bottom: 8px; color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6;">
              <span style="color: #f59e0b; flex-shrink: 0;">⚡</span>
              <span>${ch}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- 5. Concrete Results & Measurable Impact -->
      <div class="modal-section-block">
        <h4 class="modal-section-title">
          <span style="color: var(--accent-cyan);">05.</span> Defensible Results &amp; Metrics
        </h4>
        <ul style="list-style: none; padding: 0;">
          ${project.results.map(r => `
            <li style="display: flex; gap: 10px; margin-bottom: 8px; color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6;">
              <span style="color: #22c55e; flex-shrink: 0;">✓</span>
              <span>${r}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- 6. Sample Live API Preview -->
      ${project.apiPreview ? `
        <div class="modal-section-block">
          <h4 class="modal-section-title">
            <span style="color: var(--accent-cyan);">06.</span> Sample REST API Contract Preview
          </h4>
          <div style="background: rgba(4, 8, 16, 0.95); border: 1px solid var(--border-glow); border-radius: var(--radius-sm); padding: 14px; font-family: var(--font-mono); font-size: 0.78rem;">
            <div style="display: flex; justify-content: space-between; color: var(--accent-cyan); font-weight: 700; margin-bottom: 8px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 4px;">
              <span>${project.apiPreview.endpoint}</span>
              <span style="color: #22c55e;">200 OK</span>
            </div>
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
        </div>
      ` : ''}
    `;
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

  if (modalOverlay) {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};
