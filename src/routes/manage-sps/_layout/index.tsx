import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/manage-sps/_layout/')({
  component: AdminDashboard,
})

function AdminDashboard() {
  return (
    <div className="space-y-12 animate-enter">
      <div className="relative p-12 rounded-[3rem] bg-school-navy text-school-white overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-school-gold/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-5xl font-black text-school-gold tracking-tight">Welcome, Administrator</h1>
          <p className="text-xl text-school-white/70 mt-4 max-w-2xl font-semibold">
            Manage Shashi Public School's digital presence with ease. Your changes reflect instantly for students and parents.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 card-lift group">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">🖼️</div>
          <h3 className="text-xl font-black text-school-navy">Gallery Manager</h3>
          <p className="text-4xl font-black mt-4 text-school-gold">Live</p>
          <p className="text-slate-500 font-bold text-sm mt-2 leading-relaxed">Instantly add or remove event photos from the gallery.</p>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 opacity-60 relative group grayscale hover:grayscale-0 transition-all duration-700">
          <div className="absolute top-4 right-8 bg-slate-200 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Locked</div>
          <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">📝</div>
          <h3 className="text-xl font-black text-school-navy">Notices & News</h3>
          <p className="text-4xl font-black mt-4 text-slate-300">Pending</p>
          <p className="text-slate-500 font-bold text-sm mt-2 leading-relaxed">Future module for managing digital notice boards.</p>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 opacity-60 relative group grayscale hover:grayscale-0 transition-all duration-700">
          <div className="absolute top-4 right-8 bg-slate-200 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Locked</div>
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">📩</div>
          <h3 className="text-xl font-black text-school-navy">Admissions</h3>
          <p className="text-4xl font-black mt-4 text-slate-300">Pending</p>
          <p className="text-slate-500 font-bold text-sm mt-2 leading-relaxed">Future module for viewing online admission forms.</p>
        </div>
      </div>

      <div className="bg-school-gold/5 border-4 border-dashed border-school-gold/20 p-16 rounded-[3rem] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-school-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <h2 className="text-2xl font-black text-school-navy mb-4 relative z-10">Quick Support</h2>
        <p className="text-slate-600 font-bold max-w-xl mx-auto leading-relaxed relative z-10">
          If you encounter any issues or need to add new modules, please contact your technical support team. We are here to help SPS grow!
        </p>
      </div>
    </div>
  )
}
