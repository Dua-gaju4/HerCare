import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

const EditProfileModal = ({ isOpen, profile, onClose, onSave }) => {
  const [form, setForm] = useState(profile)

  useEffect(() => {
    setForm(profile)
  }, [profile, isOpen])

  if (!isOpen) {
    return null
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSave(form)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
      <div role="dialog" aria-modal="true" aria-labelledby="edit-profile-title" className="w-full max-w-xl rounded-[1.75rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-[0_30px_100px_-35px_rgba(15,23,42,0.55)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E91E63]">Edit profile</p>
            <h2 id="edit-profile-title" className="mt-1 text-2xl font-semibold text-[var(--app-text)]">Update your basic information</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close profile editor"
            className="rounded-full border border-[var(--app-border)] p-2 text-[var(--app-text)] transition hover:border-[#E91E63] hover:text-[#E91E63]"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-[var(--app-text)]">Full name</span>
            <input
              value={form.fullName}
              onChange={(event) => setForm((previous) => ({ ...previous, fullName: event.target.value }))}
              className="w-full rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] px-4 py-3 text-[var(--app-text)] outline-none transition focus:border-[var(--app-primary)] focus:ring-2 focus:ring-[var(--app-primary)]/20"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-[var(--app-text)]">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((previous) => ({ ...previous, email: event.target.value }))}
              className="w-full rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] px-4 py-3 text-[var(--app-text)] outline-none transition focus:border-[var(--app-primary)] focus:ring-2 focus:ring-[var(--app-primary)]/20"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-[var(--app-text)]">Health preferences</span>
            <input
              value={form.healthPreferences?.join(', ')}
              onChange={(event) => setForm((previous) => ({ ...previous, healthPreferences: event.target.value.split(',').map((item) => item.trim()).filter(Boolean) }))}
              placeholder="Cycle tracking, Wellness reminders"
              className="w-full rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] px-4 py-3 text-[var(--app-text)] outline-none transition placeholder:text-[var(--app-muted)] focus:border-[var(--app-primary)] focus:ring-2 focus:ring-[var(--app-primary)]/20"
            />
          </label>

          <div className="flex flex-wrap justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="rounded-full border border-[var(--app-border)] px-4 py-3 text-sm font-semibold text-[var(--app-text)] transition hover:border-[var(--app-primary)] hover:text-[var(--app-primary)]">
              Cancel
            </button>
            <button type="submit" className="rounded-full bg-[var(--app-primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--app-primary-strong)]">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfileModal