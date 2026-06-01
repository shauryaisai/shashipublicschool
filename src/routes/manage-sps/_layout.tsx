import { createFileRoute, Link, Outlet, redirect, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/manage-sps/_layout')({
  beforeLoad: async ({ location }) => {
    // In TanStack Start, we can check cookies on the server/client
    const isServer = typeof window === 'undefined'
    let isAdmin = false

    if (isServer) {
      // On server, we'd normally check headers, but for this simple setup 
      // we'll rely on the client redirect or a more robust session later.
    } else {
      isAdmin = document.cookie.includes('admin_session=true')
    }
    
    if (!isAdmin && !location.pathname.includes('/login')) {
      throw redirect({
        to: '/manage-sps/login',
      })
    }
  },
  component: AdminLayout,
})

function AdminLayout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    document.cookie = "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    navigate({ to: '/manage-sps/login' })
  }

  return (
    <div className="flex min-h-screen bg-slate-50 relative overflow-hidden font-medium">
      {/* Theme Background Elements */}
      <div className="hero-orb hero-orb-gold animate-drift fixed -top-16 -left-16 z-0 h-64 w-64 opacity-20"></div>
      <div className="hero-orb hero-orb-blue animate-drift fixed right-0 top-1/3 z-0 h-72 w-72 opacity-10" style={{ animationDelay: '1.6s' }}></div>

      {/* Sidebar */}
      <aside className="w-72 bg-school-navy text-school-white flex flex-col shadow-2xl z-10 relative">
        <div className="p-8 border-b border-school-white/10 flex flex-col items-center text-center">
          <img src="/school-logo.png" alt="SPS" className="w-16 h-16 rounded-full border-2 border-school-gold shadow-lg mb-4" />
          <h1 className="text-xl font-black text-school-gold tracking-tight uppercase">SPS Admin</h1>
          <p className="text-[10px] text-school-white/50 truncate mt-1 uppercase tracking-widest font-black">Control Panel</p>
        </div>
        
        <nav className="flex-1 p-6 space-y-3">
          <Link 
            to="/manage-sps" 
            activeProps={{ className: 'bg-school-gold text-school-navy shadow-lg shadow-school-gold/20' }}
            className="flex items-center gap-4 px-5 py-3 rounded-2xl hover:bg-school-white/10 transition-all duration-300 font-bold group"
          >
            <span className="text-xl group-hover:scale-120 transition-transform">📊</span> 
            <span>Dashboard</span>
          </Link>
          <Link 
            to="/manage-sps/gallery" 
            activeProps={{ className: 'bg-school-gold text-school-navy shadow-lg shadow-school-gold/20' }}
            className="flex items-center gap-4 px-5 py-3 rounded-2xl hover:bg-school-white/10 transition-all duration-300 font-bold group"
          >
            <span className="text-xl group-hover:scale-120 transition-transform">🖼️</span> 
            <span>Gallery Manager</span>
          </Link>
          
          <div className="pt-8 mt-4 border-t border-school-white/10 opacity-30 px-5 text-[10px] font-black uppercase tracking-[0.2em]">
            Website Modules
          </div>
          <div className="flex items-center gap-4 px-5 py-3 rounded-2xl opacity-30 cursor-not-allowed font-bold">
            <span className="text-xl">📝</span> 
            <span>Notices</span>
          </div>
          <div className="flex items-center gap-4 px-5 py-3 rounded-2xl opacity-30 cursor-not-allowed font-bold">
            <span className="text-xl">📩</span> 
            <span>Admissions</span>
          </div>
        </nav>

        <div className="p-6">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white transition-all duration-300 font-bold shadow-sm"
          >
            <span>Logout Account</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-10 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
