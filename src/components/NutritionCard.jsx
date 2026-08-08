import { ArrowRight } from 'lucide-react'

const NutritionCard = ({ section, icon: Icon, onOpen }) => {
  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-pink-100 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-28px_rgba(233,30,99,0.28)]">
      <div className="flex items-center justify-between gap-4">
        <div className="rounded-2xl bg-[#FFF8FA] p-3 text-[#E91E63]">
          <Icon size={22} />
        </div>
        <span className="rounded-full bg-[#FDF2F8] px-3 py-1 text-xs font-semibold text-[#E91E63]">
          Nutrition
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[#333333]">{section.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#666666]">{section.description}</p>
      <ul className="mt-4 space-y-2 text-sm text-[#555555]">
        {section.items.slice(0, 4).map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#E91E63]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {onOpen ? (
        <button
          type="button"
          onClick={onOpen}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-pink-100 px-4 py-3 text-sm font-semibold text-[#E91E63] transition hover:border-[#E91E63] hover:bg-[#FFF8FA]"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      ) : null}
    </article>
  )
}

export default NutritionCard