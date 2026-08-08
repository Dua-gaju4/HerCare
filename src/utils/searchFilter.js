export const normalizeText = (value = '') =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]+/g, ' ')
    .replace(/\s+/g, ' ')

export const filterDiseases = (diseases = [], query = '', activeFilters = []) => {
  const normalizedQuery = normalizeText(query)

  return diseases.filter((disease) => {
    const searchableText = normalizeText([
      disease.name,
      disease.category,
      disease.shortDescription,
      ...(disease.symptoms || []),
      ...(disease.filters || []),
    ].join(' '))

    const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery)
    const matchesFilters = activeFilters.length === 0 || activeFilters.every((filter) => (disease.filters || []).includes(filter))

    return matchesQuery && matchesFilters
  })
}