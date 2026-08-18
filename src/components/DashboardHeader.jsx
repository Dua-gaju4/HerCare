import { Bell, Search, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const DashboardHeader = () => {
  return (
    <div className="flex flex-col gap-4 rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-medium text-[var(--app-primary)]">Good morning</p>
        <h2 className="text-2xl font-semibold text-[var(--app-text)]">Your wellness dashboard</h2>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-[var(--app-surface)] px-3 py-2 text-sm text-[var(--app-muted)]">
          <Search size={16} />
          <input className="bg-transparent outline-none placeholder:text-[var(--app-muted)]" placeholder="Search" />
        </label>
        <Link to="/notifications" aria-label="View notifications" className="rounded-full border border-[var(--app-border)] bg-[var(--app-surface)] p-2.5 text-[var(--app-primary)] transition hover:border-[var(--app-primary)]">
          <Bell size={18} />
        </Link>
        <ThemeToggle />
        <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--app-primary)] to-[#9C27B0] px-3 py-2 text-sm font-semibold text-white">
          <Sparkles size={16} />
          Premium plan
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
