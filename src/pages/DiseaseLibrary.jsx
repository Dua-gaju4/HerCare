import { useEffect, useMemo, useState } from 'react'
import { HeartPulse, Sparkles } from 'lucide-react'
import DiseaseCard from '../components/DiseaseCard'
import DiseaseCategory from '../components/DiseaseCategory'
import FilterPanel from '../components/FilterPanel'
import ModulePageShell from '../components/ModulePageShell'
import SearchBar from '../components/SearchBar'
import { filterDiseases } from '../utils/searchFilter'
import diseasesData from '../data/diseases.json'

const filterOptions = ['Hormonal', 'Cancer', 'Menstrual', 'Pregnancy', 'Nutrition', 'General Health']

const DiseaseLibrary = () => {
  const [query, setQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState([])
  const [visibleCount, setVisibleCount] = useState(6)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 450)
    return () => window.clearTimeout(timer)
  }, [])

  const filteredDiseases = useMemo(() => filterDiseases(diseasesData, query, activeFilters), [activeFilters, query])
  const visibleDiseases = filteredDiseases.slice(0, visibleCount)

  const categoryCounts = useMemo(
    () => filterOptions.reduce((counts, filter) => ({ ...counts, [filter]: diseasesData.filter((disease) => (disease.filters || []).includes(filter)).length }), {}),
    [],
  )

  const handleToggleFilter = (filter) => {
    setVisibleCount(6)
    setActiveFilters((previous) =>
      previous.includes(filter) ? previous.filter((item) => item !== filter) : [...previous, filter],
    )
  }

  const handleClearFilters = () => {
    setQuery('')
    setActiveFilters([])
    setVisibleCount(6)
  }

  const hasMore = visibleCount < filteredDiseases.length

  return (
    <main className="min-h-screen bg-[#FFF8FA] text-[#333333]">
      <ModulePageShell>
        <section className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] border border-pink-100 bg-gradient-to-br from-white via-[#FFF8FA] to-[#FDE7F3] p-6 shadow-[0_24px_70px_-34px_rgba(233,30,99,0.32)] md:p-8">
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="absolute -right-8 top-0 h-28 w-28 rounded-full bg-white/50 blur-3xl" />
              <div className="absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#F8BBD0]/30 blur-3xl" />
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/85 px-4 py-2 text-sm font-semibold text-[#E91E63] shadow-sm backdrop-blur">
                  <HeartPulse size={16} />
                  Women’s disease library
                </div>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Explore clear, calm guidance on common women’s health conditions.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[#666666] sm:text-lg">
                  Search by disease name, symptoms, or category and filter the results instantly to find what matters most.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Trusted content', 'Instant search', 'Premium UI', 'Responsive cards'].map((item) => (
                    <span key={item} className="rounded-full border border-pink-100 bg-white/80 px-3 py-1 text-xs font-medium text-[#666666] shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-pink-100 bg-white/85 p-5 shadow-sm backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-gradient-to-br from-[#FFF8FA] to-[#FDE7F3] p-3 text-[#E91E63] shadow-sm">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">{filteredDiseases.length} conditions</p>
                    <p className="text-sm text-[#666666]">refined by your search</p>
                  </div>
                </div>
                <div className="mt-4 rounded-[1.2rem] bg-[#FFF8FA] p-4">
                  <div className="h-2.5 w-2/3 rounded-full bg-gradient-to-r from-[#F6BCD6] to-[#FCE7F3]" />
                  <div className="mt-3 h-2.5 w-1/2 rounded-full bg-[#F8DDE8]" />
                  <div className="mt-3 h-2.5 w-5/6 rounded-full bg-[#FCE7F3]" />
                </div>
              </div>
            </div>
          </div>

          <SearchBar value={query} onChange={setQuery} onClear={() => setQuery('')} placeholder="Search by name, symptom, or category" />

          <FilterPanel
            filters={filterOptions}
            selectedFilters={activeFilters}
            onToggleFilter={handleToggleFilter}
            onClear={handleClearFilters}
            resultCount={filteredDiseases.length}
          />

          <div className="flex flex-wrap gap-3">
            {filterOptions.map((filter) => (
              <DiseaseCategory
                key={filter}
                label={filter}
                count={categoryCounts[filter] ?? 0}
                isActive={activeFilters.includes(filter)}
                onClick={() => handleToggleFilter(filter)}
              />
            ))}
          </div>

          {!isReady ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <article key={index} className="overflow-hidden rounded-[2rem] border border-pink-100 bg-white/90 shadow-sm">
                  <div className="animate-pulse bg-gradient-to-br from-[#FDE7F3] via-[#FFF8FA] to-[#F8BBD0] p-5">
                    <div className="flex items-start justify-between">
                      <div className="h-16 w-16 rounded-[1.35rem] bg-white/60" />
                      <div className="h-7 w-24 rounded-full bg-white/60" />
                    </div>
                    <div className="mt-6 h-4 w-1/2 rounded-full bg-white/70" />
                    <div className="mt-4 h-3 w-full rounded-full bg-white/50" />
                    <div className="mt-2 h-3 w-5/6 rounded-full bg-white/50" />
                  </div>
                  <div className="space-y-3 p-5">
                    <div className="h-3 w-24 rounded-full bg-[#F8DDE8] animate-pulse" />
                    <div className="h-3 w-full rounded-full bg-[#FCE7F3] animate-pulse" />
                    <div className="h-3 w-4/5 rounded-full bg-[#FCE7F3] animate-pulse" />
                    <div className="mt-5 h-11 w-full rounded-full bg-[#F8DDE8] animate-pulse" />
                  </div>
                </article>
              ))}
            </div>
          ) : visibleDiseases.length > 0 ? (
            <>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {visibleDiseases.map((disease) => (
                  <DiseaseCard key={disease.slug} disease={disease} />
                ))}
              </div>

              {hasMore ? (
                <div className="flex justify-center pb-6 pt-4">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((previous) => previous + 3)}
                    className="rounded-full bg-[#E91E63] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d51a5f]"
                  >
                    Load More
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-pink-200 bg-white/85 p-10 text-center shadow-sm backdrop-blur">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFF8FA] to-[#FDE7F3] text-[#E91E63] shadow-sm">
                <HeartPulse size={28} />
              </div>
              <p className="mt-5 text-xl font-semibold text-[#333333]">No matching diseases found</p>
              <p className="mt-2 text-sm text-[#666666]">Try a different keyword or clear the selected filters.</p>
              <button type="button" onClick={handleClearFilters} className="mt-6 rounded-full bg-[#FFF8FA] px-5 py-3 text-sm font-semibold text-[#E91E63] transition hover:-translate-y-0.5 hover:bg-[#FCE7F3]">
                Reset search
              </button>
            </div>
          )}
        </section>
      </ModulePageShell>
    </main>
  )
}

export default DiseaseLibrary