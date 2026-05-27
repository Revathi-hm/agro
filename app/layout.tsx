import type { Metadata } from 'next'
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kalpa Ruchi | Premium Coconut Products',
  description:
    'Premium quality coconut-derived products — desiccated, cold-pressed, and refined from the finest coconut groves. Pure, natural, and wholesome since 2007.',
  keywords: ['desiccated coconut', 'virgin coconut oil', 'coconut milk powder', 'Kalpa Ruchi', 'Natural Goodness', 'agro products', 'India export'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <body className="font-inter antialiased bg-ivory text-text-dark">{children}</body>
    </html>
  )
}
