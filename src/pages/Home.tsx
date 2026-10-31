import { useRef, useEffect, useState } from 'react'

// ==================== HERO ====================
const Hero = () => {
  return (
    <section id="hero" className="pt-10 sm:pt-16 pb-8 reveal relative overflow-hidden">
      {/* Video Intro Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/F2qC1hT6_display.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/60 to-transparent" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left: Systems Bio & Credentials */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-mutedText">
            <span className="w-2 h-2 rounded-full bg-zinc-400" />
            AI AUTOMATION &bull; BACKEND ENGINEERING
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            AI Automation &amp; <br className="hidden sm:inline" />
            <span className="text-zinc-400 font-medium">Backend Engineer</span>
          </h1>

          <p className="text-base sm:text-lg text-zincText leading-relaxed max-w-xl font-normal">
            I build APIs and automation workflows with Node.js/Express, n8n, and AI agent pipelines using OpenAI & Gemini. Currently at Tawiq, a tech startup serving the Saudi and MENA markets with workflow automation and AI Agents.
          </p>

          {/* Core System Specs Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
            <div className="px-3.5 py-1.5 rounded-lg bg-surface border border-surfaceBorder flex items-center gap-2">
              <span className="text-mutedText">SLO:</span>
              <span className="text-white font-semibold">99.9%</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-surface border border-surfaceBorder flex items-center gap-2">
              <span className="text-mutedText">Workflows:</span>
              <span className="text-white font-semibold">10+</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-surface border border-surfaceBorder flex items-center gap-2">
              <span className="text-mutedText">Complaints/Day:</span>
              <span className="text-white font-semibold">50+</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
            <a
              href="/mahmoud_mossad_AI%20Automation%20&%20Backend%20Engineer_resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-3 rounded-lg hover:bg-zinc-200 transition-all duration-200"
            >
              <span>Download CV</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-surface hover:bg-zinc-900 border border-surfaceBorder hover:border-zinc-600 text-zincText hover:text-white px-5 py-3 rounded-lg transition-all duration-200"
            >
              <span>Contact Me</span>
              <span className="text-mutedText">&rarr;</span>
            </a>
            <a
              href="#terminal"
              className="inline-flex items-center gap-2 text-mutedText hover:text-zincText px-3 py-3 transition-colors duration-200"
            >
              <span>Launch Terminal</span>
            </a>
          </div>
        </div>

        {/* Right: Monochromatic Dark Silhouette Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="glass-card rounded-2xl p-4 sm:p-5 relative overflow-hidden group">
              {/* Top System Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 font-mono text-xs text-mutedText">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <span className="text-zinc-500 ml-1">host::node-01</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Hero image with transparent background */}
              <div className="relative mt-4 rounded-2xl overflow-hidden bg-black border border-white/10 aspect-[4/5] flex items-center justify-center group-hover:brightness-110 transition-all duration-700">
                <img
                  src="/IMG-20251030-WA0009-removebg-preview.png"
                  alt="Mahmoud Mossad - AI Automation & Backend Engineer"
                  className="w-full h-full object-contain object-center transition-all duration-700 drop-shadow-[0_0_40px_rgba(0,242,254,0.35)]"
                />
                <div className="absolute bottom-3 left-3 right-3 font-mono text-xs flex justify-between items-center px-3 py-2 rounded-lg bg-black/90 backdrop-blur border border-white/10">
                  <div>
                    <span className="text-white font-medium block">mahmoud.mossad.core</span>
                    <span className="text-mutedText text-[10px]">AUTH_KEY: 0x8F94...B10</span>
                  </div>
                  <span className="text-cyanGlow text-[11px] bg-zinc-900 border border-cyanGlow/30 px-2 py-0.5 rounded">AUTO_ENG</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-4 text-center font-mono text-[11px]">
                <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                  <span className="block text-mutedText text-[10px]">CPU_LOAD</span>
                  <span className="text-white font-semibold">14.2%</span>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                  <span className="block text-mutedText text-[10px]">MEM_ALLOC</span>
                  <span className="text-white font-semibold">512MB</span>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                  <span className="block text-mutedText text-[10px]">ROUTING</span>
                  <span className="text-white font-semibold">eBPF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== ABOUT ====================
const About = () => {
  return (
    <section id="about" className="space-y-8 reveal">
      <div className="border-b border-surfaceBorder pb-4 flex items-baseline justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-mutedText">// 01</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Experience & Education</h2>
        </div>
        <span className="font-mono text-xs text-mutedText">OVERVIEW</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Automation Engineer',
            company: 'Tawiq (Tech Startup)',
            date: 'April 2026 — Present',
            location: 'Port Said, Egypt',
            desc: 'Tech startup specializing in workflow automation and AI Agents using LLMs, serving the Saudi and MENA markets.',
            highlights: [
              'Auto PDF report delivery via Telegram & Gmail — saved 90% manual reporting time',
              'n8n workflow handling 50+ rider complaints daily via Telegram — 95% classification accuracy',
              'Automatic language detection supporting 4+ languages',
              'n8n workflows auto-scale with rider spikes — $0 extra infrastructure cost',
            ],
            isActive: true,
          },
          {
            title: 'WhatsApp AI Agent',
            company: 'Self-Initiated Project',
            date: 'June — July 2026',
            location: 'Ismailia, Egypt',
            desc: 'Conversational customer support agent with Redis-backed long-term memory, achieving 98% session retention.',
            highlights: [
              'Deployed using OpenRouter (Gemma) with Redis Chat Memory',
              'Conditional routing for first-time vs returning customers',
              '98% session retention rate',
            ],
            isActive: false,
          },
          {
            title: 'AutoFlow Order Intake',
            company: 'Self-Initiated Project',
            date: 'March 2026',
            location: 'Ismailia, Egypt',
            desc: 'n8n workflow capturing orders from WhatsApp/Telegram, processing 20+ orders per day with 90% accuracy.',
            highlights: [
              'Webhook-triggered order validation',
              'Gemini AI for Arabic text extraction (90%+ accuracy)',
              '20+ orders processed per day',
            ],
            isActive: false,
          },
        ].map((item, index) => (
          <div key={index} className="glass-card p-6 rounded-xl space-y-3">
            <div className="font-mono text-xs text-mutedText flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-zinc-600" />
              <span>{item.date}</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-zinc-300">{item.title}</span>
              {item.isActive && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/20">
                  Current
                </span>
              )}
            </div>
            <h3 className="text-base font-semibold text-white">{item.company}</h3>
            <p className="text-xs text-mutedText">{item.location}</p>
            <p className="text-xs text-zincText leading-relaxed">{item.desc}</p>
            <div className="mt-3 space-y-1">
              {item.highlights.map((h, hi) => (
                <div key={hi} className="flex items-start gap-2 text-xs text-zincText">
                  <span className="w-1 h-1 rounded-full bg-zinc-500 mt-1 flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* Education Card */}
        <div className="glass-card p-6 rounded-xl space-y-3">
          <div className="font-mono text-xs text-mutedText flex items-center gap-2">
            <span className="w-2 h-2 rounded bg-zinc-600" />
            <span>November 2023 — Present</span>
          </div>
          <h3 className="text-base font-semibold text-white">Suez Canal University</h3>
          <p className="text-xs text-mutedText">Ismailia, Egypt</p>
          <p className="text-xs text-zincText leading-relaxed">
            BSc, Computers and Information — Grade: 3.1. Focused on backend development, data structures, algorithms, and database design.
          </p>
          <div className="mt-3 space-y-1">
            <div className="flex items-start gap-2 text-xs text-zincText">
              <span className="w-1 h-1 rounded-full bg-zinc-500 mt-1 flex-shrink-0" />
              <span>Gen AI Intern at ITI — Aug/Sep 2025</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-zincText">
              <span className="w-1 h-1 rounded-full bg-zinc-500 mt-1 flex-shrink-0" />
              <span>120+ hours: Prompt Engineering, Python for AI, data cleaning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== SKILLS ====================
const Skills = () => {
  const skills = [
    {
      title: 'Backend & APIs',
      label: 'CORE',
      desc: 'Node.js, Express, Nest.js, FastAPI, REST, JWT, OAuth',
      items: [
        'Node.js', 'Express.js', 'Fullstack Nest.js (Self)', 'FastAPI',
        'TypeScript', 'Python', 'RESTful API Design', 'OAuth 2.0',
        'JWT', 'Authentication & Authorization',
      ],
    },
    {
      title: 'Automation & AI',
      label: 'AI/AUTO',
      desc: 'n8n, LLM Integration, Multi-Agent Systems, Prompt Engineering',
      items: [
        'n8n', 'Workflow Orchestration', 'LLM Integration (OpenAI/Gemini)',
        'Multi-Agent Systems', 'Prompt Engineering', 'Webhooks',
        'AI Agent Pipelines', 'Claude (AI)', 'OpenCode', 'Antigravity',
      ],
    },
    {
      title: 'Databases & Caching',
      label: 'STORAGE',
      desc: 'PostgreSQL, MySQL, MongoDB, Redis, SQL Design',
      items: [
        'PostgreSQL', 'MySQL', 'MongoDB',
        'Redis (Session, Chat Memory)', 'SQL Database Design',
      ],
    },
    {
      title: 'DevOps & Tools',
      label: 'INFRA',
      desc: 'Git, GitHub, Postman, Linux, Docker',
      items: ['Git', 'GitHub', 'Postman', 'Linux', 'Docker (Basics)'],
    },
    {
      title: 'Web Scraping & Data',
      label: 'SCRAPE',
      desc: 'Selenium, BeautifulSoup, Structured Extraction',
      items: ['Selenium', 'BeautifulSoup', 'Structured Data Extraction'],
    },
    {
      title: 'Frontend Development',
      label: 'CLIENT',
      desc: 'Next.js (Self-Taught), React, TypeScript, HTML/CSS',
      items: ['Next.js (Self-Taught)', 'React', 'TypeScript', 'HTML/CSS'],
    },
    {
      title: 'CS Fundamentals & Architecture',
      label: 'ARCH',
      desc: 'System Design, System Architecture, Database Design (Self-Taught)',
      items: [
        'Data Structures', 'Algorithms', 'OOP', 'Design Patterns',
        'System Design (Self-Taught)', 'System Architecture (Self-Taught)',
        'Database Design (Self-Taught)',
      ],
    },
  ]

  return (
    <section id="skills" className="space-y-8 reveal">
      <div className="border-b border-surfaceBorder pb-4 flex items-baseline justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-mutedText">// 02</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Technical Stack</h2>
        </div>
        <span className="font-mono text-xs text-mutedText">CAPABILITIES</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="glass-card p-6 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-mutedText">{skill.label}</span>
              <div className="w-2 h-2 rounded-full bg-zinc-600" />
            </div>
            <h3 className="text-base font-semibold text-white">{skill.title}</h3>
            <p className="text-xs text-mutedText leading-relaxed">{skill.desc}</p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {skill.items.map((item, i) => (
                <span key={i} className="font-mono text-[11px] px-2 py-1 rounded bg-black/60 border border-white/5 text-zinc-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ==================== PROJECTS ====================
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'WhatsApp AI Agent',
      category: 'AI_AGENT',
      version: 'v1.0.0',
      desc: 'Conversational customer support agent for WhatsApp with Redis-backed long-term memory, achieving 98% session retention. Deployed using OpenRouter (Gemma) with Redis Chat Memory.',
      tools: ['OpenRouter (Gemma)', 'Redis', 'Webhooks', 'Conditional Routing'],
    },
    {
      id: 2,
      name: 'AutoFlow - Order Intake',
      category: 'N8N_WORKFLOW',
      version: 'v1.2.0',
      desc: 'n8n workflow capturing orders from WhatsApp/Telegram, processing 20+ orders per day with 90% accuracy. Integrated Gemini AI for Arabic text extraction.',
      tools: ['n8n', 'Gemini AI', 'Webhooks', 'Arabic Text Extraction'],
    },
    {
      id: 3,
      name: 'Islamatic Server API',
      category: 'BACKEND_API',
      version: 'v1.0.0',
      desc: 'Node.js/Express backend with Google OAuth for secure audio uploads. Flexible architecture for future media processing features.',
      tools: ['Google Auth', 'SQL', 'Node.js', 'Express'],
    },
    {
      id: 4,
      name: 'AI Chatbot API',
      category: 'AI_BACKEND',
      version: 'v2.0.0',
      desc: 'Scalable AI chatbot backend supporting 3 AI models with JWT+Cookie auth, rate limiting, and SQLite-based history storage. Handles 1000+ concurrent connections with <200ms response time.',
      tools: ['OpenAI', 'Gemini', 'JWT', 'Cookies', 'SQLite', 'Rate Limiting'],
    },
    {
      id: 5,
      name: 'Tawiq Automation Workflows',
      category: 'ENTERPRISE_AUTO',
      version: 'v3.0.0',
      desc: 'n8n workflows handling 50+ rider complaints daily via Telegram with 95% classification accuracy. Auto-scales with rider spikes at $0 extra infrastructure cost.',
      tools: ['n8n', 'Telegram', 'LLM Integration', 'Auto-scaling'],
    },
    {
      id: 6,
      name: 'PDF Report Delivery',
      category: 'AUTOMATION',
      version: 'v1.0.0',
      desc: 'Automatic PDF report delivery via Telegram and Gmail, saving 90% of manual reporting time.',
      tools: ['Telegram', 'Gmail', 'PDF Generation', 'Automation'],
    },
  ]

  const runCliCmd = (cmd: string) => {
    window.dispatchEvent(new CustomEvent('runCliCmd', { detail: cmd }))
  }

  return (
    <section id="projects" className="space-y-8 reveal">
      <div className="border-b border-surfaceBorder pb-4 flex items-baseline justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-mutedText">// 03</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Selected Projects</h2>
        </div>
        <span className="font-mono text-xs text-mutedText">DEPLOYMENTS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="glass-card p-6 rounded-xl flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 rounded">
                  {project.category}
                </span>
                <span className="text-mutedText">{project.version}</span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors">
                {project.name}
              </h3>
              <p className="text-xs text-zincText leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tools.map((tool, i) => (
                  <span key={i} className="font-mono text-[10px] text-mutedText bg-black/80 px-2 py-1 rounded border border-white/5">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-6 font-mono text-xs">
              <a
                href="#terminal"
                onClick={() => runCliCmd(`demo ${project.name.toLowerCase().replace(/\s/g, '')}`)}
                className="text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors duration-200"
              >
                <span>Live Demo</span>
                <span>&nearr;</span>
              </a>
              <a
                href="#terminal"
                onClick={() => runCliCmd(`source ${project.name.toLowerCase().replace(/\s/g, '')}`)}
                className="text-mutedText hover:text-zinc-300 flex items-center gap-1 transition-colors duration-200"
              >
                <span>Source Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ==================== TERMINAL ====================
const Terminal = () => {
  const [terminalLog, setTerminalLog] = useState<string[]>([
    '// Session initialized on secure TLS socket. Type \'help\' for command list.',
    'Welcome to dev.mossad remote kernel. Node running in production cluster ISMAILIA-EG-01.',
  ])
  const [inputValue, setInputValue] = useState('')
  const [mosFiles, setMosFiles] = useState<string[]>([])
  const terminalRef = useRef<HTMLDivElement>(null)

  const cliResponses: Record<string, string> = {
    help: `AVAILABLE COMMANDS:
  &bull; <span class="text-white font-semibold">whoami</span>    : Mahmoud Mossad profile &amp; background
  &bull; <span class="text-white font-semibold">stack</span>     : Full breakdown of core technologies
  &bull; <span class="text-white font-semibold">status</span>    : Live telemetry &amp; node latency metrics
  &bull; <span class="text-white font-semibold">projects</span>  : List deployed systems &amp; versions
  &bull; <span class="text-white font-semibold">demo [name]</span>: Execute system simulation (e.g. 'demo whatsapp-ai')
  &bull; <span class="text-white font-semibold">clear</span>     : Wipe console buffer
  &bull; <span class="text-white font-semibold">mos</span>          : MOS CLI system (add / show / loc / slugin)
  &bull; <span class="text-white font-semibold">slugin</span>    : Show portfolio slogans (ar / en)`,
    whoami: `<span class="text-white">Mahmoud Mossad // AI Automation &amp; Backend Engineer</span>
Focus: n8n workflow orchestration, LLM agent pipelines, Node.js/Express backends, AI automation.
Location: Ismailia, Egypt &bull; Tawiq (Tech Startup) — Automation Engineer
Experience: Built automation workflows handling 50+ complaints/day with 95% accuracy via Telegram`,
    stack: `<span class="text-white">ENGINEERING STACK:</span>
  [Backend]   : Node.js, Express, Nest.js (Self), FastAPI, TypeScript, Python
  [AI/Auto]   : n8n, OpenAI, Gemini, Claude (AI), OpenCode, Antigravity, Webhooks
  [Data]      : PostgreSQL, MySQL, MongoDB, Redis, SQL Database Design
  [Frontend]  : Next.js (Self), React, TypeScript, HTML/CSS
  [Cloud]     : Git, GitHub, Postman, Linux, Docker (Basics)`,
    status: `<span class="text-white">NODE HEALTH TELEMETRY:</span>
  Status      : <span class="text-emerald-400">HEALTHY [NOMINAL]</span>
  Cluster     : ismailia-eg-01-prod
  Ingress RTT : 1.14ms
  Memory Pool : 42.1% utilized
  SLO Score   : 99.9% compliance`,
    projects: `<span class="text-white">DEPLOYED SYSTEMS:</span>
  1. WhatsApp AI Agent      [v1.0.0] (OpenRouter Gemma, Redis)
  2. AutoFlow Order Intake  [v1.2.0] (n8n, Gemini AI)
  3. Islamatic Server API   [v1.0.0] (Node.js, Express, Google OAuth)
  4. AI Chatbot API         [v2.0.0] (3 AI models, JWT+Cookie)
  5. Tawiq Workflows        [v3.0.0] (n8n, Telegram, Auto-scaling)
  6. PDF Report Delivery    [v1.0.0] (Telegram, Gmail, 90% time saved)`,
  }

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim()
    if (!trimmed) return

    const lower = trimmed.toLowerCase()

    if (lower === 'clear') {
      setTerminalLog(['// Console buffer cleared. Type \'help\' for command list.'])
      return
    }

    // MOS command system
    if (lower === 'mos' || lower === 'mos --help') {
      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        `MOS CLI v1.0.0 - Mahmoud's Operating System\n\nUSAGE:\n  mos                    Show this help menu\n  mos --help             Display available options\n  mos add <item>         Add an item to the mos list\n  mos . show             List current directory contents\n  mos loc -o <file.txt>  Output location and save to file\n\nEXAMPLES:\n  mos add n8n-workflow\n  mos . show\n  mos loc -o location.txt`,
      ])
      return
    }

    if (lower.startsWith('mos add ')) {
      const item = lower.replace('mos add ', '').trim()
      if (!item) {
        setTerminalLog((prev) => [...prev, `> ${trimmed}`, 'Error: Please specify an item to add. Usage: mos add <item>'])
        return
      }
      setMosFiles((prev) => [...prev, item])
      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        `[OK] Added "${item}" to mos list. Total items: ${mosFiles.length + 1}`,
      ])
      return
    }

    if (lower === 'mos . show' || lower === 'mos .') {
      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        mosFiles.length === 0
          ? 'Directory is empty. Use "mos add <item>" to add files.'
          : `DIRECTORY LISTING (/home/mahmoud):\n${mosFiles.map((f, i) => `  ${i + 1}. ${f}`).join('\n')}`,
      ])
      return
    }

    if (lower.startsWith('mos loc')) {
      const outputMatch = lower.match(/-o\s+(\S+)/)
      const filename = outputMatch ? outputMatch[1] : 'location.txt'
      const locationText = `LOCATION DATA\n================\nName: Mahmoud Mossad\nCity: Ismailia, Egypt\nCountry: Egypt\nRole: AI Automation & Backend Engineer\nCompany: Tawiq (Tech Startup)\nCoordinates: 30.6031° N, 32.2724° E\nTimezone: UTC+2\nGenerated: ${new Date().toISOString()}\n`

      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        locationText,
        `[OK] Location data saved to "${filename}"`,
      ])

      setTimeout(() => {
        const blob = new Blob([locationText], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }, 500)
      return
    }

    // MOS SLUGIN command
    if (lower === 'mos slugin' || lower === 'mos slugin en') {
      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        `════════════════════════════════════════════════════════════════════
   SLUGIN — Portfolio Tagline Collection
   Author: Mahmoud Mossad | AI Automation & Backend Engineer
   Language: English
   ════════════════════════════════════════════════════════════════════

   1. Refining complex chaos into servers that sing.
   2. Crafting backend logic that just works — no fluff, zero overhead.
   3. Street-smart intuition engineered into bulletproof systems.
   4. Nothing is impossible — every workflow bends to clean code.
   5. Operating in the shadows so your infrastructure shines in the light.
   6. Egyptian ingenuity in logic, German precision in performance.

   Suggested Hero Banner:
   "Egyptian Grit. Battle-Tested Logic. Unbreakable Backends."
   (Working mind, mastered code, and infrastructure that never fails.)

   Use: mos slugin ar  — View Arabic version`,
      ])
      return
    }

    if (lower === 'mos slugin ar') {
      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        `════════════════════════════════════════════════════════════════════
   Schlugin — Schlagline لبروفايلك
   المؤلف: محمود مصمد | مهندس أتمتة ذكاء اصطناعي وباك إند
   اللغة: العربية
   ═══════════════════════════════════════════════════════════════════

   1. بنروّق على المعقد، ونخلّي السيرفر يغني.
   2. صناعي كود.. بنجيب من الآخر ونريح السيرفرات.
   3. الفهلوة لما تدرس هندسة: بنبني سيستم مخرّش.
   4. مافيش حاجة اسمها مابتتعملش.. كله بالـ كود بيتظبط.
   5. شغالين في الضلمة عشان السيرفر ينور في النور.
   6. دماغ مصري في הלוגيك، وسيستم ألماني في الأداء.

   اقتراح لبانر البروفايل الرئيسي:
   "دماغ شغالة، كود متقن، وبنية تحتية مابتوقعش."
   (Egyptian Grit. Battle-Tested Logic. Unbreakable Backends.)

   Use: mos slugin en  — View English version`,
      ])
      return
    }

    if (cliResponses[lower]) {
      setTerminalLog((prev) => [...prev, `> ${trimmed}`, cliResponses[lower]])
      return
    }

    if (lower.startsWith('demo ')) {
      const target = lower.replace('demo ', '').trim()
      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        `[TELEMETRY TRACE] Initializing sandbox for [${target}]...\n&gt; Connecting to node edge socket...\n&gt; Handshake verified. Throughput stable at 240k ops/sec.`,
      ])
      return
    }

    if (lower.startsWith('source ')) {
      const target = lower.replace('source ', '').trim()
      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        `[REPO] Fetching verified metadata for [${target}]...\n&gt; Repository tree index: Clean.\n&gt; Branch: main (signed GPG).`,
      ])
      return
    }

    setTerminalLog((prev) => [
      ...prev,
      `> ${trimmed}`,
      `command not found: "${trimmed}". Type 'help' for instructions.`,
    ])
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalLog])

  return (
    <section id="terminal" className="space-y-8 reveal">
      <div className="border-b border-surfaceBorder pb-4 flex items-baseline justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-mutedText">// 04</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Interactive CLI Console</h2>
        </div>
        <span className="font-mono text-xs text-mutedText">EXECUTION</span>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#07080B]">
        <div className="bg-black/90 px-4 py-3 border-b border-white/10 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-zinc-700/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-zinc-800 inline-block" />
            <span className="w-3 h-3 rounded-full bg-zinc-800 inline-block" />
            <span className="text-zinc-400 ml-2">user@dev-node:~</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-mutedText text-[11px]">
            <span>SHELL: bash (v5.2)</span>
            <span className="text-zinc-500">RTT: 1.1ms</span>
          </div>
        </div>

        <div className="px-5 py-2.5 bg-black/40 border-b border-white/5 flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="text-mutedText text-[11px] mr-1">Quick Run:</span>
          {['help', 'whoami', 'stack', 'status', 'projects', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors duration-200"
            >
              {cmd}
            </button>
          ))}
        </div>

        <div
          ref={terminalRef}
          className="p-5 font-mono text-xs sm:text-sm text-zincText space-y-2 min-h-[280px] max-h-[460px] overflow-y-auto leading-relaxed select-text"
        >
          {terminalLog.map((line, index) => {
            const isPrompt = line.startsWith('> ')
            return (
              <div key={index} className={isPrompt ? 'flex items-center gap-2 pt-2' : ''}>
                {isPrompt ? (
                  <>
                    <span className="text-zinc-500 font-semibold select-none">user@dev-node:~$</span>
                    <span className="text-white font-mono">{line.slice(2)}</span>
                  </>
                ) : (
                  <div className="text-zinc-300 font-mono pl-4 border-l border-zinc-800 whitespace-pre-wrap leading-relaxed py-1" dangerouslySetInnerHTML={{ __html: line }} />
                )}
              </div>
            )
          })}
        </div>

        <form onSubmit={(e) => {
          e.preventDefault()
          if (inputValue.trim()) {
            executeCommand(inputValue)
            setInputValue('')
          }
        }} className="p-4 bg-black/80 border-t border-white/10 flex items-center gap-2 font-mono text-xs sm:text-sm">
          <span className="text-zinc-400 font-semibold select-none">user@dev-node:~$</span>
          <input
            type="text"
            id="terminalInput"
            autoComplete="off"
            spellCheck="false"
            placeholder="type 'help', 'whoami', 'stack', 'status', 'projects'..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-zinc-600 font-mono"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="text-mutedText hover:text-white px-2 py-1 text-xs uppercase tracking-wider">
            run &crarr;
          </button>
        </form>
      </div>
    </section>
  )
}

// ==================== CONTACT ====================
const Contact = () => {
  const [feedback, setFeedback] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const terminalRef = useRef<HTMLDivElement>(null)
  const [terminalLog, setTerminalLog] = useState<string[]>([
    '// Session initialized on secure TLS socket. Type \'help\' for command list.',
    'Welcome to dev.mossad remote kernel. Node running in production cluster ISMAILIA-EG-01.',
  ])

  const cliResponses: Record<string, string> = {
    help: `AVAILABLE COMMANDS:
  &bull; <span class="text-white font-semibold">whoami</span>    : Mahmoud Mossad profile &amp; background
  &bull; <span class="text-white font-semibold">stack</span>     : Full breakdown of core technologies
  &bull; <span class="text-white font-semibold">status</span>    : Live telemetry &amp; node latency metrics
  &bull; <span class="text-white font-semibold">projects</span>  : List deployed systems &amp; versions
  &bull; <span class="text-white font-semibold">demo [name]</span>: Execute system simulation (e.g. 'demo whatsapp-ai')
  &bull; <span class="text-white font-semibold">clear</span>     : Wipe console buffer
  &bull; <span class="text-white font-semibold">mos</span>          : MOS CLI system (add / show / loc / slugin)
  &bull; <span class="text-white font-semibold">slugin</span>    : Show portfolio slogans (ar / en)`,
    whoami: `<span class="text-white">Mahmoud Mossad // AI Automation &amp; Backend Engineer</span>
Focus: n8n workflow orchestration, LLM agent pipelines, Node.js/Express backends, AI automation.
Location: Ismailia, Egypt &bull; Tawiq (Tech Startup) — Automation Engineer`,
    stack: `<span class="text-white">ENGINEERING STACK:</span>
  [Backend]   : Node.js, Express, Nest.js (Self), FastAPI, TypeScript, Python
  [AI/Auto]   : n8n, OpenAI, Gemini, Claude (AI), OpenCode, Antigravity, Webhooks
  [Data]      : PostgreSQL, MySQL, MongoDB, Redis, SQL Database Design
  [Frontend]  : Next.js (Self), React, TypeScript, HTML/CSS
  [Cloud]     : Git, GitHub, Postman, Linux, Docker (Basics)`,
    status: `<span class="text-white">NODE HEALTH TELEMETRY:</span>
  Status      : <span class="text-emerald-400">HEALTHY [NOMINAL]</span>
  Cluster     : ismailia-eg-01-prod
  Ingress RTT : 1.14ms
  Memory Pool : 42.1% utilized
  SLO Score   : 99.9% compliance`,
    projects: `<span class="text-white">DEPLOYED SYSTEMS:</span>
  1. WhatsApp AI Agent      [v1.0.0] (OpenRouter Gemma, Redis)
  2. AutoFlow Order Intake  [v1.2.0] (n8n, Gemini AI)
  3. Islamatic Server API   [v1.0.0] (Node.js, Express, Google OAuth)
  4. AI Chatbot API         [v2.0.0] (3 AI models, JWT+Cookie)
  5. Tawiq Workflows        [v3.0.0] (n8n, Telegram, Auto-scaling)
  6. PDF Report Delivery    [v1.0.0] (Telegram, Gmail, 90% time saved)`,
  }

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim()
    if (!trimmed) return

    const lower = trimmed.toLowerCase()

    if (lower === 'clear') {
      setTerminalLog(['// Console buffer cleared. Type \'help\' for command list.'])
      return
    }

    // MOS command system
    if (lower === 'mos' || lower === 'mos --help') {
      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        `MOS CLI v1.0.0 - Mahmoud's Operating System\n\nUSAGE:\n  mos                    Show this help menu\n  mos --help             Display available options\n  mos add <item>         Add an item to the mos list\n  mos . show             List current directory contents\n  mos loc -o <file.txt>  Output location and save to file\n\nEXAMPLES:\n  mos add n8n-workflow\n  mos . show\n  mos loc -o location.txt`,
      ])
      return
    }

    if (lower.startsWith('mos add ')) {
      const item = lower.replace('mos add ', '').trim()
      if (!item) {
        setTerminalLog((prev) => [...prev, `> ${trimmed}`, 'Error: Please specify an item to add. Usage: mos add <item>'])
        return
      }
      setMosFiles((prev) => [...prev, item])
      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        `[OK] Added "${item}" to mos list. Total items: ${mosFiles.length + 1}`,
      ])
      return
    }

    if (lower === 'mos . show' || lower === 'mos .') {
      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        mosFiles.length === 0
          ? 'Directory is empty. Use "mos add <item>" to add files.'
          : `DIRECTORY LISTING (/home/mahmoud):\n${mosFiles.map((f, i) => `  ${i + 1}. ${f}`).join('\n')}`,
      ])
      return
    }

    if (lower.startsWith('mos loc')) {
      const outputMatch = lower.match(/-o\s+(\S+)/)
      const filename = outputMatch ? outputMatch[1] : 'location.txt'
      const locationText = `LOCATION DATA\n================\nName: Mahmoud Mossad\nCity: Ismailia, Egypt\nCountry: Egypt\nRole: AI Automation & Backend Engineer\nCompany: Tawiq (Tech Startup)\nCoordinates: 30.6031° N, 32.2724° E\nTimezone: UTC+2\nGenerated: ${new Date().toISOString()}\n`

      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        locationText,
        `[OK] Location data saved to "${filename}"`,
      ])

      setTimeout(() => {
        const blob = new Blob([locationText], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }, 500)
      return
    }

    // MOS SLUGIN command
    if (lower === 'mos slugin' || lower === 'mos slugin en') {
      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        `════════════════════════════════════════════════════════════════════
   SLUGIN — Portfolio Tagline Collection
   Author: Mahmoud Mossad | AI Automation & Backend Engineer
   Language: English
   ════════════════════════════════════════════════════════════════════

   1. Refining complex chaos into servers that sing.
   2. Crafting backend logic that just works — no fluff, zero overhead.
   3. Street-smart intuition engineered into bulletproof systems.
   4. Nothing is impossible — every workflow bends to clean code.
   5. Operating in the shadows so your infrastructure shines in the light.
   6. Egyptian ingenuity in logic, German precision in performance.

   Suggested Hero Banner:
   "Egyptian Grit. Battle-Tested Logic. Unbreakable Backends."
   (Working mind, mastered code, and infrastructure that never fails.)

   Use: mos slugin ar  — View Arabic version`,
      ])
      return
    }

    if (lower === 'mos slugin ar') {
      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        `════════════════════════════════════════════════════════════════════
   Schlugin — Schlagline لبروفايلك
   المؤلف: محمود مصمد | مهندس أتمتة ذكاء اصطناعي وباك إند
   اللغة: العربية
   ═══════════════════════════════════════════════════════════════════

   1. بنروّق على المعقد، ونخلّي السيرفر يغني.
   2. صناعي كود.. بنجيب من الآخر ونريح السيرفرات.
   3. الفهلوة لما تدرس هندسة: بنبني سيستم مخرّش.
   4. مافيش حاجة اسمها مابتتعملش.. كله بالـ كود بيتظبط.
   5. شغالين في الضلمة عشان السيرفر ينور في النور.
   6. دماغ مصري في הלוגيك، وسيستم ألماني في الأداء.

   اقتراح لبانر البروفايل الرئيسي:
   "دماغ شغالة، كود متقن، وبنية تحتية مابتوقعش."
   (Egyptian Grit. Battle-Tested Logic. Unbreakable Backends.)

   Use: mos slugin en  — View English version`,
      ])
      return
    }

    if (cliResponses[lower]) {
      setTerminalLog((prev) => [...prev, `> ${trimmed}`, cliResponses[lower]])
      return
    }

    if (lower.startsWith('demo ')) {
      const target = lower.replace('demo ', '').trim()
      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        `[TELEMETRY TRACE] Initializing sandbox for [${target}]...\n&gt; Connecting to node edge socket...\n&gt; Handshake verified. Throughput stable at 240k ops/sec.`,
      ])
      return
    }

    if (lower.startsWith('source ')) {
      const target = lower.replace('source ', '').trim()
      setTerminalLog((prev) => [
        ...prev,
        `> ${trimmed}`,
        `[REPO] Fetching verified metadata for [${target}]...\n&gt; Repository tree index: Clean.\n&gt; Branch: main (signed GPG).`,
      ])
      return
    }

    setTerminalLog((prev) => [
      ...prev,
      `> ${trimmed}`,
      `command not found: "${trimmed}". Type 'help' for instructions.`,
    ])
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalLog])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setFeedback('Encrypting & Dispatching...')

    setTimeout(() => {
      setFeedback('&check; TRANSMISSION DELIVERED: Message encrypted & queued in inbox node.')
      setSubmitting(false)
      ;(e.target as HTMLFormElement).reset()

      setTimeout(() => {
        setFeedback('')
      }, 3500)
    }, 800)
  }

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      executeCommand(inputValue)
      setInputValue('')
    }
  }

  return (
    <>
      <section id="contact" className="space-y-8 reveal">
        <div className="border-b border-surfaceBorder pb-4 flex items-baseline justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-mutedText">// 05</span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Direct Transmission</h2>
          </div>
          <span className="font-mono text-xs text-mutedText">CONNECT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Let's discuss systems &amp; architecture.
            </h3>
            <p className="text-sm text-zincText leading-relaxed">
              Available for principal engineering roles, high-concurrency consulting, and technical leadership engagements.
            </p>

            <div className="space-y-3 font-mono text-xs pt-2">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-surfaceBorder">
                <span className="text-mutedText">ENDPOINT:</span>
                <a href="mailto:mahmoudmustafamahmoud87@gmail.com" className="text-white hover:underline">
                  mahmoudmustafamahmoud87@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-surfaceBorder">
                <span className="text-mutedText">PHONE:</span>
                <a href="https://wa.me/01211260324?text=Hello%20there!" className="text-zinc-300 hover:text-white transition-colors">
                  +201211260324
                </a>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-surfaceBorder">
                <span className="text-mutedText">LOCATION:</span>
                <span className="text-zinc-300">Ismailia, Egypt</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-surfaceBorder">
                <span className="text-mutedText">PGP_FINGERPRINT:</span>
                <span className="text-zinc-400">4E9A B021 82CF E910</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2 font-mono text-xs">
              <a
                href="https://github.com/mahmudmahmod519-code"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface border border-surfaceBorder hover:border-zinc-500 text-zinc-300 hover:text-white transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mahmoudmossadmohamed/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface border border-surfaceBorder hover:border-zinc-500 text-zinc-300 hover:text-white transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://wa.me/01211260324?text=Hello%20there!"
                className="p-2.5 rounded-lg bg-surface border border-surfaceBorder hover:border-zinc-500 text-zinc-300 hover:text-white transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7M5 12l7-7" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleFormSubmit} className="glass-card p-6 sm:p-8 rounded-2xl space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-mono text-xs text-mutedText uppercase tracking-wider">
                    Name / Organization
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Alex Chen"
                    className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-mono text-xs text-mutedText uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-mono text-xs text-mutedText uppercase tracking-wider">
                  System Specifications / Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  placeholder="Describe project scope, scale requirements, or tech stack..."
                  className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors duration-200 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span id="formFeedback" className="font-mono text-xs text-mutedText">
                  ENCRYPTION: AES-GCM (End-to-End)
                </span>
                <button
                  type="submit"
                  id="submitBtn"
                  className="font-mono text-xs font-semibold bg-white text-black px-6 py-3 rounded-lg hover:bg-zinc-200 transition-all duration-200 flex items-center gap-2 disabled:opacity-50"
                  disabled={submitting}
                >
                  <span>{submitting ? 'Encrypting & Dispatching...' : 'Transmit Message'}</span>
                  <span>&rarr;</span>
                </button>
              </div>

              {feedback && (
                <div
                  className={`text-center text-xs font-mono py-2.5 rounded-lg border ${feedback.includes('DELIVERED') ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' : 'text-zinc-400 bg-white/5 border-white/10'}`}
                  dangerouslySetInnerHTML={{ __html: feedback }}
                />
              )}
            </form>
          </div>
        </div>
      </section>

      <section id="terminal" className="space-y-8 reveal">
        <div className="border-b border-surfaceBorder pb-4 flex items-baseline justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-mutedText">// 04</span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Interactive CLI Console</h2>
          </div>
          <span className="font-mono text-xs text-mutedText">EXECUTION</span>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#07080B]">
          <div className="bg-black/90 px-4 py-3 border-b border-white/10 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-zinc-700/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-zinc-800 inline-block" />
              <span className="w-3 h-3 rounded-full bg-zinc-800 inline-block" />
              <span className="text-zinc-400 ml-2">user@dev-node:~</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-mutedText text-[11px]">
              <span>SHELL: bash (v5.2)</span>
              <span className="text-zinc-500">RTT: 1.1ms</span>
            </div>
          </div>

          <div className="px-5 py-2.5 bg-black/40 border-b border-white/5 flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="text-mutedText text-[11px] mr-1">Quick Run:</span>
            {['help', 'whoami', 'stack', 'status', 'projects', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors duration-200"
              >
                {cmd}
              </button>
            ))}
          </div>

          <div
            ref={terminalRef}
            className="p-5 font-mono text-xs sm:text-sm text-zincText space-y-2 min-h-[280px] max-h-[460px] overflow-y-auto leading-relaxed select-text"
          >
            {terminalLog.map((line, index) => {
              const isPrompt = line.startsWith('> ')
              return (
                <div key={index} className={isPrompt ? 'flex items-center gap-2 pt-2' : ''}>
                  {isPrompt ? (
                    <>
                      <span className="text-zinc-500 font-semibold select-none">user@dev-node:~$</span>
                      <span className="text-white font-mono">{line.slice(2)}</span>
                    </>
                  ) : (
                    <div className="text-zinc-300 font-mono pl-4 border-l border-zinc-800 whitespace-pre-wrap leading-relaxed py-1" dangerouslySetInnerHTML={{ __html: line }} />
                  )}
                </div>
              )
            })}
          </div>

          <form onSubmit={handleTerminalSubmit} className="p-4 bg-black/80 border-t border-white/10 flex items-center gap-2 font-mono text-xs sm:text-sm">
            <span className="text-zinc-400 font-semibold select-none">user@dev-node:~$</span>
            <input
              type="text"
              id="terminalInput"
              autoComplete="off"
              spellCheck="false"
              placeholder="type 'help', 'whoami', 'stack', 'status', 'projects'..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-zinc-600 font-mono"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="text-mutedText hover:text-white px-2 py-1 text-xs uppercase tracking-wider">
              run &crarr;
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Terminal />
      <Contact />
    </>
  )
}
