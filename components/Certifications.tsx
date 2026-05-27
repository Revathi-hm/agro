'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, Award, Leaf, Star } from 'lucide-react'

const certs = [
  { icon: ShieldCheck, title: 'ISO 22000',        sub: 'Food Safety Management',     iconColor: 'text-blue-600',   bg: 'bg-blue-50',    border: 'border-blue-100' },
  { icon: Award,       title: 'FSSAI',             sub: 'India Food Safety',          iconColor: 'text-orange-600', bg: 'bg-orange-50',  border: 'border-orange-100' },
  { icon: Leaf,        title: 'Organic Certified', sub: 'NPOP / NOP Compliant',       iconColor: 'text-forest',     bg: 'bg-forest/5',   border: 'border-forest/15' },
  { icon: Star,        title: 'Halal Certified',   sub: 'Global Halal Accreditation', iconColor: 'text-emerald-600',bg: 'bg-emerald-50', border: 'border-emerald-100' },
]

export default function Certifications() {
  return (
    <section className="py-20 bg-card-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label justify-center">Accreditations</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text-dark">
            Certified for <span className="text-gradient">Global Markets</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {certs.map(({ icon: Icon, title, sub, iconColor, bg, border }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`${bg} border-2 ${border} rounded-3xl p-8 text-center hover:shadow-card-hover transition-all duration-300 cursor-default`}
            >
              <div className={`w-14 h-14 rounded-2xl ${bg} border ${border} flex items-center justify-center mx-auto mb-4`}>
                <Icon className={`w-7 h-7 ${iconColor}`} strokeWidth={1.5} />
              </div>
              <h4 className={`font-playfair text-lg font-bold ${iconColor} mb-1`}>{title}</h4>
              <p className="text-xs text-muted font-medium leading-relaxed">{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
