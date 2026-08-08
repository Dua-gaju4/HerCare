import { HeartPulse } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Library', to: '/diseases' },
  { label: 'Education', to: '/education' },
  { label: 'Nutrition', to: '/nutrition' },
  { label: 'Wellness', to: '/wellness' },
  { label: 'Articles', to: '/articles' },
]

const ModuleTopNav = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-pink-100/70 bg-[#FFF8FA]/90 backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center gap-3 text-xl font-semibold tracking-[0.2em] text-[#E91E63]">
            <span className="rounded-2xl bg-[#E91E63] p-2 text-white shadow-sm">
              <HeartPulse size={18} />
            </span>
            HerCare
          </Link>
          <Link to="/dashboard" className="rounded-full border border-pink-100 bg-white px-4 py-2 text-sm font-semibold text-[#E91E63] shadow-sm xl:hidden">
            Dashboard
          </Link>
        </div>

        <nav className="flex flex-wrap gap-2 text-sm font-medium text-[#555555]">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${isActive ? 'bg-[#E91E63] text-white shadow-sm' : 'border border-pink-100 bg-white/90 hover:border-[#F8BBD0] hover:text-[#E91E63]'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default ModuleTopNav