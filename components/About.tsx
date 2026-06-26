'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Leaf, Award, Globe, Recycle, Eye, Target, MapPin, Phone, Mail } from 'lucide-react'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

const highlights = [
  { icon: Leaf,    title: '100% Natural',   desc: 'No preservatives or additives' },
  { icon: Award,   title: 'ISO Certified',  desc: 'International quality standards' },
  { icon: Globe,   title: 'Global Export',  desc: 'Supplying to 30+ countries' },
  { icon: Recycle, title: 'Sustainable',    desc: 'Zero-waste production process' },
]

const leadership = [
  {
    name: 'Mr. Mohan Raju',
    role: 'Founder & Owner',
    initials: 'MR',
    bio: 'Founded the company in 2007, Mr. Mohan Raju\'s passion for coconut products and dedication to sustainability has been the driving force behind Dhanalakshmi Agro Products\' success and growth.',
    color: '#125426',
  },
  {
    name: 'Karthik',
    role: 'Chief Executive Officer',
    initials: 'K',
    bio: 'Under Karthik\'s leadership, the company has continued to expand and innovate while maintaining its commitment to sustainability and quality, keeping the company at the forefront of the natural coconut products market.',
    color: '#5D6B36',
  },
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
    <>
      {/* ── Our Story ── */}
      <section id="about" ref={sectionRef} className="py-28 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Images */}
            <div ref={imgRef} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover" style={{ height: '420px' }}>
                <Image
                  src="/images/facility-main.jpg"
                  alt="Kalpa Ruchi production facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Accent image */}
              <div className="absolute -bottom-8 -right-8 w-[52%] rounded-xl overflow-hidden border-4 border-ivory shadow-card hidden lg:block bg-card-white" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/kalparuchi-pouch.png"
                  alt="Kalpa Ruchi premium products"
                  fill
                  className="object-contain p-4"
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
                <strong className="text-text-dark">Dhanalakshmi Agro Products</strong> was founded in 2007 by <strong className="text-text-dark">Mr. Mohan Raju</strong>, whose passion for coconut products and dedication to sustainability has been the driving force behind the company's success and growth.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Under the leadership of <strong className="text-text-dark">CEO Karthik</strong>, the company has continued to expand and innovate — maintaining its commitment to sustainability and quality while keeping the brand <strong className="text-text-dark">Kalpa Ruchi</strong> at the forefront of the natural coconut products market.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Together, Mr. Mohan Raju and CEO Karthik have built a company dedicated to providing high-quality, sustainably sourced coconut products while promoting the health benefits of the coconut palm and supporting the livelihoods of local farming communities.
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
                href="/contact"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-forest-dark to-forest text-white font-bold rounded-full shadow-glow-green hover:shadow-none transition-all duration-300"
              >
                Get In Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-20 bg-card-white border-t border-beige/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="section-label justify-center">The People Behind It</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-text-dark">
              Our Leadership
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {leadership.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-ivory rounded-3xl p-8 border border-beige/60"
              >
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-playfair text-2xl font-bold mb-5 shadow-sm"
                  style={{ background: `linear-gradient(135deg, ${person.color} 0%, ${person.color}cc 100%)` }}
                >
                  {person.initials}
                </div>
                <h3 className="font-playfair text-xl font-bold text-text-dark mb-1">{person.name}</h3>
                <span
                  className="inline-block text-[0.7rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                  style={{ background: `${person.color}15`, color: person.color }}
                >
                  {person.role}
                </span>
                <p className="text-sm text-muted leading-relaxed">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #1a3d22 0%, #2F2913 60%, #1e2b14 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(93,107,54,0.2),transparent_65%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="section-label justify-center" style={{ color: '#858367' }}>Where We Stand</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ivory">
              Our Vision & Mission
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl p-8 border border-white/10"
              style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}
            >
              <div className="w-12 h-12 rounded-xl border border-white/15 flex items-center justify-center mb-5" style={{ background: 'rgba(93,107,54,0.25)' }}>
                <Eye className="w-6 h-6 text-white" strokeWidth={1.6} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-4">Vision</h3>
              <p className="text-[0.92rem] leading-[1.8]" style={{ color: 'rgba(243,238,233,0.72)' }}>
                To become a leading manufacturer of high-quality, natural desiccated coconut powder and flakes that are sustainably sourced and processed — while promoting the health benefits of coconut products and supporting the livelihood of local communities.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-3xl p-8 border border-white/10"
              style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}
            >
              <div className="w-12 h-12 rounded-xl border border-white/15 flex items-center justify-center mb-5" style={{ background: 'rgba(18,84,38,0.3)' }}>
                <Target className="w-6 h-6 text-white" strokeWidth={1.6} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-4">Mission</h3>
              <p className="text-[0.92rem] leading-[1.8]" style={{ color: 'rgba(243,238,233,0.72)' }}>
                To produce the highest quality natural desiccated coconut powder and flakes using only sustainably sourced coconuts from local farmers — maintaining nutritional value through modern technology and best practices, while operating in an environmentally responsible manner and consistently exceeding customer expectations.
              </p>
            </motion.div>
          </div>

          {/* Address strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 rounded-2xl border border-white/10 px-8 py-6 flex flex-wrap gap-6 items-center justify-between"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: '#858367' }} strokeWidth={1.6} />
              <span className="text-sm" style={{ color: 'rgba(243,238,233,0.65)' }}>SH47, Shankar Nagara, Tiptur, Karnataka 572226</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#858367' }} strokeWidth={1.6} />
              <a href="tel:+919844151267" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(243,238,233,0.65)' }}>(+91) 9844151267</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#858367' }} strokeWidth={1.6} />
              <a href="mailto:info@dhanalakshmiagroproducts.com" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(243,238,233,0.65)' }}>info@dhanalakshmiagroproducts.com</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
