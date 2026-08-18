import { BarChart3, BookOpenText, HeartPulse, House, MessageCircleHeart, Salad, Sparkles, Stethoscope, Users, BellRing, UserCircle2, Settings2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { getAuthState } from '../utils/storage'

const navItems = [
  { label: 'Dashboard Home', icon: House, to: '/dashboard' },
  { label: 'Disease Library', icon: BarChart3, to: '/diseases' },
  { label: 'Health Education', icon: BookOpenText, to: '/education' },
  { label: 'Nutrition Guide', icon: Salad, to: '/nutrition' },
  { label: 'Wellness Tracker', icon: Sparkles, to: '/wellness' },
  { label: 'Articles', icon: MessageCircleHeart, to: '/articles' },
  { label: 'Community', icon: Users, to: '/community' },
  { label: 'Doctor Posts', icon: Stethoscope, to: '/doctor-posts' },
  { label: 'Notifications', icon: BellRing, to: '/notifications' },
  { label: 'Profile', icon: UserCircle2, to: '/profile' },
  { label: 'Settings', icon: Settings2, to: '/settings' },
]

const DashboardSidebar = () => {
  const auth = getAuthState()

  return (
    <aside className="hidden w-72 flex-col rounded-[2rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-6 shadow-[0_20px_60px_-30px_rgba(233,30,99,0.35)] lg:flex">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-[var(--app-primary)] p-2.5 text-white">
          <HeartPulse size={20} />
        </div>
        <div>
          <p className="text-sm font-medium text-[var(--app-primary)]">HerCare</p>
          <p className="text-xs text-[var(--app-muted)]">Women’s wellness hub</p>
        </div>
      </div>

      <div className="mt-8 rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface)] p-4">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-[#F8BBD0] p-2 text-[#E91E63] dark:bg-white/10 dark:text-[var(--app-primary)]">
            <UserCircle2 size={24} />
          </div>
          <div>
            <p className="font-semibold text-[var(--app-text)]">{auth?.user?.name || 'Ava Rivera'}</p>
            <p className="text-sm text-[var(--app-muted)]">Member since 2024</p>
          </div>
        </div>
      </div>

      <nav className="mt-8 space-y-2 overflow-y-auto pr-1">
        {navItems.map(({ label, icon: Icon, to }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-primary)] ${isActive ? 'bg-[var(--app-primary)] text-white shadow-lg' : 'text-[var(--app-text)] hover:bg-[#FFF8FA] hover:text-[var(--app-primary)] dark:hover:bg-white/5'}`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-6 rounded-[1.5rem] border border-[var(--app-border)] bg-gradient-to-br from-[#FFF8FA] to-[#F8BBD0] p-4 dark:from-white/5 dark:to-white/10">
        <div className="flex items-center gap-2 text-[#9C27B0] dark:text-[var(--app-primary)]">
          <HeartPulse size={18} />
          <p className="text-sm font-semibold">Your care is protected</p>
        </div>
        <p className="mt-2 text-sm leading-6 text-[var(--app-muted)]">Personal insights stay private and elegantly organized in one place.</p>
        <div className="mt-4">
          <ThemeToggle className="w-full justify-center" />
        </div>
      </div>
    </aside>
  )
}

export default DashboardSidebar
