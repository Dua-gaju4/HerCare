import { BookOpenText, BarChart3, CalendarDays, HeartPulse, House, MessageCircleHeart, Salad, Sparkles, UserCircle2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard Home', icon: House, to: '/dashboard' },
  { label: 'Disease Library', icon: BarChart3, to: '/diseases' },
  { label: 'Health Education', icon: BookOpenText, to: '/education' },
  { label: 'Nutrition Guide', icon: Salad, to: '/nutrition' },
  { label: 'Wellness Tracker', icon: Sparkles, to: '/wellness' },
  { label: 'Articles', icon: MessageCircleHeart, to: '/articles' },
]

const DashboardSidebar = () => {
  return (
    <aside className="hidden w-72 flex-col rounded-[2rem] border border-pink-100 bg-white/80 p-6 shadow-[0_20px_60px_-30px_rgba(233,30,99,0.35)] lg:flex">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-[#E91E63] p-2.5 text-white">
          <HeartPulse size={20} />
        </div>
        <div>
          <p className="text-sm font-medium text-[#E91E63]">HerCare</p>
          <p className="text-xs text-[#666666]">Women’s wellness hub</p>
        </div>
      </div>

      <div className="mt-8 rounded-[1.5rem] border border-pink-100 bg-[#FFF8FA] p-4">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-[#F8BBD0] p-2 text-[#E91E63]">
            <UserCircle2 size={24} />
          </div>
          <div>
            <p className="font-semibold text-[#333333]">Ava Rivera</p>
            <p className="text-sm text-[#666666]">Member since 2024</p>
          </div>
        </div>
      </div>

      <nav className="mt-8 space-y-2">
        {navItems.map(({ label, icon: Icon, to }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-[#E91E63] text-white shadow-lg' : 'text-[#555555] hover:bg-[#FFF8FA] hover:text-[#E91E63]'}`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-[1.5rem] border border-pink-100 bg-gradient-to-br from-[#FFF8FA] to-[#F8BBD0] p-4">
        <div className="flex items-center gap-2 text-[#9C27B0]">
          <HeartPulse size={18} />
          <p className="text-sm font-semibold">Your care is protected</p>
        </div>
        <p className="mt-2 text-sm leading-6 text-[#666666]">Personal insights stay private and elegantly organized in one place.</p>
      </div>
    </aside>
  )
}

export default DashboardSidebar
