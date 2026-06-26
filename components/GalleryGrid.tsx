'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'

type GalleryItem = {
  src: string
  alt: string
  caption: string
  category: string
  fit: 'cover' | 'contain'
}

const galleryImages: GalleryItem[] = [
  // ── Facility & Production (real photos from the Tiptur plant) ──
  { src: '/images/gallery/facility-1.jpg',        alt: 'Processing Facility',        caption: 'Our Processing Facility',       category: 'Facility',    fit: 'cover'   },
  { src: '/images/gallery/facility-2.jpg',        alt: 'Production Line',            caption: 'Production Line',               category: 'Facility',    fit: 'cover'   },
  { src: '/images/gallery/facility-3.jpg',        alt: 'Coconut Processing Unit',    caption: 'Coconut Processing Unit',       category: 'Facility',    fit: 'cover'   },
  { src: '/images/gallery/facility-4.jpg',        alt: 'Plant Overview',             caption: 'Plant Overview',                category: 'Facility',    fit: 'cover'   },
  { src: '/images/gallery/production-1.jpg',      alt: 'Production in Progress',     caption: 'Production in Progress',        category: 'Facility',    fit: 'cover'   },
  { src: '/images/gallery/production-2.jpg',      alt: 'Quality Processing',         caption: 'Quality Processing',           category: 'Facility',    fit: 'cover'   },
  { src: '/images/gallery/production-3.jpg',      alt: 'Drying & Milling',           caption: 'Drying & Milling Stage',        category: 'Facility',    fit: 'cover'   },
  // ── Products ──
  { src: '/images/desiccated-coconut-powder.png', alt: 'Desiccated Coconut Powder', caption: 'Desiccated Coconut Powder',     category: 'Products',    fit: 'contain' },
  { src: '/images/coconut-flakes.png',            alt: 'Desiccated Coconut Flakes', caption: 'Coconut Flakes',                category: 'Products',    fit: 'contain' },
  { src: '/images/virgin-coconut-oil.jpg',        alt: 'Virgin Coconut Oil',        caption: 'Virgin Coconut Oil',            category: 'Products',    fit: 'cover'   },
  { src: '/images/coconut-milk.png',              alt: 'Coconut Milk',              caption: 'Coconut Milk',                  category: 'Products',    fit: 'contain' },
  { src: '/images/d-fat-coconut-powder.png',      alt: 'D-Fat Coconut Powder',      caption: 'D-Fat Coconut Powder',          category: 'Products',    fit: 'contain' },
  { src: '/images/coconut-milk-powder.png',       alt: 'Coconut Milk Powder',       caption: 'Coconut Milk Powder',           category: 'Products',    fit: 'contain' },
  { src: '/images/coconut-shells.png',            alt: 'Coconut Shell',             caption: 'Coconut Shell',                 category: 'Products',    fit: 'contain' },
  { src: '/images/coconut-testa.png',             alt: 'Coconut Testa',             caption: 'Coconut Testa',                 category: 'Products',    fit: 'contain' },
  { src: '/images/gallery/product-shot-1.jpg',    alt: 'Product Range',             caption: 'Kalpa Ruchi Product Range',     category: 'Products',    fit: 'cover'   },
  { src: '/images/gallery/product-shot-2.jpg',    alt: 'Products Showcase',         caption: 'Products Showcase',             category: 'Products',    fit: 'cover'   },
  // ── Packaging ──
  { src: '/images/kalparuchi-pouch.png',          alt: 'Kalpa Ruchi Brand',         caption: 'Kalpa Ruchi Brand Packaging',   category: 'Packaging',   fit: 'contain' },
  { src: '/images/gallery/brand-dcp.png',         alt: 'Dhanalakshmi Brand Pack',   caption: 'Dhanalakshmi DCP Packaging',    category: 'Packaging',   fit: 'contain' },
  { src: '/images/gallery/brand-flakes.png',      alt: 'Kalpa Ruchi Flakes Pack',   caption: 'Kalpa Ruchi Flakes Packaging',  category: 'Packaging',   fit: 'contain' },
  { src: '/images/gallery/packaging-1.jpg',       alt: 'Export Packaging',          caption: 'Export-Ready Packaging',        category: 'Packaging',   fit: 'cover'   },
  { src: '/images/gallery/packaging-2.png',       alt: 'Retail Packaging',          caption: 'Retail Pack Range',             category: 'Packaging',   fit: 'contain' },
]

const categories = ['All', 'Facility', 'Products', 'Packaging']

export default function GalleryGrid() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === 'All' ? galleryImages : galleryImages.filter(i => i.category === active)

  const close  = useCallback(() => setLightbox(null), [])
  const prev   = useCallback(() => setLightbox(i => i === null ? null : (i - 1 + filtered.length) % filtered.length), [filtered.length])
  const next   = useCallback(() => setLightbox(i => i === null ? null : (i + 1) % filtered.length), [filtered.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      close()
      if (e.key === 'ArrowLeft')   prev()
      if (e.key === 'ArrowRight')  next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close, prev, next])

  return (
    <section className="py-16 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                active === cat
                  ? 'bg-forest text-white shadow-sm border-forest'
                  : 'bg-card-white text-text-dark border-beige hover:border-forest/40 hover:text-forest'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto self-center text-xs text-muted">{filtered.length} photos</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img, i) => (
            <motion.div
              key={`${active}-${img.src}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="group relative rounded-2xl overflow-hidden border border-beige/40 shadow-sm cursor-pointer hover:shadow-card transition-shadow duration-300"
              onClick={() => setLightbox(i)}
            >
              {/* Image container */}
              <div className={`relative aspect-square ${img.fit === 'contain' ? 'bg-card-white' : 'bg-ivory'}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`transition-transform duration-500 group-hover:scale-105 ${
                    img.fit === 'contain' ? 'object-contain p-6' : 'object-cover'
                  }`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Caption strip */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/65 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-semibold leading-tight">{img.caption}</p>
                <p className="text-white/60 text-[0.62rem] mt-0.5">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            onClick={close} aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          {/* Image */}
          <motion.div
            key={lightbox}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22 }}
            className="relative flex flex-col items-center max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative w-full rounded-2xl overflow-hidden ${filtered[lightbox].fit === 'contain' ? 'bg-white' : ''}`} style={{ maxHeight: '72vh', aspectRatio: '4/3' }}>
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                fill
                className={filtered[lightbox].fit === 'contain' ? 'object-contain p-6' : 'object-cover'}
              />
            </div>
            <p className="mt-4 text-white font-semibold text-base">{filtered[lightbox].caption}</p>
            <p className="text-white/50 text-sm">{filtered[lightbox].category} · {lightbox + 1} / {filtered.length}</p>
          </motion.div>
          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </section>
  )
}
