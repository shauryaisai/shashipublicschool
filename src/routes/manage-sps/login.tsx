import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { useState } from 'react'
import { setCookie } from 'cookie-es'

// Server Function to validate credentials and set session
const loginAdmin = createServerFn({ method: 'POST' })
  .validator((data: { email: string; pass: string }) => data)
  .handler(async ({ data: { email, pass } }) => {
    const adminEmail = 'shaurya.ai@icloud.com'
    const adminPassword = process.env.ADMIN_PASSWORD || 'shashipublicschool@1234'
    
    if (email === adminEmail && pass === adminPassword) {
      return { success: true }
    }
    
    throw new Error('Invalid Admin Credentials')
  })

export const Route = createFileRoute('/manage-sps/login')({
  component: AdminLogin,
})

function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await loginAdmin({ data: { email, pass: password } })
      if (res.success) {
        document.cookie = "admin_session=true; path=/; max-age=86400; SameSite=Strict"
        navigate({ to: '/manage-sps' })
      }
    } catch (err: any) {
      setError(err.message || 'Invalid Credentials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 relative overflow-hidden font-medium">
      {/* Background Elements */}
      <div className="hero-orb hero-orb-gold animate-drift fixed -top-20 -left-20 z-0 h-80 w-80 opacity-20"></div>
      <div className="hero-orb hero-orb-blue animate-drift fixed -bottom-20 -right-20 z-0 h-96 w-96 opacity-20" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-md w-full relative z-10 animate-enter">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-white">
          <div className="bg-school-navy p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-school-gold/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
            <img src="/school-logo.png" alt="SPS" className="w-24 h-24 rounded-full border-4 border-school-gold shadow-xl mx-auto mb-6 animate-float-gentle" />
            <h1 className="text-3xl font-black text-school-gold tracking-tight uppercase">SPS Secure</h1>
            <p className="text-school-white/60 text-sm mt-2 font-bold uppercase tracking-widest">Administrator Login</p>
          </div>
          
          <form onSubmit={handleLogin} className="p-10 space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm border border-red-100 font-bold animate-enter">
                ⚠️ {error}
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-school-gold/20 focus:border-school-gold outline-none transition-all font-semibold"
                placeholder="admin@shashipublicschool.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Admin Password</label>
              <input
                type="password"
                required
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-school-gold/20 focus:border-school-gold outline-none transition-all font-semibold"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-school-navy text-school-gold py-6 rounded-[2rem] font-black text-lg hover:bg-slate-800 transition-all active:scale-95 disabled:opacity-50 shadow-xl shadow-school-navy/20 uppercase tracking-widest"
            >
              {loading ? 'Verifying...' : 'Access Dashboard'}
            </button>
          </form>
        </div>
        <p className="text-center mt-8 text-slate-400 text-sm font-bold uppercase tracking-widest">
          Secured by Vercel Postgres
        </p>
      </div>
    </div>
  )
}
