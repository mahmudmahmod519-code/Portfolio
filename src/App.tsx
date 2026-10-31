import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Terminal from './pages/Terminal'

export default function App() {
  return (
    <>
      <Header />

      <main className="relative z-10 pt-28 pb-20 max-w-6xl mx-auto px-5 sm:px-8 space-y-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/terminal" element={<Terminal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
