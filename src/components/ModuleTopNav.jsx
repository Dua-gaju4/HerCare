import { HeartPulse } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Library', to: '/diseases' },
  { label: 'Education', to: '/education' },
  { label: 'Nutrition', to: '/nutrition' },
  { label: 'Wellness', to: '/wellness' },
  { label: 'Articles', to: '/articles' },
  { label: 'Community', to: '/community' },
  { label: 'Doctor Posts', to: '/doctor-posts' },
  { label: 'Notifications', to: '/notifications' },
  { label: 'Profile', to: '/profile' },
  { label: 'Settings', to: '/settings' },
]

const ModuleTopNav = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--app-border)]/70 bg-[var(--app-bg)]/90 backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center gap-3 text-xl font-semibold tracking-[0.2em] text-[var(--app-primary)]">
            <span className="rounded-2xl bg-[var(--app-primary)] p-2 text-white shadow-sm">
              <HeartPulse size={18} />
            </span>
            HerCare
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle className="px-3 py-2 text-xs" />
            <Link to="/dashboard" className="rounded-full border border-[var(--app-border)] bg-[var(--app-surface-strong)] px-4 py-2 text-sm font-semibold text-[var(--app-primary)] shadow-sm xl:hidden">
              Dashboard
            </Link>
          </div>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-1 text-sm font-medium text-[var(--app-text)]">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-4 py-2 transition ${isActive ? 'bg-[var(--app-primary)] text-white shadow-sm' : 'border border-[var(--app-border)] bg-[var(--app-surface-strong)] hover:border-[var(--app-primary)] hover:text-[var(--app-primary)]'}`
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