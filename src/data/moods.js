export const moodOptions = [
  { value: 'happy', label: 'Happy', emoji: '😊', color: 'from-[#FDE68A] to-[#FBCFE8]' },
  { value: 'sad', label: 'Sad', emoji: '😔', color: 'from-[#BFDBFE] to-[#E9D5FF]' },
  { value: 'angry', label: 'Angry', emoji: '😡', color: 'from-[#FCA5A5] to-[#FDBA74]' },
  { value: 'tired', label: 'Tired', emoji: '😴', color: 'from-[#E5E7EB] to-[#F3F4F6]' },
  { value: 'relaxed', label: 'Relaxed', emoji: '😌', color: 'from-[#A7F3D0] to-[#BAE6FD]' },
  { value: 'sick', label: 'Sick', emoji: '🤒', color: 'from-[#FECACA] to-[#FED7AA]' },
]

export const moodLabelMap = moodOptions.reduce((accumulator, mood) => {
  accumulator[mood.value] = mood.label
  return accumulator
}, {})
