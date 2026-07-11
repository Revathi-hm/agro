'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Leaf, ShieldCheck, FlaskConical, Package, Handshake, Headphones, Award, Globe } from 'lucide-react'

const features = [
  { icon: Leaf,        title: '100% Natural',           desc: 'No additives, pure & safe.' },
  { icon: ShieldCheck, title: 'FSSAI Certified',        desc: 'Certified for safety & quality.' },
  { icon: FlaskConical,title: 'Lab Tested',             desc: 'Every batch rigorously tested.' },
  { icon: Package,     title: 'Export Ready Packaging', desc: 'Food-grade, global markets.' },
  { icon: Handshake,   title: 'OEM & Private Label',    desc: 'Custom solutions for your brand.' },
  { icon: Headphones,  title: 'Dedicated Support',      desc: 'From enquiry to final delivery.' },
]

const promises = [
  { icon: Award,  title: 'Our Promise',         desc: 'Pure ingredients. Honest processes. Exceptional quality.' },
  { icon: Leaf,   title: 'Crafted by Nature',   desc: 'From the finest coconuts to your brand, goodness in every step.' },
  { icon: Globe,  title: 'Certified & Compliant', desc: 'FSSAI, ISO & global standards you can rely on.' },
]

export default function WhyUs() {

  return (
    <section id="why-us" className="pt-24 bg-gradient-to-b from-ivory via-[#F0EBE0] to-[#EAE0D5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Heading + buttons + cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label"><Leaf className="w-3 h-3 inline mr-1" />Why Choose Us</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text-dark leading-[1.15] mb-4">
                Quality You Can<br />
                <em className="not-italic font-playfair" style={{ color: '#125426', fontStyle: 'italic' }}>Taste &amp; Trust</em>
              </h2>
              <hr className="w-10 border-t-2 border-forest my-5" />
              <p className="text-muted leading-relaxed max-w-md mb-8">
                With over 15 years of expertise in coconut processing, Kalpa Ruchi has built a reputation for consistency, transparency, and exceptional product quality.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a href="/#products" className="px-7 py-3.5 bg-gradient-to-r from-forest to-olive text-white font-bold rounded-full hover:shadow-glow-green transition-all duration-300 hover:-translate-y-0.5 text-sm">
                  Explore Our Products
                </a>
                <a href="/#about" className="px-7 py-3.5 border-2 border-forest/25 text-forest font-bold rounded-full hover:bg-forest/5 transition-all duration-300 text-sm">
                  Our Story
                </a>
              </div>

              {/* 6 feature cards 3×2 */}
              <div className="grid grid-cols-3 gap-2.5">
                {features.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    whileHover={{ y: -3, boxShadow: '0 8px 32px rgba(47,41,19,0.10)' }}
                    className="bg-card-white/88 backdrop-blur-sm border border-white/70 rounded-xl p-3.5 cursor-default"
                  >
                    <Icon className="w-5 h-5 text-olive mb-2" strokeWidth={1.8} />
                    <strong className="block text-[0.72rem] font-bold text-text-dark mb-0.5 leading-snug">{title}</strong>
                    <p className="text-[0.68rem] text-muted leading-snug">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Product image + floating badges + stats bar */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative min-h-[480px] flex items-center justify-center"
            >
              {/* Floating badges */}
              <div className="absolute top-[2%] left-1/2 -translate-x-1/2 bg-card-white rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-card border border-beige/60 min-w-[155px] z-10">
                <div className="w-8 h-8 rounded-lg bg-olive/10 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-4 h-4 text-olive" />
                </div>
                <div><strong className="block text-[0.72rem] font-bold text-text-dark">100% Natural</strong><span className="text-[0.62rem] text-muted">Pure. Safe. Wholesome.</span></div>
              </div>
              <div className="absolute left-0 top-[38%] bg-card-white rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-card border border-beige/60 min-w-[155px] z-10">
                <div className="w-8 h-8 rounded-lg bg-olive/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-olive" />
                </div>
                <div><strong className="block text-[0.72rem] font-bold text-text-dark">FSSAI Certified</strong><span className="text-[0.62rem] text-muted">Safety & quality.</span></div>
              </div>
              <div className="absolute right-0 top-[18%] bg-card-white rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-card border border-beige/60 min-w-[155px] z-10">
                <div className="w-8 h-8 rounded-lg bg-olive/10 flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-4 h-4 text-olive" />
                </div>
                <div><strong className="block text-[0.72rem] font-bold text-text-dark">Lab Tested</strong><span className="text-[0.62rem] text-muted">Purity in every batch.</span></div>
              </div>
              <div className="absolute right-0 bottom-[22%] bg-card-white rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-card border border-beige/60 min-w-[155px] z-10">
                <div className="w-8 h-8 rounded-lg bg-olive/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4 text-olive" />
                </div>
                <div><strong className="block text-[0.72rem] font-bold text-text-dark">Export Grade</strong><span className="text-[0.62rem] text-muted">Global standards.</span></div>
              </div>

              {/* Central product image */}
              <div className="relative z-0 w-[75%] max-w-[380px]">
                <Image
                  src="/images/kalparuchi-pouch.png"
                  alt="Kalpa Ruchi premium products"
                  width={380}
                  height={420}
                  className="w-full object-contain mix-blend-multiply"
                />
              </div>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex bg-card-white/85 backdrop-blur-sm border border-white/70 rounded-2xl overflow-hidden mt-3 mb-6"
            >
              <div className="flex-1 text-center py-4 border-r border-beige/55">
                <span className="block font-playfair text-2xl font-bold text-forest">15+</span>
                <span className="text-[0.65rem] text-muted font-medium">Years of Experience</span>
              </div>
              <div className="flex-1 text-center py-4">
                <span className="block font-playfair text-xl font-bold text-forest">Premium</span>
                <span className="text-[0.65rem] text-muted font-medium">Quality Assured</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
