import { useEffect, useState } from 'react'
import { getAuthState } from '../utils/storage'

export const useAuth = () => {
  const [auth, setAuth] = useState(getAuthState())

  useEffect(() => {
    setAuth(getAuthState())
  }, [])

  return auth
}
