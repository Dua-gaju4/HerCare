import { Bell, Search, Sparkles } from 'lucide-react'

const DashboardHeader = () => {
  return (
    <div className="flex flex-col gap-4 rounded-[1.5rem] border border-pink-100 bg-white/80 p-5 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-medium text-[#E91E63]">Good morning</p>
        <h2 className="text-2xl font-semibold text-[#333333]">Your wellness dashboard</h2>
      </div>
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 rounded-full border border-pink-100 bg-[#FFF8FA] px-3 py-2 text-sm text-[#666666]">
          <Search size={16} />
          <input className="bg-transparent outline-none" placeholder="Search" />
        </label>
        <button className="rounded-full border border-pink-100 bg-[#FFF8FA] p-2.5 text-[#E91E63]">
          <Bell size={18} />
        </button>
        <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] px-3 py-2 text-sm font-semibold text-white">
          <Sparkles size={16} />
          Premium plan
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
