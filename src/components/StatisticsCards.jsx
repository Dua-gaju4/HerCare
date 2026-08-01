const StatisticsCards = ({ cards = [] }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {cards.map(({ label, value, icon: Icon, accent = 'text-[#E91E63]', bg = 'from-[#FFF8FA] to-[#FDE7F3]', detail }) => (
        <article
          key={label}
          className="rounded-[1.5rem] border border-pink-100 bg-white/85 p-5 shadow-[0_16px_45px_-24px_rgba(233,30,99,0.28)] transition duration-300 hover:-translate-y-1"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-[#666666]">{label}</p>
              <p className="mt-3 text-2xl font-semibold text-[#333333]">{value}</p>
            </div>
            <div className={`rounded-2xl bg-gradient-to-br ${bg} p-3 ${accent}`}>
              <Icon size={18} />
            </div>
          </div>
          {detail ? <p className="mt-3 text-sm text-[#9C27B0]">{detail}</p> : null}
        </article>
      ))}
    </div>
  )
}

export default StatisticsCards
