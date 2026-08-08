import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, BookOpenText, Sparkles } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import ModulePageShell from '../components/ModulePageShell'
import articlesData from '../data/articles.json'

const Articles = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 400)
    return () => window.clearTimeout(timer)
  }, [])

  const selectedArticle = useMemo(() => articlesData.find((article) => article.slug === slug), [slug])

  if (slug && !selectedArticle) {
    return (
      <main className="min-h-screen bg-[#FFF8FA] px-4 py-8 text-[#333333] sm:px-6 lg:px-8">
        <ModulePageShell>
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-pink-100 bg-white p-8 text-center shadow-sm">
            <p className="text-2xl font-semibold">Article not found</p>
            <Link to="/articles" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#E91E63] px-5 py-3 text-sm font-semibold text-white">
              Back to articles
            </Link>
          </div>
        </ModulePageShell>
      </main>
    )
  }

  if (selectedArticle) {
    return (
      <main className="min-h-screen bg-[#FFF8FA] px-4 py-6 text-[#333333] sm:px-6 lg:px-8">
        <ModulePageShell>
          <div className="mx-auto max-w-5xl space-y-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-4 py-2 text-sm font-semibold text-[#E91E63] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#FFF8FA]"
            >
              <ArrowLeft size={16} />
              Back
            </button>

            <section className="overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-[0_24px_70px_-34px_rgba(233,30,99,0.26)]">
              <ArticleCard article={selectedArticle} />
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-3">
                  {selectedArticle.keyPoints.map((point) => (
                    <span key={point} className="rounded-full bg-[#FFF8FA] px-4 py-2 text-sm font-medium text-[#E91E63]">
                      {point}
                    </span>
                  ))}
                </div>
                <div className="mt-8 space-y-4">
                  {selectedArticle.content.map((paragraph) => (
                    <p key={paragraph} className="rounded-[1.1rem] bg-[#FFF8FA] px-4 py-3 text-sm leading-7 text-[#666666]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </ModulePageShell>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#FFF8FA] px-4 py-6 text-[#333333] sm:px-6 lg:px-8">
      <ModulePageShell>
        <div className="mx-auto max-w-7xl space-y-6">
          <section className="overflow-hidden rounded-[2rem] border border-pink-100 bg-gradient-to-br from-white via-[#FFF8FA] to-[#FDE7F3] p-6 shadow-[0_24px_70px_-34px_rgba(233,30,99,0.26)] md:p-8">
            <div className="relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-white/50 blur-3xl" />
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">Articles</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Practical reading for healthier daily habits.</h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[#666666] sm:text-lg">
                  Explore expert-led articles about hormones, nutrition, pregnancy, hygiene, mental health, and sustainable wellness.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Hormonal health', 'Nutrition', 'Pregnancy', 'Mental health', 'Lifestyle'].map((item) => (
                    <span key={item} className="rounded-full border border-pink-100 bg-white/80 px-3 py-1 text-xs font-medium text-[#666666] shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.4rem] border border-pink-100 bg-white/85 p-5 shadow-sm backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#FFF8FA] p-3 text-[#E91E63]">
                    <BookOpenText size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">{articlesData.length} articles</p>
                    <p className="text-sm text-[#666666]">available in the library</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {!isReady ? (
            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <article key={index} className="overflow-hidden rounded-[2rem] border border-pink-100 bg-white/90 shadow-sm">
                  <div className="animate-pulse bg-gradient-to-br from-[#FDE7F3] via-[#FFF8FA] to-[#F8BBD0] p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="h-52 w-full rounded-[1.4rem] bg-white/50" />
                    </div>
                  </div>
                  <div className="space-y-3 p-5">
                    <div className="h-4 w-24 rounded-full bg-[#F8DDE8] animate-pulse" />
                    <div className="h-5 w-full rounded-full bg-[#FCE7F3] animate-pulse" />
                    <div className="h-3 w-5/6 rounded-full bg-[#FCE7F3] animate-pulse" />
                    <div className="h-3 w-4/5 rounded-full bg-[#FCE7F3] animate-pulse" />
                    <div className="mt-4 h-11 w-full rounded-full bg-[#F8DDE8] animate-pulse" />
                  </div>
                </article>
              ))}
            </section>
          ) : (
            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {articlesData.map((article) => (
                <ArticleCard key={article.slug} article={article} onReadMore={() => navigate(`/articles/${article.slug}`)} />
              ))}
            </section>
          )}

          <section className="rounded-[1.8rem] border border-pink-100 bg-white/90 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-[#E91E63]">
              <Sparkles size={20} />
              <p className="text-sm font-semibold uppercase tracking-[0.24em]">Read more support</p>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#666666]">
              Article content is stored locally and renders instantly, so the section stays fast and works without a backend or API.
            </p>
          </section>
        </div>
      </ModulePageShell>
    </main>
  )
}

export default Articles