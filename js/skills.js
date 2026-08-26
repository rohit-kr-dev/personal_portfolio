/**
 * Rohit Kumar - Skills Matrix & Expertise Tiers
 * Honest, Defensible Categorization: Strong (Production Proven), Working Knowledge, and Currently Building Expertise
 */

const skillTiersData = [
  {
    tierId: 'strong',
    tierName: 'Core Strengths (Production Proven)',
    badge: 'High Proficiency',
    badgeColor: '#22c55e',
    desc: 'Technologies used daily in commercial production to build scalable systems, APIs, mobile apps, and databases.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
    skills: [
      { name: 'Python', context: 'Primary backend language for business logic, algorithms & APIs' },
      { name: 'Flask', context: 'Built & maintained 20+ production REST APIs at Polymetalz' },
      { name: 'Flutter / Dart', context: 'Developed cross-platform Android CRM production application' },
      { name: 'JavaScript / TypeScript', context: 'Engineered web portals, typed contracts & frontend state' },
      { name: 'React.js', context: 'Component architecture, responsive admin dashboards & state hooks' },
      { name: 'REST APIs Architecture', context: 'Stateless endpoints, token authentication, error contracts' },
      { name: 'PostgreSQL', context: 'Relational schema design, normalization, ACID transactions' }
    ]
  },
  {
    tierId: 'working',
    tierName: 'Working Knowledge (Production & Projects)',
    badge: 'Applied Knowledge',
    badgeColor: '#38bdf8',
    desc: 'Tools and platforms actively utilized in projects, server provisioning, caching layers, and integrations.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    skills: [
      { name: 'Redis', context: 'In-memory session caching and fast state lookup' },
      { name: 'Firebase (Firestore / Auth)', context: 'Real-time document storage & mobile sync' },
      { name: 'Docker', context: 'Containerization, Dockerfile configuration & container workflows' },
      { name: 'AWS (EC2 / S3)', context: 'Instance provisioning, security groups, static assets' },
      { name: 'n8n Automation', context: 'Automated pricing triggers & webhook workflows' },
      { name: 'Git & GitHub', context: 'Version control, branch workflows, pull requests' },
      { name: 'SQL & Database Design', context: 'Complex queries, indexes & relational joins' },
      { name: 'HTML5 & CSS3', context: 'Responsive layouts, Flexbox/Grid, accessible UI' }
    ]
  },
  {
    tierId: 'learning',
    tierName: 'Currently Building Expertise (Active Focus)',
    badge: 'In Progress',
    badgeColor: '#f59e0b',
    desc: 'Actively studying and building hands-on projects to expand cloud architecture and intelligent system capabilities.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    skills: [
      { name: 'AWS Solutions Architecture', context: 'High availability, VPCs, IAM policies & cloud patterns' },
      { name: 'DevOps & CI/CD Pipelines', context: 'Automated testing, GitHub Actions & build pipelines' },
      { name: 'Machine Learning & NLP', context: 'Document parsing, cosine similarity scoring & Spacy' },
      { name: 'LLMs & Prompt Engineering', context: 'OpenAI API integration & generative workflows' },
      { name: 'Meta WhatsApp Cloud API', context: 'Webhook listener engines & automated business messaging' }
    ]
  }
];

let activeTierFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  renderSkillTiers();
  initTierTabs();
  initTierSearch();
});

function renderSkillTiers(searchTerm = '') {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const term = searchTerm.toLowerCase().trim();

  const filteredTiers = activeTierFilter === 'all'
    ? skillTiersData
    : skillTiersData.filter(t => t.tierId === activeTierFilter);

  container.innerHTML = filteredTiers.map(tier => {
    const matchingSkills = tier.skills.filter(s =>
      !term || s.name.toLowerCase().includes(term) || s.context.toLowerCase().includes(term) || tier.tierName.toLowerCase().includes(term)
    );

    if (term && matchingSkills.length === 0) return '';

    return `
      <div class="skill-tier-card spotlight-card reveal" style="border-top: 3px solid ${tier.badgeColor};">
        <div class="skill-tier-header">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div class="skill-tier-icon" style="color: ${tier.badgeColor};">
              ${tier.icon}
            </div>
            <div>
              <h3 class="skill-tier-title">${tier.tierName}</h3>
              <p class="skill-tier-desc">${tier.desc}</p>
            </div>
          </div>
          <span class="skill-tier-badge" style="color: ${tier.badgeColor}; background: ${tier.badgeColor}18; border-color: ${tier.badgeColor}40;">
            ${tier.badge}
          </span>
        </div>

        <div class="skill-tier-grid">
          ${matchingSkills.map(skill => `
            <div class="skill-item-box" title="${skill.context}">
              <div class="skill-item-name">
                <span class="skill-dot" style="background: ${tier.badgeColor};"></span>
                <strong>${skill.name}</strong>
              </div>
              <div class="skill-item-context">${skill.context}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).filter(Boolean).join('');

  // Re-observe scroll animations and spotlight effects
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

function initTierTabs() {
  const tabBtns = document.querySelectorAll('.skill-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTierFilter = btn.getAttribute('data-skill-cat') || 'all';
      renderSkillTiers(document.getElementById('skills-search')?.value || '');
    });
  });
}

function initTierSearch() {
  const searchInput = document.getElementById('skills-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    renderSkillTiers(e.target.value);
  });
}
