import { BellRing, CircleCheckBig, CircleX, Stethoscope, Sparkles, Users } from 'lucide-react'

const iconMap = {
  community: Users,
  article: Sparkles,
  wellness: BellRing,
  medicine: Stethoscope,
  system: CircleCheckBig,
}

const NotificationCard = ({ notification, onMarkRead, onDelete }) => {
  const Icon = iconMap[notification.type] || BellRing

  return (
    <article className={`rounded-[1.35rem] border p-4 transition ${notification.read ? 'border-[var(--app-border)] bg-[var(--app-surface-strong)]' : 'border-[var(--app-primary)]/25 bg-[#FFF8FA] shadow-[0_18px_45px_-28px_rgba(233,30,99,0.18)]'}`}>
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FCE7F3] to-[#FBCFE8] text-[#E91E63]">
          <Icon size={18} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-semibold text-[var(--app-text)]">{notification.title}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--app-muted)]">{notification.message}</p>
            </div>
            <span className="text-xs font-medium text-[var(--app-muted)]">{notification.time}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {!notification.read ? (
              <button
                type="button"
                onClick={() => onMarkRead(notification.id)}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--app-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--app-primary-strong)]"
              >
                <CircleCheckBig size={14} />
                Mark as read
              </button>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E2E8F0] px-4 py-2 text-sm font-semibold text-[#475569] dark:bg-white/10 dark:text-slate-200">
                <CircleCheckBig size={14} />
                Read
              </span>
            )}
            <button
              type="button"
              onClick={() => onDelete(notification.id)}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] px-4 py-2 text-sm font-semibold text-[var(--app-text)] transition hover:border-[#EF4444] hover:text-[#EF4444]"
            >
              <CircleX size={14} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default NotificationCard