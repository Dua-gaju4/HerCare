import DashboardHeader from '../components/DashboardHeader'
import DashboardSidebar from '../components/DashboardSidebar'

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[var(--app-bg)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl gap-6">
        <DashboardSidebar />
        <div className="flex-1 space-y-6">
          <DashboardHeader />
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
