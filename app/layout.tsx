import type { Metadata } from 'next'
import { Playfair_Display, Inter, Cormorant_Garamond, Montserrat } from 'next/font/google'
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

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dhanalakshmi Agro Products | Premium Coconut Products',
  description:
    'Premium quality coconut-derived products — desiccated, cold-pressed, and refined from the finest coconut groves. Pure, natural, and wholesome since 2007.',
  keywords: ['desiccated coconut', 'virgin coconut oil', 'coconut milk powder', 'Dhanalakshmi Agro Products', 'agro products', 'India export'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-inter antialiased bg-ivory text-text-dark">{children}</body>
    </html>
  )
}
