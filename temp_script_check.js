
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['Fira Code', 'monospace'],
          },
          colors: {
            brand: {
              50:  '#eef2ff',
              100: '#e0e7ff',
              400: '#818cf8',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca',
              900: '#1e1b4b',
            },
          },
          animation: {
            'fade-up': 'fadeUp 0.6s ease forwards',
            'fade-in': 'fadeIn 0.8s ease forwards',
            'pulse-slow': 'pulse 3s ease-in-out infinite',
          },
          keyframes: {
            fadeUp: {
              '0%':   { opacity: '0', transform: 'translateY(30px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            fadeIn: {
              '0%':   { opacity: '0' },
              '100%': { opacity: '1' },
            },
          },
        },
      },
    };
  </script>

  <style>
    /* ─── Base ─────────────────────────────────────────────── */
    body { font-family: 'Inter', sans-serif; }

    /* ─── Scroll-reveal ────────────────────────────────────── */
    .reveal { opacity: 1; transform: translateY(0); transition: opacity 0.65s ease, transform 0.65s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }

    /* ─── Gradient text ────────────────────────────────────── */
    .gradient-text {
      background: linear-gradient(135deg, #6366f1, #a78bfa, #38bdf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ─── Glowing ring on profile photo ───────────────────── */
    .profile-ring {
      background: linear-gradient(135deg, #6366f1, #38bdf8);
      padding: 3px;
      border-radius: 9999px;
      display: inline-block;
    }

    /* ─── Skill badge ──────────────────────────────────────── */
    .skill-badge {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 6px 14px; border-radius: 9999px; font-size: 0.78rem; font-weight: 500;
      background: rgba(99,102,241,0.12); color: #818cf8; border: 1px solid rgba(99,102,241,0.25);
      transition: all 0.2s;
    }
    .skill-badge:hover { background: rgba(99,102,241,0.25); transform: translateY(-2px); }

    /* ─── Timeline ─────────────────────────────────────────── */
    .timeline-line { position: absolute; left: 20px; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, #6366f1, #38bdf8, transparent); }
    .timeline-dot  { position: absolute; left: 12px; width: 18px; height: 18px; border-radius: 9999px; background: #6366f1; border: 3px solid #1e1b4b; box-shadow: 0 0 12px #6366f1; top: 6px; }

    /* ─── Project card ─────────────────────────────────────── */
    .project-card {
      background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px; padding: 28px; transition: all 0.3s;
      position: relative; overflow: hidden;
    }
    .project-card::before {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(99,102,241,0.06), transparent);
      opacity: 0; transition: opacity 0.3s;
    }
    .project-card:hover { border-color: rgba(99,102,241,0.4); transform: translateY(-4px); box-shadow: 0 20px 40px rgba(99,102,241,0.15); }
    .project-card:hover::before { opacity: 1; }

    /* ─── Nav link underline anim ──────────────────────────── */
    .nav-link { position: relative; }
    .nav-link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 2px; background: #6366f1; transition: width 0.3s; }
    .nav-link:hover::after { width: 100%; }

    /* ─── Section divider ──────────────────────────────────── */
    .section-label { font-family: 'Fira Code', monospace; font-size: 0.75rem; color: #6366f1; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px; }

    /* ─── Input focus glow ─────────────────────────────────── */
    .glow-input:focus { outline: none; border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.2); }

    /* ─── Scrollbar ────────────────────────────────────────── */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #0f0f1a; }
    ::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 3px; }
  </style>
</head>

<!-- ══════════════════ BODY ══════════════════ -->
<body class="bg-[#0a0a14] text-gray-200 antialiased">

<!-- ╔══════════════════════════════════════════╗
     ║              NAVIGATION                  ║
     ╚══════════════════════════════════════════╝ -->
<nav id="navbar" class="fixed top-0 inset-x-0 z-50 transition-all duration-300" style="background: rgba(10,10,20,0);">
  <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="#hero" class="font-mono text-brand-400 font-semibold text-lg tracking-tight">
      &lt;AjayP /&gt;
    </a>
    <!-- Desktop Links -->
    <ul class="hidden md:flex gap-8 text-sm text-gray-400">
      <li><a href="#about"        class="nav-link hover:text-white transition">About</a></li>
      <li><a href="#skills"       class="nav-link hover:text-white transition">Skills</a></li>
      <li><a href="#experience"   class="nav-link hover:text-white transition">Experience</a></li>
      <li><a href="#projects"     class="nav-link hover:text-white transition">Projects</a></li>
      <li><a href="#achievements" class="nav-link hover:text-white transition">Achievements</a></li>
      <li><a href="#blog"         class="nav-link hover:text-white transition">Blog</a></li>
      <li><a href="#contact"      class="nav-link hover:text-white transition">Contact</a></li>
    </ul>
    <!-- Resume Button -->
    <a href="resume.pdf" download="Ajay_Prajapati_Resume.pdf"
       class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium transition">
      <i class="fas fa-download text-xs"></i> Resume
    </a>
    <!-- Mobile Hamburger -->
    <button id="menu-btn" class="md:hidden text-gray-400 hover:text-white" aria-label="Toggle menu">
      <i class="fas fa-bars text-xl"></i>
    </button>
  </div>
  <!-- Mobile Menu -->
  <div id="mobile-menu" class="hidden md:hidden px-6 pb-4 bg-[#0d0d1f] border-t border-white/5">
    <ul class="flex flex-col gap-4 pt-4 text-sm text-gray-400">
      <li><a href="#about"        class="hover:text-white transition mobile-link">About</a></li>
      <li><a href="#skills"       class="hover:text-white transition mobile-link">Skills</a></li>
      <li><a href="#experience"   class="hover:text-white transition mobile-link">Experience</a></li>
      <li><a href="#projects"     class="hover:text-white transition mobile-link">Projects</a></li>
      <li><a href="#achievements" class="hover:text-white transition mobile-link">Achievements</a></li>
      <li><a href="#blog"         class="hover:text-white transition mobile-link">Blog</a></li>
      <li><a href="#contact"      class="hover:text-white transition mobile-link">Contact</a></li>
      <li><a href="resume.pdf" download class="text-brand-400">⬇ Download Resume</a></li>
    </ul>
  </div>
</nav>


<!-- ╔══════════════════════════════════════════╗
     ║                 HERO                     ║
     ╚══════════════════════════════════════════╝ -->
<section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Background grid -->
  <div class="absolute inset-0 opacity-[0.04]"
       style="background-image: linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
  <!-- Radial glow blobs -->
  <div class="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-600 rounded-full blur-[120px] opacity-10 animate-pulse-slow"></div>
  <div class="absolute bottom-1/4 right-1/4 w-72 h-72 bg-sky-500 rounded-full blur-[100px] opacity-8 animate-pulse-slow"></div>

  <div class="relative z-10 max-w-3xl mx-auto px-6 text-center">
    <!-- Profile Image -->
    <div class="flex justify-center mb-8">
      <div class="profile-ring">
        <div class="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-brand-700 to-sky-700 flex items-center justify-center">
          <!-- Replace src with your actual photo path e.g. src="photo.jpg" -->
          <img id="profile-img" src="photo.jpg" alt="Ajay Prajapati"
               class="w-full h-full object-cover"
               onerror="this.style.display='none'; document.getElementById('profile-initials').style.display='flex';" />
          <span id="profile-initials" class="text-3xl font-bold text-white hidden items-center justify-center w-full h-full">AP</span>
        </div>
      </div>
    </div>

    <!-- Name -->
    <div class="section-label mb-3">Available for Senior Roles</div>
    <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
      Ajay <span class="gradient-text">Prajapati</span>
    </h1>

    <!-- Title -->
    <p class="font-mono text-brand-400 text-sm md:text-base mb-4 tracking-wide">
      Senior Python Developer &nbsp;|&nbsp; Backend &nbsp;|&nbsp; Automation &nbsp;|&nbsp; Kubernetes
    </p>

    <!-- Tagline -->
    <p class="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
      Building scalable backend systems, automation frameworks, and cloud-native solutions that handle real-world complexity at scale.
    </p>

    <!-- CTAs -->
    <div class="flex flex-wrap justify-center gap-4">
      <a href="#projects"
         class="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-lg shadow-brand-900 transition-all hover:-translate-y-0.5">
        <i class="fas fa-code-branch mr-2"></i>View Projects
      </a>
      <a href="#contact"
         class="px-6 py-3 rounded-xl border border-white/15 hover:border-brand-400 text-gray-300 hover:text-white font-semibold text-sm transition-all hover:-translate-y-0.5">
        <i class="fas fa-paper-plane mr-2"></i>Contact Me
      </a>
      <a href="resume.pdf" download="Ajay_Prajapati_Resume.pdf"
         class="px-6 py-3 rounded-xl border border-white/10 hover:border-sky-400 text-gray-400 hover:text-sky-300 font-semibold text-sm transition-all hover:-translate-y-0.5">
        <i class="fas fa-download mr-2"></i>Download CV
      </a>
    </div>

    <!-- Scroll indicator -->
    <div class="mt-16 flex justify-center animate-bounce">
      <a href="#about" class="text-gray-600 hover:text-brand-400 transition">
        <i class="fas fa-chevron-down text-xl"></i>
      </a>
    </div>
  </div>
</section>


<!-- ╔══════════════════════════════════════════╗
     ║               ABOUT ME                   ║
     ╚══════════════════════════════════════════╝ -->
<section id="about" class="py-24 px-6">
  <div class="max-w-5xl mx-auto">
    <div class="reveal grid md:grid-cols-2 gap-16 items-center">
      <!-- Left: Text -->
      <div>
        <p class="section-label">// about me</p>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Engineering Systems That Scale</h2>
        <div class="space-y-4 text-gray-400 leading-relaxed">
          <p>
            With <strong class="text-white">7+ years</strong> of hands-on engineering across backend development, infrastructure automation, and distributed systems, I specialize in designing solutions that are both operationally sound and built to last.
          </p>
          <p>
            My core stack centers on <strong class="text-brand-400">Python</strong>, with deep expertise in <strong class="text-brand-400">Flask, FastAPI</strong>, and <strong class="text-brand-400">Kubernetes</strong>. I've automated large-scale network operations, led platform upgrade strategies, and built AI-driven tooling to eliminate manual toil.
          </p>
          <p>
            I've delivered across networking, storage virtualization (Dell EMC VPLEX), and cloud-native platform engineering — consistently focusing on <strong class="text-white">scalability, security, and production-grade reliability</strong>.
          </p>
        </div>

        <!-- Quick Stats -->
        <div class="mt-8 grid grid-cols-3 gap-4">
          <div class="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
            <div class="text-2xl font-bold gradient-text">7+</div>
            <div class="text-xs text-gray-500 mt-1">Years Experience</div>
          </div>
          <div class="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
            <div class="text-2xl font-bold gradient-text">100+</div>
            <div class="text-xs text-gray-500 mt-1">Sites Automated</div>
          </div>
          <div class="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
            <div class="text-2xl font-bold gradient-text">30%</div>
            <div class="text-xs text-gray-500 mt-1">Efficiency Boost</div>
          </div>
        </div>
      </div>

      <!-- Right: Terminal-style card -->
      <div class="font-mono text-sm bg-[#0d0d1f] rounded-2xl border border-white/[0.07] p-6 shadow-2xl">
        <div class="flex gap-2 mb-4">
          <span class="w-3 h-3 rounded-full bg-red-500"></span>
          <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span class="w-3 h-3 rounded-full bg-green-500"></span>
          <span class="ml-2 text-gray-600 text-xs">ajay@portfolio ~ </span>
        </div>
        <div class="space-y-2 text-gray-400">
          <p><span class="text-brand-400">$</span> whoami</p>
          <p class="text-green-400">ajay_prajapati</p>
          <p class="mt-3"><span class="text-brand-400">$</span> cat skills.json | jq '.core'</p>
          <p class="text-yellow-300">{</p>
          <p class="pl-4 text-gray-300">"language":  <span class="text-green-300">"Python"</span>,</p>
          <p class="pl-4 text-gray-300">"backend":   <span class="text-green-300">"FastAPI / Flask"</span>,</p>
          <p class="pl-4 text-gray-300">"infra":     <span class="text-green-300">"Kubernetes / Ansible"</span>,</p>
          <p class="pl-4 text-gray-300">"focus":     <span class="text-green-300">"Scale &amp; Reliability"</span></p>
          <p class="text-yellow-300">}</p>
          <p class="mt-3"><span class="text-brand-400">$</span> <span class="animate-pulse">▌</span></p>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ╔══════════════════════════════════════════╗
     ║                SKILLS                    ║
     ╚══════════════════════════════════════════╝ -->
<section id="skills" class="py-24 px-6 bg-[#0d0d1f]">
  <div class="max-w-5xl mx-auto">
    <div class="reveal text-center mb-16">
      <p class="section-label">// technical stack</p>
      <h2 class="text-3xl md:text-4xl font-bold text-white">Skills &amp; Technologies</h2>
    </div>

    <div class="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <!-- Languages -->
      <div class="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 hover:border-brand-500/40 transition">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 rounded-xl bg-brand-600/20 flex items-center justify-center">
            <i class="fas fa-code text-brand-400"></i>
          </div>
          <h3 class="font-semibold text-white">Languages</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge">Python</span>
          <span class="skill-badge">SQL</span>
          <span class="skill-badge">Bash</span>
          <span class="skill-badge">YAML</span>
        </div>
      </div>

      <!-- Backend -->
      <div class="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 hover:border-brand-500/40 transition">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 rounded-xl bg-sky-600/20 flex items-center justify-center">
            <i class="fas fa-server text-sky-400"></i>
          </div>
          <h3 class="font-semibold text-white">Backend</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge" style="color:#38bdf8; border-color:rgba(56,189,248,0.25); background:rgba(56,189,248,0.1)">FastAPI</span>
          <span class="skill-badge" style="color:#38bdf8; border-color:rgba(56,189,248,0.25); background:rgba(56,189,248,0.1)">Flask</span>
          <span class="skill-badge" style="color:#38bdf8; border-color:rgba(56,189,248,0.25); background:rgba(56,189,248,0.1)">Django</span>
          <span class="skill-badge" style="color:#38bdf8; border-color:rgba(56,189,248,0.25); background:rgba(56,189,248,0.1)">REST APIs</span>
        </div>
      </div>

      <!-- DevOps -->
      <div class="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 hover:border-brand-500/40 transition">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 rounded-xl bg-green-600/20 flex items-center justify-center">
            <i class="fas fa-cubes text-green-400"></i>
          </div>
          <h3 class="font-semibold text-white">DevOps &amp; Cloud</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge" style="color:#4ade80; border-color:rgba(74,222,128,0.25); background:rgba(74,222,128,0.08)">Kubernetes</span>
          <span class="skill-badge" style="color:#4ade80; border-color:rgba(74,222,128,0.25); background:rgba(74,222,128,0.08)">Docker</span>
          <span class="skill-badge" style="color:#4ade80; border-color:rgba(74,222,128,0.25); background:rgba(74,222,128,0.08)">Ansible</span>
          <span class="skill-badge" style="color:#4ade80; border-color:rgba(74,222,128,0.25); background:rgba(74,222,128,0.08)">Jenkins</span>
        </div>
      </div>

      <!-- Messaging & Async -->
      <div class="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 hover:border-brand-500/40 transition">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 rounded-xl bg-orange-600/20 flex items-center justify-center">
            <i class="fas fa-exchange-alt text-orange-400"></i>
          </div>
          <h3 class="font-semibold text-white">Messaging &amp; Async</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge" style="color:#fb923c; border-color:rgba(251,146,60,0.25); background:rgba(251,146,60,0.08)">RabbitMQ</span>
          <span class="skill-badge" style="color:#fb923c; border-color:rgba(251,146,60,0.25); background:rgba(251,146,60,0.08)">Celery</span>
          <span class="skill-badge" style="color:#fb923c; border-color:rgba(251,146,60,0.25); background:rgba(251,146,60,0.08)">Redis</span>
        </div>
      </div>

      <!-- Data -->
      <div class="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 hover:border-brand-500/40 transition">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center">
            <i class="fas fa-chart-bar text-purple-400"></i>
          </div>
          <h3 class="font-semibold text-white">Data &amp; Analytics</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge" style="color:#c084fc; border-color:rgba(192,132,252,0.25); background:rgba(192,132,252,0.08)">Pandas</span>
          <span class="skill-badge" style="color:#c084fc; border-color:rgba(192,132,252,0.25); background:rgba(192,132,252,0.08)">NumPy</span>
          <span class="skill-badge" style="color:#c084fc; border-color:rgba(192,132,252,0.25); background:rgba(192,132,252,0.08)">PostgreSQL</span>
        </div>
      </div>

      <!-- Tools -->
      <div class="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 hover:border-brand-500/40 transition">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 rounded-xl bg-yellow-600/20 flex items-center justify-center">
            <i class="fas fa-tools text-yellow-400"></i>
          </div>
          <h3 class="font-semibold text-white">Tools &amp; Platforms</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge" style="color:#facc15; border-color:rgba(250,204,21,0.25); background:rgba(250,204,21,0.08)">Git</span>
          <span class="skill-badge" style="color:#facc15; border-color:rgba(250,204,21,0.25); background:rgba(250,204,21,0.08)">VMware</span>
          <span class="skill-badge" style="color:#facc15; border-color:rgba(250,204,21,0.25); background:rgba(250,204,21,0.08)">Linux</span>
          <span class="skill-badge" style="color:#facc15; border-color:rgba(250,204,21,0.25); background:rgba(250,204,21,0.08)">Jira</span>
        </div>
      </div>

    </div>
  </div>
</section>


<!-- ╔══════════════════════════════════════════╗
     ║              EXPERIENCE                  ║
     ╚══════════════════════════════════════════╝ -->
<section id="experience" class="py-24 px-6">
  <div class="max-w-4xl mx-auto">
    <div class="reveal text-center mb-16">
      <p class="section-label">// career timeline</p>
      <h2 class="text-3xl md:text-4xl font-bold text-white">Work Experience</h2>
    </div>

    <!-- Timeline -->
    <div class="reveal relative pl-12">
      <div class="timeline-line"></div>

      <!-- ── Role 1 ── -->
      <div class="relative mb-14">
        <div class="timeline-dot"></div>
        <div class="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 hover:border-brand-500/30 transition">
          <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 class="text-lg font-bold text-white">Senior Automation Engineer</h3>
              <p class="text-brand-400 font-mono text-sm mt-0.5">Current Company</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
              2026 – Present
            </span>
          </div>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li class="flex gap-2"><span class="text-brand-400 mt-0.5 shrink-0">→</span> Automated DNS and DHCP provisioning across <strong class="text-white">100+ distributed sites</strong>, eliminating manual change tickets and reducing provisioning time by ~70%.</li>
            <li class="flex gap-2"><span class="text-brand-400 mt-0.5 shrink-0">→</span> Designed and deployed an <strong class="text-white">AI-based ticket routing agent</strong> using Python + LLM APIs, cutting triage time and misrouted tickets significantly.</li>
            <li class="flex gap-2"><span class="text-brand-400 mt-0.5 shrink-0">→</span> Built production-grade automation pipelines with <strong class="text-white">Infoblox WAPI</strong>, Flask APIs, and Celery for async task orchestration.</li>
          </ul>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="skill-badge text-xs">Python</span>
            <span class="skill-badge text-xs">Infoblox</span>
            <span class="skill-badge text-xs">FastAPI</span>
            <span class="skill-badge text-xs">Celery</span>
            <span class="skill-badge text-xs">LLM APIs</span>
          </div>
        </div>
      </div>

      <!-- ── Role 2 ── -->
      <div class="relative mb-14">
        <div class="timeline-dot" style="background:#38bdf8; box-shadow:0 0 12px #38bdf8;"></div>
        <div class="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 hover:border-sky-500/30 transition">
          <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 class="text-lg font-bold text-white">Tech Lead – Python Backend &amp; Infrastructure</h3>
              <p class="text-sky-400 font-mono text-sm mt-0.5">HCL Technologies</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-medium border border-sky-500/20">
              2021 – 2026
            </span>
          </div>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li class="flex gap-2"><span class="text-sky-400 mt-0.5 shrink-0">→</span> Led end-to-end <strong class="text-white">Kubernetes upgrade from v1.21 → v1.30</strong> across multi-node production clusters with zero-downtime rollout strategy.</li>
            <li class="flex gap-2"><span class="text-sky-400 mt-0.5 shrink-0">→</span> Developed <strong class="text-white">OS automation REST APIs</strong> (FastAPI + Kubernetes Jobs) that improved operational efficiency by <strong class="text-white">30%</strong>.</li>
            <li class="flex gap-2"><span class="text-sky-400 mt-0.5 shrink-0">→</span> Built <strong class="text-white">SSH-based infrastructure automation</strong> for large-scale server patching and configuration management across heterogeneous environments.</li>
            <li class="flex gap-2"><span class="text-sky-400 mt-0.5 shrink-0">→</span> Mentored junior engineers on backend design patterns, API standards, and production debugging practices.</li>
          </ul>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="skill-badge text-xs" style="color:#38bdf8; border-color:rgba(56,189,248,0.25); background:rgba(56,189,248,0.1)">Kubernetes</span>
            <span class="skill-badge text-xs" style="color:#38bdf8; border-color:rgba(56,189,248,0.25); background:rgba(56,189,248,0.1)">FastAPI</span>
            <span class="skill-badge text-xs" style="color:#38bdf8; border-color:rgba(56,189,248,0.25); background:rgba(56,189,248,0.1)">Docker</span>
            <span class="skill-badge text-xs" style="color:#38bdf8; border-color:rgba(56,189,248,0.25); background:rgba(56,189,248,0.1)">Ansible</span>
            <span class="skill-badge text-xs" style="color:#38bdf8; border-color:rgba(56,189,248,0.25); background:rgba(56,189,248,0.1)">Python</span>
          </div>
        </div>
      </div>

      <!-- ── Role 3 ── -->
      <div class="relative mb-6">
        <div class="timeline-dot" style="background:#a78bfa; box-shadow:0 0 12px #a78bfa;"></div>
        <div class="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 hover:border-purple-500/30 transition">
          <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 class="text-lg font-bold text-white">Software Engineer – Test Automation</h3>
              <p class="text-purple-400 font-mono text-sm mt-0.5">Previous Organization</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium border border-purple-500/20">
              2018 – 2021
            </span>
          </div>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li class="flex gap-2"><span class="text-purple-400 mt-0.5 shrink-0">→</span> Built end-to-end <strong class="text-white">test automation frameworks</strong> using Selenium, Robot Framework, and Python for enterprise web applications.</li>
            <li class="flex gap-2"><span class="text-purple-400 mt-0.5 shrink-0">→</span> Reduced manual regression cycle from <strong class="text-white">3 days to 4 hours</strong> through CI-integrated automated test suites.</li>
            <li class="flex gap-2"><span class="text-purple-400 mt-0.5 shrink-0">→</span> Established test data management patterns and reporting dashboards for stakeholder visibility.</li>
          </ul>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="skill-badge text-xs" style="color:#c084fc; border-color:rgba(192,132,252,0.25); background:rgba(192,132,252,0.08)">Selenium</span>
            <span class="skill-badge text-xs" style="color:#c084fc; border-color:rgba(192,132,252,0.25); background:rgba(192,132,252,0.08)">Robot Framework</span>
            <span class="skill-badge text-xs" style="color:#c084fc; border-color:rgba(192,132,252,0.25); background:rgba(192,132,252,0.08)">Python</span>
            <span class="skill-badge text-xs" style="color:#c084fc; border-color:rgba(192,132,252,0.25); background:rgba(192,132,252,0.08)">Jenkins</span>
          </div>
        </div>
      </div>

    </div><!-- /timeline -->
  </div>
</section>


<!-- ╔══════════════════════════════════════════╗
     ║               PROJECTS                   ║
     ╚══════════════════════════════════════════╝ -->
<section id="projects" class="py-24 px-6 bg-[#0d0d1f]">
  <div class="max-w-5xl mx-auto">
    <div class="reveal text-center mb-16">
      <p class="section-label">// selected work</p>
      <h2 class="text-3xl md:text-4xl font-bold text-white">Projects</h2>
    </div>

    <div class="reveal grid md:grid-cols-2 gap-6">

      <!-- Project 1: VPLEX Automation -->
      <div class="project-card">
        <div class="flex items-start justify-between mb-4">
          <div class="w-10 h-10 rounded-xl bg-brand-600/20 flex items-center justify-center">
            <i class="fas fa-database text-brand-400"></i>
          </div>
          <span class="font-mono text-xs text-gray-600">01</span>
        </div>
        <h3 class="text-lg font-bold text-white mb-3">VPLEX Storage Automation</h3>
        <div class="space-y-2 text-sm text-gray-400 mb-5">
          <p><span class="text-brand-400 font-semibold">Problem:</span> Manual VPLEX storage provisioning across distributed sites was error-prone and took hours per change.</p>
          <p><span class="text-sky-400 font-semibold">Solution:</span> Built a full automation framework using <strong class="text-white">Ansible + Python</strong> to orchestrate VPLEX REST API operations — provisioning, zoning, and health checks.</p>
          <p><span class="text-green-400 font-semibold">Impact:</span> Reduced provisioning time from 4 hours to 15 minutes. Zero manual errors post-deployment.</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge text-xs">Ansible</span>
          <span class="skill-badge text-xs">Python</span>
          <span class="skill-badge text-xs">REST API</span>
          <span class="skill-badge text-xs">Dell EMC VPLEX</span>
        </div>
      </div>

      <!-- Project 2: OMNI Platform -->
      <div class="project-card">
        <div class="flex items-start justify-between mb-4">
          <div class="w-10 h-10 rounded-xl bg-sky-600/20 flex items-center justify-center">
            <i class="fas fa-cloud text-sky-400"></i>
          </div>
          <span class="font-mono text-xs text-gray-600">02</span>
        </div>
        <h3 class="text-lg font-bold text-white mb-3">OMNI Cloud Platform</h3>
        <div class="space-y-2 text-sm text-gray-400 mb-5">
          <p><span class="text-brand-400 font-semibold">Problem:</span> Multi-tenant platform needed IPv6 support, scalable API layer, and Kubernetes-native deployment for enterprise clients.</p>
          <p><span class="text-sky-400 font-semibold">Solution:</span> Architected the platform backend with <strong class="text-white">FastAPI + Kubernetes</strong>, full dual-stack IPv6 support, and multi-tenant isolation at the namespace level.</p>
          <p><span class="text-green-400 font-semibold">Impact:</span> Onboarded 15+ enterprise tenants. Platform handles 10k+ API calls/day with 99.9% uptime SLA.</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge text-xs" style="color:#38bdf8; border-color:rgba(56,189,248,0.25); background:rgba(56,189,248,0.1)">Kubernetes</span>
          <span class="skill-badge text-xs" style="color:#38bdf8; border-color:rgba(56,189,248,0.25); background:rgba(56,189,248,0.1)">FastAPI</span>
          <span class="skill-badge text-xs" style="color:#38bdf8; border-color:rgba(56,189,248,0.25); background:rgba(56,189,248,0.1)">IPv6</span>
          <span class="skill-badge text-xs" style="color:#38bdf8; border-color:rgba(56,189,248,0.25); background:rgba(56,189,248,0.1)">Docker</span>
        </div>
      </div>

      <!-- Project 3: Network Automation -->
      <div class="project-card">
        <div class="flex items-start justify-between mb-4">
          <div class="w-10 h-10 rounded-xl bg-green-600/20 flex items-center justify-center">
            <i class="fas fa-network-wired text-green-400"></i>
          </div>
          <span class="font-mono text-xs text-gray-600">03</span>
        </div>
        <h3 class="text-lg font-bold text-white mb-3">Network &amp; OS Automation at Scale</h3>
        <div class="space-y-2 text-sm text-gray-400 mb-5">
          <p><span class="text-brand-400 font-semibold">Problem:</span> DNS/DHCP changes and OS upgrades across 100+ geographically distributed sites were handled manually, creating configuration drift and compliance risk.</p>
          <p><span class="text-sky-400 font-semibold">Solution:</span> Developed a <strong class="text-white">Python + Infoblox WAPI</strong> automation suite with Celery task queues and a Flask API for operator-triggered workflows.</p>
          <p><span class="text-green-400 font-semibold">Impact:</span> Eliminated ~200 manual tickets/month. 100% consistency across all sites.</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge text-xs" style="color:#4ade80; border-color:rgba(74,222,128,0.25); background:rgba(74,222,128,0.08)">Python</span>
          <span class="skill-badge text-xs" style="color:#4ade80; border-color:rgba(74,222,128,0.25); background:rgba(74,222,128,0.08)">Infoblox</span>
          <span class="skill-badge text-xs" style="color:#4ade80; border-color:rgba(74,222,128,0.25); background:rgba(74,222,128,0.08)">Celery</span>
          <span class="skill-badge text-xs" style="color:#4ade80; border-color:rgba(74,222,128,0.25); background:rgba(74,222,128,0.08)">RabbitMQ</span>
        </div>
      </div>

      <!-- Project 4: AI Ticket Routing -->
      <div class="project-card">
        <div class="flex items-start justify-between mb-4">
          <div class="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center">
            <i class="fas fa-robot text-purple-400"></i>
          </div>
          <span class="font-mono text-xs text-gray-600">04</span>
        </div>
        <h3 class="text-lg font-bold text-white mb-3">AI Agent – Ticket Routing</h3>
        <div class="space-y-2 text-sm text-gray-400 mb-5">
          <p><span class="text-brand-400 font-semibold">Problem:</span> Support tickets were being misrouted manually, causing SLA breaches and unnecessary escalations across L1/L2/L3 tiers.</p>
          <p><span class="text-sky-400 font-semibold">Solution:</span> Built an <strong class="text-white">LLM-powered classification agent</strong> in Python that reads ticket content and routes to the correct team using fine-tuned intent classification + confidence scoring.</p>
          <p><span class="text-green-400 font-semibold">Impact:</span> 85%+ routing accuracy. Reduced misrouted tickets by 60% in the first month.</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge text-xs" style="color:#c084fc; border-color:rgba(192,132,252,0.25); background:rgba(192,132,252,0.08)">Python</span>
          <span class="skill-badge text-xs" style="color:#c084fc; border-color:rgba(192,132,252,0.25); background:rgba(192,132,252,0.08)">LLM APIs</span>
          <span class="skill-badge text-xs" style="color:#c084fc; border-color:rgba(192,132,252,0.25); background:rgba(192,132,252,0.08)">FastAPI</span>
          <span class="skill-badge text-xs" style="color:#c084fc; border-color:rgba(192,132,252,0.25); background:rgba(192,132,252,0.08)">NLP</span>
        </div>
      </div>

    </div>
  </div>
</section>


<!-- ╔══════════════════════════════════════════╗
     ║              ACHIEVEMENTS                ║
     ╚══════════════════════════════════════════╝ -->
<section id="achievements" class="py-24 px-6">
  <div class="max-w-5xl mx-auto">
    <div class="reveal text-center mb-16">
      <p class="section-label">// recognition</p>
      <h2 class="text-3xl md:text-4xl font-bold text-white">Achievements &amp; Certifications</h2>
    </div>

    <div class="reveal grid md:grid-cols-3 gap-6">

      <div class="bg-white/[0.02] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 hover:-translate-y-1 transition-all text-center">
        <div class="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
          <i class="fas fa-star text-2xl text-yellow-400"></i>
        </div>
        <h3 class="font-bold text-white mb-2">HackerRank 5-Star</h3>
        <p class="text-sm text-gray-500">Achieved 5-star Gold rating in Python on HackerRank — top-tier competitive programming rank.</p>
        <div class="mt-4 flex flex-wrap justify-center gap-2">
          <span class="text-xs px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Python</span>
          <span class="text-xs px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">HackerRank</span>
        </div>
      </div>

      <div class="bg-white/[0.02] border border-brand-500/20 rounded-2xl p-6 hover:border-brand-500/40 hover:-translate-y-1 transition-all text-center">
        <div class="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
          <i class="fas fa-trophy text-2xl text-brand-400"></i>
        </div>
        <h3 class="font-bold text-white mb-2">HCL Champion Award</h3>
        <p class="text-sm text-gray-500">Recognized by HCL Technologies for outstanding contribution to platform engineering and automation initiatives.</p>
        <div class="mt-4 flex flex-wrap justify-center gap-2">
          <span class="text-xs px-2 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">HCL Technologies</span>
        </div>
      </div>

      <div class="bg-white/[0.02] border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 hover:-translate-y-1 transition-all text-center">
        <div class="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
          <i class="fas fa-shield-alt text-2xl text-green-400"></i>
        </div>
        <h3 class="font-bold text-white mb-2">Dell Secure Dev Certification</h3>
        <p class="text-sm text-gray-500">Certified in Secure Development Lifecycle practices by Dell Technologies — applied to production system hardening.</p>
        <div class="mt-4 flex flex-wrap justify-center gap-2">
          <span class="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">Security</span>
          <span class="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">Dell EMC</span>
        </div>
      </div>

    </div>
  </div>
</section>


<!-- ╔══════════════════════════════════════════╗
     ║                 BLOG                     ║
     ╚══════════════════════════════════════════╝ -->
<section id="blog" class="py-24 px-6 bg-[#0d0d1f]">
  <div class="max-w-5xl mx-auto">
    <div class="reveal text-center mb-16">
      <p class="section-label">// published insights</p>
      <h2 class="text-3xl md:text-4xl font-bold text-white">Blog</h2>
      <p class="text-gray-500 mt-3 max-w-2xl mx-auto">A collection of practical write-ups on AI, evaluation science, and production-grade automation. Each article below is designed as a 5-minute read.</p>
    </div>

    <!-- Blog list -->
    <div class="reveal mb-12 bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6">
      <p class="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Published Topics</p>
      <ol class="space-y-3 text-sm text-gray-300 list-decimal list-inside">
        <li><a href="#blog-post-1" class="hover:text-brand-400 transition">Towards developing future-ready skills with generative AI</a></li>
        <li><a href="#blog-post-2" class="hover:text-brand-400 transition">Building better AI benchmarks: How many raters are enough?</a></li>
        <li><a href="#blog-post-3" class="hover:text-brand-400 transition">Evaluating alignment of behavioral dispositions in LLMs</a></li>
        <li><a href="#blog-post-4" class="hover:text-brand-400 transition">Protecting cities with AI-driven flash flood forecasting</a></li>
        <li><a href="#blog-post-5" class="hover:text-brand-400 transition">LangChain &amp; LangGraph: Building intelligent AI pipelines and stateful agent workflows</a></li>
      </ol>
    </div>

    <div class="reveal space-y-8">
      <article id="blog-post-1" class="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 hover:border-brand-500/35 transition">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
          <h3 class="text-xl md:text-2xl font-bold text-white">Towards developing future-ready skills with generative AI</h3>
          <span class="text-xs px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300">5 min read</span>
        </div>
        <div class="mb-6">
          <div class="relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-black" style="padding-top:56.25%;">
            <video
              class="absolute inset-0 h-full w-full"
              controls
              autoplay
              muted
              loop
              preload="metadata"
              playsinline
              poster="https://images.pexels.com/videos/3195394/free-video-3195394.jpg?auto=compress&cs=tinysrgb&dpr=1&w=1200">
              <source src="VANTAGE-SOCIAL_LOOP.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p class="mt-2 text-xs text-gray-500">Featured video for this topic. If playback is blocked in your browser, <a href="VANTAGE-SOCIAL_LOOP.mp4" target="_blank" rel="noopener noreferrer" class="text-brand-400 hover:text-brand-300">open video in new tab</a>.</p>
        </div>
        <div class="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
          <p>Generative AI is changing the definition of professional readiness. In earlier technology waves, workers benefited mostly by learning a new tool. Today, the shift is deeper: knowledge work itself is being reorganized around human-AI collaboration. Future-ready professionals are not those who merely prompt a model, but those who can frame problems well, validate machine outputs, and translate generated artifacts into reliable business outcomes. This means that skill development can no longer be divided into technical versus non-technical tracks. Both are converging into a practical capability: using AI to reason faster while keeping quality, ethics, and accountability intact.</p>
          <p>A useful way to think about this is through three stacked layers. The first is AI literacy: understanding model strengths, common failure modes, and data limitations. The second is workflow integration: redesigning daily activities so that AI handles repetitive synthesis while humans focus on judgment and decision-making. The third is governance maturity: applying policy, security, and traceability practices so AI usage is safe and auditable. Teams often overinvest in the first layer and underinvest in the other two. As a result, they see impressive demos but limited production value. Sustainable capability comes when all three layers are developed together.</p>
          <p>From a skills roadmap perspective, prompt writing is only the entry point. High-impact professionals learn decomposition, which is the ability to split ambiguous tasks into machine-solvable units. They build evaluation habits, such as checking output consistency across scenarios and identifying hallucination triggers. They also improve domain grounding by attaching AI outputs to verified enterprise knowledge sources, logs, and structured systems. In practical terms, this can include retrieval-augmented assistants for support teams, model-generated test cases in engineering, and AI-assisted policy draft reviews in compliance functions. The winning pattern is not automation for its own sake, but augmentation with measurable throughput and quality gains.</p>
          <p>Organizations that want future-ready talent should redesign learning programs around real operational problems. Instead of broad lectures, run short challenge-based cohorts where teams solve production-adjacent tasks with AI and report metrics. Track how quickly participants move from idea to validated output. Reward responsible experimentation, especially where teams document mistakes and corrective patterns. This builds institutional knowledge and lowers the risk of repeating the same failure modes. Leadership also plays a critical role by setting clear boundaries on privacy, data usage, and model selection, enabling teams to innovate confidently within guardrails rather than hesitating under uncertainty.</p>
          <p>Over the next few years, the most valuable professionals will combine technical fluency with systems thinking. They will know when to trust AI acceleration and when to slow down for human review. They will communicate model uncertainty to stakeholders in plain language and design fallback paths for high-risk decisions. In other words, future-ready skill development with generative AI is less about chasing every new model release and more about building durable operating habits. Individuals and teams that internalize this mindset will remain adaptive, credible, and effective even as the AI landscape continues to evolve rapidly.</p>
        </div>
      </article>

      <article id="blog-post-2" class="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 hover:border-sky-500/35 transition">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
          <h3 class="text-xl md:text-2xl font-bold text-white">Building better AI benchmarks: How many raters are enough?</h3>
          <span class="text-xs px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300">5 min read</span>
        </div>
        <div class="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
          <p>Benchmarking AI systems has become easier to launch and harder to trust. Many teams now evaluate models with small rater pools and assume that average scores represent objective quality. In reality, human evaluation introduces variance from differences in expertise, interpretation, fatigue, and context. The central question is not simply how many raters to recruit, but how much rating uncertainty an organization is willing to accept for a decision. If the benchmark will influence production rollouts, safety policy, or customer-facing behavior, weak rater design can create expensive misjudgments that look statistically confident on paper.</p>
          <p>A practical approach starts with task criticality. Low-risk content tasks may tolerate wider confidence intervals and fewer raters per sample. High-risk tasks, such as medical summarization, incident triage, or legal drafting support, require tighter intervals and stronger agreement analysis. Rather than choosing a fixed number up front, teams should run pilot rounds and estimate inter-rater reliability using measures like Krippendorff's alpha or weighted agreement metrics aligned to task labels. If reliability is low, adding more raters without improving rubric quality often wastes budget. Better gains come from clarifying instructions, adding examples, and training raters on edge cases before scale-up.</p>
          <p>Many mature programs use adaptive allocation. Straightforward samples can be rated by fewer people, while ambiguous or high-disagreement samples receive additional reviews. This reduces cost while preserving confidence where it matters most. Another useful pattern is calibration sets: a subset of anchor items reviewed repeatedly across cohorts. Calibration reveals drift over time and highlights whether observed model improvements are real or simply artifacts of changing rater behavior. Teams should also separate domain experts and general raters when possible. Expert-heavy pools are slower and more expensive, but essential for nuanced tasks where subtle errors can carry disproportionate consequences.</p>
          <p>It is also important to connect rater design with downstream decisions. Suppose two model versions differ by a small margin in benchmark score. If that difference is smaller than the uncertainty band induced by rater variability, the result should be treated as inconclusive. In that case, teams may need more ratings, better rubrics, or scenario-specific testing before shipping. Conversely, when differences are large and robust across slices, fewer raters may be sufficient. This decision-theoretic framing keeps benchmarking honest: the point is not to maximize sample size blindly, but to gather enough evidence to support a high-stakes choice with appropriate confidence.</p>
          <p>So, how many raters are enough? The answer is conditional, but the process can be disciplined. Start with pilot reliability, define acceptable uncertainty thresholds, use adaptive adjudication for contentious samples, and report confidence intervals alongside mean scores. Publish rubric versions and calibration outcomes for transparency. Benchmarks become more credible when they describe not only model performance, but also evaluation quality. In an ecosystem flooded with leaderboard claims, teams that invest in rigorous rater methodology will make better deployment decisions and build stronger trust with stakeholders, regulators, and customers.</p>
        </div>
      </article>

      <article id="blog-post-3" class="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 hover:border-purple-500/35 transition">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
          <h3 class="text-xl md:text-2xl font-bold text-white">Evaluating alignment of behavioral dispositions in LLMs</h3>
          <span class="text-xs px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">5 min read</span>
        </div>
        <div class="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
          <p>Alignment discussions often focus on obvious failures such as toxic output, unsafe instructions, or factual hallucinations. Yet many real-world harms emerge from subtler behavioral dispositions: excessive confidence, sycophancy, evasiveness, over-deference to authority, or inconsistency under pressure. These traits can influence user decisions even when surface-level responses appear acceptable. Evaluating alignment therefore requires more than static safety filters. It requires understanding how models behave across interaction patterns, user personas, and incentive structures. A model that is polite and factual in isolated prompts may still show problematic tendencies in multi-turn contexts where social cues shape its responses.</p>
          <p>A robust evaluation framework begins with explicit behavioral dimensions. Teams can define dispositions such as epistemic humility, uncertainty disclosure, refusal consistency, and manipulation resistance. Each dimension should include positive and negative examples so raters know what to score. Scenario design matters: use adversarial prompts, authority-framed prompts, emotionally loaded prompts, and ambiguous prompts to stress behavioral boundaries. It is useful to include neutral baselines too, because over-tuning against adversarial behavior can degrade normal usefulness. Alignment is not just refusal strength; it is balanced conduct that preserves safety while remaining helpful and context-aware.</p>
          <p>Measurement should combine qualitative and quantitative signals. Human ratings capture nuanced tone and intent, while automated probes detect broad behavioral drift across large test sets. Pairwise comparisons can be especially effective for identifying subtle disposition differences between model versions. Longitudinal testing is equally important. A model that performs well immediately after tuning may drift after updates to retrieval pipelines, system prompts, or moderation layers. Tracking disposition metrics as part of release gates helps catch regressions before production impact. Teams should also evaluate across languages and cultural contexts, since alignment assumptions may not transfer cleanly between regions.</p>
          <p>Operational alignment requires closing the loop between evaluation and intervention. If a model shows overconfidence, product design can enforce confidence cues, citation requirements, or escalation flows for sensitive tasks. If sycophancy is detected, instruction hierarchies and preference objectives can be adjusted to prioritize factual grounding over user pleasing. Governance teams should document known behavioral limitations and communicate them to end users in clear terms. This transparency reduces misuse and sets realistic expectations. Importantly, no single benchmark can certify universal alignment. Behavioral safety is contextual and must be continuously monitored as use cases evolve.</p>
          <p>The long-term goal is to treat behavioral alignment like reliability engineering rather than one-time compliance. Define target dispositions, stress-test them systematically, monitor them in production, and remediate quickly when drift appears. This mindset helps organizations move beyond checkbox safety and toward trustworthy AI systems that behave consistently under real pressure. As LLMs become embedded in decision workflows, evaluating behavioral dispositions is not optional. It is a core requirement for reducing risk, protecting users, and maintaining confidence that the model supports human goals instead of subtly undermining them.</p>
        </div>
      </article>

      <article id="blog-post-4" class="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 hover:border-green-500/35 transition">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
          <h3 class="text-xl md:text-2xl font-bold text-white">Protecting cities with AI-driven flash flood forecasting</h3>
          <span class="text-xs px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-300">5 min read</span>
        </div>
        <div class="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
          <p>Flash floods are among the most disruptive urban climate risks because they develop quickly and overwhelm static drainage assumptions. Traditional forecasting pipelines often rely on coarse temporal resolution or delayed reporting, leaving city responders with narrow decision windows. AI-driven forecasting can improve this by fusing heterogeneous data streams, including radar intensity, satellite imagery, river gauge telemetry, terrain models, and urban drainage maps. The real advantage is not only prediction accuracy, but prediction speed and localization. When responders receive street-level risk alerts earlier, they can pre-position resources, reroute traffic, and issue targeted advisories before conditions deteriorate.</p>
          <p>Building such systems starts with data engineering discipline. Hydrological data is noisy, patchy, and often siloed across agencies. AI pipelines must handle missing values, sensor drift, and inconsistent update cadence. Feature design should include rainfall accumulation windows, soil saturation proxies, upstream flow trends, and built-environment variables such as impervious surface ratios. Hybrid modeling is often effective: physics-informed constraints preserve hydrological plausibility, while machine learning captures nonlinear micro-patterns in dense urban areas. This combination helps avoid black-box predictions that look impressive historically but fail under unusual storm regimes.</p>
          <p>Forecast usefulness depends on decision integration. City teams do not need abstract probabilities alone; they need action-ready outputs tied to operational thresholds. A good system translates predicted water levels into clear risk categories by zone, expected onset time, and recommended actions. For example, maintenance crews may be dispatched when drain overflow risk crosses a threshold, while schools and hospitals receive higher-priority alerts for evacuation readiness. Explainability tools, such as feature contribution summaries, can improve trust among emergency managers who must justify interventions publicly. If stakeholders cannot interpret why a warning was raised, response confidence may remain low even when the model is accurate.</p>
          <p>Equity is another critical factor. Flood impacts are rarely uniform across a city. Lower-income neighborhoods often face weaker drainage infrastructure and slower recovery capacity. AI systems should include fairness-aware evaluation to ensure warnings are not systematically less accurate in vulnerable zones due to poor sensor coverage. Investment in instrumentation and data partnerships should prioritize blind spots, not only central business districts. Privacy and governance must also be addressed, especially when integrating mobility or crowdsourced incident data. Clear policies on data retention, access control, and incident auditing help maintain public trust in predictive infrastructure.</p>
          <p>AI-driven flash flood forecasting is most powerful when treated as a city resilience platform rather than a standalone model. Continuous retraining, post-event backtesting, and cross-agency incident reviews can steadily improve performance. Over time, forecasts can inform infrastructure planning, revealing where drainage upgrades or green runoff mitigation will have the highest impact. As climate variability intensifies, cities need forecasting systems that are adaptive, transparent, and operationally embedded. Done right, AI does not replace emergency expertise; it amplifies it by turning fragmented environmental signals into timely, actionable intelligence that protects lives and critical urban services.</p>
        </div>
      </article>
      <!-- ═══════════════════════════════════════════════════════════════
           BLOG POST 5 — LangChain & LangGraph
           ═══════════════════════════════════════════════════════════════ -->
      <article id="blog-post-5" class="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 hover:border-orange-500/35 transition">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
          <h3 class="text-xl md:text-2xl font-bold text-white">LangChain &amp; LangGraph: Building intelligent AI pipelines and stateful agent workflows</h3>
          <span class="text-xs px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300">8 min read</span>
        </div>

        <!-- ── Intro ── -->
        <div class="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base mb-8">
          <p>As large language models move from isolated demos into production systems, the engineering layer around them becomes as important as the models themselves. Two frameworks have emerged as go-to tools for this challenge: <strong class="text-white">LangChain</strong> and <strong class="text-orange-300">LangGraph</strong>. LangChain provides composable building blocks for LLM applications, while LangGraph extends it with graph-based, stateful multi-agent orchestration. Understanding both — their purposes, structures, applications, and trade-offs — is essential for anyone building serious AI-powered products.</p>
        </div>

        <!-- ── LANGCHAIN ── -->
        <div class="mb-10">
          <h4 class="text-lg font-bold text-orange-300 mb-5 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-orange-400 inline-block"></span> LangChain</h4>

          <!-- Purpose -->
          <div class="mb-5">
            <p class="text-xs uppercase tracking-[0.15em] text-brand-400 font-semibold mb-2">Purpose</p>
            <p class="text-gray-400 text-sm leading-relaxed">LangChain is an open-source framework designed to simplify the development of applications powered by language models. Its core purpose is to <strong class="text-white">chain together</strong> LLM calls, tools, memory, and data retrievers into coherent, repeatable pipelines. Rather than writing raw API calls and glue code for every interaction, developers compose reusable components — chains, prompts, agents, tools — into applications that can reason, retrieve, and respond with context.</p>
          </div>

          <!-- Structure -->
          <div class="mb-5">
            <p class="text-xs uppercase tracking-[0.15em] text-brand-400 font-semibold mb-2">Structure</p>
            <ul class="text-gray-400 text-sm space-y-1.5 list-none">
              <li class="flex gap-2"><span class="text-brand-400 mt-0.5">▸</span><span><strong class="text-white">Chains</strong> — Sequential compositions of prompts, LLM calls, and output parsers that run step-by-step.</span></li>
              <li class="flex gap-2"><span class="text-brand-400 mt-0.5">▸</span><span><strong class="text-white">Agents</strong> — LLM-driven decision loops that choose which tools to invoke based on the current goal.</span></li>
              <li class="flex gap-2"><span class="text-brand-400 mt-0.5">▸</span><span><strong class="text-white">Memory</strong> — Conversation history stores (buffer, summary, vector-backed) injected into prompt context.</span></li>
              <li class="flex gap-2"><span class="text-brand-400 mt-0.5">▸</span><span><strong class="text-white">Retrievers / VectorStores</strong> — RAG components that fetch relevant documents from FAISS, Pinecone, Chroma, etc.</span></li>
              <li class="flex gap-2"><span class="text-brand-400 mt-0.5">▸</span><span><strong class="text-white">Tools</strong> — Callable integrations (web search, calculators, SQL, APIs) the agent can invoke.</span></li>
              <li class="flex gap-2"><span class="text-brand-400 mt-0.5">▸</span><span><strong class="text-white">LCEL (LangChain Expression Language)</strong> — A declarative pipe syntax ( | ) for composing components with streaming support.</span></li>
            </ul>
          </div>

          <!-- Applications -->
          <div class="mb-5">
            <p class="text-xs uppercase tracking-[0.15em] text-brand-400 font-semibold mb-2">Applications</p>
            <div class="flex flex-wrap gap-2">
              <span class="skill-badge" style="color:#fb923c; border-color:rgba(251,146,60,0.3); background:rgba(251,146,60,0.08)">RAG Q&amp;A over documents</span>
              <span class="skill-badge" style="color:#fb923c; border-color:rgba(251,146,60,0.3); background:rgba(251,146,60,0.08)">Conversational chatbots</span>
              <span class="skill-badge" style="color:#fb923c; border-color:rgba(251,146,60,0.3); background:rgba(251,146,60,0.08)">Code generation assistants</span>
              <span class="skill-badge" style="color:#fb923c; border-color:rgba(251,146,60,0.3); background:rgba(251,146,60,0.08)">Data extraction pipelines</span>
              <span class="skill-badge" style="color:#fb923c; border-color:rgba(251,146,60,0.3); background:rgba(251,146,60,0.08)">Summarization workflows</span>
              <span class="skill-badge" style="color:#fb923c; border-color:rgba(251,146,60,0.3); background:rgba(251,146,60,0.08)">Tool-using ReAct agents</span>
            </div>
          </div>

          <!-- Strengths & Limitations -->
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="bg-green-500/[0.06] border border-green-500/20 rounded-xl p-4">
              <p class="text-xs uppercase tracking-[0.15em] text-green-400 font-semibold mb-3">Strengths</p>
              <ul class="text-gray-400 text-sm space-y-1.5">
                <li class="flex gap-2"><span class="text-green-400">✓</span> Massive ecosystem of integrations (100+ LLMs, vector stores, tools)</li>
                <li class="flex gap-2"><span class="text-green-400">✓</span> LCEL enables streaming and async out of the box</li>
                <li class="flex gap-2"><span class="text-green-400">✓</span> Rich documentation and active community</li>
                <li class="flex gap-2"><span class="text-green-400">✓</span> Easy RAG setup with built-in document loaders</li>
                <li class="flex gap-2"><span class="text-green-400">✓</span> LangSmith observability for tracing &amp; debugging</li>
              </ul>
            </div>
            <div class="bg-red-500/[0.06] border border-red-500/20 rounded-xl p-4">
              <p class="text-xs uppercase tracking-[0.15em] text-red-400 font-semibold mb-3">Limitations</p>
              <ul class="text-gray-400 text-sm space-y-1.5">
                <li class="flex gap-2"><span class="text-red-400">✗</span> Abstraction layers can hide complexity and debugging is harder</li>
                <li class="flex gap-2"><span class="text-red-400">✗</span> Rapid API churn — code written months ago often breaks</li>
                <li class="flex gap-2"><span class="text-red-400">✗</span> Simple agents lack persistent state across sessions</li>
                <li class="flex gap-2"><span class="text-red-400">✗</span> Parallel / branching multi-agent flows are awkward to express</li>
                <li class="flex gap-2"><span class="text-red-400">✗</span> Overhead for trivial single-prompt use cases</li>
              </ul>
            </div>
          </div>

          <!-- LangChain Code Example -->
          <div>
            <p class="text-xs uppercase tracking-[0.15em] text-brand-400 font-semibold mb-3">Example Code — RAG pipeline with LCEL</p>
            <div class="relative font-mono text-xs bg-[#080812] border border-white/[0.08] rounded-xl overflow-x-auto">
              <div class="flex gap-2 items-center px-4 pt-3 pb-2 border-b border-white/[0.06]">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <span class="ml-2 text-gray-600 text-[10px]">langchain_rag.py</span>
              </div>
              <pre class="p-4 leading-relaxed overflow-x-auto"><code><span class="text-gray-500"># pip install langchain langchain-openai faiss-cpu</span>
<span class="text-brand-400">from</span> <span class="text-green-300">langchain_openai</span> <span class="text-brand-400">import</span> ChatOpenAI, OpenAIEmbeddings
<span class="text-brand-400">from</span> <span class="text-green-300">langchain_community.vectorstores</span> <span class="text-brand-400">import</span> FAISS
<span class="text-brand-400">from</span> <span class="text-green-300">langchain_core.prompts</span> <span class="text-brand-400">import</span> ChatPromptTemplate
<span class="text-brand-400">from</span> <span class="text-green-300">langchain_core.output_parsers</span> <span class="text-brand-400">import</span> StrOutputParser
<span class="text-brand-400">from</span> <span class="text-green-300">langchain_core.runnables</span> <span class="text-brand-400">import</span> RunnablePassthrough

<span class="text-gray-500"># 1. Build a vector store from documents</span>
docs = [<span class="text-yellow-300">"LangChain simplifies LLM app development."</span>,
        <span class="text-yellow-300">"LangGraph adds stateful multi-agent orchestration."</span>,
        <span class="text-yellow-300">"RAG combines retrieval with generation for accuracy."</span>]

vectorstore = FAISS.from_texts(docs, embedding=OpenAIEmbeddings())
retriever   = vectorstore.as_retriever(search_kwargs={<span class="text-yellow-300">"k"</span>: <span class="text-purple-300">2</span>})

<span class="text-gray-500"># 2. Define the prompt template</span>
prompt = ChatPromptTemplate.from_template(<span class="text-yellow-300">"""
Answer the question using ONLY the context below.
Context: {context}
Question: {question}
"""</span>)

<span class="text-gray-500"># 3. Compose the RAG chain with LCEL pipe syntax</span>
llm   = ChatOpenAI(model=<span class="text-yellow-300">"gpt-4o-mini"</span>, temperature=<span class="text-purple-300">0</span>)
chain = (
    {<span class="text-yellow-300">"context"</span>: retriever, <span class="text-yellow-300">"question"</span>: RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)

<span class="text-gray-500"># 4. Invoke</span>
answer = chain.invoke(<span class="text-yellow-300">"What does LangGraph add?"</span>)
<span class="text-brand-400">print</span>(answer)
<span class="text-gray-500"># Output: "LangGraph adds stateful multi-agent orchestration."</span></code></pre>
            </div>
          </div>
        </div>

        <!-- ── LANGGRAPH ── -->
        <div class="mb-10">
          <h4 class="text-lg font-bold text-sky-300 mb-5 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-sky-400 inline-block"></span> LangGraph</h4>

          <!-- Purpose -->
          <div class="mb-5">
            <p class="text-xs uppercase tracking-[0.15em] text-sky-400 font-semibold mb-2">Purpose</p>
            <p class="text-gray-400 text-sm leading-relaxed">LangGraph is a library built on top of LangChain that models agent workflows as <strong class="text-white">directed graphs</strong>. Each node is a processing step (LLM call, tool execution, human checkpoint) and edges encode the control flow — including conditional branches and cycles. Its defining purpose is enabling <strong class="text-white">stateful, long-running, multi-agent systems</strong> where the same agent may loop back, hand off to another agent, or pause and wait for human input, all while preserving a typed state object across every step.</p>
          </div>

          <!-- Structure -->
          <div class="mb-5">
            <p class="text-xs uppercase tracking-[0.15em] text-sky-400 font-semibold mb-2">Structure</p>
            <ul class="text-gray-400 text-sm space-y-1.5 list-none">
              <li class="flex gap-2"><span class="text-sky-400 mt-0.5">▸</span><span><strong class="text-white">StateGraph</strong> — The graph container; holds a typed <code class="font-mono text-xs bg-white/[0.06] px-1 rounded">TypedDict</code> state shared across all nodes.</span></li>
              <li class="flex gap-2"><span class="text-sky-400 mt-0.5">▸</span><span><strong class="text-white">Nodes</strong> — Python functions (or LLM chains) that receive the current state, do work, and return a partial state update.</span></li>
              <li class="flex gap-2"><span class="text-sky-400 mt-0.5">▸</span><span><strong class="text-white">Edges</strong> — Unconditional transitions (A → B) or conditional edges that pick the next node based on state values.</span></li>
              <li class="flex gap-2"><span class="text-sky-400 mt-0.5">▸</span><span><strong class="text-white">START / END</strong> — Reserved sentinel nodes marking graph entry and exit points.</span></li>
              <li class="flex gap-2"><span class="text-sky-400 mt-0.5">▸</span><span><strong class="text-white">Checkpointers</strong> — Pluggable persistence backends (SQLite, Redis, Postgres) that snapshot state after every node for resumability.</span></li>
              <li class="flex gap-2"><span class="text-sky-400 mt-0.5">▸</span><span><strong class="text-white">Human-in-the-loop</strong> — <code class="font-mono text-xs bg-white/[0.06] px-1 rounded">interrupt_before</code> / <code class="font-mono text-xs bg-white/[0.06] px-1 rounded">interrupt_after</code> hooks pause execution for approval or correction before proceeding.</span></li>
            </ul>
          </div>

          <!-- Applications -->
          <div class="mb-5">
            <p class="text-xs uppercase tracking-[0.15em] text-sky-400 font-semibold mb-2">Applications</p>
            <div class="flex flex-wrap gap-2">
              <span class="skill-badge" style="color:#38bdf8; border-color:rgba(56,189,248,0.3); background:rgba(56,189,248,0.08)">Multi-agent research systems</span>
              <span class="skill-badge" style="color:#38bdf8; border-color:rgba(56,189,248,0.3); background:rgba(56,189,248,0.08)">Human-in-the-loop approval flows</span>
              <span class="skill-badge" style="color:#38bdf8; border-color:rgba(56,189,248,0.3); background:rgba(56,189,248,0.08)">Autonomous coding agents</span>
              <span class="skill-badge" style="color:#38bdf8; border-color:rgba(56,189,248,0.3); background:rgba(56,189,248,0.08)">Self-correcting refiner loops</span>
              <span class="skill-badge" style="color:#38bdf8; border-color:rgba(56,189,248,0.3); background:rgba(56,189,248,0.08)">Customer support escalation</span>
              <span class="skill-badge" style="color:#38bdf8; border-color:rgba(56,189,248,0.3); background:rgba(56,189,248,0.08)">Long-running workflow automation</span>
            </div>
          </div>

          <!-- Strengths & Limitations -->
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="bg-green-500/[0.06] border border-green-500/20 rounded-xl p-4">
              <p class="text-xs uppercase tracking-[0.15em] text-green-400 font-semibold mb-3">Strengths</p>
              <ul class="text-gray-400 text-sm space-y-1.5">
                <li class="flex gap-2"><span class="text-green-400">✓</span> Native support for cycles, branching, and conditional routing</li>
                <li class="flex gap-2"><span class="text-green-400">✓</span> Persistent, resumable state across steps via checkpointers</li>
                <li class="flex gap-2"><span class="text-green-400">✓</span> First-class human-in-the-loop interrupt support</li>
                <li class="flex gap-2"><span class="text-green-400">✓</span> Explicit, inspectable graph topology (easy to visualize &amp; reason about)</li>
                <li class="flex gap-2"><span class="text-green-400">✓</span> Production-grade streaming of intermediate node outputs</li>
              </ul>
            </div>
            <div class="bg-red-500/[0.06] border border-red-500/20 rounded-xl p-4">
              <p class="text-xs uppercase tracking-[0.15em] text-red-400 font-semibold mb-3">Limitations</p>
              <ul class="text-gray-400 text-sm space-y-1.5">
                <li class="flex gap-2"><span class="text-red-400">✗</span> Higher conceptual overhead — graph thinking required upfront</li>
                <li class="flex gap-2"><span class="text-red-400">✗</span> Verbose boilerplate for simple linear workflows</li>
                <li class="flex gap-2"><span class="text-red-400">✗</span> Still maturing — breaking changes in state schema APIs occur</li>
                <li class="flex gap-2"><span class="text-red-400">✗</span> Debugging looping agents can be non-trivial without LangSmith</li>
                <li class="flex gap-2"><span class="text-red-400">✗</span> Requires careful loop-termination design to avoid infinite cycles</li>
              </ul>
            </div>
          </div>

          <!-- LangGraph Code Example -->
          <div>
            <p class="text-xs uppercase tracking-[0.15em] text-sky-400 font-semibold mb-3">Example Code — ReAct agent with self-correction loop</p>
            <div class="relative font-mono text-xs bg-[#080812] border border-white/[0.08] rounded-xl overflow-x-auto">
              <div class="flex gap-2 items-center px-4 pt-3 pb-2 border-b border-white/[0.06]">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <span class="ml-2 text-gray-600 text-[10px]">langgraph_agent.py</span>
              </div>
              <pre class="p-4 leading-relaxed overflow-x-auto"><code><span class="text-gray-500"># pip install langgraph langchain-openai</span>
<span class="text-brand-400">from</span> <span class="text-green-300">typing</span> <span class="text-brand-400">import</span> TypedDict, Annotated, Literal
<span class="text-brand-400">from</span> <span class="text-green-300">langgraph.graph</span> <span class="text-brand-400">import</span> StateGraph, START, END
<span class="text-brand-400">from</span> <span class="text-green-300">langchain_openai</span> <span class="text-brand-400">import</span> ChatOpenAI
<span class="text-brand-400">from</span> <span class="text-green-300">langchain_core.messages</span> <span class="text-brand-400">import</span> HumanMessage, AIMessage

<span class="text-gray-500"># ── 1. Define shared state ──────────────────────────────────</span>
<span class="text-brand-400">class</span> <span class="text-yellow-300">AgentState</span>(TypedDict):
    question: str
    draft:    str
    critique: str
    retries:  int

<span class="text-gray-500"># ── 2. Define nodes ────────────────────────────────────────</span>
llm = ChatOpenAI(model=<span class="text-yellow-300">"gpt-4o-mini"</span>, temperature=<span class="text-purple-300">0.3</span>)

<span class="text-brand-400">def</span> <span class="text-sky-300">generate_draft</span>(state: AgentState) -&gt; AgentState:
    response = llm.invoke([HumanMessage(content=state[<span class="text-yellow-300">"question"</span>])])
    <span class="text-brand-400">return</span> {<span class="text-yellow-300">"draft"</span>: response.content, <span class="text-yellow-300">"retries"</span>: state[<span class="text-yellow-300">"retries"</span>]}

<span class="text-brand-400">def</span> <span class="text-sky-300">critique_draft</span>(state: AgentState) -&gt; AgentState:
    prompt = <span class="text-yellow-300">f"Is this answer correct and complete? Reply YES or NO + reason.\n{state['draft']}"</span>
    response = llm.invoke([HumanMessage(content=prompt)])
    <span class="text-brand-400">return</span> {<span class="text-yellow-300">"critique"</span>: response.content}

<span class="text-brand-400">def</span> <span class="text-sky-300">revise_draft</span>(state: AgentState) -&gt; AgentState:
    prompt = <span class="text-yellow-300">f"Revise this answer addressing the critique.\nDraft: {state['draft']}\nCritique: {state['critique']}"</span>
    response = llm.invoke([HumanMessage(content=prompt)])
    <span class="text-brand-400">return</span> {<span class="text-yellow-300">"draft"</span>: response.content, <span class="text-yellow-300">"retries"</span>: state[<span class="text-yellow-300">"retries"</span>] + <span class="text-purple-300">1</span>}

<span class="text-gray-500"># ── 3. Conditional edge — loop or finish ───────────────────</span>
<span class="text-brand-400">def</span> <span class="text-sky-300">should_revise</span>(state: AgentState) -&gt; Literal[<span class="text-yellow-300">"revise"</span>, <span class="text-yellow-300">"end"</span>]:
    <span class="text-brand-400">if</span> state[<span class="text-yellow-300">"retries"</span>] &gt;= <span class="text-purple-300">2</span>:           <span class="text-gray-500"># hard stop after 2 retries</span>
        <span class="text-brand-400">return</span> <span class="text-yellow-300">"end"</span>
    <span class="text-brand-400">if</span> <span class="text-yellow-300">"YES"</span> <span class="text-brand-400">in</span> state[<span class="text-yellow-300">"critique"</span>].upper():
        <span class="text-brand-400">return</span> <span class="text-yellow-300">"end"</span>
    <span class="text-brand-400">return</span> <span class="text-yellow-300">"revise"</span>

<span class="text-gray-500"># ── 4. Build and compile the graph ─────────────────────────</span>
graph = StateGraph(AgentState)
graph.add_node(<span class="text-yellow-300">"generate"</span>,  generate_draft)
graph.add_node(<span class="text-yellow-300">"critique"</span>,  critique_draft)
graph.add_node(<span class="text-yellow-300">"revise"</span>,    revise_draft)

graph.add_edge(START,        <span class="text-yellow-300">"generate"</span>)
graph.add_edge(<span class="text-yellow-300">"generate"</span>,   <span class="text-yellow-300">"critique"</span>)
graph.add_conditional_edges(<span class="text-yellow-300">"critique"</span>, should_revise,
    {<span class="text-yellow-300">"revise"</span>: <span class="text-yellow-300">"revise"</span>, <span class="text-yellow-300">"end"</span>: END})
graph.add_edge(<span class="text-yellow-300">"revise"</span>,    <span class="text-yellow-300">"critique"</span>)  <span class="text-gray-500"># loop back</span>

app = graph.compile()

<span class="text-gray-500"># ── 5. Run the agent ───────────────────────────────────────</span>
result = app.invoke({
    <span class="text-yellow-300">"question"</span>: <span class="text-yellow-300">"Explain the difference between LangChain and LangGraph."</span>,
    <span class="text-yellow-300">"draft"</span>: <span class="text-yellow-300">""</span>, <span class="text-yellow-300">"critique"</span>: <span class="text-yellow-300">""</span>, <span class="text-yellow-300">"retries"</span>: <span class="text-purple-300">0</span>
})
<span class="text-brand-400">print</span>(result[<span class="text-yellow-300">"draft"</span>])</code></pre>
            </div>
          </div>
        </div>

        <!-- ── COMPARISON TABLE ── -->
        <div>
          <p class="text-xs uppercase tracking-[0.15em] text-white font-semibold mb-4">LangChain vs LangGraph — Side-by-side comparison</p>
          <div class="overflow-x-auto rounded-xl border border-white/[0.08]">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="bg-white/[0.04] border-b border-white/[0.08]">
                  <th class="px-4 py-3 text-gray-300 font-semibold w-1/4">Dimension</th>
                  <th class="px-4 py-3 text-orange-300 font-semibold w-[37.5%]">LangChain</th>
                  <th class="px-4 py-3 text-sky-300 font-semibold w-[37.5%]">LangGraph</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/[0.05]">
                <tr class="hover:bg-white/[0.02] transition">
                  <td class="px-4 py-3 text-gray-400 font-medium">Core abstraction</td>
                  <td class="px-4 py-3 text-gray-400">Chains &amp; Agents (sequential / ReAct loop)</td>
                  <td class="px-4 py-3 text-gray-400">Directed graph of nodes with shared typed state</td>
                </tr>
                <tr class="hover:bg-white/[0.02] transition">
                  <td class="px-4 py-3 text-gray-400 font-medium">State management</td>
                  <td class="px-4 py-3 text-gray-400">Memory objects injected per call; no native persistence</td>
                  <td class="px-4 py-3 text-gray-400">First-class typed state; persistent via checkpointers</td>
                </tr>
                <tr class="hover:bg-white/[0.02] transition">
                  <td class="px-4 py-3 text-gray-400 font-medium">Control flow</td>
                  <td class="px-4 py-3 text-gray-400">Linear or single-agent loop; branching via router chains</td>
                  <td class="px-4 py-3 text-gray-400">Arbitrary cycles, forks, joins, and conditional edges</td>
                </tr>
                <tr class="hover:bg-white/[0.02] transition">
                  <td class="px-4 py-3 text-gray-400 font-medium">Multi-agent support</td>
                  <td class="px-4 py-3 text-gray-400">Possible but manual; no built-in handoff protocol</td>
                  <td class="px-4 py-3 text-gray-400">Native; agents are nodes with explicit handoff edges</td>
                </tr>
                <tr class="hover:bg-white/[0.02] transition">
                  <td class="px-4 py-3 text-gray-400 font-medium">Human-in-the-loop</td>
                  <td class="px-4 py-3 text-gray-400">Manual interruption; requires custom wrapper logic</td>
                  <td class="px-4 py-3 text-gray-400">Built-in <code class="font-mono text-xs bg-white/[0.06] px-1 rounded">interrupt_before/after</code> with state resume</td>
                </tr>
                <tr class="hover:bg-white/[0.02] transition">
                  <td class="px-4 py-3 text-gray-400 font-medium">Ideal use case</td>
                  <td class="px-4 py-3 text-gray-400">RAG apps, chatbots, simple tool-using agents</td>
                  <td class="px-4 py-3 text-gray-400">Long-running agentic workflows needing loops &amp; state</td>
                </tr>
                <tr class="hover:bg-white/[0.02] transition">
                  <td class="px-4 py-3 text-gray-400 font-medium">Learning curve</td>
                  <td class="px-4 py-3 text-gray-400">Low — pipe syntax is intuitive for Python devs</td>
                  <td class="px-4 py-3 text-gray-400">Medium — requires graph &amp; state modeling concepts</td>
                </tr>
                <tr class="hover:bg-white/[0.02] transition">
                  <td class="px-4 py-3 text-gray-400 font-medium">Observability</td>
                  <td class="px-4 py-3 text-gray-400">LangSmith tracing; per-step callbacks</td>
                  <td class="px-4 py-3 text-gray-400">LangSmith + graph step-by-step replay with state diffs</td>
                </tr>
                <tr class="hover:bg-white/[0.02] transition">
                  <td class="px-4 py-3 text-gray-400 font-medium">Relationship</td>
                  <td class="px-4 py-3 text-gray-400">Standalone framework; LangGraph builds on top of it</td>
                  <td class="px-4 py-3 text-gray-400">Extension of LangChain; uses its LLMs, tools &amp; memory</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Closing paragraph -->
          <div class="mt-6 space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
            <p>In practice, LangChain and LangGraph are complementary rather than competing. Start with LangChain when building RAG pipelines, document Q&amp;A systems, or straightforward chatbots — its LCEL syntax delivers fast iteration and a rich integration ecosystem. Reach for LangGraph when your workflow needs persistent state between steps, cycles for self-correction, multi-agent handoffs, or human approval checkpoints. Many production systems use both: LangChain handles the LLM calls and tool integrations inside each node, while LangGraph orchestrates the overall flow. Mastering this combination gives you a powerful, production-grade foundation for virtually any LLM-powered application.</p>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>


<!-- ╔══════════════════════════════════════════╗
     ║               CONTACT                    ║
     ╚══════════════════════════════════════════╝ -->
<section id="contact" class="py-24 px-6 bg-[#0d0d1f]">
  <div class="max-w-4xl mx-auto">
    <div class="reveal text-center mb-16">
      <p class="section-label">// get in touch</p>
      <h2 class="text-3xl md:text-4xl font-bold text-white">Contact Me</h2>
      <p class="text-gray-500 mt-3 max-w-md mx-auto">Open to senior backend, automation, or platform engineering roles. Fill the form and I'll get back to you.</p>
    </div>

    <div class="reveal grid md:grid-cols-2 gap-12 items-start">

      <!-- Left: Contact Info -->
      <div class="space-y-6">
        <div class="flex items-center gap-4 group">
          <div class="w-12 h-12 rounded-xl bg-brand-600/20 flex items-center justify-center group-hover:bg-brand-600/30 transition shrink-0">
            <i class="fas fa-envelope text-brand-400"></i>
          </div>
          <div>
            <p class="text-xs text-gray-600 mb-0.5">Email</p>
            <a href="mailto:ajay.prajapati2691@gmail.com" class="text-white hover:text-brand-400 transition text-sm font-medium">ajay.prajapati2691@gmail.com</a>
          </div>
        </div>

        <div class="flex items-center gap-4 group">
          <div class="w-12 h-12 rounded-xl bg-green-600/20 flex items-center justify-center group-hover:bg-green-600/30 transition shrink-0">
            <i class="fas fa-phone text-green-400"></i>
          </div>
          <div>
            <p class="text-xs text-gray-600 mb-0.5">Phone</p>
            <a href="tel:+919284127529" class="text-white hover:text-green-400 transition text-sm font-medium">+91 92841 27529</a>
          </div>
        </div>

        <div class="flex items-center gap-4 group">
          <div class="w-12 h-12 rounded-xl bg-sky-600/20 flex items-center justify-center group-hover:bg-sky-600/30 transition shrink-0">
            <i class="fab fa-linkedin text-sky-400"></i>
          </div>
          <div>
            <p class="text-xs text-gray-600 mb-0.5">LinkedIn</p>
            <a href="https://www.linkedin.com/in/ajay-prajapati-7280573a/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-sky-400 transition text-sm font-medium">linkedin.com/in/ajay-prajapati</a>
          </div>
        </div>

        <div class="flex items-center gap-4 group">
          <div class="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-600/30 transition shrink-0">
            <i class="fab fa-github text-purple-400"></i>
          </div>
          <div>
            <p class="text-xs text-gray-600 mb-0.5">GitHub</p>
            <a href="https://github.com/ajaypraj" target="_blank" rel="noopener noreferrer" class="text-white hover:text-purple-400 transition text-sm font-medium">github.com/ajay-prajapati</a>
          </div>
        </div>

        <!-- Resume download card -->
        <div class="mt-8 p-5 rounded-xl border border-brand-500/20 bg-brand-600/5">
          <p class="text-sm text-gray-400 mb-3">Want the full picture?</p>
          <a href="resume.pdf" download="Ajay_Prajapati_Resume.pdf"
             class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold transition-all hover:-translate-y-0.5">
            <i class="fas fa-download"></i> Download Resume (PDF)
          </a>
        </div>
      </div>

      <!-- Right: Contact Form (EmailJS) -->
      <form id="contact-form" class="space-y-5" novalidate>
        <div>
          <label class="block text-xs text-gray-500 mb-1.5 font-medium uppercase tracking-wide">Name</label>
          <input type="text" name="from_name" id="from_name" required placeholder="Your full name"
                 class="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 glow-input transition" />
        </div>
        <div>
          <label class="block text-xs text-gray-500 mb-1.5 font-medium uppercase tracking-wide">Email</label>
          <input type="email" name="reply_to" id="reply_to" required placeholder="your@email.com"
                 class="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 glow-input transition" />
        </div>
        <div>
          <label class="block text-xs text-gray-500 mb-1.5 font-medium uppercase tracking-wide">Subject</label>
          <input type="text" name="subject" id="subject" required placeholder="What's this about?"
                 class="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 glow-input transition" />
        </div>
        <div>
          <label class="block text-xs text-gray-500 mb-1.5 font-medium uppercase tracking-wide">Message</label>
          <textarea name="message" id="message" required rows="5" placeholder="Tell me about the opportunity or project..."
                    class="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 glow-input transition resize-none"></textarea>
        </div>

        <!-- Status Message -->
        <div id="form-status" class="hidden text-sm rounded-xl px-4 py-3"></div>

        <button type="submit" id="submit-btn"
                class="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
          <i class="fas fa-paper-plane"></i>
          <span id="btn-text">Send Message</span>
        </button>
      </form>
    </div>
  </div>
</section>


<!-- ╔══════════════════════════════════════════╗
     ║                FOOTER                    ║
     ╚══════════════════════════════════════════╝ -->
<footer class="py-10 px-6 border-t border-white/[0.05]">
  <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
    <p class="font-mono">&lt;AjayP /&gt; — Senior Python Developer</p>
    <p>Designed &amp; built with intent. &copy; 2026 Ajay Prajapati.</p>
    <div class="flex gap-5">
      <a href="mailto:ajay.prajapati2691@gmail.com" class="hover:text-brand-400 transition"><i class="fas fa-envelope"></i></a>
      <a href="https://github.com/ajaypraj" target="_blank" rel="noopener noreferrer" class="hover:text-brand-400 transition"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/ajay-prajapati-7280573a/" target="_blank" rel="noopener noreferrer" class="hover:text-brand-400 transition"><i class="fab fa-linkedin"></i></a>
    </div>
  </div>
</footer>


<!-- ══════════════════ SCRIPTS ══════════════════ -->
<script>

/* ─── EmailJS Init ─────────────────────────────────────────────────────────
   SETUP STEPS (free, takes 5 minutes):
   1. Go to https://www.emailjs.com and create a free account
   2. Add a Service: Gmail → connect ajay.prajapati2691@gmail.com (Service ID will show)
   3. Create an Email Template:
      Subject: "Portfolio Contact: {{subject}}"
      Body: "From: {{from_name}} ({{reply_to}})\n\n{{message}}"
      (Template ID will show)
   4. Go to Account → API Keys → copy your Public Key
   5. Replace the THREE placeholders below with your actual values
   ─────────────────────────────────────────────────────────────────────────── */
const EMAILJS_PUBLIC_KEY   = 'r-tfAoUBn8PlIrqFm';      // ← replace
const EMAILJS_SERVICE_ID   = 'service_406duci';      // ← replace
const EMAILJS_TEMPLATE_ID  = 'template_p3lzz9r';     // ← replace

let emailJsReady = false;

function hasEmailJsConfig() {
  return Boolean(
    EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY.trim() &&
    EMAILJS_SERVICE_ID && EMAILJS_SERVICE_ID.trim() &&
    EMAILJS_TEMPLATE_ID && EMAILJS_TEMPLATE_ID.trim()
  );
}

function getEmailJsErrorMessage(err) {
  if (!err) return '';
  if (typeof err === 'string') return err;
  if (err.text) return String(err.text);
  if (err.message) return String(err.message);
  if (err.status) return `HTTP ${err.status}`;
  try {
    return JSON.stringify(err);
  } catch (_) {
    return '';
  }
}

(function() {
  if (!window.emailjs) {
    console.error('EmailJS SDK not loaded.');
    return;
  }

  if (!hasEmailJsConfig()) {
    console.error('EmailJS config missing. Check public key, service ID, and template ID.');
    return;
  }

  try {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    emailJsReady = true;
  } catch (err) {
    console.error('EmailJS init failed:', err);
  }
})();

/* ─── Contact Form Submit ─────────────────────────────────────────────── */
document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const btn     = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const status  = document.getElementById('form-status');

  // Basic validation
  const name    = document.getElementById('from_name').value.trim();
  const email   = document.getElementById('reply_to').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !subject || !message) {
    showStatus('Please fill in all fields.', 'error');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showStatus('Please enter a valid email address.', 'error');
    return;
  }

  if (!window.emailjs || !emailJsReady) {
    showStatus('Email service is not configured correctly. Please try again in a few minutes.', 'error');
    return;
  }

  // Loading state
  btn.disabled  = true;
  btnText.textContent = 'Sending…';

  // Ensure subject is explicitly included in template variables
  const templateParams = {
    from_name: name,
    reply_to: email,
    subject: subject,
    message: message,
    to_email: 'ajay.prajapati2691@gmail.com'
  };

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      { publicKey: EMAILJS_PUBLIC_KEY }
    );

      showStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
      document.getElementById('contact-form').reset();
  } catch (err) {
    console.error('EmailJS error:', err);
    const detail = getEmailJsErrorMessage(err);
    showStatus(
      'Failed to send. Please email me directly at ajay.prajapati2691@gmail.com' +
      (detail ? ` (${detail})` : ''),
      'error'
    );
  } finally {
    btn.disabled = false;
    btnText.textContent = 'Send Message';
  }
});

function showStatus(msg, type) {
  const el = document.getElementById('form-status');
  el.textContent = msg;
  el.className = 'text-sm rounded-xl px-4 py-3 ' + (type === 'success'
    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
    : 'bg-red-500/10 text-red-400 border border-red-500/20');
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 6000);
}

/* ─── Sticky Navbar ───────────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10,10,20,0.92)';
    navbar.style.backdropFilter = 'blur(12px)';
    navbar.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
  } else {
    navbar.style.background = 'rgba(10,10,20,0)';
    navbar.style.backdropFilter = 'none';
    navbar.style.borderBottom = 'none';
  }
});

/* ─── Mobile menu toggle ──────────────────────────────────────────────── */
document.getElementById('menu-btn').addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});
document.querySelectorAll('.mobile-link').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.add('hidden');
  });
});

/* ─── Scroll Reveal (IntersectionObserver) ────────────────────────────── */
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(function(el) {
  observer.observe(el);
});

/* ─── Active nav highlight on scroll ─────────────────────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', function() {
  let current = '';
  sections.forEach(function(section) {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(function(link) {
    link.classList.remove('text-white');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('text-white');
    }
  });
});

