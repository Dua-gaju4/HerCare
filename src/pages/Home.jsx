import { ArrowRight, CheckCircle2, ChevronDown, HeartPulse, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import { faqs, features, stats, testimonials } from '../data/mockData'

const Home = () => {
  return (
    <div id="top" className="min-h-screen bg-[#FFF8FA] text-[#333333]">
      <Navbar />
      <Hero />

      <main>
        <section id="about" className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-pink-100 bg-white/80 p-8 shadow-[0_24px_70px_-30px_rgba(233,30,99,0.25)] lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">Why choose HerCare</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A premium experience for every chapter of your health.</h2>
                <p className="mt-5 text-lg leading-8 text-[#666666]">
                  Blend trusted guidance, thoughtful design, and beautifully structured insight into one calming digital experience.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['Evidence-led resources', 'Smart health content with clarity and care.'],
                  ['Gentle reminders', 'Stay steady with real habits that feel manageable.'],
                  ['Private by design', 'A safe and personal environment for your wellness story.'],
                  ['Beautiful dashboards', 'Track what matters in a modern, easy-to-read view.'],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-[1.2rem] border border-pink-100 bg-[#FFF8FA] p-5">
                    <CheckCircle2 className="text-[#E91E63]" size={20} />
                    <h3 className="mt-3 font-semibold text-[#333333]">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#666666]">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">Features</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Everything you need to feel aligned and informed</h2>
              <p className="mx-auto max-w-2xl text-lg text-[#666666]">
                Built to support wellness habits, symptom awareness, education, and discoverability in a calm, modern format.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-pink-100 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] p-8 text-white shadow-[0_20px_70px_-20px_rgba(156,39,176,0.55)] lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-100">Community impact</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Trusted by women who want thoughtful support every day.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.2rem] border border-white/20 bg-white/10 p-5 backdrop-blur">
                    <p className="text-3xl font-semibold">{stat.value}</p>
                    <p className="mt-2 text-sm text-pink-50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">Testimonials</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">What members are saying</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="rounded-[1.5rem] border border-pink-100 bg-white/80 p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-[#E91E63]">
                    <Sparkles size={16} />
                    <Sparkles size={16} />
                    <Sparkles size={16} />
                  </div>
                  <p className="mt-4 text-sm leading-8 text-[#666666]">“{testimonial.quote}”</p>
                  <div className="mt-6">
                    <p className="font-semibold text-[#333333]">{testimonial.name}</p>
                    <p className="text-sm text-[#888888]">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-pink-100 bg-white/80 p-8 shadow-[0_24px_70px_-30px_rgba(233,30,99,0.2)] lg:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Questions that often arise</h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-[1.2rem] border border-pink-100 bg-[#FFF8FA] px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#333333]">
                    {faq.question}
                    <ChevronDown size={18} className="text-[#E91E63]" />
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[#666666]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 pt-8 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 rounded-[2rem] border border-pink-100 bg-white/80 px-8 py-12 text-center shadow-sm lg:flex-row lg:justify-between lg:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">Ready when you are</p>
              <h2 className="mt-3 text-3xl font-semibold">Create your wellness routine with HerCare.</h2>
            </div>
            <Link to="/signup" className="inline-flex items-center justify-center rounded-full bg-[#E91E63] px-6 py-3 font-semibold text-white transition hover:bg-[#d51a5f]">
              Get started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
