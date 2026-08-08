import { ArrowRight, BadgeInfo, HeartPulse, Shield, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const accentMap = {
  Hormonal: { icon: Sparkles, label: 'Hormonal' },
  Cancer: { icon: Shield, label: 'Cancer' },
  Menstrual: { icon: BadgeInfo, label: 'Menstrual' },
  Pregnancy: { icon: HeartPulse, label: 'Pregnancy' },
  Nutrition: { icon: HeartPulse, label: 'Nutrition' },
  'General Health': { icon: BadgeInfo, label: 'General Health' },
}

const DiseaseCard = ({ disease }) => {
  const category = accentMap[disease.category] ?? accentMap['General Health']
  const CategoryIcon = category.icon
  const chipLabels = [disease.category, ...(disease.filters || []).slice(0, 2)]

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-pink-100 bg-white/90 shadow-[0_20px_60px_-35px_rgba(233,30,99,0.24)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_70px_-30px_rgba(233,30,99,0.32)]">
      <div className={`relative overflow-hidden bg-gradient-to-br ${disease.accent || 'from-[#FCE7F3] to-[#FBCFE8]'} p-5`}>
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-[1.35rem] bg-white/80 text-[#E91E63] shadow-sm backdrop-blur">
            <HeartPulse size={28} />
          </div>
          <div className="rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-[#E91E63] shadow-sm backdrop-blur">
            Premium insight
          </div>
        </div>

        <div className="mt-6 rounded-[1.4rem] border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF8FA] text-[#E91E63]">
              <CategoryIcon size={18} />
            </div>
            <div className="space-y-1">
              <div className="h-3 w-24 rounded-full bg-[#F9CDE0]" />
              <div className="h-2.5 w-32 rounded-full bg-white/90" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9C27B0]">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF8FA] px-3 py-1 text-[#E91E63]">
            <CategoryIcon size={12} />
            {category.label}
          </span>
          {chipLabels.slice(1).map((chip) => (
            <span key={chip} className="rounded-full border border-pink-100 bg-white px-3 py-1 text-[#666666]">
              {chip}
            </span>
          ))}
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#333333]">{disease.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-[#666666]">{disease.shortDescription}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {(disease.filters || []).slice(0, 3).map((filter) => (
            <span key={filter} className="rounded-full bg-[#FFF8FA] px-3 py-1 text-xs font-medium text-[#E91E63]">
              {filter}
            </span>
          ))}
        </div>

        <Link
          to={`/diseases/${disease.slug}`}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#E91E63] px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d51a5f]"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}

export default DiseaseCard