import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import Articles from '../pages/Articles'
import Dashboard from '../pages/Dashboard'
import DiseaseDetails from '../pages/DiseaseDetails'
import DiseaseLibrary from '../pages/DiseaseLibrary'
import HealthEducation from '../pages/HealthEducation'
import HealthDashboard from '../pages/HealthDashboard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NutritionGuide from '../pages/NutritionGuide'
import Signup from '../pages/Signup'
import WellnessTracker from '../pages/WellnessTracker'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/diseases" element={<DiseaseLibrary />} />
        <Route path="/diseases/:slug" element={<DiseaseDetails />} />
        <Route path="/education" element={<HealthEducation />} />
        <Route path="/education/:slug" element={<HealthEducation />} />
        <Route path="/nutrition" element={<NutritionGuide />} />
        <Route path="/wellness" element={<WellnessTracker />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<Articles />} />
        <Route path="/dashboard" element={<ProtectedRoute><HealthDashboard /></ProtectedRoute>} />
        <Route path="/dashboard/legacy" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
