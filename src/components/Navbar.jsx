import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const navLinks = [
  { label: 'Home',        to: 'home' },
  { label: 'About',       to: 'about' },
  { label: 'Skills',      to: 'skills' },
  { label: 'Projects',    to: 'projects' },
  { label: 'Achievements',to: 'achievements' },
  { label: 'Contact',     to: 'contact' },
]

function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'var(--bg-surface)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124,58,237,0.2)' : 'none',
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          fontWeight: '800',
          background: 'linear-gradient(90deg, var(--accent-violet), var(--accent-cyan))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          cursor: 'pointer',
        }}
      >
        Govardhan.
      </span>

      {/* Desktop Nav Links */}
      <ul
        style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
        }}
        className="desktop-nav"
      >
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              smooth={true}
              duration={600}
              offset={-70}
              style={{
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'color 0.2s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: 'var(--text-primary)',
          fontSize: '1.5rem',
          cursor: 'pointer',
        }}
        className="mobile-menu-btn"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid rgba(124,58,237,0.3)',
            listStyle: 'none',
            padding: '1rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar