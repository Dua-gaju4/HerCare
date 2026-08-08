import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { clearAuthState, getAuthState } from '../utils/storage'

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
    <header className="sticky top-0 z-50 border-b border-pink-100/70 bg-[#FFF8FA]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-[0.2em] text-[#E91E63]">
          HerCare
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#444444] md:flex">
          <a href="#about" className="transition hover:text-[#E91E63]">About</a>
          <a href="#features" className="transition hover:text-[#E91E63]">Features</a>
          <a href="#faq" className="transition hover:text-[#E91E63]">FAQ</a>
          <NavLink to="/diseases" className="transition hover:text-[#E91E63]">
            Library
          </NavLink>
          <NavLink to="/articles" className="transition hover:text-[#E91E63]">
            Articles
          </NavLink>
          {auth?.isAuthenticated ? (
            <>
              <NavLink to="/dashboard" className="transition hover:text-[#E91E63]">
                Dashboard
              </NavLink>
              <button onClick={handleLogout} className="font-semibold text-[#333333] transition hover:text-[#E91E63]">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="transition hover:text-[#E91E63]">
                Login
              </NavLink>
              <NavLink to="/signup" className="rounded-full bg-[#E91E63] px-4 py-2 text-white transition hover:bg-[#d51a5f]">
                Signup
              </NavLink>
            </>
          )}
        </nav>

        <button className="rounded-full border border-pink-200 p-2 text-[#E91E63] md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-pink-100 bg-white/90 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-[#444444]">
            <a href="#about" onClick={() => setIsOpen(false)} className="transition hover:text-[#E91E63]">About</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="transition hover:text-[#E91E63]">Features</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="transition hover:text-[#E91E63]">FAQ</a>
            <NavLink to="/diseases" onClick={() => setIsOpen(false)} className="transition hover:text-[#E91E63]">
              Library
            </NavLink>
            <NavLink to="/articles" onClick={() => setIsOpen(false)} className="transition hover:text-[#E91E63]">
              Articles
            </NavLink>
            {auth?.isAuthenticated ? (
              <>
                <NavLink to="/dashboard" onClick={() => setIsOpen(false)} className="transition hover:text-[#E91E63]">Dashboard</NavLink>
                <button onClick={handleLogout} className="text-left font-semibold text-[#333333] transition hover:text-[#E91E63]">
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" onClick={() => setIsOpen(false)} className="transition hover:text-[#E91E63]">Login</NavLink>
                <NavLink to="/signup" onClick={() => setIsOpen(false)} className="rounded-full bg-[#E91E63] px-4 py-2 text-center text-white">Signup</NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
