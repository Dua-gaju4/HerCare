const ProfileStats = ({ profile, savedArticles = [], completedGoals = [] }) => {
  const stats = [
    { label: 'Health preferences', value: profile.healthPreferences?.length ?? 0, detail: profile.healthPreferences?.join(', ') || 'None selected' },
    { label: 'Saved articles', value: savedArticles.length, detail: savedArticles.length ? 'Saved for later reading' : 'No saved articles' },
    { label: 'Completed goals', value: completedGoals.length, detail: completedGoals.length ? 'Tracked in Wellness' : 'No wellness goals completed' },
  ]

  return (
    <section className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <article key={stat.label} className="rounded-[1.35rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm">
          <p className="text-sm text-[var(--app-muted)]">{stat.label}</p>
          <p className="mt-2 text-3xl font-semibold text-[var(--app-text)]">{stat.value}</p>
          <p className="mt-3 text-sm leading-6 text-[var(--app-muted)]">{stat.detail}</p>
        </article>
      ))}
    </section>
  )
}

export default ProfileStats