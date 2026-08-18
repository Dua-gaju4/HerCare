import { ArrowRight, HeartPulse, Sparkles, TrendingUp } from 'lucide-react'
import DashboardLayout from '../layouts/DashboardLayout'
import { dashboardStats, quickActions, recentActivities } from '../data/mockData'

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <section className="rounded-[2rem] border border-pink-100 bg-gradient-to-br from-[#FFF8FA] via-white to-[#F8BBD0] p-6 shadow-[0_20px_60px_-30px_rgba(233,30,99,0.3)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">Welcome back</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#333333]">You&apos;re doing beautifully today.</h2>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-[#666666]">
                Keep your health routines gentle, beautiful, and aligned with how you want to feel.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-pink-100 bg-white/80 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#E91E63] p-3 text-white">
                  <HeartPulse size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[#333333]">Weekly balance</p>
                  <p className="text-sm text-[#666666]">82% steady and calm</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map(({ label, value, change, icon: Icon }) => (
            <div key={label} className="rounded-[1.4rem] border border-pink-100 bg-white/80 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#666666]">{label}</p>
                <div className="rounded-2xl bg-[#FFF8FA] p-2 text-[#E91E63]">
                  <Icon size={18} />
                </div>
              </div>
              <p className="mt-4 text-2xl font-semibold text-[#333333]">{value}</p>
              <p className="mt-2 text-sm text-[#9C27B0]">{change}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.8rem] border border-pink-100 bg-white/80 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#E91E63]">Recent activities</p>
                <h3 className="mt-1 text-xl font-semibold text-[#333333]">Your recent care moments</h3>
              </div>
              <button className="rounded-full bg-[#FFF8FA] px-3 py-2 text-sm font-semibold text-[#E91E63]">View all</button>
            </div>
            <div className="mt-6 space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.title} className="rounded-[1.2rem] border border-pink-100 bg-[#FFF8FA] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-[#333333]">{activity.title}</p>
                      <p className="mt-1 text-sm leading-7 text-[#666666]">{activity.detail}</p>
                    </div>
                    <span className="text-sm text-[#9C27B0]">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-pink-100 bg-white/80 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-[#E91E63]">
              <Sparkles size={18} />
              <p className="text-sm font-semibold">Quick actions</p>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-[#333333]">Keep your care plan moving</h3>
            <div className="mt-6 space-y-3">
              {quickActions.map((action) => (
                <div key={action.title} className="rounded-[1.2rem] border border-pink-100 bg-[#FFF8FA] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-[#333333]">{action.title}</p>
                      <p className="mt-1 text-sm text-[#666666]">{action.description}</p>
                    </div>
                    <button className="rounded-full bg-[#E91E63] p-2 text-white">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.2rem] border border-pink-100 bg-gradient-to-r from-[#FFF8FA] to-[#F8BBD0] p-4">
              <div className="flex items-center gap-2 text-[#9C27B0]">
                <TrendingUp size={18} />
                <p className="font-semibold">Insight tip</p>
              </div>
              <p className="mt-2 text-sm leading-7 text-[#666666]">A calm evening routine can improve rest and support your next day’s energy.</p>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
