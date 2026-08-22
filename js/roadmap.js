/**
 * Rohit Kumar - Gamified Walking Career Roadmap (Elite Edition)
 * Step-by-Step Interactive Quest with Audio Feedback, Unlocked Badges & Auto-Tour
 */

const roadmapCheckpoints = [
  {
    id: 1,
    level: 'LEVEL 1: THE FOUNDATION',
    year: '2021 – 2025',
    title: 'B.E. in Information Science',
    org: 'Yenepoya Institute of Technology',
    status: 'COMPLETED',
    icon: '🎓',
    xp: '+1,500 XP',
    summary: 'Embarked on engineering degree, mastering core Data Structures, Algorithms, DBMS, Operating Systems, and Object-Oriented Architecture.',
    unlockedSkills: ['C/C++', 'Java', 'Data Structures', 'Database Design', 'Algorithms', 'Software Engineering'],
    milestone: 'Graduated with strong technical foundation in Information Science & Software Design.'
  },
  {
    id: 2,
    level: 'LEVEL 2: FIRST PRODUCTION FEATURES',
    year: 'May 2023 – Jun 2023',
    title: 'Full Stack Intern',
    org: 'Grow4Tech',
    status: 'COMPLETED',
    icon: '💻',
    xp: '+2,000 XP',
    summary: 'Stepped into real-world software engineering, crafting responsive frontend UI components and backend REST routing with Flask and SQL.',
    unlockedSkills: ['HTML5/CSS3', 'JavaScript', 'Python (Flask)', 'SQL Queries', 'Form Validations'],
    milestone: 'Shipped production web components and mastered frontend-backend integration basics.'
  },
  {
    id: 3,
    level: 'LEVEL 3: AI & SCRIPTING QUEST',
    year: '2023',
    title: 'AI & Software Development Intern',
    org: 'AiROBOSOFT',
    status: 'COMPLETED',
    icon: '🤖',
    xp: '+2,500 XP',
    summary: 'Explored artificial intelligence, data manipulation algorithms, automated script execution, and API testing pipelines in Python.',
    unlockedSkills: ['Python Automation', 'AI Fundamentals', 'API Testing', 'Data Scripting'],
    milestone: 'Applied algorithmic automation to eliminate repetitive workflows.'
  },
  {
    id: 4,
    level: 'LEVEL 4: CLOUD & DEVOPS MASTERY',
    year: 'Sep 2024 – Nov 2024',
    title: 'AWS DevOps Intern',
    org: 'NSDC (National Skill Development Corp)',
    status: 'COMPLETED',
    icon: '☁️',
    xp: '+3,500 XP',
    summary: 'Hands-on cloud infrastructure: Provisioned AWS EC2 instances, managed S3 buckets, configured security policies, and deployed Docker containers.',
    unlockedSkills: ['AWS EC2', 'AWS S3', 'Docker', 'Linux/Bash', 'CI/CD Pipelines', 'Cloud Security'],
    milestone: 'Mastered containerized cloud deployments and scalable infrastructure architecture.'
  },
  {
    id: 5,
    level: 'LEVEL 5: ADVANCED SYSTEM DESIGN',
    year: '2024',
    title: 'Software Development Trainee',
    org: 'Genesis Training',
    status: 'COMPLETED',
    icon: '⚡',
    xp: '+3,000 XP',
    summary: 'Intensive deep-dive into scalable full-stack application architecture, clean code principles, database indexing, and microservices design.',
    unlockedSkills: ['Microservices', 'Clean Architecture', 'Database Optimization', 'System Design'],
    milestone: 'Advanced software design capabilities for high-throughput enterprise systems.'
  },
  {
    id: 6,
    level: 'LEVEL 6: DATA SCIENCE & DASHBOARDS',
    year: 'Mar 2025 – Jun 2025',
    title: 'Data Science Intern',
    org: 'Gyaanova',
    status: 'COMPLETED',
    icon: '📊',
    xp: '+4,000 XP',
    summary: 'Cleaned, preprocessed, and engineered complex datasets using Pandas. Built executive Power BI and Tableau dashboards for strategic business reporting.',
    unlockedSkills: ['Pandas', 'Power BI Dashboards', 'Tableau', 'Exploratory Data Analysis', 'Business Intelligence'],
    milestone: 'Delivered executive-ready interactive dashboards driving strategic decision-making.'
  },
  {
    id: 7,
    level: 'LEVEL 7: SOLE DEVELOPER @ ENTERPRISE',
    year: 'Aug 2025 – Present',
    title: 'Software Developer (Sole Developer)',
    org: 'Polymetalz Pvt. Ltd.',
    status: 'ACTIVE CURRENT LEVEL',
    icon: '👑',
    xp: '+10,000 XP [MAX CURRENT]',
    summary: 'Architected and built the entire digital ERP/CRM ecosystem: Web portal, Flutter Android app, 20+ Python REST APIs, Redis caching, 8-step credit pricing engine, and n8n webhook automations.',
    unlockedSkills: ['FastAPI/Flask', 'Flutter (Dart)', 'PostgreSQL', 'Redis Cache', 'Phone-OTP / RBAC', 'n8n Automation', '8-Step Pricing Engine'],
    milestone: '100% technical ownership across the complete production SDLC from design to cloud deployment.'
  },
  {
    id: 8,
    level: 'LEVEL 8: THE NEXT HORIZON',
    year: '2026 & Beyond',
    title: 'Software Engineer / Full-Stack & Cloud Specialist',
    org: 'Your Next High-Impact Engineering Team',
    status: 'READY TO UNLOCK',
    icon: '🚀',
    xp: 'UNLIMITED XP',
    summary: 'Ready to bring 1+ year of high-velocity production full-stack engineering, cloud architecture, and end-to-end ownership to scale ambitious software products.',
    unlockedSkills: ['Full-Stack Scale', 'Cloud Architectures', 'High-Throughput APIs', 'AI/ML Systems', 'Team Leadership'],
    milestone: 'Let\'s collaborate! Open to Full-Stack, Backend, and Cloud Engineering opportunities.'
  }
];

let currentCheckpointIndex = 6; // Default to Level 7 (Polymetalz - current active)
let isAutoWalking = false;
let autoWalkTimer = null;

document.addEventListener('DOMContentLoaded', () => {
  initRoadmap();
});

function initRoadmap() {
  renderRoadmapCheckpoints();
  renderActiveCheckpoint(currentCheckpointIndex);
  initRoadmapControls();
}

function renderRoadmapCheckpoints() {
  const pathTrack = document.getElementById('roadmap-path-track');
  if (!pathTrack) return;

  pathTrack.innerHTML = roadmapCheckpoints.map((cp, idx) => `
    <div class="roadmap-checkpoint-node ${idx === currentCheckpointIndex ? 'active' : ''} ${idx < currentCheckpointIndex ? 'completed' : ''}" 
         data-index="${idx}" 
         title="${cp.level}: ${cp.title}">
      <div class="checkpoint-pin">
        <span class="checkpoint-icon">${cp.icon}</span>
        <span class="checkpoint-pulse"></span>
      </div>
      <div class="checkpoint-label">
        <span class="checkpoint-step-num">Step ${cp.id}</span>
        <span class="checkpoint-step-title">${cp.title}</span>
      </div>
    </div>
  `).join('');

  // Add click events to checkpoint nodes
  const nodes = pathTrack.querySelectorAll('.roadmap-checkpoint-node');
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      stopAutoWalk();
      const index = parseInt(node.getAttribute('data-index'), 10);
      goToStep(index);
    });
  });

  updateWalkingAvatarPosition();
}

function renderActiveCheckpoint(index) {
  const cp = roadmapCheckpoints[index];
  if (!cp) return;

  const cardContainer = document.getElementById('roadmap-active-card');
  if (!cardContainer) return;

  cardContainer.innerHTML = `
    <div class="roadmap-detail-box spotlight-card reveal active">
      <div class="roadmap-detail-header">
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
          <span class="roadmap-level-tag">${cp.level}</span>
          <span class="roadmap-status-badge ${cp.status.includes('ACTIVE') ? 'status-live' : (cp.status.includes('READY') ? 'status-next' : '')}">${cp.status}</span>
        </div>
        <span class="roadmap-xp-badge">${cp.xp}</span>
      </div>

      <div class="roadmap-detail-body">
        <div class="roadmap-role-row">
          <div class="roadmap-main-icon">${cp.icon}</div>
          <div>
            <h3 class="roadmap-role-heading">${cp.title}</h3>
            <div class="roadmap-org-text">${cp.org} • <span style="color: var(--accent-cyan); font-family: var(--font-mono);">${cp.year}</span></div>
          </div>
        </div>

        <p class="roadmap-summary-p">${cp.summary}</p>

        <div class="roadmap-milestone-banner">
          <strong>🏆 Milestone Achieved:</strong> ${cp.milestone}
        </div>

        <div style="margin-top: 18px;">
          <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 8px;">
            ⚡ Tech Skills Unlocked at this Step:
          </div>
          <div class="project-tags">
            ${cp.unlockedSkills.map(s => `<span class="project-tag" style="font-size: 0.8rem; padding: 4px 10px;">${s}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Update button states
  const prevBtn = document.getElementById('roadmap-prev-btn');
  const nextBtn = document.getElementById('roadmap-next-btn');
  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) nextBtn.disabled = index === roadmapCheckpoints.length - 1;

  // Re-run spotlight on newly rendered card
  const newCard = cardContainer.querySelector('.spotlight-card');
  if (newCard) {
    newCard.addEventListener('mousemove', (e) => {
      const rect = newCard.getBoundingClientRect();
      newCard.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      newCard.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  }
}

function updateWalkingAvatarPosition() {
  const nodes = document.querySelectorAll('.roadmap-checkpoint-node');
  const walkerAvatar = document.getElementById('roadmap-walker-avatar');
  const progressLine = document.getElementById('roadmap-progress-fill');

  nodes.forEach((n, idx) => {
    n.classList.remove('active', 'completed');
    if (idx < currentCheckpointIndex) {
      n.classList.add('completed');
    } else if (idx === currentCheckpointIndex) {
      n.classList.add('active');
    }
  });

  if (progressLine) {
    const total = roadmapCheckpoints.length - 1;
    const pct = (currentCheckpointIndex / total) * 100;
    progressLine.style.width = `${pct}%`;
  }

  const activeNode = nodes[currentCheckpointIndex];
  if (activeNode && walkerAvatar) {
    const offsetLeft = activeNode.offsetLeft + (activeNode.offsetWidth / 2);
    walkerAvatar.style.left = `${offsetLeft}px`;
    const avatarBadge = walkerAvatar.querySelector('.walker-badge span');
    if (avatarBadge) {
      avatarBadge.textContent = `🚶‍♂️ Rohit Step ${currentCheckpointIndex + 1}`;
    }
  }
}

function goToStep(index) {
  if (index < 0 || index >= roadmapCheckpoints.length) return;
  currentCheckpointIndex = index;
  if (window.soundFX) window.soundFX.playStepChime();
  renderActiveCheckpoint(currentCheckpointIndex);
  updateWalkingAvatarPosition();
}

function initRoadmapControls() {
  const prevBtn = document.getElementById('roadmap-prev-btn');
  const nextBtn = document.getElementById('roadmap-next-btn');
  const autoBtn = document.getElementById('roadmap-autowalk-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopAutoWalk();
      goToStep(currentCheckpointIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopAutoWalk();
      goToStep(currentCheckpointIndex + 1);
    });
  }

  if (autoBtn) {
    autoBtn.addEventListener('click', () => {
      if (isAutoWalking) {
        stopAutoWalk();
      } else {
        startAutoWalk();
      }
    });
  }
}

function startAutoWalk() {
  isAutoWalking = true;
  if (window.soundFX) window.soundFX.playChime();
  const autoBtn = document.getElementById('roadmap-autowalk-btn');
  if (autoBtn) {
    autoBtn.classList.add('active');
    autoBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
      Pause Walk
    `;
  }

  // Loop through checkpoints every 2.4 seconds
  autoWalkTimer = setInterval(() => {
    let nextIdx = (currentCheckpointIndex + 1) % roadmapCheckpoints.length;
    goToStep(nextIdx);
  }, 2400);
}

function stopAutoWalk() {
  isAutoWalking = false;
  clearInterval(autoWalkTimer);
  const autoBtn = document.getElementById('roadmap-autowalk-btn');
  if (autoBtn) {
    autoBtn.classList.remove('active');
    autoBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      Auto-Walk Journey
    `;
  }
}
