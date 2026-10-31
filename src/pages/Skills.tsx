export default function Skills() {
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
