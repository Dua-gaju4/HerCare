import { CheckCircle2, Plus, Trash2 } from 'lucide-react'

const MedicineReminder = ({ reminderForm, onChange, onAdd, reminders = [], onToggleCompleted, onDelete }) => {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-[1.1fr_0.8fr_1fr_auto]">
        <label className="space-y-2 md:col-span-1">
          <span className="text-sm font-medium text-[#555555]">Medicine Name</span>
          <input
            value={reminderForm.name}
            onChange={(event) => onChange('name', event.target.value)}
            placeholder="e.g. Iron supplement"
            className="w-full rounded-2xl border border-pink-100 bg-[#FFF8FA] px-4 py-3 text-[#333333] outline-none transition focus:border-[#E91E63] focus:ring-4 focus:ring-pink-100"
          />
        </label>
        <label className="space-y-2 md:col-span-1">
          <span className="text-sm font-medium text-[#555555]">Time</span>
          <input
            type="time"
            value={reminderForm.time}
            onChange={(event) => onChange('time', event.target.value)}
            className="w-full rounded-2xl border border-pink-100 bg-[#FFF8FA] px-4 py-3 text-[#333333] outline-none transition focus:border-[#E91E63] focus:ring-4 focus:ring-pink-100"
          />
        </label>
        <label className="space-y-2 md:col-span-1">
          <span className="text-sm font-medium text-[#555555]">Notes</span>
          <input
            value={reminderForm.notes}
            onChange={(event) => onChange('notes', event.target.value)}
            placeholder="Take after meals"
            className="w-full rounded-2xl border border-pink-100 bg-[#FFF8FA] px-4 py-3 text-[#333333] outline-none transition focus:border-[#E91E63] focus:ring-4 focus:ring-pink-100"
          />
        </label>
        <div className="flex items-end">
          <button
            type="button"
            onClick={onAdd}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#E91E63] px-4 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d81b60]"
          >
            <Plus size={16} />
            Add Reminder
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {reminders.length ? (
          reminders.map((reminder) => (
            <article key={reminder.id} className={`rounded-[1.35rem] border p-4 transition duration-300 hover:-translate-y-0.5 ${reminder.completed ? 'border-pink-100 bg-[#FFF8FA]/70' : 'border-pink-100 bg-white'}`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <p className={`text-lg font-semibold ${reminder.completed ? 'text-[#888888] line-through' : 'text-[#333333]'}`}>{reminder.name}</p>
                    {reminder.completed ? <CheckCircle2 size={18} className="text-[#16A34A]" /> : null}
                  </div>
                  <p className="mt-1 text-sm text-[#666666]">{reminder.time || 'No time set'}</p>
                  {reminder.notes ? <p className="mt-2 text-sm text-[#9C27B0]">{reminder.notes}</p> : null}
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => onToggleCompleted(reminder.id)}
                    className="rounded-full border border-pink-100 bg-white px-3 py-2 text-sm font-semibold text-[#555555] transition hover:border-[#E91E63] hover:text-[#E91E63]"
                  >
                    {reminder.completed ? 'Undo' : 'Completed'}
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete(reminder.id)}
                    className="rounded-full bg-[#FCE7F3] px-3 py-2 text-sm font-semibold text-[#C2185B] transition hover:bg-[#FBCFE8]"
                  >
                    <Trash2 size={14} className="inline" />
                    <span className="ml-1">Delete</span>
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-[1.35rem] border border-dashed border-pink-200 bg-[#FFF8FA] px-4 py-8 text-center text-sm text-[#666666]">
            No reminders yet. Add medicine details to create a gentle schedule.
          </div>
        )}
      </div>
    </div>
  )
}

export default MedicineReminder
