import { HeadContent, Scripts, createRootRoute, Outlet, Link } from '@tanstack/react-router'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { useState, useEffect } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Shashi Public Sr. Secondary School',
      },
    ],
  }),
  shellComponent: RootDocument,
  component: RootComponent,
  notFoundComponent: () => (
    <div className="py-32 px-4 text-center min-h-[60vh] flex flex-col items-center justify-center bg-slate-50">
      <div className="text-8xl mb-6">🕵️</div>
      <h1 className="text-5xl font-black text-school-navy mb-4 border-b-4 border-school-gold pb-4 inline-block">404</h1>
      <h2 className="text-3xl font-bold text-school-navy mb-4">Page Not Found</h2>
      <p className="text-slate-600 mb-8 text-lg max-w-md mx-auto">We couldn't find the page or resource you were looking for.</p>
      <Link to="/" className="inline-block rounded-full bg-school-gold px-8 py-4 text-lg font-bold text-school-navy shadow-lg transition-all hover:scale-105 hover:bg-white hover:text-school-navy">
        Return to Home
      </Link>
    </div>
  ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col min-h-screen text-slate-900 font-medium relative overflow-x-hidden bg-slate-50">
        {/* Simplified Background Image Elements */}
        <div 
          className="fixed inset-0 pointer-events-none z-[-1] bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/background.png')" }}
        ></div>
        <div className="hero-orb hero-orb-gold animate-drift fixed -top-16 -left-16 z-[-1] h-64 w-64"></div>
        <div className="hero-orb hero-orb-blue animate-drift fixed right-0 top-1/3 z-[-1] h-72 w-72" style={{ animationDelay: '1.6s' }}></div>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootComponent() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY
          setScrolled(y > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Optimized Header with will-change */}
      <header className="bg-school-navy text-school-white sticky top-0 z-50 shadow-md transition-all duration-500 ease-in-out will-change-[height,padding]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center gap-4 text-center">
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out will-change-[max-height,opacity]"
            style={{
              maxHeight: scrolled ? '0px' : '120px',
              opacity: scrolled ? 0 : 1,
            }}
          >
            <div className="flex flex-col items-center gap-2 pb-2">
              <img src="/school-logo.png" alt="SPS Logo" loading="lazy" className="animate-float-gentle w-20 h-20 object-cover rounded-full border-2 border-school-gold shadow-md" />
              <div>
                <h1 className="text-xl md:text-2xl font-extrabold">Shashi Public Sr. Secondary School</h1>
                <p className="text-sm font-bold text-school-gold">Inspiring Excellence, Shaping Futures</p>
              </div>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm font-bold">
            <Link to="/" className="nav-link-underline hover:text-school-gold transition-colors [&.active]:text-school-gold">Home</Link>
            <Link to="/about" className="nav-link-underline hover:text-school-gold transition-colors [&.active]:text-school-gold">About Us</Link>
            <Link to="/academics" className="nav-link-underline hover:text-school-gold transition-colors [&.active]:text-school-gold">Academics</Link>
            <Link to="/admissions" className="px-4 py-1.5 -my-1.5 rounded-full text-white font-extrabold animate-rgb-bg transition-transform hover:scale-110 shadow-md">Admissions</Link>
            <Link to="/gallery" className="nav-link-underline hover:text-school-gold transition-colors [&.active]:text-school-gold">Gallery</Link>
            <Link to="/contact" className="nav-link-underline hover:text-school-gold transition-colors [&.active]:text-school-gold">Contact Us</Link>
            <Link to="/ask-questions" className="nav-link-underline hover:text-school-gold transition-colors [&.active]:text-school-gold">Ask Questions</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-school-navy text-school-white pt-12 pb-6 border-t-[6px] border-school-gold mt-auto">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="animate-enter" style={{ animationDelay: '80ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <img src="/school-logo.png" alt="SPS Logo" loading="lazy" className="w-16 h-16 rounded-full object-cover border-2 border-school-gold shadow-md" />
              <h2 className="text-xl font-bold">Shashi Public School</h2>
            </div>
            <p className="text-sm mb-4 opacity-90 leading-relaxed font-semibold">
              A commitment to academic excellence and holistic development.
            </p>
            <div>
              <h3 className="text-lg font-bold text-school-gold mb-3">Stay Connected</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=195034251011481" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-school-white/10 flex items-center justify-center hover:bg-school-gold hover:text-school-navy transition-colors shadow-sm" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/shashipublic_school/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-school-white/10 flex items-center justify-center hover:bg-school-gold hover:text-school-navy transition-colors shadow-sm" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com/shashipublicschool" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-school-white/10 flex items-center justify-center hover:bg-school-gold hover:text-school-navy transition-colors shadow-sm" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-enter" style={{ animationDelay: '180ms' }}>
            <h3 className="text-lg font-bold text-school-gold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/about" className="inline-block hover:text-school-gold transition-all duration-300 hover:translate-x-2">About Us</Link></li>
              <li><Link to="/academics" className="inline-block hover:text-school-gold transition-all duration-300 hover:translate-x-2">Academics</Link></li>
              <li><Link to="/admissions" className="inline-block hover:text-school-gold transition-all duration-300 hover:translate-x-2">Admissions</Link></li>
              <li><Link to="/gallery" className="inline-block hover:text-school-gold transition-all duration-300 hover:translate-x-2">Gallery</Link></li>
              <li><Link to="/contact" className="inline-block hover:text-school-gold transition-all duration-300 hover:translate-x-2">Contact Us</Link></li>
              <li><Link to="/ask-questions" className="inline-block hover:text-school-gold transition-all duration-300 hover:translate-x-2">Ask Questions</Link></li>
              <li><Link to="/cbse-mandatory-disclosure" className="inline-block hover:text-school-gold transition-all duration-300 hover:translate-x-2">CBSE Mandatory Disclosure</Link></li>
            </ul>
          </div>
          
          <div className="animate-enter" style={{ animationDelay: '280ms' }}>
            <h3 className="text-lg font-bold text-school-gold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex gap-2">
                <span className="shrink-0">📍</span>
                <span>A-35, DDA Flats Road Near M. S. Park, Mandoli Road, Shahdara, Delhi – 110032</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">📞</span>
                <span>011-2258 1138, +91 98100 77384</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">✉️</span>
                <span>info@shashipublicschool.co.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center text-xs opacity-70 border-t border-school-white/20 pt-6">
          &copy; {new Date().getFullYear()} Shashi Public Sr. Secondary School. All rights reserved.
        </div>
      </footer>
    </>
  )
}
