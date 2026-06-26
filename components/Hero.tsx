'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Leaf, CheckCircle, HeartPulse, Award, Sprout } from 'lucide-react'

const features = [
  { icon: Leaf,        label: '100% Natural',        sub: 'No additives, pure & safe' },
  { icon: CheckCircle, label: 'Finest Coconuts',      sub: 'Carefully selected'        },
  { icon: HeartPulse,  label: 'Rich in Nutrition',    sub: 'Healthy & wholesome'       },
  { icon: Award,       label: 'Premium Quality',      sub: 'Hygienically processed'    },
  { icon: Sprout,      label: 'Sustainably Sourced',  sub: 'Good for you, good for nature' },
]

export default function Hero() {
  const badgeRef    = useRef<HTMLParagraphElement>(null)
  const titleRef    = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const actionsRef  = useRef<HTMLDivElement>(null)
  const visualRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', immediateRender: false } })
      tl.fromTo(badgeRef.current,   { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        .fromTo(titleRef.current,    { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0 }, '-=0.4')
        .fromTo(subtitleRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
        .fromTo(actionsRef.current,  { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
        .fromTo(visualRef.current,   { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 1.1, ease: 'power3.out' }, '-=1.2')
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(255,255,255,0.9) 0%, rgba(246,241,234,1) 35%),
          linear-gradient(135deg, #FAF7F2 0%, #F6F1EA 45%, #EFE7DD 100%)
        `,
      }}
    >
      {/* Top-right glow */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          width: 700, height: 700,
          top: -250, right: -150,
          background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Main hero content: text left + image right */}
      <div className="relative z-10 flex-1 flex items-center justify-between min-h-[calc(100vh-88px)] pt-[90px]">

        {/* Left: Text */}
        <div className="flex-[0_0_45%] max-w-[45%] py-8 px-8 lg:pl-[8%] lg:pr-8 self-center">

          <p
            ref={badgeRef}
            className="inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.18em] uppercase mb-5"
            style={{ color: '#6A8A42' }}
          >
            <Leaf className="w-3.5 h-3.5" />
            Natural Goodness. Pure You.
          </p>

          <h1
            ref={titleRef}
            className="font-cormorant font-medium leading-[0.9] mb-6"
            style={{ fontSize: 'clamp(52px, 7vw, 96px)', color: '#1E3A1F', letterSpacing: '-2px' }}
          >
            Dhanalakshmi<br />
            <span style={{ color: '#5D6B36' }}>Agro Products</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-muted leading-[1.85] max-w-[400px] mb-10 text-[0.95rem] font-light"
          >
            Premium quality coconut-derived products — desiccated, cold-pressed,
            and refined from the finest coconut groves. Pure, natural,
            and wholesome for a healthy lifestyle.
          </p>

          <div ref={actionsRef} className="flex flex-wrap gap-3">
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-9 py-3.5 font-semibold text-sm rounded-full text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #125426 0%, #5D6B36 100%)',
                boxShadow: '0 4px 18px rgba(18,84,38,0.25)',
              }}
            >
              Explore Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/about"
              className="px-9 py-3.5 font-medium text-sm rounded-full transition-all duration-300 hover:bg-forest/5"
              style={{
                color: '#125426',
                border: '1.5px solid rgba(18,84,38,0.3)',
              }}
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Right: Product image */}
        <div ref={visualRef} className="flex-[0_0_55%] max-w-[55%] flex items-center justify-end self-center">
          <Image
            src="/images/hero-product-transparent.png"
            alt="Kalpa Ruchi premium coconut products"
            width={720}
            height={720}
            className="w-full object-contain"
            style={{ maxHeight: '85vh' }}
            priority
          />
        </div>
      </div>

      {/* Features strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10"
        style={{
          background: 'rgba(253,253,253,0.85)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(210,208,201,0.6)',
        }}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-stretch">
          {features.map(({ icon: Icon, label, sub }, i) => (
            <div
              key={label}
              className="flex items-center gap-3.5 flex-1 py-4 px-5"
              style={i < features.length - 1 ? { borderRight: '1px solid rgba(210,208,201,0.55)' } : {}}
            >
              <Icon className="w-5 h-5 flex-shrink-0" style={{ color: '#5D6B36' }} strokeWidth={1.8} />
              <div>
                <strong className="block text-[0.8rem] font-bold text-text-dark tracking-tight mb-0.5">{label}</strong>
                <span className="text-[0.72rem] text-muted font-light">{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
