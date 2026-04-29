import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

function Gallery() {
  // Setting up 12 photos for the gallery
  const photos = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    url: `/gallery/photo-${i + 1}.jpg`
  }))

  return (
    <div className="py-16 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="animate-enter text-4xl font-bold text-school-navy mb-10 text-center border-b-4 border-school-gold pb-4 inline-block mx-auto">Photo Gallery</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="card-lift animate-enter group relative aspect-square overflow-hidden rounded-2xl bg-slate-200 shadow-sm cursor-pointer">
              <img 
                src={photo.url} 
                alt={`School gallery photo ${photo.id + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
