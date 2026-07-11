'use client'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'James Whitfield',
    role: 'Procurement Manager',
    company: 'NatureFoods UK Ltd.',
    country: 'United Kingdom',
    flag: '🇬🇧',
    rating: 5,
    text: 'We have been sourcing desiccated coconut powder from Dhanalakshmi for over three years. Consistent quality, reliable shipping, and the team is always responsive. Their ISO 22000 documentation is impeccable — exactly what our retail clients require.',
  },
  {
    name: 'Fatima Al-Rashidi',
    role: 'Category Buyer',
    company: 'Gulf Organics FZCO',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    rating: 5,
    text: 'The virgin coconut oil from Kalpa Ruchi has outstanding clarity and flavour profile. We have introduced it into our premium health food range and it has been very well received. The Halal certification and timely CoA documentation made onboarding seamless.',
  },
  {
    name: 'Lena Brandt',
    role: 'Head of Sourcing',
    company: 'BioGrains GmbH',
    country: 'Germany',
    flag: '🇩🇪',
    rating: 5,
    text: 'Finding a certified organic desiccated coconut supplier with consistent moisture levels below 3% is not easy. Dhanalakshmi delivers every time. Their NPOP/NOP certificates are always current, and the SGS test reports match exactly what we see in our own lab.',
  },
  {
    name: 'Michael Osei',
    role: 'Import Director',
    company: 'Accra Premium Foods',
    country: 'Ghana',
    flag: '🇬🇭',
    rating: 5,
    text: 'We started with a trial container of coconut milk powder and have since scaled to regular monthly shipments. The product quality is excellent and the pricing is very competitive. The team at Dhanalakshmi handles all export documentation without errors.',
  },
  {
    name: 'Sophie Nguyen',
    role: 'Operations Manager',
    company: 'Pure Earth Ingredients',
    country: 'Australia',
    flag: '🇦🇺',
    rating: 5,
    text: "Dhanalakshmi's D-Fat Coconut Powder is the best we have found in the market. Very low fat content, superb white colour, and no off-notes. We use it exclusively in our protein powder blends. Customer service is professional and they always meet deadlines.",
  },
  {
    name: 'Arjun Mehta',
    role: 'Supply Chain Lead',
    company: 'Swadeshi Naturals',
    country: 'India',
    flag: '🇮🇳',
    rating: 5,
    text: 'Being a domestic buyer, we needed a supplier with both FSSAI compliance and bulk supply capability. Dhanalakshmi has been supplying our Bangalore facility for two years. Consistent quality, fair pricing, and the team is easy to work with.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5" style={{ fill: '#F59E0B', color: '#F59E0B' }} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label justify-center">Client Voices</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Trusted by Buyers <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="text-muted text-[0.95rem] max-w-xl mx-auto leading-relaxed">
            From UK retail buyers to Middle East distributors — our clients trust Kalpa Ruchi
            for consistent quality and reliable supply.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="bg-card-white rounded-3xl p-7 border border-beige/60 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Quote icon + stars */}
              <div className="flex items-start justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(18,84,38,0.07)' }}
                >
                  <Quote className="w-5 h-5" style={{ color: '#125426' }} />
                </div>
                <Stars count={t.rating} />
              </div>

              {/* Text */}
              <p className="text-[0.88rem] text-muted leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Person */}
              <div className="pt-4 border-t border-beige/60">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-text-dark">{t.name}</p>
                    <p className="text-[0.75rem] text-muted mt-0.5">{t.role}</p>
                    <p className="text-[0.75rem] font-semibold mt-0.5" style={{ color: '#5D6B36' }}>
                      {t.company}
                    </p>
                  </div>
                  <span className="text-2xl" title={t.country}>{t.flag}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 py-6 px-8 rounded-3xl border border-beige/60 bg-card-white flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center"
        >
          {[
            { value: '25+', label: 'Countries Served' },
            { value: '15+', label: 'Years of Export Experience' },
            { value: '500+', label: 'Tonnes Exported Annually' },
            { value: '98%', label: 'On-Time Delivery Rate' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-playfair text-3xl font-bold text-text-dark">{value}</p>
              <p className="text-[0.75rem] text-muted font-medium mt-0.5 tracking-wide">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
