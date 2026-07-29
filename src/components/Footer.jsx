import { ArrowRight, HeartPulse } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-pink-100 bg-white/80 px-6 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-2 text-[#E91E63]">
            <HeartPulse size={20} />
            <span className="text-lg font-semibold tracking-[0.2em]">HerCare</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#666666]">
            A modern, elegant wellness platform for women who want intuitive insight, polished care, and a calmer daily rhythm.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link to="/signup" className="inline-flex items-center justify-center rounded-full bg-[#E91E63] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d51a5f]">
            Start your journey <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a href="#top" className="text-sm font-medium text-[#666666] transition hover:text-[#E91E63]">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
