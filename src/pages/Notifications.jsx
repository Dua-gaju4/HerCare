import { useEffect, useMemo, useState } from 'react'
import { BellRing } from 'lucide-react'
import ModulePageShell from '../components/ModulePageShell'
import NotificationPanel from '../components/NotificationPanel'
import notificationSeed from '../data/notifications.json'
import { readStorageValue, writeStorageValue } from '../utils/storage'

const STORAGE_KEY = 'hercare-notifications'

const Notifications = () => {
  const [notifications, setNotifications] = useState(() => readStorageValue(STORAGE_KEY, notificationSeed))

  useEffect(() => {
    writeStorageValue(STORAGE_KEY, notifications)
  }, [notifications])

  const unreadCount = useMemo(() => notifications.filter((notification) => !notification.read).length, [notifications])

  const handleMarkRead = (id) => {
    setNotifications((previous) => previous.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)))
  }

  const handleMarkAllRead = () => {
    setNotifications((previous) => previous.map((notification) => ({ ...notification, read: true })))
  }

  const handleDelete = (id) => {
    setNotifications((previous) => previous.filter((notification) => notification.id !== id))
  }

  const handleClearAll = () => {
    if (!window.confirm('Clear all notifications?')) {
      return
    }

    setNotifications([])
  }

  return (
    <main className="min-h-screen bg-[var(--app-bg)] px-4 py-6 text-[var(--app-text)] sm:px-6 lg:px-8">
      <ModulePageShell>
        <div className="mx-auto max-w-5xl space-y-6">
          <section className="rounded-[2rem] border border-[var(--app-border)] bg-gradient-to-br from-white via-[#FFF8FA] to-[#FDE7F3] p-6 shadow-[0_24px_70px_-34px_rgba(233,30,99,0.22)] md:p-8 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">Notifications</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Keep up with reminders, updates, and community activity.</h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--app-muted)] sm:text-lg">
                  Notifications are stored locally so your read state persists after refreshes and future visits.
                </p>
              </div>
              <div className="rounded-[1.35rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#FFF8FA] p-3 text-[#E91E63]">
                    <BellRing size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--app-text)]">{unreadCount} unread</p>
                    <p className="text-sm text-[var(--app-muted)]">Notification badge updates in real time</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <NotificationPanel
            notifications={notifications}
            unreadCount={unreadCount}
            onMarkRead={handleMarkRead}
            onMarkAllRead={handleMarkAllRead}
            onDelete={handleDelete}
            onClearAll={handleClearAll}
          />
        </div>
      </ModulePageShell>
    </main>
  )
}

export default Notifications