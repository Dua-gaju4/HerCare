import { useEffect, useMemo, useState } from 'react'
import { BookOpenText, HeartPulse, Leaf, ShieldCheck, SmilePlus, Sparkles } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import EducationCard from '../components/EducationCard'
import ModulePageShell from '../components/ModulePageShell'

const educationTopics = [
  {
    slug: 'menstrual-health',
    title: 'Menstrual Health',
    summary: 'Understand cycle patterns, pain signals, and when changes deserve attention.',
    icon: HeartPulse,
    details: [
      'Cycles vary, but major changes in flow, timing, or pain should be tracked.',
      'A cycle diary can help you connect symptoms to stress, nutrition, or sleep.',
      'Persistent heavy bleeding or severe cramps are reasons to ask for medical advice.',
    ],
    takeaways: ['Track your cycle', 'Notice red flags', 'Seek care when pain is disruptive'],
  },
  {
    slug: 'reproductive-health',
    title: 'Reproductive Health',
    summary: 'Learn how screening, contraception conversations, and pelvic care support wellbeing.',
    icon: ShieldCheck,
    details: [
      'Routine checkups help catch issues earlier and make care more personalized.',
      'It is appropriate to ask questions about fertility, contraception, or pelvic pain at any time.',
      'Preventive care becomes easier when you understand your own history and concerns.',
    ],
    takeaways: ['Keep preventive visits', 'Ask clear questions', 'Know your options'],
  },
  {
    slug: 'mental-health',
    title: 'Mental Health',
    summary: 'Support your mind with routines that make stress feel more manageable.',
    icon: SmilePlus,
    details: [
      'Mood changes are common, but persistent sadness, anxiety, or overwhelm deserve support.',
      'Breathing, journaling, sleep, movement, and social support can all help steady stress.',
      'Getting help early is a strength, not a sign that something is wrong with you.',
    ],
    takeaways: ['Watch mood patterns', 'Use calming routines', 'Reach out early'],
  },
  {
    slug: 'pregnancy-care',
    title: 'Pregnancy Care',
    summary: 'Focus on prenatal nutrition, hydration, rest, and timely checkups.',
    icon: Sparkles,
    details: [
      'Pregnancy care is more effective when it is steady and individualized.',
      'Nutrition, hydration, and rest all matter, especially during nausea or fatigue.',
      'Share any bleeding, pain, dizziness, or movement changes with your care team quickly.',
    ],
    takeaways: ['Attend prenatal visits', 'Report symptoms quickly', 'Keep nutrition simple'],
  },
  {
    slug: 'hygiene',
    title: 'Hygiene',
    summary: 'Choose gentle care routines that support comfort and reduce irritation.',
    icon: BookOpenText,
    details: [
      'Mild products are usually better for sensitive areas than strongly scented options.',
      'During menstruation, regular changes and clean hands matter more than elaborate routines.',
      'If you notice ongoing irritation, odor, or itching, get checked for infection or sensitivity.',
    ],
    takeaways: ['Use gentle products', 'Change regularly', 'Watch for irritation'],
  },
  {
    slug: 'healthy-lifestyle',
    title: 'Healthy Lifestyle',
    summary: 'Build a routine around sleep, movement, food, and recovery that you can actually maintain.',
    icon: Leaf,
    details: [
      'A sustainable lifestyle does not require perfection or strict rules.',
      'Small habits repeated often can be more powerful than intense short-lived changes.',
      'Try to protect a realistic rhythm for sleep, hydration, movement, and self-care.',
    ],
    takeaways: ['Start small', 'Repeat habits', 'Make care sustainable'],
  },
]

const HealthEducation = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 450)
    return () => window.clearTimeout(timer)
  }, [])

  const selectedTopic = useMemo(() => educationTopics.find((topic) => topic.slug === slug), [slug])

  if (slug && !selectedTopic) {
    return (
      <main className="min-h-screen bg-[#FFF8FA] px-4 py-8 text-[#333333] sm:px-6 lg:px-8">
        <ModulePageShell>
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-pink-100 bg-white p-8 text-center shadow-sm">
            <p className="text-2xl font-semibold">Educational topic not found</p>
            <Link to="/education" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#E91E63] px-5 py-3 text-sm font-semibold text-white">
              Back to education center
            </Link>
          </div>
        </ModulePageShell>
      </main>
    )
  }

  if (selectedTopic) {
    const Icon = selectedTopic.icon

    return (
      <main className="min-h-screen bg-[#FFF8FA] px-4 py-6 text-[#333333] sm:px-6 lg:px-8">
        <ModulePageShell>
          <div className="mx-auto max-w-5xl space-y-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-full border border-pink-100 bg-white px-4 py-2 text-sm font-semibold text-[#E91E63] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#FFF8FA]"
            >
              Back
            </button>

            <section className="overflow-hidden rounded-[2rem] border border-pink-100 bg-gradient-to-br from-white via-[#FFF8FA] to-[#FDE7F3] p-6 shadow-[0_24px_70px_-34px_rgba(233,30,99,0.26)] md:p-8">
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-white/50 blur-3xl" />
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/85 px-4 py-2 text-sm font-semibold text-[#E91E63] shadow-sm backdrop-blur">
                    Education center
                  </div>
                  <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{selectedTopic.title}</h1>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[#666666]">{selectedTopic.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {selectedTopic.takeaways.map((item) => (
                      <span key={item} className="rounded-full border border-pink-100 bg-white/80 px-3 py-1 text-xs font-medium text-[#666666] shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-pink-100 bg-white/85 p-5 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-[#FFF8FA] to-[#FDE7F3] text-[#E91E63] shadow-sm">
                      <Icon size={28} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#E91E63]">Premium lesson</p>
                      <p className="text-sm text-[#666666]">Modern education card</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {!isReady ? (
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                {Array.from({ length: 2 }).map((_, index) => (
                  <article key={index} className="rounded-[2rem] border border-pink-100 bg-white/90 p-6 shadow-sm">
                    <div className="animate-pulse space-y-4">
                      <div className="h-4 w-40 rounded-full bg-[#F8DDE8]" />
                      <div className="h-3 w-full rounded-full bg-[#FCE7F3]" />
                      <div className="h-3 w-5/6 rounded-full bg-[#FCE7F3]" />
                      <div className="h-3 w-4/6 rounded-full bg-[#FCE7F3]" />
                      <div className="h-24 rounded-[1.2rem] bg-[#FFF8FA]" />
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <article className="rounded-[1.8rem] border border-pink-100 bg-white/90 p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold tracking-tight text-[#333333]">What you should know</h2>
                  <div className="mt-5 space-y-3">
                    {selectedTopic.details.map((detail) => (
                      <p key={detail} className="rounded-[1.2rem] bg-gradient-to-r from-[#FFF8FA] to-white px-4 py-3 text-sm leading-7 text-[#666666]">
                        {detail}
                      </p>
                    ))}
                  </div>
                </article>

                <article className="rounded-[1.8rem] border border-pink-100 bg-white/90 p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold tracking-tight text-[#333333]">Key takeaways</h2>
                  <div className="mt-5 space-y-3">
                    {selectedTopic.takeaways.map((takeaway) => (
                      <div key={takeaway} className="rounded-[1.2rem] border border-pink-100 bg-[#FFF8FA] px-4 py-3 text-sm font-medium text-[#555555] shadow-sm">
                        {takeaway}
                      </div>
                    ))}
                  </div>
                </article>
              </section>
            )}
          </div>
        </ModulePageShell>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#FFF8FA] px-4 py-6 text-[#333333] sm:px-6 lg:px-8">
      <ModulePageShell>
        <div className="mx-auto max-w-7xl space-y-6">
          <section className="overflow-hidden rounded-[2rem] border border-pink-100 bg-gradient-to-br from-white via-[#FFF8FA] to-[#FDE7F3] p-6 shadow-[0_24px_70px_-34px_rgba(233,30,99,0.26)] md:p-8">
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="absolute -right-8 top-0 h-28 w-28 rounded-full bg-white/50 blur-3xl" />
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">Health education center</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Learn with calm, practical guidance that fits real life.</h1>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[#666666] sm:text-lg">
                  Open a topic to read detailed guidance on menstrual, reproductive, mental, pregnancy, hygiene, and lifestyle care.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Modern lessons', 'Responsive cards', 'Practical guidance', 'Gentle design'].map((item) => (
                    <span key={item} className="rounded-full border border-pink-100 bg-white/80 px-3 py-1 text-xs font-medium text-[#666666] shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-pink-100 bg-white/85 p-5 shadow-sm backdrop-blur">
                <div className="space-y-3">
                  <div className="h-2.5 w-32 rounded-full bg-[#F7C7D9]" />
                  <div className="h-2.5 w-44 rounded-full bg-[#FCE7F3]" />
                  <div className="h-2.5 w-28 rounded-full bg-[#F9D5E4]" />
                </div>
              </div>
            </div>
          </section>

          {!isReady ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <article key={index} className="overflow-hidden rounded-[2rem] border border-pink-100 bg-white/90 shadow-sm">
                  <div className="animate-pulse bg-gradient-to-br from-[#FFF8FA] via-[#FDE7F3] to-[#F8BBD0] p-5">
                    <div className="flex items-start justify-between">
                      <div className="h-14 w-14 rounded-[1.25rem] bg-white/60" />
                      <div className="h-7 w-24 rounded-full bg-white/60" />
                    </div>
                    <div className="mt-6 h-4 w-2/3 rounded-full bg-white/70" />
                    <div className="mt-4 h-3 w-full rounded-full bg-white/50" />
                    <div className="mt-2 h-3 w-5/6 rounded-full bg-white/50" />
                    <div className="mt-4 h-10 w-1/2 rounded-full bg-white/60" />
                  </div>
                  <div className="p-5">
                    <div className="h-3 w-24 rounded-full bg-[#F8DDE8] animate-pulse" />
                    <div className="mt-3 h-3 w-full rounded-full bg-[#FCE7F3] animate-pulse" />
                    <div className="mt-2 h-3 w-4/5 rounded-full bg-[#FCE7F3] animate-pulse" />
                    <div className="mt-5 h-11 w-full rounded-full bg-[#F8DDE8] animate-pulse" />
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {educationTopics.map((topic) => (
                <EducationCard key={topic.slug} topic={topic} onOpen={() => navigate(`/education/${topic.slug}`)} />
              ))}
            </div>
          )}
        </div>
      </ModulePageShell>
    </main>
  )
}

export default HealthEducation