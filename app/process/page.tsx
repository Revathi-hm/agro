import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import Process from '@/components/Process'
import WhyUs from '@/components/WhyUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Process | Dhanalakshmi Agro Products',
  description: 'Discover how Dhanalakshmi Agro Products ensures premium quality — from sourcing the finest coconuts to hygienic processing, lab quality control, and export-ready packaging.',
  keywords: ['coconut processing India', 'coconut production process', 'food safety standards', 'FSSAI certified processing', 'Dhanalakshmi Agro Products process'],
  openGraph: {
    title: 'Our Manufacturing Process | Dhanalakshmi Agro Products',
    description: 'A five-step journey from grove to global markets — purity guaranteed.',
    url: 'https://dhanalakshmiagroproducts.com/process',
  },
}

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="How We Work"
        title="From Grove to Global Markets"
        description="A five-step journey that guarantees purity in every packet — sourced, processed, and packaged to the highest standards."
        breadcrumb="Our Process"
        image="/images/virgin-coconut-oil.jpg"
        imageFit="cover"
      />
      <Process />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  )
}
