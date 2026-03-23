import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  
  const isActive = (path) => location.pathname === path
  
  const linkClass = (path) => {
    const base = "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-primary"
    return isActive(path)
      ? `${base} text-primary font-bold border-b-2 border-primary pb-1`
      : `${base} text-slate-600 dark:text-slate-400`
  }

  const mobileLinkClass = (path) => {
    const base = "block px-4 py-3 text-base font-medium transition-colors rounded-lg"
    return isActive(path)
      ? `${base} bg-primary text-white`
      : `${base} text-slate-700 dark:text-slate-300 hover:bg-primary/10`
  }

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav 
      className="sticky top-0 z-50 w-full border-b border-primary/10 glass-nav"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 hover:opacity-80 transition-opacity focus-visible:outline-primary rounded-lg"
          aria-label="Sylvara - Ir a inicio"
          onClick={closeMenu}
        >
          <img 
            src="/assets/images/sylvara-logo.png" 
            alt="Sylvara Logo" 
            className="h-10 w-auto"
          />
          <h2 className="text-primary dark:text-white text-2xl font-bold tracking-tight">
            Sylvara
          </h2>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-10" role="menubar">
          <Link 
            to="/" 
            className={linkClass('/')}
            role="menuitem"
          >
            Inicio
          </Link>
          <Link 
            to="/modo-uso" 
            className={linkClass('/modo-uso')}
            role="menuitem"
          >
            Modo de Uso
          </Link>
          <Link 
            to="/android" 
            className={linkClass('/android')}
            role="menuitem"
          >
            Android
          </Link>
          <Link 
            to="/ios" 
            className={linkClass('/ios')}
            role="menuitem"
          >
            iOS
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors focus-visible:ring-4 focus-visible:ring-primary/30"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span className="material-symbols-outlined text-3xl" aria-hidden="true">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div 
          className="md:hidden border-t border-primary/10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg"
          role="menu"
        >
          <div className="px-4 py-4 space-y-1">
            <Link 
              to="/" 
              className={mobileLinkClass('/')}
              role="menuitem"
              onClick={closeMenu}
            >
              Inicio
            </Link>
            <Link 
              to="/modo-uso" 
              className={mobileLinkClass('/modo-uso')}
              role="menuitem"
              onClick={closeMenu}
            >
              Modo de Uso
            </Link>
            <Link 
              to="/android" 
              className={mobileLinkClass('/android')}
              role="menuitem"
              onClick={closeMenu}
            >
              Android
            </Link>
            <Link 
              to="/ios" 
              className={mobileLinkClass('/ios')}
              role="menuitem"
              onClick={closeMenu}
            >
              iOS
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
