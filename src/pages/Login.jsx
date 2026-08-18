import { Eye, EyeOff, HeartPulse, Lock, Mail } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { getAuthState, saveAuthState } from '../utils/storage'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  if (getAuthState()?.isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    saveAuthState({ email, name: email.split('@')[0] })
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-[var(--app-bg)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] shadow-[0_25px_80px_-30px_rgba(233,30,99,0.35)] lg:flex-row">
        <div className="flex flex-1 flex-col justify-between bg-gradient-to-br from-[#FFF8FA] via-white to-[#F8BBD0] p-8 sm:p-10 lg:p-12 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
          <div>
            <div className="flex items-center gap-2 text-[var(--app-primary)]">
              <HeartPulse size={22} />
              <span className="text-lg font-semibold tracking-[0.2em]">HerCare</span>
            </div>
            <h1 className="mt-8 text-3xl font-semibold text-[var(--app-text)] sm:text-4xl">Welcome back</h1>
            <p className="mt-4 max-w-md text-lg leading-8 text-[var(--app-muted)]">
              Sign in to continue your wellness routine with thoughtful guidance and elegant insights.
            </p>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm">
            <p className="text-sm font-semibold text-[var(--app-primary)]">Your care, your pace</p>
            <p className="mt-2 text-sm leading-7 text-[var(--app-muted)]">
              Every section is kept private, reassuring, and easy to revisit whenever you need a calm moment.
            </p>
          </div>
        </div>

        <div className="flex-1 p-8 sm:p-10 lg:p-12">
          <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--app-text)]">Email address</label>
              <div className="flex items-center rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] px-4 py-3">
                <Mail size={18} className="text-[var(--app-primary)]" />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="ml-3 w-full bg-transparent outline-none text-[var(--app-text)] placeholder:text-[var(--app-muted)]"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--app-text)]">Password</label>
              <div className="flex items-center rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] px-4 py-3">
                <Lock size={18} className="text-[var(--app-primary)]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="ml-3 w-full bg-transparent outline-none text-[var(--app-text)] placeholder:text-[var(--app-muted)]"
                  placeholder="••••••••"
                  required
                />
                <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="ml-2 text-[#9C27B0]">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-[var(--app-muted)]">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-pink-200 text-[var(--app-primary)]" />
                Remember me
              </label>
              <a href="#" className="font-medium text-[var(--app-primary)]">Forgot password?</a>
            </div>

            <button type="submit" className="w-full rounded-full bg-[var(--app-primary)] px-4 py-3 font-semibold text-white transition hover:bg-[var(--app-primary-strong)]">
              Login
            </button>

            <p className="text-center text-sm text-[var(--app-muted)]">
              New here?{' '}
              <Link to="/signup" className="font-semibold text-[var(--app-primary)]">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
