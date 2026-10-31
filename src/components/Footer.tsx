export default function Footer() {
  return (
    <footer className="pt-12 border-t border-surfaceBorder flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-mutedText">
      <div>
        <span>&copy; 2026 Mahmoud Mossad &bull; ALL RIGHTS RESERVED.</span>
      </div>
      <div className="flex items-center gap-6">
        <span>STATUS: ALL NODES OPERATIONAL</span>
        <a
          href="#"
          className="hover:text-white transition-colors duration-200"
          onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0) }}
        >
          &uarr; TOP
        </a>
      </div>
    </footer>
  )
}
