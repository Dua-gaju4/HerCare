const SymptomsTracker = ({ selectedSymptoms = [], symptomOptions = [], onToggleSymptom, onSave, todaySymptoms }) => {
  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {symptomOptions.map((symptom) => {
          const isChecked = selectedSymptoms.includes(symptom)

          return (
            <label
              key={symptom}
              className={`flex cursor-pointer items-center gap-3 rounded-[1.2rem] border p-4 transition duration-300 hover:-translate-y-0.5 ${isChecked ? 'border-[#E91E63] bg-[#FFF8FA]' : 'border-pink-100 bg-white'}`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => onToggleSymptom(symptom)}
                className="h-4 w-4 rounded border-pink-200 text-[#E91E63] focus:ring-[#E91E63]"
              />
              <span className="text-sm font-medium text-[#333333]">{symptom}</span>
            </label>
          )
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-[1.35rem] border border-pink-100 bg-[#FFF8FA] p-4">
        <div>
          <p className="text-sm text-[#666666]">Today&apos;s symptoms</p>
          <p className="mt-1 text-lg font-semibold text-[#333333]">
            {todaySymptoms?.length ? todaySymptoms.join(', ') : 'No symptoms saved yet'}
          </p>
        </div>
        <button
          type="button"
          onClick={onSave}
          className="rounded-full bg-[#E91E63] px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d81b60]"
        >
          Save Symptoms
        </button>
      </div>
    </div>
  )
}

export default SymptomsTracker
