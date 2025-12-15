import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const navLinkClass = (active) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    active ? 'text-accent' : 'text-text/80 hover:text-accent'
  }`

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleAnchor = (path, id) => {
    setMobileMenuOpen(false)
    if (location.pathname !== path) {
      navigate(path)
      setTimeout(() => scrollToId(id), 0)
    } else {
      scrollToId(id)
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur shadow-subtle">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-accent focus:text-white focus:px-3 focus:py-2 rounded-md">Skip to content</a>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
          <img src={logo} alt="Cozy Corner logo" className="h-8 w-8 rounded-full object-contain" />
          <span className="font-display text-lg sm:text-xl">Cozy Corner</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <Link to="/" aria-current={location.pathname === '/' ? 'page' : undefined} className={navLinkClass(location.pathname === '/')}>Home</Link>
          <Link to="/about" aria-current={location.pathname === '/about' ? 'page' : undefined} className={navLinkClass(location.pathname === '/about')}>About</Link>
          <button aria-current={location.pathname === '/menu' ? 'page' : undefined} className={navLinkClass(location.pathname === '/menu')} onClick={() => handleAnchor('/menu', 'menu-top')}>Menu</button>
          <Link to="/contact" aria-current={location.pathname === '/contact' ? 'page' : undefined} className={navLinkClass(location.pathname === '/contact')}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-text/80 hover:text-accent hover:bg-accent/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/5 bg-surface">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-accent bg-accent/10' : 'text-text/80 hover:text-accent hover:bg-accent/5'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/about' ? 'text-accent bg-accent/10' : 'text-text/80 hover:text-accent hover:bg-accent/5'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <button
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/menu' ? 'text-accent bg-accent/10' : 'text-text/80 hover:text-accent hover:bg-accent/5'}`}
              onClick={() => handleAnchor('/menu', 'menu-top')}
            >
              Menu
            </button>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-accent bg-accent/10' : 'text-text/80 hover:text-accent hover:bg-accent/5'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}


