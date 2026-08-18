const DashboardCard = ({ title, description, icon: Icon, action, children, className = '' }) => {
  return (
    <section className={`rounded-[1.75rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-[0_20px_60px_-35px_rgba(233,30,99,0.3)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-35px_rgba(233,30,99,0.36)] ${className}`}>
      {(title || description || Icon || action) && (
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            {description ? <p className="text-sm font-semibold text-[var(--app-primary)]">{description}</p> : null}
            {title ? <h3 className="mt-1 text-xl font-semibold text-[var(--app-text)]">{title}</h3> : null}
          </div>
          {Icon ? (
            <div className="rounded-2xl bg-gradient-to-br from-[#FFF8FA] to-[#F8BBD0] p-3 text-[var(--app-primary)] shadow-sm dark:from-white/5 dark:to-white/10">
              <Icon size={20} />
            </div>
          ) : null}
        </div>
      )}
      {children}
      {action ? <div className="mt-5">{action}</div> : null}
    </section>
  )
}

export default DashboardCard
