import { Search, X } from 'lucide-react'

const SearchBar = ({ value, onChange, placeholder = 'Search', onClear }) => {
  return (
    <div className="sticky top-4 z-20 rounded-[1.8rem] border border-pink-100 bg-white/90 p-4 shadow-[0_12px_40px_-24px_rgba(233,30,99,0.3)] backdrop-blur-xl transition-all duration-300">
      <label className="flex items-center gap-3 rounded-full border border-pink-100 bg-[#FFF8FA] px-4 py-3 text-sm text-[#666666] transition focus-within:border-[#E91E63] focus-within:bg-white">
        <Search size={18} className="text-[#E91E63]" />
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none placeholder:text-[#A78B9D]"
        />
        {value ? (
          <button type="button" onClick={onClear} className="rounded-full p-1 text-[#E91E63] transition hover:bg-white">
            <X size={16} />
          </button>
        ) : null}
      </label>
    </div>
  )
}

export default SearchBar