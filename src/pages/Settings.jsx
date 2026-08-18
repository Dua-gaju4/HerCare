import { useEffect, useState } from 'react'
import { MoonStar, Settings2, ShieldCheck, SunMedium } from 'lucide-react'
import ModulePageShell from '../components/ModulePageShell'
import ThemeToggle from '../components/ThemeToggle'
import { useTheme } from '../context/useTheme'
import { clearHerCareStorage, getAuthState, readStorageValue, saveAuthState, writeStorageValue } from '../utils/storage'

const SETTINGS_KEY = 'hercare-settings'
const PROFILE_KEY = 'hercare-profile'

const defaultSettings = {
  name: '',
  email: '',
  notifications: true,
  wellnessReminders: true,
  communityUpdates: true,
}

const Settings = () => {
  const auth = getAuthState()
  const { theme, setTheme } = useTheme()
  const [settings, setSettings] = useState(() => {
    const profile = readStorageValue(PROFILE_KEY, {})
    return {
      ...defaultSettings,
      ...readStorageValue(SETTINGS_KEY, defaultSettings),
      name: auth?.user?.name || profile.fullName || '',
      email: auth?.user?.email || profile.email || '',
    }
  })

  useEffect(() => {
    writeStorageValue(SETTINGS_KEY, settings)
  }, [settings])

  const saveAccountDetails = () => {
    const currentProfile = readStorageValue(PROFILE_KEY, {})
    writeStorageValue(PROFILE_KEY, {
      ...currentProfile,
      fullName: settings.name.trim(),
      email: settings.email.trim(),
    })
    saveAuthState({ name: settings.name.trim(), email: settings.email.trim() })
  }

  const handleToggle = (key) => {
    setSettings((previous) => ({ ...previous, [key]: !previous[key] }))
  }

  const handleClearData = () => {
    if (!window.confirm('Clear HerCare local data from this browser?')) {
      return
    }

    clearHerCareStorage()
    setSettings(defaultSettings)
    setTheme('light')
  }

  return (
    <main className="min-h-screen bg-[var(--app-bg)] px-4 py-6 text-[var(--app-text)] sm:px-6 lg:px-8">
      <ModulePageShell>
        <div className="mx-auto max-w-5xl space-y-6">
          <section className="rounded-[2rem] border border-[var(--app-border)] bg-gradient-to-br from-white via-[#FFF8FA] to-[#FDE7F3] p-6 shadow-[0_24px_70px_-34px_rgba(233,30,99,0.22)] md:p-8 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">Settings</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Control account details, preferences, privacy, and appearance.</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--app-muted)] sm:text-lg">
                All changes are stored locally in this browser so your preferences persist after refreshes.
              </p>
            </div>
          </section>

          <div className="grid gap-6">
            <section className="rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#E91E63]">
                <Settings2 size={18} />
                <p className="text-sm font-semibold uppercase tracking-[0.24em]">Account</p>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-[var(--app-text)]">Name</span>
                  <input value={settings.name} onChange={(event) => setSettings((previous) => ({ ...previous, name: event.target.value }))} onBlur={saveAccountDetails} className="w-full rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] px-4 py-3 text-[var(--app-text)] outline-none transition focus:border-[var(--app-primary)] focus:ring-2 focus:ring-[var(--app-primary)]/20" />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-[var(--app-text)]">Email</span>
                  <input type="email" value={settings.email} onChange={(event) => setSettings((previous) => ({ ...previous, email: event.target.value }))} onBlur={saveAccountDetails} className="w-full rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] px-4 py-3 text-[var(--app-text)] outline-none transition focus:border-[var(--app-primary)] focus:ring-2 focus:ring-[var(--app-primary)]/20" />
                </label>
              </div>
            </section>

            <section className="rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#E91E63]">
                <ShieldCheck size={18} />
                <p className="text-sm font-semibold uppercase tracking-[0.24em]">Preferences</p>
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  { key: 'notifications', label: 'Push notifications' },
                  { key: 'wellnessReminders', label: 'Wellness reminders' },
                  { key: 'communityUpdates', label: 'Community updates' },
                ].map((item) => (
                  <button key={item.key} type="button" onClick={() => handleToggle(item.key)} aria-pressed={settings[item.key]} className="flex items-center justify-between rounded-[1.1rem] border border-[var(--app-border)] px-4 py-3 text-left transition hover:border-[var(--app-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-primary)]">
                    <span className="text-sm font-medium text-[var(--app-text)]">{item.label}</span>
                    <span className={`inline-flex h-6 w-11 items-center rounded-full p-1 transition ${settings[item.key] ? 'bg-[var(--app-primary)]' : 'bg-slate-300 dark:bg-white/20'}`}>
                      <span className={`h-4 w-4 rounded-full bg-white shadow transition ${settings[item.key] ? 'translate-x-5' : 'translate-x-0'}`} />
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E91E63]">Privacy</p>
              <p className="mt-3 text-sm leading-7 text-[var(--app-muted)]">
                HerCare stores demo data locally in your browser. Clearing local data will reset theme, profile, notifications, community activity, and saved progress.
              </p>
              <button type="button" onClick={handleClearData} className="mt-4 rounded-full border border-[#EF4444] px-4 py-3 text-sm font-semibold text-[#EF4444] transition hover:bg-[#EF4444] hover:text-white">
                Clear local storage
              </button>
            </section>

            <section className="rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#E91E63]">
                <MoonStar size={18} />
                <p className="text-sm font-semibold uppercase tracking-[0.24em]">Appearance</p>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button type="button" onClick={() => setTheme('light')} className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition ${theme === 'light' ? 'border-[var(--app-primary)] bg-[#FFF8FA] text-[var(--app-primary)]' : 'border-[var(--app-border)] text-[var(--app-text)]'}`}>
                  <SunMedium size={16} />
                  Light theme
                </button>
                <button type="button" onClick={() => setTheme('dark')} className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition ${theme === 'dark' ? 'border-[var(--app-primary)] bg-[#FFF8FA] text-[var(--app-primary)]' : 'border-[var(--app-border)] text-[var(--app-text)]'}`}>
                  <MoonStar size={16} />
                  Dark theme
                </button>
                <ThemeToggle />
              </div>
            </section>
          </div>
        </div>
      </ModulePageShell>
    </main>
  )
}

export default Settings
