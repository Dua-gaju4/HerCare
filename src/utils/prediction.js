const DAY_MS = 24 * 60 * 60 * 1000

export const padDatePart = (value) => String(value).padStart(2, '0')

export const toDateString = (date) => {
  const safeDate = startOfDay(date)
  return [
    safeDate.getFullYear(),
    padDatePart(safeDate.getMonth() + 1),
    padDatePart(safeDate.getDate()),
  ].join('-')
}

export const startOfDay = (date) => {
  const safeDate = new Date(date)
  safeDate.setHours(0, 0, 0, 0)
  return safeDate
}

export const parseDateInput = (value) => {
  if (!value) {
    return null
  }

  const parsed = new Date(`${value}T00:00:00`)
  return Number.isNaN(parsed.getTime()) ? null : startOfDay(parsed)
}

export const addDays = (date, days) => {
  const safeDate = startOfDay(date)
  return new Date(safeDate.getTime() + days * DAY_MS)
}

export const differenceInDays = (laterDate, earlierDate) => {
  const later = startOfDay(laterDate)
  const earlier = startOfDay(earlierDate)
  return Math.round((later.getTime() - earlier.getTime()) / DAY_MS)
}

export const formatShortDate = (date, locale = 'en-US') => {
  if (!date) {
    return 'Not set'
  }

  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(startOfDay(date))
}

export const formatCalendarLabel = (date, locale = 'en-US') => {
  return new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric',
  }).format(startOfDay(date))
}

export const formatWeekdayShort = (date, locale = 'en-US') => {
  return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(startOfDay(date))
}

export const getCyclePrediction = ({ lastPeriodDate, cycleLength, periodLength, currentDate = new Date() }) => {
  const safeLastPeriod = lastPeriodDate ? startOfDay(lastPeriodDate) : null
  const safeCycleLength = Number(cycleLength) || 28
  const safePeriodLength = Math.max(1, Number(periodLength) || 5)
  const today = startOfDay(currentDate)

  if (!safeLastPeriod) {
    return {
      currentCycleDay: null,
      nextPeriodDate: null,
      nextOvulationDate: null,
      fertileWindow: null,
      safeDays: null,
      daysRemaining: null,
      periodDays: [],
    }
  }

  const nextPeriodDate = addDays(safeLastPeriod, safeCycleLength)
  const nextOvulationDate = addDays(nextPeriodDate, -14)
  const fertileWindow = {
    start: addDays(nextOvulationDate, -5),
    end: addDays(nextOvulationDate, 1),
  }

  const periodDays = Array.from({ length: safePeriodLength }, (_, index) => addDays(nextPeriodDate, index))
  const daysRemaining = Math.max(0, differenceInDays(nextPeriodDate, today))
  const cycleAge = differenceInDays(today, safeLastPeriod)
  const currentCycleDay = ((cycleAge % safeCycleLength) + safeCycleLength) % safeCycleLength + 1

  const safeDays = `${formatShortDate(addDays(fertileWindow.end, 1))} - ${formatShortDate(addDays(nextPeriodDate, -1))}`

  return {
    currentCycleDay,
    nextPeriodDate,
    nextOvulationDate,
    fertileWindow,
    safeDays,
    daysRemaining,
    periodDays,
  }
}

export const buildCalendarMonth = ({ referenceDate = new Date(), prediction, currentDate = new Date() }) => {
  const monthDate = startOfDay(referenceDate)
  const year = monthDate.getFullYear()
  const month = monthDate.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startCursor = new Date(firstDay)
  startCursor.setDate(firstDay.getDate() - firstDay.getDay())
  const endCursor = new Date(lastDay)
  endCursor.setDate(lastDay.getDate() + (6 - lastDay.getDay()))

  const days = []
  const cursor = startOfDay(startCursor)
  const today = startOfDay(currentDate)
  const periodDays = prediction?.periodDays ?? []
  const fertileStart = prediction?.fertileWindow?.start ? startOfDay(prediction.fertileWindow.start) : null
  const fertileEnd = prediction?.fertileWindow?.end ? startOfDay(prediction.fertileWindow.end) : null
  const ovulationDate = prediction?.nextOvulationDate ? startOfDay(prediction.nextOvulationDate) : null

  while (cursor <= endCursor) {
    const current = new Date(cursor)
    const dateKey = toDateString(current)
    const isCurrentMonth = current.getMonth() === month
    const isToday = dateKey === toDateString(today)
    const isPredictedPeriod = periodDays.some((periodDate) => toDateString(periodDate) === dateKey)
    const isOvulationDay = ovulationDate ? toDateString(ovulationDate) === dateKey : false
    const isFertileDay = fertileStart && fertileEnd ? current >= fertileStart && current <= fertileEnd : false

    const events = []
    if (isPredictedPeriod) events.push('Period')
    if (isOvulationDay) events.push('Ovulation')
    if (isFertileDay) events.push('Fertile')
    if (isToday) events.push('Today')

    days.push({
      date: current,
      dateKey,
      day: current.getDate(),
      isCurrentMonth,
      isToday,
      isPredictedPeriod,
      isOvulationDay,
      isFertileDay,
      events,
    })

    cursor.setDate(cursor.getDate() + 1)
  }

  const weeks = []
  for (let index = 0; index < days.length; index += 7) {
    weeks.push(days.slice(index, index + 7))
  }

  return {
    monthLabel: formatCalendarLabel(monthDate),
    weekdays: Array.from({ length: 7 }, (_, index) => formatWeekdayShort(new Date(2024, 0, index + 7))),
    weeks,
  }
}
