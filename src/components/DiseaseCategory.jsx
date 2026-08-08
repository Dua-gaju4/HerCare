const DiseaseCategory = ({ label, isActive, count, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive ? 'border-[#E91E63] bg-gradient-to-r from-[#E91E63] to-[#C2185B] text-white shadow-[0_12px_30px_-18px_rgba(233,30,99,0.65)]' : 'border-pink-100 bg-white text-[#555555] hover:-translate-y-0.5 hover:border-[#F8BBD0] hover:text-[#E91E63]'}`}
    >
      <span>{label}</span>
      <span className={`rounded-full px-2 py-0.5 text-xs ${isActive ? 'bg-white/20 text-white' : 'bg-[#FFF8FA] text-[#E91E63]'}`}>
        {count}
      </span>
    </button>
  )
}

export default DiseaseCategory