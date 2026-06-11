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
  metadataBase: new URL('https://dhanalakshmiagroproducts.com'),
  title: {
    default: 'Dhanalakshmi Agro Products | Premium Coconut Products',
    template: '%s | Dhanalakshmi Agro Products',
  },
  description: 'Premium quality coconut-derived products — desiccated, cold-pressed, and refined from the finest coconut groves of South India. Pure, natural, and wholesome since 2007.',
  keywords: ['Dhanalakshmi Agro Products', 'desiccated coconut', 'virgin coconut oil', 'coconut milk powder', 'Kalpa Ruchi', 'coconut products India', 'agro products Tiptur Karnataka', 'coconut exporter India'],
  authors: [{ name: 'Dhanalakshmi Agro Products' }],
  creator: 'Dhanalakshmi Agro Products',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://dhanalakshmiagroproducts.com',
    siteName: 'Dhanalakshmi Agro Products',
    title: 'Dhanalakshmi Agro Products | Premium Coconut Products',
    description: 'Premium coconut-derived products crafted with purity and precision since 2007. From grove to global markets — naturally.',
    images: [{ url: '/images/logo.png', width: 200, height: 200, alt: 'Dhanalakshmi Agro Products Logo' }],
  },
  twitter: { card: 'summary', title: 'Dhanalakshmi Agro Products', description: 'Premium coconut products from Tiptur, Karnataka, India.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://dhanalakshmiagroproducts.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-inter antialiased bg-ivory text-text-dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Dhanalakshmi Agro Products",
              "alternateName": "Kalpa Ruchi",
              "url": "https://dhanalakshmiagroproducts.com",
              "logo": "https://dhanalakshmiagroproducts.com/images/logo.png",
              "image": "https://dhanalakshmiagroproducts.com/images/logo.png",
              "description": "Premium coconut-derived products manufacturer and exporter from Tiptur, Karnataka, India. Established 2007.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "SH47, Shankar Nagara",
                "addressLocality": "Tiptur",
                "addressRegion": "Karnataka",
                "postalCode": "572226",
                "addressCountry": "IN"
              },
              "geo": { "@type": "GeoCoordinates", "latitude": "13.2628", "longitude": "76.4795" },
              "telephone": "+919844151267",
              "email": "info@dhanalakshmiagroprodcuts.com",
              "foundingDate": "2007",
              "priceRange": "$$",
              "openingHours": "Mo-Sa 09:00-18:00",
              "sameAs": []
            })
          }}
        />
        {children}
      </body>
    </html>
  )
}
