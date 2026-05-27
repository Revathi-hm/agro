'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet'

const navLinks = [
  { label: 'About',    href: '/about'    },
  { label: 'Products', href: '/products' },
  { label: 'Process',  href: '/#process' },
  { label: 'Why Us',   href: '/#why-us'  },
]

/* ─── Brand mark ─────────────────────────────────────────────────
   DHANALAKSHMI  (Cormorant Garamond, #5E7333)
   AGRO PRODUCTS (Montserrat, #7A5230)
──────────────────────────────────────────────────────────────── */
function BrandMark({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const titleSize = size === 'sm' ? '1.3rem' : '1.5rem'
  const subSize   = size === 'sm' ? '0.41rem' : '0.44rem'

  return (
    <div className="flex flex-col leading-none select-none">
      <span
        className="font-cormorant font-medium uppercase leading-none whitespace-nowrap"
        style={{ fontSize: titleSize, color: '#5E7333', letterSpacing: '0.08em' }}
      >
        Dhanalakshmi
      </span>
      <span
        className="font-montserrat font-medium uppercase whitespace-nowrap mt-1"
        style={{ fontSize: subSize, color: '#7A5230', letterSpacing: '0.42em' }}
      >
        Agro Products
      </span>
    </div>
  )
}

/* ─── Navbar ─────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/96 backdrop-blur-2xl shadow-sm border-b border-beige/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="Dhanalakshmi Agro Products"
            width={44}
            height={44}
            className="rounded-lg object-contain flex-shrink-0"
          />
          <BrandMark size="md" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[0.88rem] font-semibold text-text-dark hover:text-forest animated-underline transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2.5 bg-gradient-to-r from-forest to-olive text-white text-[0.82rem] font-bold rounded-full hover:shadow-glow-green hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile: Sheet drawer */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden p-2 rounded-lg text-forest" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col h-full pt-16 px-6">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-beige">
                <Image
                  src="/images/logo.png"
                  alt="Dhanalakshmi Agro Products"
                  width={38}
                  height={38}
                  className="rounded-lg flex-shrink-0"
                />
                <BrandMark size="sm" />
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((l) => (
                  <SheetClose key={l.label} asChild>
                    <Link href={l.href} className="text-forest font-semibold text-base py-1 border-b border-beige/50 animated-underline">
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="mt-4 px-6 py-3 bg-gradient-to-r from-forest to-olive text-white font-bold rounded-full text-center"
                  >
                    Contact Us
                  </Link>
                </SheetClose>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
