import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { useState, useEffect } from 'react'
import { sql } from '@vercel/postgres'

// Server Functions for Database Operations using Vercel Postgres
const getGalleryImages = createServerFn({ method: 'GET' }).handler(async () => {
  try {
    const { rows } = await sql`SELECT * FROM gallery ORDER BY created_at DESC;`
    return rows
  } catch (error) {
    // If table doesn't exist yet, create it automatically
    if ((error as any).message?.includes('relation "gallery" does not exist')) {
      await sql`
        CREATE TABLE IF NOT EXISTS gallery (
          id SERIAL PRIMARY KEY,
          url TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `
      return []
    }
    throw error
  }
})

const addGalleryImage = createServerFn({ method: 'POST' })
  .validator((url: string) => url)
  .handler(async ({ data: url }) => {
    const { rows } = await sql`
      INSERT INTO gallery (url)
      VALUES (${url})
      RETURNING *;
    `
    return rows[0]
  })

const deleteGalleryImage = createServerFn({ method: 'POST' })
  .validator((id: number) => id)
  .handler(async ({ data: id }) => {
    await sql`DELETE FROM gallery WHERE id = ${id};`
    return { success: true }
  })

export const Route = createFileRoute('/manage-sps/_layout/gallery')({
  component: GalleryManager,
})

function GalleryManager() {
  const [images, setImages] = useState<any[]>([])
  const [newUrl, setNewUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)

  const fetchImages = async () => {
    try {
      const data = await getGalleryImages()
      setImages(data || [])
    } catch (err) {
      console.error('Failed to fetch images:', err)
    } finally {
      setFetching(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newUrl) return
    setLoading(true)
    try {
      await addGalleryImage({ data: newUrl })
      setNewUrl('')
      await fetchImages()
    } catch (err) {
      alert('Failed to add image. Make sure Vercel Postgres is connected.')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this image?')) return
    try {
      await deleteGalleryImage({ data: id })
      await fetchImages()
    } catch (err) {
      alert('Failed to delete image')
    }
  }

  return (
    <div className="space-y-10 animate-enter">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-school-navy tracking-tight">Gallery Manager</h1>
          <p className="text-slate-500 mt-2 font-semibold">Update and maintain the school photo gallery</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black text-school-gold">{images.length}</div>
          <div className="text-[10px] uppercase tracking-widest font-black text-slate-400">Total Photos</div>
        </div>
      </div>

      {/* Add New Image Form */}
      <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-school-gold/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
        <h2 className="text-xl font-bold text-school-navy mb-6 flex items-center gap-2">
          <span className="bg-school-gold/20 p-2 rounded-lg text-sm">➕</span>
          Add New Photo
        </h2>
        <form onSubmit={handleAdd} className="flex gap-4 relative z-10">
          <input
            type="url"
            required
            placeholder="Paste high-quality image URL (e.g. Unsplash, Google Photos Link)"
            className="flex-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-school-gold/20 focus:border-school-gold outline-none transition-all font-semibold"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-school-navy text-school-gold px-10 py-4 rounded-2xl font-black hover:bg-slate-800 transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-school-navy/20"
          >
            {loading ? 'Adding...' : 'Add to Gallery'}
          </button>
        </form>
      </div>

      {/* Image Grid */}
      <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
        <h2 className="text-xl font-bold text-school-navy mb-8 flex items-center gap-2">
          <span className="bg-school-navy/5 p-2 rounded-lg text-sm">📸</span>
          Current Collection
        </h2>
        
        {fetching ? (
          <div className="flex flex-col items-center justify-center py-24 text-slate-400 gap-4">
            <div className="w-12 h-12 border-4 border-school-gold border-t-school-navy rounded-full animate-spin"></div>
            <p className="font-bold animate-pulse">Fetching your collection...</p>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-24 bg-slate-50 rounded-[2rem] border-4 border-dashed border-slate-200">
            <div className="text-6xl mb-4">🏜️</div>
            <p className="text-slate-400 font-bold text-lg">Your gallery is currently empty.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {images.map((img) => (
              <div key={img.id} className="group relative aspect-square rounded-3xl overflow-hidden bg-slate-100 border-4 border-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <img src={img.url} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-school-navy/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
                  <button
                    onClick={() => handleDelete(img.id)}
                    className="bg-red-500 text-white p-4 rounded-2xl hover:bg-red-600 transition-all transform scale-0 group-hover:scale-100 shadow-xl font-black text-sm flex items-center gap-2"
                  >
                    <span>🗑️</span> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
