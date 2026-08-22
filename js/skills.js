/**
 * Rohit Kumar - Skills Matrix Module
 * Organized Tech Stack Categories, Tab Filtering & Real-World Production Notes
 */

const skillsData = [
  {
    category: 'frontend',
    categoryName: 'Frontend & Mobile',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    skills: [
      { name: 'React.js', note: 'Component architecture, Hooks, Context' },
      { name: 'Next.js', note: 'SSR, SEO Optimization, API Routes' },
      { name: 'Flutter (Dart)', note: 'Cross-platform Android CRM production app' },
      { name: 'TypeScript', note: 'Strongly typed interfaces & contracts' },
      { name: 'JavaScript (ES6+)', note: 'Async/Await, DOM manipulation, APIs' },
      { name: 'Tailwind CSS', note: 'Utility-first responsive layouts' },
      { name: 'HTML5 & CSS3', note: 'Semantic markup, Flexbox/Grid, Glassmorphism' }
    ]
  },
  {
    category: 'backend',
    categoryName: 'Backend & APIs',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
    skills: [
      { name: 'Python', note: 'Primary backend language for APIs & algorithms' },
      { name: 'FastAPI', note: 'High-throughput async microservices & Swagger' },
      { name: 'Flask', note: 'Built 20+ production REST APIs at Polymetalz' },
      { name: 'REST APIs Architecture', note: 'Stateless endpoints, standard HTTP status' },
      { name: 'JWT & Phone-OTP Auth', note: 'Zero-trust role-based security' },
      { name: 'Node.js', note: 'Microservices & runtime automation' },
      { name: 'Pydantic & SQLAlchemy', note: 'Data validation and ORM queries' }
    ]
  },
  {
    category: 'databases',
    categoryName: 'Databases & Caching',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    skills: [
      { name: 'PostgreSQL', note: 'Relational data modeling, indexing, ACID transactions' },
      { name: 'MySQL', note: 'Schema design & normalization' },
      { name: 'Redis', note: 'In-memory session cache & fast state lookups' },
      { name: 'Firebase Firestore', note: 'Real-time document storage & security rules' },
      { name: 'Firebase Realtime DB', note: 'Live bidirectional sync for mobile app' }
    ]
  },
  {
    category: 'aiml',
    categoryName: 'AI / ML & Automation',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    skills: [
      { name: 'Natural Language Processing (NLP)', note: 'Cosine similarity, entity extraction, ranking' },
      { name: 'OCR (Tesseract)', note: 'Automated resume & document scanning pipeline' },
      { name: 'Pandas & NumPy', note: 'Data preprocessing, cleaning & analytics' },
      { name: 'n8n Workflow Automation', note: 'Automated pricing triggers & notifications' },
      { name: 'OpenAI APIs Integration', note: 'Prompt engineering & streaming completions' }
    ]
  },
  {
    category: 'cloud',
    categoryName: 'Cloud & DevOps',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    skills: [
      { name: 'Docker', note: 'Multi-stage containerization & Docker Compose' },
      { name: 'AWS EC2 & S3', note: 'Server provisioning, storage, IAM roles' },
      { name: 'Firebase Hosting & Netlify', note: 'Production static & SPA web hosting' },
      { name: 'CI/CD Pipelines', note: 'Automated test & deployment integration' },
      { name: 'Linux / Bash', note: 'Server configuration & shell scripting' }
    ]
  },
  {
    category: 'tools',
    categoryName: 'Tools & Practices',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    skills: [
      { name: 'Git & GitHub', note: 'Branching, PRs, code reviews' },
      { name: 'Postman', note: 'API testing, collection mockups & verification' },
      { name: 'Power BI & Tableau', note: 'Interactive analytics dashboards' },
      { name: 'Agile / Scrum', note: 'Sprint planning & feature delivery' },
      { name: 'Full SDLC Management', note: 'End-to-end software ownership' }
    ]
  }
];

let activeSkillCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  initSkillTabs();
  initSkillsSearch();
});

function renderSkills(searchTerm = '') {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const term = searchTerm.toLowerCase().trim();

  const filteredCategories = activeSkillCategory === 'all'
    ? skillsData
    : skillsData.filter(c => c.category === activeSkillCategory);

  container.innerHTML = filteredCategories.map(cat => {
    const matchingSkills = cat.skills.filter(s => 
      !term || s.name.toLowerCase().includes(term) || s.note.toLowerCase().includes(term) || cat.categoryName.toLowerCase().includes(term)
    );

    if (term && matchingSkills.length === 0) return '';

    return `
      <div class="skill-category-card reveal">
        <div class="skill-category-header">
          <div class="skill-cat-icon">
            ${cat.icon}
          </div>
          <h3 class="skill-cat-title">${cat.categoryName}</h3>
        </div>
        <div class="skill-pills-wrap">
          ${matchingSkills.map(skill => `
            <div class="skill-pill" title="${skill.note}">
              <span class="pill-dot"></span>
              <span>${skill.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).filter(Boolean).join('');

  const reveals = container.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
}

function initSkillTabs() {
  const tabBtns = document.querySelectorAll('.skill-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSkillCategory = btn.getAttribute('data-skill-cat') || 'all';
      renderSkills(document.getElementById('skills-search')?.value || '');
    });
  });
}

function initSkillsSearch() {
  const searchInput = document.getElementById('skills-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    renderSkills(e.target.value);
  });
}
