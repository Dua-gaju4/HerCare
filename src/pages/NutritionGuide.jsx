import { useMemo } from 'react'
import { Bone, ChefHat, CalendarDays, Droplets, Leaf, Salad, TriangleAlert } from 'lucide-react'
import ModulePageShell from '../components/ModulePageShell'
import nutritionData from '../data/nutrition.json'
import NutritionCard from '../components/NutritionCard'

const iconMap = {
  Leaf,
  TriangleAlert,
  CalendarDays,
  Droplets,
  Bone,
  ChefHat,
  Salad,
}

const NutritionGuide = () => {
  const cards = useMemo(
    () => nutritionData.sections.map((section) => ({ ...section, icon: iconMap[section.icon] ?? Leaf })),
    [],
  )

  return (
    <main className="min-h-screen bg-[#FFF8FA] px-4 py-6 text-[#333333] sm:px-6 lg:px-8">
      <ModulePageShell>
        <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-[2rem] border border-pink-100 bg-gradient-to-br from-white via-[#FFF8FA] to-[#FDE7F3] p-6 shadow-[0_24px_70px_-34px_rgba(233,30,99,0.26)] md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">Nutrition & diet guide</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">Build meals that feel supportive, not restrictive.</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#666666] sm:text-lg">Focus on iron, calcium, hydration, balanced meals, and realistic recipes that work on busy days.</p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((section) => (
            <NutritionCard key={section.slug} section={section} icon={section.icon} />
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.6rem] border border-pink-100 bg-white/90 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#FFF8FA] p-3 text-[#E91E63]">
                <ChefHat size={22} />
              </div>
              <h2 className="text-2xl font-semibold text-[#333333]">Healthy Recipes</h2>
            </div>
            <div className="mt-5 space-y-4">
              {nutritionData.recipes.map((recipe) => (
                <div key={recipe.title} className="rounded-[1.2rem] bg-[#FFF8FA] p-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-[#333333]">{recipe.title}</h3>
                    <span className="text-sm font-semibold text-[#E91E63]">{recipe.time}</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[#9C27B0]">Ingredients</p>
                  <p className="mt-1 text-sm leading-7 text-[#666666]">{recipe.ingredients.join(', ')}</p>
                  <p className="mt-3 text-sm font-semibold text-[#9C27B0]">Method</p>
                  <div className="mt-1 space-y-2">
                    {recipe.steps.map((step) => (
                      <p key={step} className="rounded-2xl bg-white px-4 py-2 text-sm leading-7 text-[#666666]">
                        {step}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.6rem] border border-pink-100 bg-white/90 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#FFF8FA] p-3 text-[#E91E63]">
                <Droplets size={22} />
              </div>
              <h2 className="text-2xl font-semibold text-[#333333]">Daily nutrition reminders</h2>
            </div>
            <div className="mt-5 grid gap-4">
              {[
                'Start with protein and fiber to keep energy steadier.',
                'Pair iron-rich foods with vitamin C for better absorption.',
                'Hydration supports digestion, cycles, and recovery.',
                'Aim for nourishment that you can repeat comfortably.',
              ].map((tip) => (
                <div key={tip} className="rounded-[1.2rem] border border-pink-100 bg-[#FFF8FA] p-4 text-sm leading-7 text-[#666666]">
                  {tip}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.3rem] bg-gradient-to-r from-[#E91E63] to-[#9C27B0] p-5 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-100">Nutrition focus</p>
              <p className="mt-2 text-lg font-semibold">Small, realistic meals often outperform perfect plans.</p>
            </div>
          </article>
        </section>
        </div>
      </ModulePageShell>
    </main>
  )
}

export default NutritionGuide