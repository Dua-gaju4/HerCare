const AUTH_KEY = 'hercare-auth'

export const readStorageValue = (key, fallback) => {
  if (typeof window === 'undefined') {
    return fallback
  }

  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch (error) {
    console.error(`Unable to read local storage key: ${key}`, error)
    return fallback
  }
}

export const writeStorageValue = (key, value) => {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(`Unable to write local storage key: ${key}`, error)
  }
}

export const removeStorageValue = (key) => {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    console.error(`Unable to remove local storage key: ${key}`, error)
  }
}

export const clearHerCareStorage = () => {
  if (typeof window === 'undefined') {
    return
  }

  try {
    Object.keys(window.localStorage)
      .filter((key) => key.startsWith('hercare-'))
      .forEach((key) => window.localStorage.removeItem(key))
  } catch (error) {
    console.error('Unable to clear HerCare local storage', error)
  }
}

export const getAuthState = () => {
  return readStorageValue(AUTH_KEY, null)
}

export const saveAuthState = (user) => {
  writeStorageValue(AUTH_KEY, { isAuthenticated: true, user })
}

export const clearAuthState = () => {
  removeStorageValue(AUTH_KEY)
}
