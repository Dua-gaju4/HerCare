import { ArrowRight, HeartPulse, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(249,187,208,0.55),_transparent_55%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-4 py-2 text-sm font-medium text-pink-700 shadow-sm backdrop-blur">
            <HeartPulse size={16} className="text-[#E91E63]" />
            Designed for modern women’s wellness journeys
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-[#333333] sm:text-5xl lg:text-6xl">
            Feel informed, supported, and empowered with HerCare.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#555555] sm:text-xl">
            A premium place to track your wellness, discover trusted insights, and build a calmer rhythm for your everyday health.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center rounded-full bg-[#E91E63] px-6 py-3 font-semibold text-white shadow-lg shadow-pink-200 transition duration-200 hover:-translate-y-0.5 hover:bg-[#d51a5f]"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-[#E91E63]/20 bg-white/70 px-6 py-3 font-semibold text-[#333333] transition duration-200 hover:border-[#E91E63]/40 hover:bg-white"
            >
              Explore features
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-[#666666]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm">
              <ShieldCheck size={16} className="text-[#9C27B0]" /> Private wellness experience
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm">
              <Sparkles size={16} className="text-[#9C27B0]" /> Elegant and thoughtful design
            </span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-[0_25px_80px_-25px_rgba(233,30,99,0.35)] backdrop-blur-xl sm:p-6">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-[#FFF8FA] via-white to-[#F8BBD0] p-6 sm:p-8">
            <div className="rounded-[1.5rem] border border-pink-100 bg-white/85 p-6 shadow-inner">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#E91E63]">Wellness snapshot</p>
                  <h2 className="mt-1 text-2xl font-semibold text-[#333333]">Balanced and calm</h2>
                </div>
                <div className="rounded-2xl bg-[#E91E63] p-3 text-white">
                  <HeartPulse size={24} />
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-pink-100 bg-[#FFF8FA] p-4">
                  <p className="text-sm text-[#666666]">Today&apos;s focus</p>
                  <p className="mt-2 text-lg font-semibold text-[#333333]">Hydration + rest</p>
                </div>
                <div className="rounded-2xl border border-pink-100 bg-[#FFF8FA] p-4">
                  <p className="text-sm text-[#666666]">Next check-in</p>
                  <p className="mt-2 text-lg font-semibold text-[#333333]">6:30 PM</p>
                </div>
              </div>
              <div className="mt-6 h-3 rounded-full bg-pink-100">
                <div className="h-3 w-[78%] rounded-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0]" />
              </div>
              <p className="mt-3 text-sm text-[#666666]">Your wellness pattern is trending positively this week.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
