'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

interface PageHeroProps {
  label: string
  title: string
  description: string
  breadcrumb: string
  image?: string          // optional right-side image
  imageFit?: 'cover' | 'contain'
}

export default function PageHero({ label, title, description, breadcrumb, image, imageFit = 'cover' }: PageHeroProps) {
  return (
    <section
      className="pt-28 pb-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #EAE4DA 0%, #F3EEE9 50%, #EDF0E6 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(93,107,54,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(18,84,38,0.06),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className={`grid gap-10 items-center ${image ? 'lg:grid-cols-2' : ''}`}>

          {/* Text side */}
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-muted mb-6">
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="font-semibold" style={{ color: '#125426' }}>{breadcrumb}</span>
            </div>
            <p className="section-label">{label}</p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-[1.08] mb-5 max-w-2xl">
              {title}
            </h1>
            <p className="text-muted text-[0.97rem] leading-relaxed max-w-xl">{description}</p>
          </div>

          {/* Image side (optional) */}
          {image && (
            <div className="hidden lg:flex items-center justify-center">
              <div
                className={`relative w-full rounded-3xl overflow-hidden shadow-card-hover border border-white/60 ${imageFit === 'contain' ? 'bg-white/60 backdrop-blur-sm' : ''}`}
                style={{ height: 340 }}
              >
                <Image
                  src={image}
                  alt={breadcrumb}
                  fill
                  className={imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'}
                  sizes="50vw"
                  priority
                />
                {/* Soft vignette for photos */}
                {imageFit === 'cover' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 rounded-3xl" />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
