'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, ArrowRight, ExternalLink } from 'lucide-react'
import { SOCIAL, MARKETPLACES } from '@/data/social'

const quickLinks = [
  { label: 'About Us',        href: '/about'          },
  { label: 'Products',        href: '/products'       },
  { label: 'Our Process',     href: '/process'        },
  { label: 'Why Us',          href: '/why-us'         },
  { label: 'Certifications',  href: '/certifications' },
  { label: 'Gallery',         href: '/gallery'        },
  { label: 'Contact',         href: '/contact'        },
]

const productLinks = [
  { label: 'Desiccated Coconut Powder', href: '/products/desiccated-coconut-powder' },
  { label: 'Desiccated Coconut Flakes', href: '/products/desiccated-coconut-flakes' },
  { label: 'Virgin Coconut Oil',         href: '/products/virgin-coconut-oil'        },
  { label: 'Coconut Milk',               href: '/products/coconut-milk'              },
  { label: 'D-Fat Coconut Powder',       href: '/products/d-fat-coconut-powder'      },
  { label: 'Coconut Milk Powder',        href: '/products/coconut-milk-powder'       },
  { label: 'Coconut Shell',              href: '/products/coconut-shell'             },
  { label: 'Testa',                      href: '/products/testa'                     },
]

const socialIcons = [
  {
    label: 'WhatsApp',
    href: SOCIAL.whatsapp,
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.35C8.46 21.51 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z',
  },
  ...(SOCIAL.linkedin ? [{
    label: 'LinkedIn',
    href: SOCIAL.linkedin,
    path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
  }] : []),
  ...(SOCIAL.instagram ? [{
    label: 'Instagram',
    href: SOCIAL.instagram,
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  }] : []),
  ...(SOCIAL.facebook ? [{
    label: 'Facebook',
    href: SOCIAL.facebook,
    path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
  }] : []),
]

export default function Footer() {
  const [email, setEmail]     = useState('')
  const [nlStatus, setNlStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  const handleNl = async (e: React.FormEvent) => {
    e.preventDefault()
    setNlStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setNlStatus(res.ok ? 'done' : 'error')
    } catch {
      setNlStatus('error')
    }
  }

  return (
    <footer className="relative text-white overflow-hidden" style={{ background: '#2F2913' }}>

      {/* Top border glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-olive/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.png" alt="Kalpa Ruchi" width={48} height={48} className="rounded-lg object-contain" />
              <div>
                <span className="block font-playfair text-xl text-white leading-none">Kalpa Ruchi</span>
                <span className="block text-[0.48rem] tracking-[0.22em] uppercase mt-0.5" style={{ color: '#858367' }}>Natural Goodness</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Premium coconut-derived products crafted with purity and precision since 2007. From grove to global markets — naturally.
            </p>

            {/* Social icons (only shown when URL is configured) */}
            {socialIcons.length > 0 && (
              <div className="flex gap-2.5 mb-5">
                {socialIcons.map(({ label, href, path }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            )}

            {/* B2B Marketplaces */}
            <div>
              <p className="text-[0.6rem] font-bold tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Find Us On</p>
              <div className="flex flex-wrap gap-2">
                {MARKETPLACES.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[0.65rem] font-semibold px-2.5 py-1 rounded-full transition-all"
                    style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    {label} <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>Quick Links</h5>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm transition-colors hover:text-olive-lt" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h5 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>Our Products</h5>
            <ul className="flex flex-col gap-3">
              {productLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm transition-colors hover:text-olive-lt" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact info */}
          <div>
            <h5 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>Stay Updated</h5>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Subscribe for product updates, certifications, and export news.
            </p>

            {nlStatus === 'done' ? (
              <p className="text-sm font-semibold" style={{ color: '#858367' }}>Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleNl} className="flex rounded-full overflow-hidden border" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                <input
                  type="email" required placeholder="Your email"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none"
                />
                <button
                  type="submit"
                  disabled={nlStatus === 'loading'}
                  className="px-4 py-2.5 flex items-center justify-center transition-colors hover:bg-forest disabled:opacity-60"
                  style={{ background: '#5D6B36' }}
                  aria-label="Subscribe"
                >
                  {nlStatus === 'loading'
                    ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    : <ArrowRight className="w-4 h-4 text-white" />
                  }
                </button>
              </form>
            )}
            {nlStatus === 'error' && (
              <p className="text-[0.65rem] mt-1.5" style={{ color: 'rgba(255,80,80,0.8)' }}>Could not subscribe. Please try again.</p>
            )}
            <p className="text-[0.65rem] mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>No spam — unsubscribe anytime.</p>

            <div className="mt-6 flex flex-col gap-3">
              <a href="mailto:info@dhanalakshmiagroproducts.com" className="flex items-center gap-2.5 group">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#858367' }} />
                <span className="text-xs group-hover:text-olive-lt transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  info@dhanalakshmiagroproducts.com
                </span>
              </a>
              <a href="tel:+919844151267" className="flex items-center gap-2.5 group">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#858367' }} />
                <span className="text-xs group-hover:text-olive-lt transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  +91 98441 51267
                </span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#858367' }} />
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  SH47, Shankar Nagara,<br />Tiptur, Karnataka 572226
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} <Link href="/" className="hover:text-olive-lt transition-colors">Kalpa Ruchi</Link> · Dhanalakshmi Agro Products. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs transition-colors hover:text-olive-lt" style={{ color: 'rgba(255,255,255,0.35)' }}>Privacy Policy</Link>
            <Link href="/terms"          className="text-xs transition-colors hover:text-olive-lt" style={{ color: 'rgba(255,255,255,0.35)' }}>Terms of Use</Link>
            <Link href="/certifications" className="text-xs transition-colors hover:text-olive-lt" style={{ color: 'rgba(255,255,255,0.35)' }}>Certifications</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
