import { CalendarDays, RotateCcw, Save } from 'lucide-react'

const CycleTracker = ({ cycleForm, onChange, onSave, onReset, summary }) => {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="space-y-2">
          <span className="text-sm font-medium text-[#555555]">Last Period Date</span>
          <input
            type="date"
            value={cycleForm.lastPeriodDate}
            onChange={(event) => onChange('lastPeriodDate', event.target.value)}
            className="w-full rounded-2xl border border-pink-100 bg-[#FFF8FA] px-4 py-3 text-[#333333] outline-none transition focus:border-[#E91E63] focus:ring-4 focus:ring-pink-100"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-[#555555]">Cycle Length</span>
          <input
            type="number"
            min="20"
            max="45"
            value={cycleForm.cycleLength}
            onChange={(event) => onChange('cycleLength', event.target.value)}
            className="w-full rounded-2xl border border-pink-100 bg-[#FFF8FA] px-4 py-3 text-[#333333] outline-none transition focus:border-[#E91E63] focus:ring-4 focus:ring-pink-100"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-[#555555]">Period Length</span>
          <input
            type="number"
            min="2"
            max="10"
            value={cycleForm.periodLength}
            onChange={(event) => onChange('periodLength', event.target.value)}
            className="w-full rounded-2xl border border-pink-100 bg-[#FFF8FA] px-4 py-3 text-[#333333] outline-none transition focus:border-[#E91E63] focus:ring-4 focus:ring-pink-100"
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onSave}
          className="inline-flex items-center gap-2 rounded-full bg-[#E91E63] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d81b60]"
        >
          <Save size={16} />
          Save Cycle
        </button>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-5 py-3 text-sm font-semibold text-[#555555] transition duration-300 hover:border-[#E91E63] hover:text-[#E91E63]"
        >
          <RotateCcw size={16} />
          Reset
        </button>
        <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF8FA] px-4 py-3 text-sm font-medium text-[#9C27B0]">
          <CalendarDays size={16} />
          Cycle data updates the calendar automatically after saving.
        </div>
      </div>

      {summary ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {summary.map(({ label, value, note }) => (
            <article key={label} className="rounded-[1.35rem] border border-pink-100 bg-[#FFF8FA] p-4">
              <p className="text-sm text-[#666666]">{label}</p>
              <p className="mt-2 text-lg font-semibold text-[#333333]">{value}</p>
              <p className="mt-2 text-sm text-[#9C27B0]">{note}</p>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default CycleTracker
