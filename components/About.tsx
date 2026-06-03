'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Leaf, Award, Globe, Recycle } from 'lucide-react'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

const highlights = [
  { icon: Leaf,    title: '100% Natural',   desc: 'No preservatives or additives' },
  { icon: Award,   title: 'ISO Certified',  desc: 'International quality standards' },
  { icon: Globe,   title: 'Global Export',  desc: 'Supplying to 30+ countries' },
  { icon: Recycle, title: 'Sustainable',    desc: 'Zero-waste production process' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef     = useRef<HTMLDivElement>(null)
  const textRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        x: -60, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: imgRef.current, start: 'top 80%' },
      })
      gsap.from(textRef.current?.children ?? [], {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: textRef.current, start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-28 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Images */}
          <div ref={imgRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover" style={{ height: '420px' }}>
              <Image
                src="/images/hero.jpg"
                alt="Kalpa Ruchi production facility"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Accent image */}
            <div className="absolute -bottom-8 -right-8 w-[55%] rounded-xl overflow-hidden border-4 border-ivory shadow-card hidden lg:block" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/images/pouch.png"
                alt="Premium coconut products"
                fill
                className="object-cover"
                sizes="30vw"
              />
            </div>
            {/* Est. badge */}
            <div className="absolute -top-5 -left-5 bg-gradient-to-br from-forest-dark to-forest rounded-2xl p-4 text-white shadow-glow-green">
              <span className="block font-playfair text-2xl font-bold leading-none">2007</span>
              <span className="block text-[10px] tracking-widest uppercase opacity-70 mt-0.5">Est.</span>
            </div>
          </div>

          {/* Right: Text */}
          <div ref={textRef}>
            <p className="section-label">Our Story</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text-dark leading-[1.15] mb-6">
              Rooted in Tradition,<br />
              <span className="text-gradient">Driven by Purity</span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Founded in 2007, Natural Goodness has grown from a small family operation into a trusted name in premium coconut processing. Under the brand <strong className="text-text-dark">Kalpa Ruchi</strong>, we bring the wholesome goodness of the coconut palm to kitchens and industries worldwide.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Every product — from silky virgin coconut oil to fine desiccated powder — is the result of careful sourcing, traditional expertise, and rigorous modern quality controls.
            </p>

            <div className="space-y-3 mb-8">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 py-3 border-b border-beige/70 last:border-0">
                  <div className="w-11 h-11 rounded-xl bg-olive/10 border border-olive/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-olive" strokeWidth={1.8} />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-text-dark mb-0.5">{title}</strong>
                    <span className="text-sm text-muted">{desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              href="/#about"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-forest-dark to-forest text-white font-bold rounded-full shadow-glow-green hover:shadow-none transition-all duration-300"
            >
              Our Full Story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
