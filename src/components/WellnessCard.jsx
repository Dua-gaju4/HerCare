import { CheckCircle2 } from 'lucide-react'

const WellnessCard = ({ goal, completed, onToggle }) => {
  return (
    <article className={`flex h-full flex-col rounded-[1.5rem] border p-5 shadow-sm transition ${completed ? 'border-[#E91E63] bg-[#FFF8FA]' : 'border-pink-100 bg-white/90 hover:-translate-y-1 hover:shadow-[0_20px_50px_-28px_rgba(233,30,99,0.22)]'}`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9C27B0]">Daily care</p>
          <h3 className="mt-2 text-xl font-semibold text-[#333333]">{goal.title}</h3>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${completed ? 'border-[#E91E63] bg-[#E91E63] text-white' : 'border-pink-200 bg-white text-[#E91E63] hover:border-[#E91E63]'}`}
          aria-label={`Mark ${goal.title} as ${completed ? 'incomplete' : 'complete'}`}
        >
          <CheckCircle2 size={18} />
        </button>
      </div>

      <p className="mt-4 text-sm leading-7 text-[#666666]">{goal.description}</p>
      <div className="mt-4 rounded-2xl bg-white/80 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E91E63]">Today’s goal</p>
        <p className="mt-2 text-sm font-medium text-[#333333]">{goal.goalText}</p>
      </div>
      <p className={`mt-4 text-sm font-semibold ${completed ? 'text-[#E91E63]' : 'text-[#666666]'}`}>
        {completed ? 'Completed' : 'Tap to track progress'}
      </p>
    </article>
  )
}

export default WellnessCard