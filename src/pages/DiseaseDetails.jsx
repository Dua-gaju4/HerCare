import { ArrowLeft, HeartPulse, ShieldAlert, ShieldCheck, Sparkles, Stethoscope, Syringe, TriangleAlert } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ModulePageShell from '../components/ModulePageShell'
import diseasesData from '../data/diseases.json'

const sectionIcons = {
  Overview: HeartPulse,
  Symptoms: TriangleAlert,
  Causes: ShieldAlert,
  'Risk Factors': ShieldCheck,
  Prevention: Sparkles,
  Treatment: Syringe,
  'Lifestyle Tips': HeartPulse,
  'When to Visit a Doctor': Stethoscope,
}

const DiseaseDetails = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const disease = diseasesData.find((item) => item.slug === slug)

  if (!disease) {
    return (
      <main className="min-h-screen bg-[#FFF8FA] px-4 py-8 text-[#333333] sm:px-6 lg:px-8">
        <ModulePageShell>
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-pink-100 bg-white p-8 text-center shadow-sm">
            <p className="text-2xl font-semibold">Disease information not found</p>
            <p className="mt-3 text-sm text-[#666666]">The requested item may have been moved or removed.</p>
            <Link to="/diseases" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#E91E63] px-5 py-3 text-sm font-semibold text-white">
              Back to library
            </Link>
          </div>
        </ModulePageShell>
      </main>
    )
  }

  const sections = [
    { title: 'Overview', content: disease.overview },
    { title: 'Symptoms', content: disease.symptoms },
    { title: 'Causes', content: disease.causes },
    { title: 'Risk Factors', content: disease.riskFactors },
    { title: 'Prevention', content: disease.prevention },
    { title: 'Treatment', content: disease.treatment },
    { title: 'Lifestyle Tips', content: disease.lifestyleTips },
    { title: 'When to Visit a Doctor', content: disease.whenToVisitDoctor },
  ]

  return (
    <main className="min-h-screen bg-[#FFF8FA] px-4 py-6 text-[#333333] sm:px-6 lg:px-8">
      <ModulePageShell>
        <div className="mx-auto max-w-7xl space-y-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-4 py-2 text-sm font-semibold text-[#E91E63] shadow-sm"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <section className="overflow-hidden rounded-[2rem] border border-pink-100 bg-gradient-to-br from-white via-[#FFF8FA] to-[#FDE7F3] shadow-[0_24px_70px_-34px_rgba(233,30,99,0.28)]">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">Disease details</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{disease.name}</h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[#666666] sm:text-lg">{disease.shortDescription}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {disease.filters.map((filter) => (
                    <span key={filter} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#E91E63] shadow-sm">
                      {filter}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`rounded-[1.6rem] bg-gradient-to-br ${disease.accent || 'from-[#FDE7F3] to-[#FBCFE8]'} p-6 text-[#E91E63] shadow-sm`}>
                <HeartPulse size={56} />
                <p className="mt-5 text-lg font-semibold text-[#333333]">A calm, clear overview for better decision-making.</p>
                <p className="mt-2 text-sm leading-7 text-[#666666]">Use this information as a starting point, then seek personalized guidance when symptoms feel concerning or persistent.</p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-2">
            {sections.map((section) => {
              const Icon = sectionIcons[section.title] ?? HeartPulse
              const items = Array.isArray(section.content) ? section.content : [section.content]

              return (
                <article key={section.title} className="rounded-[1.6rem] border border-pink-100 bg-white/90 p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-[#FFF8FA] p-3 text-[#E91E63]">
                      <Icon size={22} />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#333333]">{section.title}</h2>
                  </div>
                  <div className="mt-5 space-y-3">
                    {items.map((item) => (
                      <p key={item} className="rounded-[1.1rem] bg-[#FFF8FA] px-4 py-3 text-sm leading-7 text-[#666666]">
                        {item}
                      </p>
                    ))}
                  </div>
                </article>
              )
            })}
          </section>
        </div>
      </ModulePageShell>
    </main>
  )
}

export default DiseaseDetails