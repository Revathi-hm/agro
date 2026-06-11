'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Sprout, Droplets, Thermometer, ShieldCheck, Package, ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Sprout,
    title: 'Sourcing',
    desc: 'Hand-picked mature coconuts from certified, sustainable farms across South India.',
  },
  {
    num: '02',
    icon: Droplets,
    title: 'Extraction',
    desc: 'Kernels freshly grated or pressed using cold-process technology to preserve nutrients.',
  },
  {
    num: '03',
    icon: Thermometer,
    title: 'Processing',
    desc: 'Controlled drying, filtering, and refining under hygienic, food-safe conditions.',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Quality Control',
    desc: 'Rigorous lab testing for purity, moisture, microbial count, and food safety standards.',
  },
  {
    num: '05',
    icon: Package,
    title: 'Packaging',
    desc: 'Sealed in food-grade, tamper-proof packaging with full traceability and labelling.',
  },
]

const productShowcase = [
  { src: '/images/desiccated-coconut-powder.png', name: 'Desiccated Coconut Powder', slug: 'desiccated-coconut-powder' },
  { src: '/images/virgin-coconut-oil.jpg',        name: 'Virgin Coconut Oil',         slug: 'virgin-coconut-oil',        fit: 'cover' },
  { src: '/images/coconut-milk.png',              name: 'Coconut Milk',               slug: 'coconut-milk' },
  { src: '/images/coconut-milk-powder.png',       name: 'Coconut Milk Powder',        slug: 'coconut-milk-powder' },
  { src: '/images/coconut-flakes.png',            name: 'Coconut Flakes',             slug: 'desiccated-coconut-flakes' },
  { src: '/images/coconut-shells.png',            name: 'Coconut Shell',              slug: 'coconut-shell' },
]

function StepItem({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon   = step.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative mb-5">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center border border-white/15"
          style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
        >
          <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
        </div>
        <span
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[0.6rem] font-bold"
          style={{ background: '#5D6B36', color: '#fff' }}
        >
          {index + 1}
        </span>
      </div>
      <h5 className="font-playfair text-xl font-bold text-white mb-2">{step.title}</h5>
      <p className="text-[0.85rem] leading-relaxed max-w-[180px]" style={{ color: 'rgba(243,238,233,0.65)' }}>
        {step.desc}
      </p>
    </motion.div>
  )
}

export default function Process() {
  return (
    <>
      {/* ── Dark steps section ── */}
      <section
        id="process"
        className="py-24 relative overflow-hidden"
        style={{ background: '#2F2913' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(93,107,54,0.18),transparent_65%)]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="section-label justify-center" style={{ color: '#858367' }}>How We Work</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-ivory leading-[1.15]">
              From <span style={{ color: '#858367', fontStyle: 'italic' }}>Grove to Global</span> Markets
            </h2>
            <p className="mt-4 text-[0.95rem]" style={{ color: 'rgba(255,255,255,0.5)' }}>
              A five-step journey that guarantees purity in every packet.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <StepItem key={step.num} step={step} index={i} />
            ))}
          </div>

          {/* Divider */}
          <div className="mt-16 border-t border-white/10" />

          {/* Facility image strip */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden" style={{ height: 280 }}>
                <Image
                  src="/images/hero.jpg"
                  alt="Dhanalakshmi Agro Products facility"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[0.65rem] font-bold tracking-widest uppercase text-white/60">Production</span>
                  <p className="text-white font-playfair text-lg font-bold leading-tight">Our Modern Facility</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="relative rounded-2xl overflow-hidden" style={{ height: 130 }}>
                <Image
                  src="/images/kalparuchi-pouch.png"
                  alt="Kalpa Ruchi premium packaging"
                  fill
                  className="object-contain p-4 bg-white/5"
                  sizes="50vw"
                />
                <div className="absolute inset-0 border border-white/10 rounded-2xl" />
              </div>
              <div className="relative rounded-2xl overflow-hidden" style={{ height: 130 }}>
                <Image
                  src="/images/pouch.png"
                  alt="Premium retail packaging"
                  fill
                  className="object-contain p-4 bg-white/5"
                  sizes="50vw"
                />
                <div className="absolute inset-0 border border-white/10 rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Product output showcase ── */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="section-label justify-center">End Result</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-text-dark">
              What Our Process <span className="text-gradient">Produces</span>
            </h2>
            <p className="mt-3 text-muted text-sm max-w-md mx-auto leading-relaxed">
              Every step in our process is designed to deliver one thing — premium, pure coconut products ready for global markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {productShowcase.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <Link
                  href={`/products/${item.slug}`}
                  className="group block bg-card-white rounded-2xl overflow-hidden border border-beige/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-square bg-ivory">
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      className={`transition-transform duration-500 group-hover:scale-105 ${
                        (item as any).fit === 'cover' ? 'object-cover' : 'object-contain p-5'
                      }`}
                      sizes="(max-width: 640px) 50vw, 16vw"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-[0.75rem] font-semibold text-text-dark leading-snug">{item.name}</p>
                    <span className="inline-flex items-center gap-1 text-[0.7rem] text-forest font-bold mt-1 group-hover:gap-1.5 transition-all">
                      View <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
