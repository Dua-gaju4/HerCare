import NotificationCard from './NotificationCard'

const NotificationPanel = ({ notifications = [], unreadCount = 0, onMarkRead, onMarkAllRead, onDelete, onClearAll }) => {
  return (
    <section className="rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-[0_18px_45px_-28px_rgba(233,30,99,0.22)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E91E63]">Notifications</p>
          <h2 className="mt-1 text-2xl font-semibold text-[var(--app-text)]">{unreadCount ? `${unreadCount} unread notification${unreadCount === 1 ? '' : 's'}` : 'All caught up'}</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onMarkAllRead}
            className="rounded-full bg-[var(--app-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--app-primary-strong)]"
          >
            Mark all as read
          </button>
          <button
            type="button"
            onClick={onClearAll}
            className="rounded-full border border-[var(--app-border)] px-4 py-2 text-sm font-semibold text-[var(--app-text)] transition hover:border-[#EF4444] hover:text-[#EF4444]"
          >
            Clear all
          </button>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {notifications.length ? (
          notifications.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} onMarkRead={onMarkRead} onDelete={onDelete} />
          ))
        ) : (
          <div className="rounded-[1.25rem] border border-dashed border-[var(--app-border)] bg-[var(--app-surface-strong)] px-4 py-10 text-center text-sm text-[var(--app-muted)]">
            No notifications yet.
          </div>
        )}
      </div>
    </section>
  )
}

export default NotificationPanel