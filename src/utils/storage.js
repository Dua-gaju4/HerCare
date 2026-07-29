const AUTH_KEY = 'hercare-auth'

export const getAuthState = () => {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const raw = window.localStorage.getItem(AUTH_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (error) {
    console.error('Unable to read auth state', error)
    return null
  }
}

export const saveAuthState = (user) => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(AUTH_KEY, JSON.stringify({ isAuthenticated: true, user }))
}

export const clearAuthState = () => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.removeItem(AUTH_KEY)
}
