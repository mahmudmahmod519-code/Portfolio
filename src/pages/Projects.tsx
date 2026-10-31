export default function Projects() {
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
                className="text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors duration-200"
              >
                <span>Live Demo</span>
                <span>&nearr;</span>
              </a>
              <a
                href="#terminal"
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
