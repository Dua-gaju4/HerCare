const FeatureCard = ({ title, description, icon: Icon, badge }) => {
  return (
    <article className="group rounded-[1.6rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-6 shadow-[0_18px_45px_-20px_rgba(233,30,99,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(233,30,99,0.32)]">
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-gradient-to-br from-[#F8BBD0] to-[#FFF8FA] p-3 text-[#E91E63]">
          <Icon size={22} />
        </div>
        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#9C27B0]">
          {badge}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[var(--app-text)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--app-muted)]">{description}</p>
    </article>
  )
}

export default FeatureCard
