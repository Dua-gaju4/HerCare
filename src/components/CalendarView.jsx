import { CalendarDays, Moon, Sparkles, SunMedium } from 'lucide-react'

const eventStyles = {
  Period: 'bg-[#FDE2E7] text-[#C2185B] border-[#F8BBD0]',
  Ovulation: 'bg-[#EDE7F6] text-[#7B1FA2] border-[#D1C4E9]',
  Fertile: 'bg-[#E0F2FE] text-[#0284C7] border-[#BAE6FD]',
  Today: 'bg-[#FFF4D6] text-[#B45309] border-[#FCD34D]',
}

const CalendarView = ({ monthLabel, weekdays = [], weeks = [], legend = [] }) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[#E91E63]">
          <CalendarDays size={18} />
          <h3 className="text-xl font-semibold text-[#333333]">{monthLabel}</h3>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-medium">
          {[
            { label: 'Period', icon: Moon, className: 'bg-[#FDE2E7] text-[#C2185B]' },
            { label: 'Ovulation', icon: Sparkles, className: 'bg-[#EDE7F6] text-[#7B1FA2]' },
            { label: 'Fertile', icon: SunMedium, className: 'bg-[#E0F2FE] text-[#0284C7]' },
          ].map(({ label, icon: Icon, className }) => (
            <span key={label} className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 ${className}`}>
              <Icon size={14} />
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#9C27B0]">
        {weekdays.map((day) => (
          <div key={day} className="px-1 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {weeks.flatMap((week) =>
          week.map((day) => {
            const style = day.isPredictedPeriod
              ? eventStyles.Period
              : day.isOvulationDay
                ? eventStyles.Ovulation
                : day.isFertileDay
                  ? eventStyles.Fertile
                  : day.isToday
                    ? eventStyles.Today
                    : 'bg-white text-[#555555] border-pink-100'

            return (
              <div
                key={day.dateKey}
                className={`min-h-[92px] rounded-[1.3rem] border p-2 text-left transition duration-300 hover:-translate-y-0.5 ${style} ${day.isCurrentMonth ? '' : 'opacity-35'}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">{day.day}</span>
                  {day.isToday ? <span className="rounded-full bg-white/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]">Today</span> : null}
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {day.events.filter((event) => event !== 'Today').map((event) => (
                    <span key={event} className="rounded-full bg-white/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]">
                      {event}
                    </span>
                  ))}
                </div>
              </div>
            )
          }),
        )}
      </div>

      {legend?.length ? (
        <div className="flex flex-wrap gap-2 text-xs text-[#666666]">
          {legend.map((item) => (
            <span key={item.label} className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 ${item.className}`}>
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.dotColor }} />
              {item.label}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default CalendarView
