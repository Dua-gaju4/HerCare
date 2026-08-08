import DashboardSidebar from './DashboardSidebar'
import ModuleTopNav from './ModuleTopNav'

const ModulePageShell = ({ children }) => {
  return (
    <>
      <div className="lg:hidden">
        <ModuleTopNav />
      </div>
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <DashboardSidebar />
        <div className="min-w-0 flex-1 space-y-6">{children}</div>
      </div>
    </>
  )
}

export default ModulePageShell