import { useEffect, useMemo, useState } from 'react'
import { HeartPulse, Sparkles } from 'lucide-react'
import ModulePageShell from '../components/ModulePageShell'
import WellnessCard from '../components/WellnessCard'
import wellnessTips from '../data/wellnessTips.json'
import { readStorageValue, writeStorageValue } from '../utils/storage'

const STORAGE_KEY = 'hercare-wellness-progress'

const getStoredProgress = () => readStorageValue(STORAGE_KEY, [])

const WellnessTracker = () => {
  const [completedGoals, setCompletedGoals] = useState(getStoredProgress())

  useEffect(() => {
    writeStorageValue(STORAGE_KEY, completedGoals)
  }, [completedGoals])

  const progressPercentage = useMemo(() => Math.round((completedGoals.length / wellnessTips.length) * 100), [completedGoals.length])

  const toggleGoal = (slug) => {
    setCompletedGoals((previous) =>
      previous.includes(slug) ? previous.filter((item) => item !== slug) : [...previous, slug],
    )
  }

  return (
    <main className="min-h-screen bg-[var(--app-bg)] px-4 py-6 text-[var(--app-text)] sm:px-6 lg:px-8">
      <ModulePageShell>
        <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-[2rem] border border-[var(--app-border)] bg-gradient-to-br from-white via-[#FFF8FA] to-[#FDE7F3] p-6 shadow-[0_24px_70px_-34px_rgba(233,30,99,0.26)] md:p-8 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">Wellness tracker</p>
              <h1 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">Mark simple goals complete and watch your progress grow.</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#666666] sm:text-lg">
                Sleep, movement, stress, meditation, goals, and self-care habits are stored locally so your progress stays in the browser.
              </p>
            </div>

            <div className="rounded-[1.4rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#FFF8FA] p-3 text-[#E91E63]">
                  <HeartPulse size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[#333333]">Progress</p>
                  <p className="text-sm text-[#666666]">{completedGoals.length} of {wellnessTips.length} goals complete</p>
                </div>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#FCE7F3]">
                <div className="h-full rounded-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all" style={{ width: `${progressPercentage}%` }} />
              </div>
              <p className="mt-3 text-right text-sm font-semibold text-[#E91E63]">{progressPercentage}%</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {wellnessTips.map((goal) => (
            <WellnessCard key={goal.slug} goal={goal} completed={completedGoals.includes(goal.slug)} onToggle={() => toggleGoal(goal.slug)} />
          ))}
        </section>

          <section className="rounded-[1.8rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-6 shadow-sm">
          <div className="flex items-center gap-3 text-[#E91E63]">
            <Sparkles size={20} />
            <p className="text-sm font-semibold uppercase tracking-[0.24em]">Empty state support</p>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#666666]">
            If you have not marked any goals yet, start with just one card. The interface is designed for slow, steady momentum rather than perfection.
          </p>
        </section>
        </div>
      </ModulePageShell>
    </main>
  )
}

export default WellnessTracker
