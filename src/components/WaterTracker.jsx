import { Minus, Plus, RotateCcw, Droplets } from 'lucide-react'
import ProgressRing from './ProgressRing'

const WaterTracker = ({ count, goal, onIncrease, onDecrease, onReset }) => {
  const progress = Math.round((count / goal) * 100)

  return (
    <div className="grid gap-6 lg:grid-cols-[180px_1fr] lg:items-center">
      <ProgressRing value={progress} label="Daily goal" subtitle={`${count} of ${goal} glasses`} />

      <div className="space-y-4">
        <div className="rounded-[1.35rem] border border-pink-100 bg-[#FFF8FA] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-[#666666]">Current glasses</p>
              <p className="mt-1 text-3xl font-semibold text-[#333333]">{count}</p>
            </div>
            <div className="rounded-2xl bg-[#E91E63] p-3 text-white shadow-lg shadow-pink-200">
              <Droplets size={20} />
            </div>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-pink-100">
            <div className="h-full rounded-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-3 text-sm text-[#666666]">Goal: 8 glasses daily for steady hydration and energy.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onDecrease}
            className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-4 py-2.5 text-sm font-semibold text-[#555555] transition duration-300 hover:-translate-y-0.5 hover:border-[#E91E63] hover:text-[#E91E63]"
          >
            <Minus size={16} />
            -
          </button>
          <button
            type="button"
            onClick={onIncrease}
            className="inline-flex items-center gap-2 rounded-full bg-[#E91E63] px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d81b60]"
          >
            <Plus size={16} />
            +
          </button>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-4 py-2.5 text-sm font-semibold text-[#555555] transition duration-300 hover:-translate-y-0.5 hover:border-[#E91E63] hover:text-[#E91E63]"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default WaterTracker
