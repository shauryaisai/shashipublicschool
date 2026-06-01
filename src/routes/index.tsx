import { createFileRoute, Link } from '@tanstack/react-router'
import { CountUp } from '../components/CountUp'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  // Triggering new deployment
  return (
    <div className="overflow-x-hidden">
      <section className="bg-school-navy text-school-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center will-change-transform"></div>
        <div className="hero-orb hero-orb-gold animate-drift -left-12 top-8 h-40 w-40 will-change-transform"></div>
        <div className="hero-orb hero-orb-blue animate-drift bottom-6 right-10 h-56 w-56 will-change-transform" style={{ animationDelay: '1.2s' }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="glass-panel animate-enter rounded-[2rem] border border-white/10 px-6 py-10 shadow-2xl shadow-black/20 md:px-10">
            <div className="animate-enter text-sm font-bold uppercase tracking-[0.35em] text-school-white/80" style={{ animationDelay: '80ms' }}>
              Established Excellence In Shahdara
            </div>
            <h1 className="animate-enter mt-4 mb-6 text-4xl font-bold text-school-gold md:text-6xl" style={{ animationDelay: '160ms' }}>
              Welcome to Shashi Public School
            </h1>
            <p className="animate-enter mb-10 text-xl opacity-90 md:text-2xl" style={{ animationDelay: '240ms' }}>
              Empowering Students to Achieve Excellence and Integrity
            </p>
            <Link
              to="/admissions"
              className="animate-enter inline-block rounded-full bg-school-gold px-8 py-4 text-lg font-bold text-school-navy shadow-lg transition-all hover:scale-105 hover:bg-white hover:text-school-navy"
              style={{ animationDelay: '320ms' }}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-school-gold text-school-navy py-3 px-4 overflow-hidden shadow-inner flex relative z-20">
        <div className="font-bold pr-4 border-r border-school-navy whitespace-nowrap z-10 bg-school-gold">
          News:
        </div>
        <div className="flex-grow overflow-hidden relative">
          <div className="announcement-track whitespace-nowrap inline-block px-4 font-medium will-change-transform">
            Admissions open for Academic Year 2026-2027
          </div>
        </div>
      </div>

      <section className="py-20 px-4 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-enter">
            <h2 className="text-3xl font-bold text-school-navy mb-6">Nurturing Future Leaders</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              At Shashi Public Sr. Secondary School, we believe in providing a holistic educational experience that shapes the leaders of tomorrow. With a rich history of academic excellence and character development, we are dedicated to fostering a supportive and engaging learning environment.
            </p>
            <Link to="/about" className="inline-flex items-center text-school-navy font-bold transition-colors hover:text-school-gold">
              Learn More About Our History &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="card-lift animate-enter rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl font-bold text-school-gold mb-2"><CountUp end={100} suffix="%" /></div>
              <div className="text-school-navy font-semibold">Pass Rate</div>
            </div>
            <div className="card-lift animate-enter rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm" style={{ animationDelay: '180ms' }}>
            <div className="text-4xl font-bold text-school-gold mb-2"><CountUp end={50} suffix="+" /></div>
              <div className="text-school-navy font-semibold">Expert Teachers</div>
            </div>
          <div className="card-lift animate-enter col-span-2 rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm" style={{ animationDelay: '340ms' }}>
              <div className="text-4xl font-bold text-school-gold mb-2"><CountUp end={31} /></div>
              <div className="text-school-navy font-semibold">Years of Legacy</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="animate-enter text-center mb-12">
            <h2 className="text-3xl font-bold text-school-navy mb-4">Latest News & Circulars</h2>
            <p className="text-slate-600">Important updates and information for parents and students.</p>
          </div>

          <div className="grid grid-cols-1 max-w-lg mx-auto gap-8">
            {[
              { date: 'Latest Update', title: 'Admissions open for 2026-27', desc: 'Registration is now open for the upcoming academic session. Please visit the admissions page to apply.' },
            ].map((news, i) => (
              <div
                key={i}
                className="card-lift animate-enter overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
                style={{ animationDelay: `${120 + i * 90}ms` }}
              >
                <div className="bg-school-navy px-6 py-2 text-sm font-semibold text-school-white">
                  {news.date}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-school-navy mb-3">{news.title}</h3>
                  <p className="text-slate-600 mb-4">{news.desc}</p>
                  <a href="#" className="font-semibold text-school-gold hover:underline">Download PDF</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
