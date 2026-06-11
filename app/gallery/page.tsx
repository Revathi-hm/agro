import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import GalleryGrid from '@/components/GalleryGrid'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gallery | Dhanalakshmi Agro Products',
  description: 'Explore our product gallery — premium coconut products, production facility, and packaging from Dhanalakshmi Agro Products (Kalpa Ruchi), Tiptur, Karnataka.',
  openGraph: {
    title: 'Product Gallery | Dhanalakshmi Agro Products',
    description: 'Photos of our premium coconut products and production facility.',
    url: 'https://dhanalakshmiagroproducts.com/gallery',
  },
}

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Visual Tour"
        title="Our Products & Facility"
        description="A closer look at our premium coconut products, packaging, and production standards."
        breadcrumb="Gallery"
        image="/images/hero.jpg"
        imageFit="cover"
      />
      <GalleryGrid />
      <Footer />
    </>
  )
}
