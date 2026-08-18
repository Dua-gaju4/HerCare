import { useMemo, useState } from 'react'
import { HeartPulse, Sparkles } from 'lucide-react'
import ModulePageShell from '../components/ModulePageShell'
import EditProfileModal from '../components/EditProfileModal'
import ProfileHeader from '../components/ProfileHeader'
import ProfileStats from '../components/ProfileStats'
import profileSeed from '../data/profile.json'
import articlesData from '../data/articles.json'
import wellnessTips from '../data/wellnessTips.json'
import { getAuthState, saveAuthState } from '../utils/storage'
import { readStorageValue, writeStorageValue } from '../utils/storage'

const PROFILE_KEY = 'hercare-profile'
const SAVED_ARTICLES_KEY = 'hercare-saved-articles'

const getInitialProfile = () => {
  const storedProfile = readStorageValue(PROFILE_KEY, null)
  const authState = getAuthState()

  return storedProfile || {
    ...profileSeed,
    fullName: authState?.user?.name || profileSeed.fullName,
    email: authState?.user?.email || profileSeed.email,
  }
}

const Profile = () => {
  const [profile, setProfile] = useState(getInitialProfile)
  const [isEditing, setIsEditing] = useState(false)
  const savedArticles = useMemo(() => {
    const savedSlugs = readStorageValue(SAVED_ARTICLES_KEY, profileSeed.savedArticles)
    return articlesData.filter((article) => savedSlugs.includes(article.slug))
  }, [])
  const completedGoals = useMemo(() => {
    const completedSlugs = readStorageValue('hercare-wellness-progress', profileSeed.wellnessGoalsCompleted)
    return wellnessTips.filter((goal) => completedSlugs.includes(goal.slug))
  }, [])

  const handleSaveProfile = (nextProfile) => {
    setProfile(nextProfile)
    writeStorageValue(PROFILE_KEY, nextProfile)
    saveAuthState({ name: nextProfile.fullName, email: nextProfile.email })
    setIsEditing(false)
  }

  return (
    <main className="min-h-screen bg-[var(--app-bg)] px-4 py-6 text-[var(--app-text)] sm:px-6 lg:px-8">
      <ModulePageShell>
        <div className="mx-auto max-w-6xl space-y-6">
          <section className="rounded-[2rem] border border-[var(--app-border)] bg-gradient-to-br from-white via-[#FFF8FA] to-[#FDE7F3] p-6 shadow-[0_24px_70px_-34px_rgba(233,30,99,0.22)] md:p-8 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">Profile</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Your wellness identity, saved locally and easy to update.</h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--app-muted)] sm:text-lg">
                  Review your basic details, health preferences, saved reading, and completed wellness habits in one place.
                </p>
              </div>
              <div className="rounded-[1.35rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#FFF8FA] p-3 text-[#E91E63]">
                    <HeartPulse size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--app-text)]">Profile saved locally</p>
                    <p className="text-sm text-[var(--app-muted)]">Changes persist after refresh</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ProfileHeader profile={profile} onEdit={() => setIsEditing(true)} />
          <ProfileStats profile={profile} savedArticles={savedArticles} completedGoals={completedGoals} />

          <section className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E91E63]">Health preferences</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.healthPreferences?.length ? (
                  profile.healthPreferences.map((preference) => (
                    <span key={preference} className="rounded-full bg-[#FFF8FA] px-3 py-1 text-sm font-medium text-[#E91E63]">
                      {preference}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-[var(--app-muted)]">No preferences saved yet.</p>
                )}
              </div>
            </article>

            <article className="rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#E91E63]">
                <Sparkles size={18} />
                <p className="text-sm font-semibold uppercase tracking-[0.24em]">Activity summary</p>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {profile.activitySummary?.map((item) => (
                  <div key={item.label} className="rounded-[1.1rem] bg-[#FFF8FA] px-4 py-4">
                    <p className="text-sm text-[var(--app-muted)]">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-[var(--app-text)]">{item.value}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E91E63]">Saved articles</p>
              <div className="mt-4 space-y-3">
                {savedArticles.length ? (
                  savedArticles.map((article) => (
                    <div key={article.slug} className="rounded-[1.1rem] border border-[var(--app-border)] bg-[#FFF8FA] px-4 py-3">
                      <p className="font-semibold text-[var(--app-text)]">{article.title}</p>
                      <p className="mt-1 text-sm text-[var(--app-muted)]">{article.shortDescription}</p>
                    </div>
                  ))
                ) : (
                  <div className="rounded-[1.1rem] border border-dashed border-[var(--app-border)] bg-[#FFF8FA] px-4 py-6 text-sm text-[var(--app-muted)]">
                    No saved articles.
                  </div>
                )}
              </div>
            </article>

            <article className="rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E91E63]">Completed wellness goals</p>
              <div className="mt-4 space-y-3">
                {completedGoals.length ? (
                  completedGoals.map((goal) => (
                    <div key={goal.slug} className="rounded-[1.1rem] border border-[var(--app-border)] bg-[#FFF8FA] px-4 py-3">
                      <p className="font-semibold text-[var(--app-text)]">{goal.title}</p>
                      <p className="mt-1 text-sm text-[var(--app-muted)]">{goal.description}</p>
                    </div>
                  ))
                ) : (
                  <div className="rounded-[1.1rem] border border-dashed border-[var(--app-border)] bg-[#FFF8FA] px-4 py-6 text-sm text-[var(--app-muted)]">
                    No wellness goals completed.
                  </div>
                )}
              </div>
            </article>
          </section>
        </div>

        <EditProfileModal isOpen={isEditing} profile={profile} onClose={() => setIsEditing(false)} onSave={handleSaveProfile} />
      </ModulePageShell>
    </main>
  )
}

export default Profile