import { Navigate } from 'react-router-dom'
import { getAuthState } from '../utils/storage'

const ProtectedRoute = ({ children }) => {
  const auth = getAuthState()

  if (!auth?.isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
