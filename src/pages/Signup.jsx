import { HeartPulse, Lock, Mail, UserRound } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { getAuthState, saveAuthState } from '../utils/storage'

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const navigate = useNavigate()

  if (getAuthState()?.isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (form.password !== form.confirmPassword) {
      return
    }
    saveAuthState({ email: form.email, name: form.name })
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#FFF8FA] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-pink-100 bg-white/80 shadow-[0_25px_80px_-35px_rgba(233,30,99,0.35)] lg:flex-row">
        <div className="flex flex-1 flex-col justify-between bg-gradient-to-br from-[#FFF8FA] via-white to-[#F8BBD0] p-8 sm:p-10 lg:p-12">
          <div>
            <div className="flex items-center gap-2 text-[#E91E63]">
              <HeartPulse size={22} />
              <span className="text-lg font-semibold tracking-[0.2em]">HerCare</span>
            </div>
            <h1 className="mt-8 text-3xl font-semibold text-[#333333] sm:text-4xl">Create your account</h1>
            <p className="mt-4 max-w-md text-lg leading-8 text-[#666666]">
              Join a refined wellness ecosystem that supports your health story with clarity and compassion.
            </p>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-pink-100 bg-white/80 p-5 shadow-sm">
            <p className="text-sm font-semibold text-[#E91E63]">No pressure, just support</p>
            <p className="mt-2 text-sm leading-7 text-[#666666]">
              Build a private collection of insights that feels calm, actionable, and beautifully easy to revisit.
            </p>
          </div>
        </div>

        <div className="flex-1 p-8 sm:p-10 lg:p-12">
          <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#333333]">Full name</label>
              <div className="flex items-center rounded-2xl border border-pink-100 bg-[#FFF8FA] px-4 py-3">
                <UserRound size={18} className="text-[#E91E63]" />
                <input name="name" value={form.name} onChange={handleChange} className="ml-3 w-full bg-transparent outline-none" placeholder="Ava Rivera" required />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#333333]">Email address</label>
              <div className="flex items-center rounded-2xl border border-pink-100 bg-[#FFF8FA] px-4 py-3">
                <Mail size={18} className="text-[#E91E63]" />
                <input type="email" name="email" value={form.email} onChange={handleChange} className="ml-3 w-full bg-transparent outline-none" placeholder="you@example.com" required />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#333333]">Password</label>
              <div className="flex items-center rounded-2xl border border-pink-100 bg-[#FFF8FA] px-4 py-3">
                <Lock size={18} className="text-[#E91E63]" />
                <input type="password" name="password" value={form.password} onChange={handleChange} className="ml-3 w-full bg-transparent outline-none" placeholder="••••••••" required />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#333333]">Confirm password</label>
              <div className="flex items-center rounded-2xl border border-pink-100 bg-[#FFF8FA] px-4 py-3">
                <Lock size={18} className="text-[#E91E63]" />
                <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} className="ml-3 w-full bg-transparent outline-none" placeholder="••••••••" required />
              </div>
            </div>

            <button type="submit" className="w-full rounded-full bg-[#E91E63] px-4 py-3 font-semibold text-white transition hover:bg-[#d51a5f]">
              Create account
            </button>

            <p className="text-center text-sm text-[#666666]">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-[#E91E63]">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
