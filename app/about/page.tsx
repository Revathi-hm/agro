import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import About from '@/components/About'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us | Dhanalakshmi Agro Products',
  description: 'Founded in 2007, Dhanalakshmi Agro Products (Kalpa Ruchi) is a trusted name in premium coconut processing. Learn our story, values, and commitment to natural goodness.',
  keywords: ['Dhanalakshmi Agro Products about', 'coconut manufacturer Tiptur Karnataka', 'Kalpa Ruchi brand story', 'agro products India 2007'],
  openGraph: {
    title: 'About Dhanalakshmi Agro Products',
    description: 'Premium coconut products crafted with purity since 2007 — Tiptur, Karnataka.',
    url: 'https://dhanalakshmiagroproducts.com/about',
  },
  alternates: { canonical: 'https://dhanalakshmiagroproducts.com/about' },
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Our Story"
        title="Rooted in Tradition, Driven by Purity"
        description="Founded in 2007, we've grown from a family operation into a globally trusted name in premium coconut processing."
        breadcrumb="About Us"
        image="/images/kalparuchi-pouch.png"
        imageFit="contain"
      />
      <About />
      <Footer />
    </>
  )
}
