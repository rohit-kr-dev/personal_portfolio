/**
 * Rohit Kumar - Interactive CLI Terminal 3.0
 * Recruiter & Developer Terminal with Command History, Matrix Mode & Audio Blips
 */

document.addEventListener('DOMContentLoaded', () => {
  initInteractiveTerminal();
});

function initInteractiveTerminal() {
  const terminalBody = document.getElementById('terminal-body-history');
  const terminalInput = document.getElementById('terminal-cli-input');
  const quickCmdBtns = document.querySelectorAll('.quick-cmd-btn');

  if (!terminalInput || !terminalBody) return;

  const cmdHistory = [];
  let historyIndex = -1;
  let matrixInterval = null;

  const commands = {
    help: () => `
      <div style="color: var(--accent-cyan); margin-bottom: 6px; font-weight: 700;">⚡ Available Terminal Commands:</div>
      <div>&nbsp;&nbsp;<span style="color: #38bdf8; font-weight: bold;">whoami</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Engineering profile &amp; positioning</div>
      <div>&nbsp;&nbsp;<span style="color: #38bdf8; font-weight: bold;">resume</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 1-click official PDF resume download</div>
      <div>&nbsp;&nbsp;<span style="color: #38bdf8; font-weight: bold;">cloud</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- AWS infrastructure, Docker &amp; CI/CD</div>
      <div>&nbsp;&nbsp;<span style="color: #38bdf8; font-weight: bold;">skills</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Tiered skills matrix (Core / Working / Learning)</div>
      <div>&nbsp;&nbsp;<span style="color: #38bdf8; font-weight: bold;">projects</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Engineering case studies &amp; live apps</div>
      <div>&nbsp;&nbsp;<span style="color: #38bdf8; font-weight: bold;">architecture</span>&nbsp;&nbsp;- Multi-tier system architecture diagrams</div>
      <div>&nbsp;&nbsp;<span style="color: #38bdf8; font-weight: bold;">pricing</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 8-step credit pricing calculation engine</div>
      <div>&nbsp;&nbsp;<span style="color: #38bdf8; font-weight: bold;">github</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Production repos &amp; live deployments</div>
      <div>&nbsp;&nbsp;<span style="color: #38bdf8; font-weight: bold;">contact</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Direct email, WhatsApp, phone &amp; LinkedIn</div>
      <div>&nbsp;&nbsp;<span style="color: #38bdf8; font-weight: bold;">clear</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Reset terminal window</div>
    `,
    resume: () => {
      const link = document.createElement('a');
      link.href = 'assets/Rohit_Kumar_Resume.pdf';
      link.download = 'Rohit_Kumar_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return `<div style="color: #34d399; font-weight: bold;">📄 Downloading Rohit_Kumar_Resume.pdf... (Also opened in new tab)</div>`;
    },
    whoami: () => `
      <div style="color: #f8fafc;">
        <span style="color: var(--accent-cyan); font-weight: bold; font-size: 1rem;">Rohit Kumar P Begur</span><br>
        <span style="color: #38bdf8; font-weight: 600;">Software Engineer | Backend, Cloud &amp; Scalable Systems</span><br>
        💼 Software Developer @ Polymetalz Pvt. Ltd. (Sole Developer)<br>
        📍 Location: Bengaluru, India (Open to relocate &amp; remote)<br>
        🎓 Education: B.E. in Information Science — Yenepoya Institute of Technology (2021 – 2025)<br>
        🐙 GitHub: <a href="https://github.com/rohit-kr-dev" target="_blank" style="color: var(--accent-cyan);">github.com/rohit-kr-dev</a><br>
        🔗 LinkedIn: <a href="https://www.linkedin.com/in/rohit-kr-dev" target="_blank" style="color: var(--accent-cyan);">linkedin.com/in/rohit-kr-dev</a>
      </div>
    `,
    github: () => `
      <div style="color: var(--accent-cyan); margin-bottom: 6px; font-weight: 700;">Active GitHub Repositories (github.com/rohit-kr-dev):</div>
      <div>&nbsp;&nbsp;⭐ <span style="color: #38bdf8; font-weight: bold;">Resume_Eextractor</span> - AI Resume OCR &amp; NLP Ranker (<a href="https://resume-eextractor.onrender.com/" target="_blank" style="color: #34d399; font-weight: bold;">Live Demo 🚀</a>)</div>
      <div>&nbsp;&nbsp;⭐ <span style="color: #38bdf8; font-weight: bold;">crm</span> - Enterprise CRM Ecosystem &amp; Flutter Mobile App</div>
      <div>&nbsp;&nbsp;⭐ <span style="color: #38bdf8; font-weight: bold;">property-pulse</span> - Next.js Full-Stack Real Estate Portal</div>
      <div>&nbsp;&nbsp;⭐ <span style="color: #38bdf8; font-weight: bold;">ecommerce-app</span> - E-Commerce &amp; Inventory Hub</div>
      <div>&nbsp;&nbsp;⭐ <span style="color: #38bdf8; font-weight: bold;">whatsapp--integration</span> - Meta WhatsApp Webhook Gateway</div>
      <div>&nbsp;&nbsp;⭐ <span style="color: #38bdf8; font-weight: bold;">voice2screenplay</span> - Speech-to-Text Screenplay Studio</div>
    `,
    skills: () => `
      <div style="color: #22c55e; font-weight: 700;">🟢 Core Strengths (Production Proven):</div>
      <div style="margin-left: 12px; color: #f8fafc;">Python, Flask, Flutter/Dart, React.js, TypeScript/JavaScript, 20+ REST APIs, PostgreSQL</div>
      <div style="color: #38bdf8; font-weight: 700; margin-top: 6px;">🔵 Working Knowledge:</div>
      <div style="margin-left: 12px; color: #f8fafc;">Redis, Firebase (Firestore/Realtime), Docker, AWS (EC2/S3), n8n Automation, Git/GitHub</div>
      <div style="color: #f59e0b; font-weight: 700; margin-top: 6px;">🟡 Currently Building Expertise:</div>
      <div style="margin-left: 12px; color: #f8fafc;">AWS Solutions Architecture, DevOps CI/CD, Machine Learning &amp; NLP, LLMs &amp; Prompt Engineering</div>
    `,
    learning: () => `
      <div style="color: #f59e0b; font-weight: 700;">Active Focus Areas &amp; Hands-on Exploration:</div>
      <div>1. <span style="color: var(--accent-cyan); font-weight: bold;">☁️ Cloud &amp; DevOps:</span> AWS Solutions Architecture, Linux, Docker, CI/CD</div>
      <div>2. <span style="color: var(--accent-cyan); font-weight: bold;">🤖 AI &amp; ML:</span> Python ML pipelines, NLP document parsing, LLMs</div>
      <div>3. <span style="color: var(--accent-cyan); font-weight: bold;">⚙️ Automation:</span> n8n webhook pipelines, Meta WhatsApp Business Platform</div>
    `,
    stack: () => `
      <div><span style="color: #38bdf8; font-weight: bold;">Languages:</span> Python, JavaScript (ES6+), TypeScript, Dart, SQL, HTML5/CSS3</div>
      <div><span style="color: #38bdf8; font-weight: bold;">Backend:</span> Flask, FastAPI, 20+ REST APIs, Node.js, Phone-OTP &amp; JWT Auth</div>
      <div><span style="color: #38bdf8; font-weight: bold;">Frontend &amp; Mobile:</span> React.js, Flutter (Android), Next.js, Tailwind CSS</div>
      <div><span style="color: #38bdf8; font-weight: bold;">Databases &amp; Caching:</span> PostgreSQL, Redis In-Memory Cache, Firebase</div>
      <div><span style="color: #38bdf8; font-weight: bold;">DevOps &amp; Cloud:</span> Docker, AWS (EC2/S3), Linux, n8n Automation, Git</div>
    `,
    projects: () => `
      <div style="color: var(--accent-cyan); font-weight: 700;">Featured Engineering Case Studies:</div>
      <div>1. <span style="color: #38bdf8; font-weight: bold;">Polymetalz Enterprise CRM</span> [Sole Developer, Flutter, Flask, Redis, PostgreSQL]</div>
      <div>2. <span style="color: #38bdf8; font-weight: bold;">AI Resume Extractor &amp; Ranker</span> - <a href="https://resume-eextractor.onrender.com/" target="_blank" style="color: #34d399; font-weight: bold;">Live Demo 🚀</a> [Flask, OCR, NLP]</div>
      <div>3. <span style="color: #38bdf8; font-weight: bold;">PropertyPulse Real Estate Portal</span> [TypeScript, React/Next.js, PostgreSQL]</div>
      <div>4. <span style="color: #38bdf8; font-weight: bold;">E-Commerce &amp; Inventory Hub</span> [React, Node.js, SQL]</div>
      <div>5. <span style="color: #38bdf8; font-weight: bold;">WhatsApp Cloud Webhook Gateway</span> [TypeScript, Node.js, Webhooks]</div>
    `,
    architecture: () => {
      setTimeout(() => {
        const arch = document.getElementById('architecture');
        if (arch) arch.scrollIntoView({ behavior: 'smooth' });
      }, 400);
      return `<div style="color: #38bdf8;">⚙️ Teleporting to System Architecture Visualizer &amp; Pricing Engine...</div>`;
    },
    pricing: () => `
      <div style="color: var(--accent-cyan); font-weight: 700;">8-Step Credit Calculation Pricing Engine Architecture:</div>
      <div>&nbsp;&nbsp;Step 1: Metal Intake Weight (kg)</div>
      <div>&nbsp;&nbsp;Step 2: Chemical Grade Multiplier (Purity %)</div>
      <div>&nbsp;&nbsp;Step 3: Spot Rate Offset vs. International Commodity Exchange</div>
      <div>&nbsp;&nbsp;Step 4: Yield &amp; Slag Deduction Adjustment</div>
      <div>&nbsp;&nbsp;Step 5: Daily Compound Credit Interest Tenure (0-90 Days)</div>
      <div>&nbsp;&nbsp;Step 6: Tiered Bulk Volume Discount</div>
      <div>&nbsp;&nbsp;Step 7: Statutory GST/Tax Compounding (18%)</div>
      <div>&nbsp;&nbsp;Step 8: Final Net Tax-Inclusive Invoice Output</div>
    `,
    matrix: () => {
      startMatrixMode();
      return `<div style="color: #22c55e; font-weight: bold;">🟢 MATRIX DIGITAL RAIN INITIALIZED. Type any command to exit.</div>`;
    },
    contact: () => `
      <div>📧 <span style="color: #38bdf8;">Email:</span> rohitkumarpbegur@gmail.com</div>
      <div>📱 <span style="color: #38bdf8;">Phone:</span> +91 7975193883</div>
      <div>📍 <span style="color: #38bdf8;">Location:</span> Bengaluru, Karnataka, India</div>
      <div>🔗 <span style="color: #38bdf8;">LinkedIn:</span> linkedin.com/in/rohit-kr-dev</div>
      <div>🐙 <span style="color: #38bdf8;">GitHub:</span> github.com/rohit-kr-dev</div>
    `,
    cloud: () => `
      <div style="color: var(--accent-cyan); font-weight: 700;">☁️ Cloud Infrastructure &amp; DevOps Implementations:</div>
      <div>1. <span style="color: #38bdf8; font-weight: bold;">AWS Ecosystem:</span> EC2 Compute, S3 Storage, IAM Least-Privilege, VPC Networking, CloudWatch</div>
      <div>2. <span style="color: #38bdf8; font-weight: bold;">Containerization:</span> Multi-stage Dockerfiles, Docker Compose multi-service orchestration</div>
      <div>3. <span style="color: #38bdf8; font-weight: bold;">CI/CD Pipelines:</span> GitHub Actions automated testing, linting &amp; deployment triggers</div>
      <div>4. <span style="color: #38bdf8; font-weight: bold;">Production Servers:</span> Linux (Ubuntu), Nginx reverse proxy, SSL/TLS Let's Encrypt, systemd</div>
    `,
    devops: () => `
      <div style="color: var(--accent-cyan); font-weight: 700;">☁️ Cloud Infrastructure &amp; DevOps Implementations:</div>
      <div>1. <span style="color: #38bdf8; font-weight: bold;">AWS Ecosystem:</span> EC2 Compute, S3 Storage, IAM Least-Privilege, VPC Networking, CloudWatch</div>
      <div>2. <span style="color: #38bdf8; font-weight: bold;">Containerization:</span> Multi-stage Dockerfiles, Docker Compose multi-service orchestration</div>
      <div>3. <span style="color: #38bdf8; font-weight: bold;">CI/CD Pipelines:</span> GitHub Actions automated testing, linting &amp; deployment triggers</div>
      <div>4. <span style="color: #38bdf8; font-weight: bold;">Production Servers:</span> Linux (Ubuntu), Nginx reverse proxy, SSL/TLS Let's Encrypt, systemd</div>
    `,
    hire: () => {
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 400);
      return `<div style="color: #34d399; font-weight: bold;">🚀 Awesome! Redirecting to contact form. Let's create impactful products together!</div>`;
    },
    clear: () => {
      terminalBody.innerHTML = '';
      stopMatrixMode();
      return '';
    }
  };

  function startMatrixMode() {
    stopMatrixMode();
    const matrixCanvas = document.createElement('canvas');
    matrixCanvas.id = 'terminal-matrix-canvas';
    matrixCanvas.style.cssText = 'position: absolute; inset: 0; width: 100%; height: 100%; background: #000; z-index: 10; pointer-events: none; opacity: 0.9;';
    terminalBody.style.position = 'relative';
    terminalBody.appendChild(matrixCanvas);

    const ctx = matrixCanvas.getContext('2d');
    matrixCanvas.width = terminalBody.clientWidth;
    matrixCanvas.height = terminalBody.clientHeight;

    const chars = '01ROHITKUMARDEVELOPERPYTHONREACTFLUTTERFASTAPIREDIS10';
    const fontSize = 13;
    const columns = Math.floor(matrixCanvas.width / fontSize);
    const drops = Array(columns).fill(1);

    matrixInterval = setInterval(() => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
      ctx.fillStyle = '#00ff66';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }, 40);
  }

  function stopMatrixMode() {
    if (matrixInterval) {
      clearInterval(matrixInterval);
      matrixInterval = null;
    }
    const canvas = document.getElementById('terminal-matrix-canvas');
    if (canvas) canvas.remove();
  }

  function executeCommand(rawInput) {
    stopMatrixMode();
    const input = rawInput.trim().toLowerCase();
    if (!input) return;

    cmdHistory.push(rawInput);
    historyIndex = cmdHistory.length;

    const userLine = document.createElement('div');
    userLine.className = 'terminal-line';
    userLine.innerHTML = `
      <span class="cmd-prompt">$</span>
      <span class="cmd-text">${rawInput}</span>
    `;
    terminalBody.appendChild(userLine);

    if (input === 'clear') {
      commands.clear();
      return;
    }

    const outputDiv = document.createElement('div');
    outputDiv.className = 'cmd-output';

    if (commands[input]) {
      outputDiv.innerHTML = commands[input]();
    } else {
      outputDiv.innerHTML = `<span style="color: #f87171;">Command not found: "${rawInput}". Type <span style="color: var(--accent-cyan); font-weight: bold;">help</span> for available commands.</span>`;
    }

    terminalBody.appendChild(outputDiv);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput.value);
      terminalInput.value = '';
    } else if (e.key === 'ArrowUp') {
      if (cmdHistory.length > 0 && historyIndex > 0) {
        historyIndex--;
        terminalInput.value = cmdHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      if (cmdHistory.length > 0 && historyIndex < cmdHistory.length - 1) {
        historyIndex++;
        terminalInput.value = cmdHistory[historyIndex];
      } else {
        historyIndex = cmdHistory.length;
        terminalInput.value = '';
      }
    }
  });

  quickCmdBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) {
        terminalInput.value = '';
        executeCommand(cmd);
      }
    });
  });
}
