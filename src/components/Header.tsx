import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { asset } from '../lib/asset'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: '/about', label: '/about' },
    { to: '/skills', label: '/skills' },
    { to: '/projects', label: '/projects' },
    { to: '/terminal', label: '/terminal' },
    { to: '/contact', label: '/contact' }
  ]

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass-nav rounded-full px-5 py-2.5 flex items-center justify-between w-full max-w-4xl shadow-2xl shadow-black/80">
        {/* Brand Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-mono text-xs font-bold text-white group-hover:border-zinc-400 transition-colors">
            &gt;_
          </div>
          <span className="font-mono text-sm font-semibold tracking-tight text-white group-hover:text-zinc-300 transition-colors">
            dev.mossad
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/80 ml-1 animate-pulse" />
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 font-mono text-xs text-mutedText">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-white'
                  : 'text-mutedText hover:text-white transition-colors'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Action Status / Terminal CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#terminal"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-zinc-300 bg-zinc-900/90 border border-zinc-700/60 hover:border-zinc-500 hover:text-white px-3 py-1.5 rounded-full transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-zinc-500">$</span> cli.exec
          </a>
          <a
            href={asset('mahmoud_mossad_AI%20Automation%20%26%20Backend%20Engineer_resume.pdf')}
            download
            className="font-mono text-xs bg-white text-black font-semibold px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-pitch/98 backdrop-blur-md overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="font-mono text-sm font-semibold text-white">dev.mossad</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-xl hover:bg-zinc-800 text-zinc-400"
                aria-label="Close menu"
              >
                <i className="fas fa-times text-xl" />
              </button>
            </div>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'block px-4 py-3 rounded-xl bg-zinc-800 text-white font-medium border border-zinc-600/50'
                      : 'block px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors duration-300'
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={asset('mahmoud_mossad_AI%20Automation%20%26%20Backend%20Engineer_resume.pdf')}
                download
                onClick={() => setIsOpen(false)}
                className="block mt-4 px-4 py-3 rounded-xl bg-white text-black text-center font-semibold transition-colors duration-300"
              >
                Download CV
              </a>
              <a
                href="https://wa.me/01211260324?text=Hello%20there!"
                onClick={() => setIsOpen(false)}
                className="block mt-3 px-4 py-3 rounded-xl bg-white text-black text-center font-semibold transition-colors duration-300"
              >
                WhatsApp Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
