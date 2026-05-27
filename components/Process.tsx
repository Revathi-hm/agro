'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sprout, Droplets, Thermometer, ShieldCheck, Package } from 'lucide-react'

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
    <section
      id="process"
      className="py-24 relative overflow-hidden"
      style={{ background: '#2F2913' }}
    >
      {/* Subtle radial glow */}
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
      </div>
    </section>
  )
}
