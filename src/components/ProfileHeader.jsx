import { BadgeCheck, CalendarDays, PencilLine, UserCircle2 } from 'lucide-react'

const ProfileHeader = ({ profile, onEdit }) => {
  return (
    <section className="rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-[0_18px_45px_-28px_rgba(233,30,99,0.22)]">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#FCE7F3] to-[#FBCFE8] text-xl font-semibold text-[#C2185B]">
            {profile.avatar || <UserCircle2 size={28} />}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-semibold text-[var(--app-text)]">{profile.fullName}</h1>
              <BadgeCheck size={18} className="text-[#E91E63]" aria-hidden="true" />
            </div>
            <p className="mt-1 text-sm text-[var(--app-muted)]">{profile.email}</p>
            <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#FFF8FA] px-3 py-1 text-xs font-semibold text-[#E91E63]">
              <CalendarDays size={12} />
              Member since {profile.memberSince}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--app-primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--app-primary-strong)]"
        >
          <PencilLine size={16} />
          Edit Profile
        </button>
      </div>
    </section>
  )
}

export default ProfileHeader