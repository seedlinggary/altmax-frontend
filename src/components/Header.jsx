import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo.jsx'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-soft' : ''
      }`}
    >
      <div className="border-b border-regal-blue-100/60 bg-regal-blue-950 hidden sm:block">
        <div className="container-page flex items-center justify-between py-1.5 text-xs text-sky-light">
          <span>Servicing Condos & Co-ops Across NYC</span>
          <a href="tel:7185361200" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="h-3 w-3" /> 718.536.1200
          </a>
        </div>
      </div>

      <div className="container-page flex items-center justify-between py-4">
        <Link to="/" className="shrink-0" aria-label="Altmax Property Management home">
          <Logo tagline size="lg" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-sans text-sm font-semibold tracking-wide uppercase link-underline ${
                  isActive ? 'text-regal-blue' : 'text-charcoal hover:text-regal-blue'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="btn-primary">
            Request a Proposal
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-regal-blue"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-regal-blue-100 bg-white">
          <nav className="container-page flex flex-col py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 font-sans font-semibold uppercase tracking-wide text-sm border-b border-regal-blue-50 ${
                    isActive ? 'text-regal-blue' : 'text-charcoal'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
              Request a Proposal
            </Link>
            <a href="tel:7185361200" className="btn-secondary mt-2 w-full">
              <Phone className="h-4 w-4" /> 718.536.1200
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
