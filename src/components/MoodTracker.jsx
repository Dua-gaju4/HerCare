import { PlusCircle } from 'lucide-react'
import { moodOptions, moodLabelMap } from '../data/moods'

const MoodTracker = ({ selectedMood, onSelectMood, onSave, recentMoods = [], todayMood }) => {
  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {moodOptions.map((mood) => {
          const isActive = selectedMood === mood.value

          return (
            <button
              key={mood.value}
              type="button"
              onClick={() => onSelectMood(mood.value)}
              className={`rounded-[1.3rem] border p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${isActive ? 'border-[#E91E63] bg-[#FFF8FA] shadow-md' : 'border-pink-100 bg-white'}`}
            >
              <div className={`inline-flex rounded-2xl bg-gradient-to-br ${mood.color} px-3 py-2 text-xl`}>
                {mood.emoji}
              </div>
              <p className="mt-4 text-base font-semibold text-[#333333]">{mood.label}</p>
            </button>
          )
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-[1.35rem] border border-pink-100 bg-[#FFF8FA] p-4">
        <div>
          <p className="text-sm text-[#666666]">Today&apos;s mood</p>
          <p className="mt-1 text-lg font-semibold text-[#333333]">{todayMood ? moodLabelMap[todayMood.mood] : 'No mood saved yet'}</p>
        </div>
        <button
          type="button"
          onClick={onSave}
          className="inline-flex items-center gap-2 rounded-full bg-[#E91E63] px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d81b60]"
        >
          <PlusCircle size={16} />
          Save Mood
        </button>
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between gap-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9C27B0]">Recent moods</h4>
          <span className="text-sm text-[#666666]">{recentMoods.length} entries</span>
        </div>
        <div className="space-y-3">
          {recentMoods.length ? (
            recentMoods.map((entry) => (
              <div key={entry.date} className="flex items-center justify-between rounded-[1.15rem] border border-pink-100 bg-white px-4 py-3">
                <div>
                  <p className="font-medium text-[#333333]">{moodLabelMap[entry.mood] ?? entry.mood}</p>
                  <p className="text-sm text-[#666666]">{entry.date}</p>
                </div>
                <span className="text-2xl">{moodOptions.find((item) => item.value === entry.mood)?.emoji ?? '💗'}</span>
              </div>
            ))
          ) : (
            <div className="rounded-[1.15rem] border border-dashed border-pink-200 bg-[#FFF8FA] px-4 py-6 text-center text-sm text-[#666666]">
              No recent moods yet. Choose a feeling and save it to begin.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MoodTracker
