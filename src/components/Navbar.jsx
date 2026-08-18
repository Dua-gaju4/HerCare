import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { clearAuthState, getAuthState } from '../utils/storage'

const navLinkClass = ({ isActive }) =>
  `transition hover:text-[var(--app-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-primary)] ${isActive ? 'text-[var(--app-primary)] font-semibold' : 'text-[var(--app-text)]'}`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [auth, setAuth] = useState(getAuthState())
  const navigate = useNavigate()

  useEffect(() => {
    setAuth(getAuthState())
  }, [])

  const handleLogout = () => {
    clearAuthState()
    setAuth(null)
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--app-border)]/70 bg-[var(--app-bg)]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-[0.2em] text-[var(--app-primary)]">
          HerCare
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
          <a href="#about" className="transition hover:text-[var(--app-primary)]">About</a>
          <a href="#features" className="transition hover:text-[var(--app-primary)]">Features</a>
          <a href="#faq" className="transition hover:text-[var(--app-primary)]">FAQ</a>
          <NavLink to="/diseases" className={navLinkClass}>Library</NavLink>
          <NavLink to="/articles" className={navLinkClass}>Articles</NavLink>
          <NavLink to="/community" className={navLinkClass}>Community</NavLink>
          <NavLink to="/doctor-posts" className={navLinkClass}>Doctor Posts</NavLink>
          <NavLink to="/notifications" className={navLinkClass}>Notifications</NavLink>
          <NavLink to="/profile" className={navLinkClass}>Profile</NavLink>
          <NavLink to="/settings" className={navLinkClass}>Settings</NavLink>
          {auth?.isAuthenticated ? (
            <>
              <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
              <button onClick={handleLogout} className="font-semibold text-[var(--app-text)] transition hover:text-[var(--app-primary)]">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={navLinkClass}>Login</NavLink>
              <NavLink to="/signup" className="rounded-full bg-[var(--app-primary)] px-4 py-2 text-white transition hover:bg-[var(--app-primary-strong)]">
                Signup
              </NavLink>
            </>
          )}
          <ThemeToggle />
        </nav>

        <button className="rounded-full border border-[var(--app-border)] p-2 text-[var(--app-primary)] md:hidden" onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle navigation menu">
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[var(--app-border)] bg-[var(--app-surface-strong)] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-[var(--app-text)]">
            <a href="#about" onClick={() => setIsOpen(false)} className="transition hover:text-[var(--app-primary)]">About</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="transition hover:text-[var(--app-primary)]">Features</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="transition hover:text-[var(--app-primary)]">FAQ</a>
            <NavLink to="/diseases" onClick={() => setIsOpen(false)} className={navLinkClass}>Library</NavLink>
            <NavLink to="/articles" onClick={() => setIsOpen(false)} className={navLinkClass}>Articles</NavLink>
            <NavLink to="/community" onClick={() => setIsOpen(false)} className={navLinkClass}>Community</NavLink>
            <NavLink to="/doctor-posts" onClick={() => setIsOpen(false)} className={navLinkClass}>Doctor Posts</NavLink>
            <NavLink to="/notifications" onClick={() => setIsOpen(false)} className={navLinkClass}>Notifications</NavLink>
            <NavLink to="/profile" onClick={() => setIsOpen(false)} className={navLinkClass}>Profile</NavLink>
            <NavLink to="/settings" onClick={() => setIsOpen(false)} className={navLinkClass}>Settings</NavLink>
            {auth?.isAuthenticated ? (
              <>
                <NavLink to="/dashboard" onClick={() => setIsOpen(false)} className={navLinkClass}>Dashboard</NavLink>
                <button onClick={handleLogout} className="text-left font-semibold text-[var(--app-text)] transition hover:text-[var(--app-primary)]">
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" onClick={() => setIsOpen(false)} className={navLinkClass}>Login</NavLink>
                <NavLink to="/signup" onClick={() => setIsOpen(false)} className="rounded-full bg-[var(--app-primary)] px-4 py-2 text-center text-white">Signup</NavLink>
              </>
            )}
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
