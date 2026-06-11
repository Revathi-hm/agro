'use client'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface PageHeroProps {
  label: string
  title: string
  description: string
  breadcrumb: string
}

export default function PageHero({ label, title, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0EBE3 0%, #F3EEE9 100%)' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(93,107,54,0.07),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex items-center gap-2 text-xs text-muted mb-6">
          <Link href="/" className="hover:text-forest transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="font-semibold" style={{ color: '#125426' }}>{breadcrumb}</span>
        </div>
        <p className="section-label">{label}</p>
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-text-dark leading-[1.1] mb-4 max-w-2xl">{title}</h1>
        <p className="text-muted text-[0.95rem] leading-relaxed max-w-xl">{description}</p>
      </div>
    </section>
  )
}
