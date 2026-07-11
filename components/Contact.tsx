'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'

const productOptions = [
  'Desiccated Coconut Powder',
  'Desiccated Coconut Flakes',
  'Virgin Coconut Oil',
  'Coconut Milk',
  'Coconut Shell',
  'Testa',
  'D-Fat Coconut Powder',
  'Coconut Milk Powder',
  'Multiple Products',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '', product: '', message: '', website: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.website) return // honeypot
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Enquiry from ${form.name} — ${form.product || 'General'}`,
          from_name: 'Dhanalakshmi Agro Products Website',
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          product: form.product,
          message: form.message,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-ivory">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label" style={{ color: '#5D6B36' }}>Get In Touch</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text-dark leading-[1.15] mb-4">
              Let's Build Something <span className="text-gradient">Pure Together</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8 text-[0.95rem]">
              Whether you're a food manufacturer, retailer, or distributor — we'd love to discuss how Kalpa Ruchi products can elevate your offering. Our team responds within 24 hours.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-forest/10 border border-forest/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-forest" strokeWidth={1.8} />
                </div>
                <div>
                  <strong className="block text-sm font-bold text-text-dark mb-0.5">Address</strong>
                  <span className="text-sm text-muted">SH47, Shankar Nagara,<br />Tiptur, Karnataka 572226</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-forest/10 border border-forest/15 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-forest" strokeWidth={1.8} />
                </div>
                <div>
                  <strong className="block text-sm font-bold text-text-dark mb-0.5">Email</strong>
                  <a href="mailto:info@dhanalakshmiagroprodcuts.com" className="text-sm text-muted hover:text-forest transition-colors">
                    info@dhanalakshmiagroprodcuts.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-forest/10 border border-forest/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-forest" strokeWidth={1.8} />
                </div>
                <div>
                  <strong className="block text-sm font-bold text-text-dark mb-0.5">Phone</strong>
                  <a href="tel:+919844151267" className="text-sm text-muted hover:text-forest transition-colors">
                    (+91) 9844151267
                  </a>
                </div>
              </div>
            </div>

            {/* Social buttons */}
            <div className="flex gap-3">
              {[
                { label: 'LinkedIn',  href: '#', svg: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" /> },
                { label: 'WhatsApp', href: '#', svg: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.35C8.46 21.51 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" /> },
                { label: 'Instagram',href: '#', svg: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/></> },
                { label: 'Facebook', href: '#', svg: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
              ].map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-beige flex items-center justify-center text-muted hover:text-forest hover:border-forest/30 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    {svg}
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="bg-card-white rounded-3xl p-8 shadow-card border border-beige/40">
              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-forest" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-text-dark mb-2">Thank you!</h3>
                  <p className="text-muted text-sm">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 bg-forest text-white text-sm font-bold rounded-full hover:bg-forest-dark transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Honeypot */}
                  <input type="text" name="website" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-dark/70 mb-1.5" htmlFor="name">Your Name *</label>
                      <input
                        id="name" name="name" type="text" required placeholder="John Smith"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-dark/70 mb-1.5" htmlFor="email">Email Address *</label>
                      <input
                        id="email" name="email" type="email" required placeholder="john@company.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-dark/70 mb-1.5" htmlFor="company">Company / Organisation</label>
                      <input
                        id="company" name="company" type="text" placeholder="Your Company Ltd."
                        value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-dark/70 mb-1.5" htmlFor="phone">Phone Number</label>
                      <input
                        id="phone" name="phone" type="tel" placeholder="(+91) 9844151267"
                        value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-text-dark/70 mb-1.5" htmlFor="product">Product of Interest</label>
                    <select
                      id="product" name="product"
                      value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}
                      className="form-input"
                    >
                      <option value="">— Select a product —</option>
                      {productOptions.map((p) => <option key={p}>{p}</option>)}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-text-dark/70 mb-1.5" htmlFor="message">Your Message *</label>
                    <textarea
                      id="message" name="message" rows={4} required
                      placeholder="Tell us about your requirements — quantities, grades, packaging preferences..."
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="form-input resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-sm text-red-600 mb-4 p-3 bg-red-50 rounded-xl">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 py-4 font-bold text-sm text-white rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-green disabled:opacity-70"
                    style={{ background: 'linear-gradient(135deg, #125426 0%, #5D6B36 100%)' }}
                  >
                    {status === 'loading' ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Enquiry</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
