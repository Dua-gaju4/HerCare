import { ArrowRight, CalendarDays, Clock3, Flower2, HeartPulse, Leaf, MoonStar, Sparkles, UtensilsCrossed } from 'lucide-react'
import { Link } from 'react-router-dom'

const iconMap = {
  'Hormonal Health': HeartPulse,
  Nutrition: UtensilsCrossed,
  'Mental Health': MoonStar,
  'Pregnancy Care': Sparkles,
  Hygiene: Flower2,
  Lifestyle: Leaf,
}

const buildImage = (article) => {
  const accentMap = {
    'Hormonal Health': '#F472B6',
    Nutrition: '#A855F7',
    'Mental Health': '#EC4899',
    'Pregnancy Care': '#F472B6',
    Hygiene: '#DB2777',
    Lifestyle: '#BE185D',
  }
  const accent = accentMap[article.category] || article.primaryColor || '#E91E63'

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 420" role="img" aria-label="${article.title}">
      <defs>
        <linearGradient id="grad" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="${accent}" />
          <stop offset="100%" stop-color="${article.secondaryColor || '#FBCFE8'}" />
        </linearGradient>
      </defs>
      <rect width="720" height="420" rx="36" fill="url(#grad)" />
      <circle cx="570" cy="100" r="92" fill="rgba(255,255,255,0.16)" />
      <circle cx="620" cy="312" r="122" fill="rgba(255,255,255,0.1)" />
      <circle cx="120" cy="312" r="72" fill="rgba(255,255,255,0.1)" />
      <rect x="28" y="28" width="152" height="34" rx="17" fill="rgba(255,255,255,0.3)" />
      <text x="50" y="51" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700">${article.category.toUpperCase()}</text>
      <g transform="translate(490 112)">
        <circle cx="70" cy="70" r="72" fill="rgba(255,255,255,0.16)" />
        <circle cx="70" cy="70" r="54" fill="rgba(255,255,255,0.22)" />
        <text x="70" y="91" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="70" font-weight="700">${article.imageLabel[0]}</text>
      </g>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const ArticleCard = ({ article, onReadMore }) => {
  const imageSource = buildImage(article)
  const AccentIcon = iconMap[article.category] || HeartPulse

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-pink-100 bg-white shadow-[0_16px_45px_-30px_rgba(233,30,99,0.24)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(233,30,99,0.3)]">
      <div className="relative overflow-hidden">
        <img src={imageSource} alt={article.title} className="h-28 w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-32" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/5" />
        <div className="absolute left-4 top-4 rounded-full bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm backdrop-blur">
          {article.category}
        </div>
        <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/18 text-white shadow-sm backdrop-blur">
          <AccentIcon size={20} strokeWidth={2.2} />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9C27B0]">
          <span className="rounded-full bg-[#FFF8FA] px-2.5 py-1 text-[#E91E63]">{article.category}</span>
          <span className="rounded-full bg-[#F5F3FF] px-2.5 py-1 text-[#8B5CF6]">Wellness read</span>
        </div>

        <h3
          className="mt-3 text-[1rem] font-semibold leading-6 tracking-tight text-[#333333] sm:text-[1.05rem]"
          title={article.title}
          style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          {article.title}
        </h3>
        <p
          className="mt-2 text-[13px] leading-6 text-[#666666]"
          style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          {article.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-[#666666]">
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={12} className="text-[#E91E63]" />
            {article.publishedDate}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 size={12} className="text-[#E91E63]" />
            5 min read
          </span>
          <span className="inline-flex items-center gap-2">
            <UserCircle2 size={12} className="text-[#E91E63]" />
            {article.author}
          </span>
        </div>

        <button
          type="button"
          onClick={onReadMore}
          className="mt-4 inline-flex self-start items-center gap-2 text-sm font-semibold text-[#E91E63] transition hover:text-[#c2185b]"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  )
}

export default ArticleCard