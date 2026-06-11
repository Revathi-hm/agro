'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { src: '/images/hero.jpg',                    alt: 'Dhanalakshmi Agro Products facility',  caption: 'Our Production Facility',      category: 'Facility'   },
  { src: '/images/desiccated-coconut-powder.png', alt: 'Desiccated Coconut Powder',           caption: 'Desiccated Coconut Powder',    category: 'Products'   },
  { src: '/images/coconut-flakes.png',           alt: 'Desiccated Coconut Flakes',            caption: 'Desiccated Coconut Flakes',    category: 'Products'   },
  { src: '/images/virgin-coconut-oil.jpg',       alt: 'Virgin Coconut Oil',                   caption: 'Virgin Coconut Oil',           category: 'Products'   },
  { src: '/images/coconut-milk.png',             alt: 'Coconut Milk',                         caption: 'Coconut Milk',                 category: 'Products'   },
  { src: '/images/kalparuchi-pouch.png',         alt: 'Kalpa Ruchi Premium Products',         caption: 'Kalpa Ruchi Premium Range',    category: 'Packaging'  },
  { src: '/images/d-fat-coconut-powder.png',     alt: 'D-Fat Coconut Powder',                 caption: 'D-Fat Coconut Powder',         category: 'Products'   },
  { src: '/images/coconut-milk-powder.png',      alt: 'Coconut Milk Powder',                  caption: 'Coconut Milk Powder',          category: 'Products'   },
  { src: '/images/coconut-shells.png',           alt: 'Coconut Shell',                        caption: 'Coconut Shell',                category: 'Products'   },
  { src: '/images/coconut-testa.png',            alt: 'Coconut Testa',                        caption: 'Coconut Testa',                category: 'Products'   },
  { src: '/images/pouch.png',                    alt: 'Kalpa Ruchi Packaging',                caption: 'Premium Packaging',            category: 'Packaging'  },
]

const categories = ['All', 'Products', 'Facility', 'Packaging']

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goPrev = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
  }

  const goNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filtered.length)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <section className="py-16 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-forest text-white shadow-md'
                  : 'bg-white text-text-dark border border-beige hover:border-forest hover:text-forest'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden shadow-card cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-semibold">{img.caption}</p>
                  <p className="text-white/70 text-[0.65rem]">{img.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 text-white/80 hover:text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ maxHeight: '70vh' }}>
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  width={1200}
                  height={900}
                  className="object-contain w-full h-full rounded-xl"
                  style={{ maxHeight: '70vh' }}
                />
              </div>
              <p className="mt-4 text-white font-semibold text-base">{filtered[lightboxIndex].caption}</p>
              <p className="text-white/50 text-sm">{filtered[lightboxIndex].category}</p>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 text-white/80 hover:text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goNext() }}
              aria-label="Next"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
