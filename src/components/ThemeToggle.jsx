import { MoonStar, SunMedium } from 'lucide-react'
import { useTheme } from '../context/useTheme'

const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-[var(--app-surface-strong)] px-4 py-2 text-sm font-semibold text-[var(--app-text)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--app-primary)] hover:text-[var(--app-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-primary)] ${className}`}
    >
      {isDark ? <SunMedium size={16} /> : <MoonStar size={16} />}
      {isDark ? 'Light mode' : 'Dark mode'}
    </button>
  )
}

export default ThemeToggle
