import { BadgeCheck, BookOpen, HeartPulse } from 'lucide-react'
import { useState } from 'react'
import ModulePageShell from '../components/ModulePageShell'
import doctorPosts from '../data/doctorPosts.json'

const DoctorPosts = () => {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <main className="min-h-screen bg-[var(--app-bg)] px-4 py-6 text-[var(--app-text)] sm:px-6 lg:px-8">
      <ModulePageShell>
        <div className="mx-auto max-w-7xl space-y-6">
          <section className="overflow-hidden rounded-[2rem] border border-[var(--app-border)] bg-gradient-to-br from-white via-[#FFF8FA] to-[#FDE7F3] p-6 shadow-[0_24px_70px_-34px_rgba(233,30,99,0.22)] md:p-8 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">Doctor posts</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Educational posts from demo healthcare professionals.</h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--app-muted)] sm:text-lg">
                  These posts are mock educational content only and should not be treated as real medical advice or real clinician endorsements.
                </p>
              </div>
              <div className="rounded-[1.35rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#FFF8FA] p-3 text-[#E91E63]">
                    <HeartPulse size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--app-text)]">{doctorPosts.length} demo posts</p>
                    <p className="text-sm text-[var(--app-muted)]">Verified badge is for UI only</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            {doctorPosts.map((post) => {
              const isExpanded = expandedId === post.id

              return (
                <article key={post.id} className="rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-[0_18px_45px_-28px_rgba(233,30,99,0.18)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#FCE7F3] to-[#FBCFE8] text-lg font-semibold text-[#C2185B]">
                      {post.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-xl font-semibold text-[var(--app-text)]">{post.doctorName}</h2>
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF8FA] px-3 py-1 text-xs font-semibold text-[#E91E63]">
                          <BadgeCheck size={12} />
                          Verified
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-[var(--app-muted)]">{post.specialty}</p>
                      <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-[var(--app-surface)] px-3 py-1 text-xs font-semibold text-[var(--app-muted)]">
                        <BookOpen size={12} className="text-[#E91E63]" />
                        {post.category} • {post.date}
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-[var(--app-text)]">{post.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--app-muted)]">{isExpanded ? post.content : `${post.content.slice(0, 130)}...`}</p>

                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : post.id)}
                    className="mt-4 rounded-full bg-[var(--app-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--app-primary-strong)]"
                  >
                    {isExpanded ? 'Show less' : 'Read More'}
                  </button>
                </article>
              )
            })}
          </section>
        </div>
      </ModulePageShell>
    </main>
  )
}

export default DoctorPosts