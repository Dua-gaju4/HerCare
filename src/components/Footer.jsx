import { ArrowRight, HeartPulse } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-[var(--app-border)] bg-[var(--app-surface-strong)] px-6 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-2 text-[var(--app-primary)]">
            <HeartPulse size={20} />
            <span className="text-lg font-semibold tracking-[0.2em]">HerCare</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--app-muted)]">
            A modern, elegant wellness platform for women who want intuitive insight, polished care, and a calmer daily rhythm.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link to="/signup" className="inline-flex items-center justify-center rounded-full bg-[var(--app-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--app-primary-strong)]">
            Start your journey <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a href="#top" className="text-sm font-medium text-[var(--app-muted)] transition hover:text-[var(--app-primary)]">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
