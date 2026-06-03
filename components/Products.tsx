'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog'
import { products, type Product } from '@/data/products'

const filters = [
  { label: 'All',    value: 'all'   },
  { label: 'Powder', value: 'powder'},
  { label: 'Oil',    value: 'oil'   },
  { label: 'Milk',   value: 'milk'  },
  { label: 'Raw',    value: 'raw'   },
]

const categoryMap: Record<string, string> = {
  'desiccated-coconut-powder':  'powder',
  'desiccated-coconut-flakes':  'powder',
  'd-fat-coconut-powder':       'powder',
  'virgin-coconut-oil':         'oil',
  'coconut-milk':               'milk',
  'coconut-milk-powder':        'milk',
  'coconut-shell':              'raw',
  'testa':                      'raw',
}

function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group bg-card-white rounded-2xl overflow-hidden shadow-sm border border-beige/50 hover:shadow-card-hover transition-shadow duration-300 cursor-pointer"
      onClick={onOpen}
    >
      <div className="relative overflow-hidden bg-ivory" style={{ height: 220 }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span
          className="absolute top-3 left-3 text-[0.65rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(18,84,38,0.1)', color: '#125426' }}
        >
          {product.badge}
        </span>
      </div>
      <div className="p-5">
        <h5 className="font-playfair text-[1.05rem] font-bold text-text-dark mb-2 leading-snug">{product.name}</h5>
        <p className="text-[0.8rem] text-muted leading-relaxed mb-4">{product.desc}</p>
        <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-bold text-forest hover:gap-2.5 transition-all duration-200">
          View Details <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </motion.div>
  )
}

function ProductModal({ product, open, onClose }: { product: Product | null; open: boolean; onClose: () => void }) {
  if (!product) return null
  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose() }}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl">
        <DialogClose asChild>
          <button
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-text-dark" />
          </button>
        </DialogClose>
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-[45%] bg-ivory flex items-center justify-center p-8 min-h-[220px]">
            <Image
              src={product.modalImage || product.image}
              alt={product.name}
              width={280}
              height={280}
              className="object-contain w-full"
            />
          </div>
          <div className="sm:w-[55%] p-7 overflow-y-auto max-h-[80vh]">
            <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-olive mb-2">{product.badge}</p>
            <h2 className="font-playfair text-2xl font-bold text-text-dark mb-3 leading-tight">{product.name}</h2>
            <p className="text-[0.85rem] text-muted leading-relaxed mb-5">{product.longDesc}</p>
            <p className="text-[0.7rem] font-bold tracking-widest uppercase text-olive mb-2">Applications</p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {product.uses.map((u) => (
                <span key={u} className="text-[0.72rem] font-medium px-2.5 py-1 rounded-full bg-forest/8 text-forest border border-forest/15">
                  {u}
                </span>
              ))}
            </div>
            <a
              href={`/products/${product.slug}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-green"
              style={{ background: 'linear-gradient(135deg, #125426 0%, #5D6B36 100%)' }}
            >
              Full Details <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [openProduct, setOpenProduct]   = useState<Product | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => categoryMap[p.slug] === activeFilter)

  return (
    <section id="products" ref={sectionRef} className="py-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label justify-center">What We Offer</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text-dark">
            8 Premium <span className="text-gradient">Coconut Products</span>
          </h2>
          <p className="mt-4 text-muted max-w-[540px] mx-auto leading-[1.75] text-[0.95rem]">
            From grove to global market — every product reflects our commitment to purity, quality, and natural goodness.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 rounded-full text-[0.8rem] font-semibold transition-all duration-200 ${
                activeFilter === f.value
                  ? 'bg-forest text-white shadow-sm'
                  : 'bg-card-white border border-beige text-muted hover:border-forest/30 hover:text-forest'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <ProductCard product={p} onOpen={() => setOpenProduct(p)} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="/#products"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-bold text-sm text-white rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-green"
            style={{ background: 'linear-gradient(135deg, #0d3a1c 0%, #125426 100%)' }}
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <ProductModal product={openProduct} open={!!openProduct} onClose={() => setOpenProduct(null)} />
    </section>
  )
}
