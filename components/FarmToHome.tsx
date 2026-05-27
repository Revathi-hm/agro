'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Home, Leaf, Globe, Award, Users, Truck } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

function CountUp({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref    = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(end)
    }
    requestAnimationFrame(tick)
  }, [inView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { icon: Award,  end: 15, suffix: '+', label: 'Years of Excellence'  },
  { icon: Globe,  end: 30, suffix: '+', label: 'Countries Served'     },
  { icon: Users,  end: 500, suffix: '+', label: 'Satisfied Clients'   },
  { icon: Truck,  end: 8, suffix: '', label: 'Premium Products'      },
]

const milestones = [
  { year: '2007', event: 'Founded in Tiptur, Karnataka as Natural Goodness with a single processing unit.' },
  { year: '2012', event: 'Received ISO 22000 certification. Began exporting to the Middle East.' },
  { year: '2016', event: 'Expanded product line to 8 categories. Entered European markets.' },
  { year: '2020', event: 'Achieved FSSAI certification and sustainable farming partnerships across 50+ local farms.' },
  { year: '2024', event: 'Achieved record exports under the Kalpa Ruchi brand. Global distribution network established.' },
]

export default function FarmToHome() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="story" ref={sectionRef} className="relative overflow-hidden">

      {/* ── Top Hero Band ── */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Parallax background */}
        <div
          ref={bgRef}
          className="absolute inset-0 scale-125"
          style={{
            background: 'linear-gradient(135deg, #0F2E1A 0%, #1A3D2B 30%, #2D6A4F 60%, #1C5236 100%)',
          }}
        />

        {/* SVG pattern layer */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="coconut-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <circle cx="60" cy="30" r="15" fill="none" stroke="white" strokeWidth="1"/>
                <line x1="60" y1="45" x2="60" y2="90" stroke="white" strokeWidth="1"/>
                <line x1="60" y1="60" x2="30" y2="45" stroke="white" strokeWidth="0.8"/>
                <line x1="60" y1="60" x2="90" y2="45" stroke="white" strokeWidth="0.8"/>
                <line x1="60" y1="70" x2="25" y2="55" stroke="white" strokeWidth="0.6"/>
                <line x1="60" y1="70" x2="95" y2="55" stroke="white" strokeWidth="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#coconut-pattern)"/>
          </svg>
        </div>

        {/* Radial overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,28,18,0.7)_100%)]" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="w-5 h-5 text-mint" />
            <span className="text-mint font-semibold tracking-widest text-sm uppercase">Our Journey</span>
            <Home className="w-5 h-5 text-mint" />
          </div>
          <h2 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            From Farms<br />
            <span className="text-gradient">to Your Home</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Every product we make carries the warmth of Indian farmlands and the care of skilled
            artisans — delivered fresh to tables and kitchens across the world.
          </p>
        </motion.div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80 C360 20 720 60 1080 30 L1440 0 L1440 80 Z" fill="#F5F0E8"/>
          </svg>
        </div>
      </div>

      {/* ── Stats Band ── */}
      <div className="bg-[#F5F0E8] py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, end, suffix, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-forest/10 mb-4">
                  <Icon className="w-6 h-6 text-forest" />
                </div>
                <div className="font-playfair text-5xl font-bold text-gradient mb-1">
                  <CountUp end={end} suffix={suffix} />
                </div>
                <p className="text-sm font-semibold text-[#5a6a5e]">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Story + Timeline ── */}
      <div className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-start">

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="tag bg-forest/10 text-forest border border-forest/20 mb-6">Our Heritage</span>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-forest mb-6 leading-tight">
              Rooted in Tradition,<br />Growing with Innovation
            </h3>
            <p className="text-[#4a5568] text-base leading-relaxed mb-5">
              Founded in 2008 in the coconut heartland of Pollachi, Tamil Nadu, Dhanalakshmi Agro Products
              began with a simple vision — to bring the purest coconut products from Indian farms to the world.
            </p>
            <p className="text-[#4a5568] text-base leading-relaxed mb-5">
              We work directly with over 50 local farming families, ensuring fair trade practices and sustainable
              cultivation methods that have been refined over generations. Our cold-pressing and spray-drying
              facilities are ISO-22000 certified, meeting the most stringent global food safety standards.
            </p>
            <p className="text-[#4a5568] text-base leading-relaxed">
              Today, our products reach homes, food manufacturers, and retailers across Asia, Europe, the Middle
              East, and North America — each batch carrying the natural goodness of Kerala's coconut groves.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-forest/5 border border-forest/10">
              <p className="text-forest font-playfair italic text-lg leading-relaxed">
                "Quality is not just a standard for us — it's our promise to every customer, every harvest, every day."
              </p>
              <p className="text-sm font-bold text-gold mt-3">— Founder, Dhanalakshmi Agro Products</p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="tag bg-gold/15 text-gold border border-gold/30 mb-8">Milestones</span>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-sage to-mint" />

              <div className="flex flex-col gap-8">
                {milestones.map(({ year, event }, i) => (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex gap-6 items-start pl-2"
                  >
                    {/* Dot */}
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-sm z-10 relative">
                        <div className="w-3 h-3 rounded-full bg-gold" />
                      </div>
                    </div>
                    <div className="pt-1.5">
                      <span className="font-playfair text-gold font-bold text-lg">{year}</span>
                      <p className="text-sm text-[#4a5568] mt-1 leading-relaxed">{event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
