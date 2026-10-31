import { useRef, useEffect } from 'react'

export default function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <section id="about" ref={aboutRef} className="space-y-8 reveal">
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
