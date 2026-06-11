import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import Products from '@/components/Products'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Products | Dhanalakshmi Agro Products',
  description: 'Explore 8 premium coconut products — Desiccated Coconut Powder, Virgin Coconut Oil, Coconut Milk Powder and more. Export-grade quality from Tiptur, Karnataka, India.',
  keywords: ['desiccated coconut powder India', 'virgin coconut oil export', 'coconut milk powder manufacturer', 'coconut flakes Karnataka', 'D-fat coconut powder'],
  openGraph: {
    title: 'Premium Coconut Products | Dhanalakshmi Agro Products',
    description: 'Export-grade desiccated coconut, virgin coconut oil, coconut milk and more from South India.',
    url: 'https://dhanalakshmiagroproducts.com/products',
  },
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="What We Offer"
        title="8 Premium Coconut Products"
        description="From grove to global market — every product reflects our commitment to purity, quality, and natural goodness."
        breadcrumb="Products"
      />
      <Products />
      <Contact />
      <Footer />
    </>
  )
}
