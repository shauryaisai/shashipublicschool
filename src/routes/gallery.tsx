import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { useState, useEffect } from 'react'
import { sql } from '@vercel/postgres'

const getGalleryImages = createServerFn({ method: 'GET' }).handler(async () => {
  try {
    const { rows } = await sql`SELECT * FROM gallery ORDER BY created_at DESC;`
    return rows || []
  } catch (error) {
    console.error('Database error:', error)
    return []
  }
})

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

function Gallery() {
  const [photos, setPhotos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getGalleryImages().then(data => {
      setPhotos(data)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }, [])

  return (
    <div className="py-20 px-4 bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="hero-orb hero-orb-gold animate-drift fixed -top-20 -left-20 z-0 h-80 w-80 opacity-20"></div>
      <div className="hero-orb hero-orb-blue animate-drift fixed -bottom-20 -right-20 z-0 h-96 w-96 opacity-20" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="animate-enter text-5xl font-black text-school-navy mb-4 border-b-6 border-school-gold pb-4 inline-block mx-auto tracking-tight">Photo Gallery</h1>
          <p className="animate-enter text-lg text-slate-600 font-bold max-w-2xl mx-auto" style={{ animationDelay: '100ms' }}>
            Capturing the vibrant life and memorable moments at Shashi Public School.
          </p>
        </div>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <div className="w-16 h-16 border-4 border-school-gold border-t-school-navy rounded-full animate-spin"></div>
            <p className="text-school-navy font-black text-xl animate-pulse">Loading Memories...</p>
          </div>
        ) : photos.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-[3rem] shadow-xl border border-slate-100 max-w-2xl mx-auto">
            <div className="text-8xl mb-6">📸</div>
            <h2 className="text-2xl font-bold text-school-navy">Gallery coming soon!</h2>
            <p className="text-slate-500 mt-2 font-semibold">We are currently updating our collection of photos.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {photos.map((photo, i) => (
              <div 
                key={photo.id} 
                className="card-lift animate-enter group relative aspect-square overflow-hidden rounded-[2.5rem] bg-white shadow-lg border-4 border-white cursor-pointer"
                style={{ '--delay': `${i * 50}ms` } as any}
              >
                <img 
                  src={photo.url} 
                  alt={`School gallery photo ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
