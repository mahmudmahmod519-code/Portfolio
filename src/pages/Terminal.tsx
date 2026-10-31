import { useRef, useEffect, useState } from 'react'

export default function Terminal() {
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

      // Create downloadable file
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      executeCommand(inputValue)
      setInputValue('')
    }
  }

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

          <form onSubmit={handleSubmit} className="p-4 bg-black/80 border-t border-white/10 flex items-center gap-2 font-mono text-xs sm:text-sm">
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
