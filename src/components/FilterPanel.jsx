const FilterPanel = ({ filters, selectedFilters, onToggleFilter, onClear, resultCount }) => {
  return (
    <section className="rounded-[1.8rem] border border-pink-100 bg-white/85 p-5 shadow-[0_16px_50px_-32px_rgba(233,30,99,0.2)] backdrop-blur-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E91E63]">Filter by category</p>
          <p className="mt-1 text-sm text-[#666666]">{resultCount} results available</p>
        </div>
        {selectedFilters.length > 0 ? (
          <button type="button" onClick={onClear} className="text-sm font-semibold text-[#E91E63] transition duration-300 hover:text-[#d51a5f]">
            Clear filters
          </button>
        ) : null}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const active = selectedFilters.includes(filter)
          return (
            <button
              key={filter}
              type="button"
              onClick={() => onToggleFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${active ? 'border-[#E91E63] bg-gradient-to-r from-[#FFF8FA] to-[#FDE7F3] text-[#E91E63] shadow-sm' : 'border-pink-100 bg-white text-[#555555] hover:-translate-y-0.5 hover:border-[#F8BBD0] hover:bg-[#FFF8FA]'}`}
            >
              {filter}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default FilterPanel