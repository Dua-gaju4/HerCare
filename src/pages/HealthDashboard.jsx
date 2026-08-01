import { useEffect, useMemo, useState } from 'react'
import { Activity, CalendarDays, Droplets, HeartPulse, Pill, Sparkles, Smile, ThermometerSun } from 'lucide-react'
import DashboardLayout from '../layouts/DashboardLayout'
import DashboardCard from '../components/DashboardCard'
import StatisticsCards from '../components/StatisticsCards'
import CycleTracker from '../components/CycleTracker'
import CalendarView from '../components/CalendarView'
import MoodTracker from '../components/MoodTracker'
import SymptomsTracker from '../components/SymptomsTracker'
import WaterTracker from '../components/WaterTracker'
import MedicineReminder from '../components/MedicineReminder'
import { moodLabelMap } from '../data/moods'
import { symptomOptions } from '../data/symptoms'
import { buildCalendarMonth, formatShortDate, getCyclePrediction, parseDateInput, startOfDay, toDateString } from '../utils/prediction'

const STORAGE_KEY = 'hercare-health-dashboard'
const WATER_GOAL = 8

const defaultState = {
  cycle: {
    lastPeriodDate: '',
    cycleLength: 28,
    periodLength: 5,
  },
  moods: [],
  selectedMood: '',
  symptoms: [],
  waterIntake: 0,
  reminders: [],
}

const getStoredState = () => {
  if (typeof window === 'undefined') {
    return defaultState
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? { ...defaultState, ...JSON.parse(raw) } : defaultState
  } catch (error) {
    console.error('Unable to load health dashboard state', error)
    return defaultState
  }
}

const HealthDashboard = () => {
  const storedState = useMemo(() => getStoredState(), [])
  const [cycleForm, setCycleForm] = useState(storedState.cycle)
  const [savedCycle, setSavedCycle] = useState(storedState.cycle)
  const [moodSelection, setMoodSelection] = useState(storedState.selectedMood || '')
  const [moods, setMoods] = useState(storedState.moods || [])
  const [selectedSymptoms, setSelectedSymptoms] = useState(storedState.symptoms || [])
  const [waterCount, setWaterCount] = useState(storedState.waterIntake || 0)
  const [reminders, setReminders] = useState(storedState.reminders || [])
  const [reminderForm, setReminderForm] = useState({ name: '', time: '', notes: '' })

  useEffect(() => {
    const snapshot = {
      cycle: savedCycle,
      moods,
      selectedMood: moodSelection,
      symptoms: selectedSymptoms,
      waterIntake: waterCount,
      reminders,
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot))
  }, [savedCycle, moods, moodSelection, selectedSymptoms, waterCount, reminders])

  const prediction = useMemo(() => {
    const parsedDate = parseDateInput(savedCycle.lastPeriodDate)
    return getCyclePrediction({
      lastPeriodDate: parsedDate,
      cycleLength: Number(savedCycle.cycleLength) || 28,
      periodLength: Number(savedCycle.periodLength) || 5,
    })
  }, [savedCycle])

  const calendar = useMemo(() => {
    const monthReference = parseDateInput(savedCycle.lastPeriodDate) || new Date()
    return buildCalendarMonth({ referenceDate: monthReference, prediction })
  }, [prediction, savedCycle.lastPeriodDate])

  const todayKey = toDateString(startOfDay(new Date()))
  const todaysMood = moods.find((entry) => entry.dateKey === todayKey) ?? null
  const todaysSymptoms = selectedSymptoms
  const currentCycleDay = prediction.currentCycleDay ?? 'Not saved'
  const nextPeriodDate = prediction.nextPeriodDate ? formatShortDate(prediction.nextPeriodDate) : 'Add cycle data'
  const nextOvulationDate = prediction.nextOvulationDate ? formatShortDate(prediction.nextOvulationDate) : 'Add cycle data'
  const fertileWindow = prediction.fertileWindow
    ? `${formatShortDate(prediction.fertileWindow.start)} - ${formatShortDate(prediction.fertileWindow.end)}`
    : 'Add cycle data'
  const safeDays = prediction.safeDays ?? 'Add cycle data'

  const cycleSummary = [
    { label: 'Current Cycle Day', value: currentCycleDay, note: prediction.daysRemaining !== null ? `${prediction.daysRemaining} days until the next period` : 'Save your cycle to calculate' },
    { label: 'Next Expected Period', value: nextPeriodDate, note: 'Predicted from the last period date' },
    { label: 'Next Ovulation', value: nextOvulationDate, note: 'Estimated around 14 days before the next period' },
    { label: 'Fertile Window', value: fertileWindow, note: 'Highlighted on the calendar in blue' },
    { label: 'Safe Days', value: safeDays, note: 'Shown as a comfortable lower-risk range' },
  ]

  const stats = [
    { label: 'Current Cycle Day', value: currentCycleDay === 'Not saved' ? '—' : `Day ${currentCycleDay}`, icon: CalendarDays, detail: prediction.daysRemaining !== null ? `${prediction.daysRemaining} days remaining` : 'Save cycle data', bg: 'from-[#FFF8FA] to-[#FCE7F3]' },
    { label: 'Water Intake', value: `${waterCount}/${WATER_GOAL}`, icon: Droplets, detail: `${Math.round((waterCount / WATER_GOAL) * 100)}% of today’s goal`, bg: 'from-[#E0F2FE] to-[#BAE6FD]', accent: 'text-[#0284C7]' },
    { label: 'Today’s Mood', value: todaysMood ? moodLabelMap[todaysMood.mood] ?? todaysMood.mood : 'Not saved', icon: Smile, detail: todaysMood ? `Saved ${moodLabelMap[todaysMood.mood] ?? todaysMood.mood}` : 'Choose a mood', bg: 'from-[#FDE68A] to-[#FBCFE8]', accent: 'text-[#DB2777]' },
    { label: 'Medicine Count', value: reminders.length, icon: Pill, detail: `${reminders.filter((reminder) => reminder.completed).length} completed`, bg: 'from-[#EDE9FE] to-[#DDD6FE]', accent: 'text-[#7C3AED]' },
    { label: 'Symptoms Count', value: todaysSymptoms.length, icon: Activity, detail: todaysSymptoms.length ? 'Logged today' : 'No symptoms logged', bg: 'from-[#FECACA] to-[#FED7AA]', accent: 'text-[#C2410C]' },
  ]

  const handleCycleChange = (field, value) => {
    setCycleForm((previous) => ({ ...previous, [field]: value }))
  }

  const handleSaveCycle = () => {
    setSavedCycle(cycleForm)
  }

  const handleResetCycle = () => {
    const resetCycle = { lastPeriodDate: '', cycleLength: 28, periodLength: 5 }
    setCycleForm(resetCycle)
    setSavedCycle(resetCycle)
  }

  const handleSaveMood = () => {
    if (!moodSelection) {
      return
    }

    const selected = moodSelection
    const dateKey = todayKey
    const selectedMood = {
      mood: selected,
      label: moodLabelMap[selected] ?? selected,
      dateKey,
      date: formatShortDate(new Date()),
    }
    const existingIndex = moods.findIndex((entry) => entry.dateKey === dateKey)

    if (existingIndex >= 0) {
      const nextMoods = [...moods]
      nextMoods[existingIndex] = selectedMood
      setMoods(nextMoods)
    } else {
      setMoods((previous) => [selectedMood, ...previous].slice(0, 10))
    }
  }

  const handleToggleSymptom = (symptom) => {
    setSelectedSymptoms((previous) =>
      previous.includes(symptom) ? previous.filter((item) => item !== symptom) : [...previous, symptom],
    )
  }

  const handleSaveSymptoms = () => {
    setSelectedSymptoms((previous) => [...previous])
  }

  const handleWaterIncrease = () => {
    setWaterCount((previous) => Math.min(WATER_GOAL, previous + 1))
  }

  const handleWaterDecrease = () => {
    setWaterCount((previous) => Math.max(0, previous - 1))
  }

  const handleWaterReset = () => {
    setWaterCount(0)
  }

  const handleReminderChange = (field, value) => {
    setReminderForm((previous) => ({ ...previous, [field]: value }))
  }

  const handleAddReminder = () => {
    if (!reminderForm.name.trim()) {
      return
    }

    setReminders((previous) => [
      {
        id: crypto.randomUUID(),
        name: reminderForm.name.trim(),
        time: reminderForm.time,
        notes: reminderForm.notes.trim(),
        completed: false,
      },
      ...previous,
    ])
    setReminderForm({ name: '', time: '', notes: '' })
  }

  const handleToggleReminder = (id) => {
    setReminders((previous) => previous.map((reminder) => (reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder)))
  }

  const handleDeleteReminder = (id) => {
    setReminders((previous) => previous.filter((reminder) => reminder.id !== id))
  }

  return (
    <DashboardLayout>
      <div className="space-y-6 pb-10">
        <section className="overflow-hidden rounded-[2rem] border border-pink-100 bg-gradient-to-br from-[#FFF8FA] via-white to-[#F8BBD0] p-6 shadow-[0_24px_70px_-35px_rgba(233,30,99,0.35)] md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-4 py-2 text-sm font-semibold text-[#E91E63] shadow-sm">
                <HeartPulse size={16} />
                HerCare health dashboard
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-[#333333] sm:text-4xl lg:text-5xl">
                Your body story, organized in one calm, beautiful space.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#666666] sm:text-lg">
                Track your cycle, mood, symptoms, hydration, and medications with responsive cards, local storage, and live predictions.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.35rem] border border-pink-100 bg-white/80 p-4 shadow-sm">
                <p className="text-sm text-[#666666]">Current status</p>
                <p className="mt-2 text-lg font-semibold text-[#333333]">{prediction.currentCycleDay ? `Cycle day ${prediction.currentCycleDay}` : 'Cycle not saved yet'}</p>
              </div>
              <div className="rounded-[1.35rem] border border-pink-100 bg-white/80 p-4 shadow-sm">
                <p className="text-sm text-[#666666]">Today</p>
                <p className="mt-2 text-lg font-semibold text-[#333333]">{formatShortDate(new Date())}</p>
              </div>
            </div>
          </div>
        </section>

        <StatisticsCards cards={stats} />

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <DashboardCard title="Menstrual Cycle Tracker" description="Cycle insights" icon={CalendarDays}>
            <CycleTracker
              cycleForm={cycleForm}
              onChange={handleCycleChange}
              onSave={handleSaveCycle}
              onReset={handleResetCycle}
              summary={cycleSummary}
            />
          </DashboardCard>

          <DashboardCard title="Monthly Calendar" description="Predicted events" icon={Sparkles}>
            <CalendarView
              monthLabel={calendar.monthLabel}
              weekdays={calendar.weekdays}
              weeks={calendar.weeks}
            />
          </DashboardCard>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <DashboardCard title="Prediction Cards" description="Forecast overview" icon={ThermometerSun}>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-[1.3rem] border border-pink-100 bg-[#FFF8FA] p-4">
                <p className="text-sm text-[#666666]">Next Expected Period</p>
                <p className="mt-2 text-xl font-semibold text-[#333333]">{nextPeriodDate}</p>
                <p className="mt-2 text-sm text-[#9C27B0]">{prediction.daysRemaining !== null ? `${prediction.daysRemaining} days remaining` : 'Save your cycle to calculate'}</p>
              </article>
              <article className="rounded-[1.3rem] border border-pink-100 bg-[#FFF8FA] p-4">
                <p className="text-sm text-[#666666]">Next Ovulation</p>
                <p className="mt-2 text-xl font-semibold text-[#333333]">{nextOvulationDate}</p>
                <p className="mt-2 text-sm text-[#9C27B0]">Fertile window: {fertileWindow}</p>
              </article>
              <article className="rounded-[1.3rem] border border-pink-100 bg-[#FFF8FA] p-4 md:col-span-2">
                <p className="text-sm text-[#666666]">Fertile Window & Safe Days</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-sm text-[#666666]">Fertile window</p>
                    <p className="mt-2 font-semibold text-[#333333]">{fertileWindow}</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-sm text-[#666666]">Safe days</p>
                    <p className="mt-2 font-semibold text-[#333333]">{safeDays}</p>
                  </div>
                </div>
              </article>
            </div>
          </DashboardCard>

          <DashboardCard title="Mood Tracker" description="Daily wellness" icon={Smile}>
            <MoodTracker
              selectedMood={moodSelection}
              onSelectMood={setMoodSelection}
              onSave={handleSaveMood}
              recentMoods={moods}
              todayMood={todaysMood}
            />
          </DashboardCard>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <DashboardCard title="Symptoms Tracker" description="Daily symptoms" icon={Activity}>
            <SymptomsTracker
              selectedSymptoms={selectedSymptoms}
              symptomOptions={symptomOptions}
              onToggleSymptom={handleToggleSymptom}
              onSave={handleSaveSymptoms}
              todaySymptoms={todaysSymptoms}
            />
          </DashboardCard>

          <DashboardCard title="Water Intake Tracker" description="Hydration" icon={Droplets}>
            <WaterTracker
              count={waterCount}
              goal={WATER_GOAL}
              onIncrease={handleWaterIncrease}
              onDecrease={handleWaterDecrease}
              onReset={handleWaterReset}
            />
          </DashboardCard>
        </div>

        <DashboardCard title="Medicine Reminder" description="Treatment support" icon={Pill}>
          <MedicineReminder
            reminderForm={reminderForm}
            onChange={handleReminderChange}
            onAdd={handleAddReminder}
            reminders={reminders}
            onToggleCompleted={handleToggleReminder}
            onDelete={handleDeleteReminder}
          />
        </DashboardCard>
      </div>
    </DashboardLayout>
  )
}

export default HealthDashboard
