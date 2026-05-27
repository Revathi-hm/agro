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

/* ─── Leaf-ornament A ────────────────────────────────────────────
   w-[0.9em] container + em-unit leaf means it scales automatically
   with whatever font-size the parent sets — no px math needed.
──────────────────────────────────────────────────────────────── */
function LeafA() {
  return (
    <span className="relative inline-flex items-center justify-center w-[0.9em]">
      A
      <span
        className="absolute w-[0.16em] h-[0.28em] bg-[#6B8A3F] rounded-[100%_0%_100%_0%] rotate-[-45deg] top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
    </span>
  )
}

/* ─── Brand mark ─────────────────────────────────────────────────
   DHANALAKSHMI  (Cormorant Garamond, #6B7F3A)
   AGRO PRODUCTS (Montserrat, #8B5E34)
──────────────────────────────────────────────────────────────── */
function BrandMark({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const titleSize = size === 'sm' ? '1.3rem' : '1.5rem'
  const subSize   = size === 'sm' ? '0.41rem' : '0.44rem'

  return (
    <div className="flex flex-col leading-none select-none">
      {/* DHANALAKSHMI — leaf A ornaments scale via em units */}
      <span
        className="font-cormorant font-medium uppercase leading-none whitespace-nowrap flex items-end"
        style={{ fontSize: titleSize, color: '#6B7F3A', letterSpacing: '0.08em' }}
      >
        DH<LeafA />N<LeafA />LAKSHMI
      </span>

      {/* AGRO PRODUCTS */}
      <span
        className="font-montserrat font-medium uppercase whitespace-nowrap mt-1"
        style={{ fontSize: subSize, color: '#8B5E34', letterSpacing: '0.42em' }}
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
