import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import WhyUs from '@/components/WhyUs'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Why Choose Us | Dhanalakshmi Agro Products',
  description: 'With 15+ years of expertise, FSSAI & ISO certification, and export to 30+ countries — discover why global buyers trust Dhanalakshmi Agro Products for premium coconut products.',
  keywords: ['FSSAI certified coconut manufacturer', 'ISO certified agro products India', 'trusted coconut supplier', 'export quality coconut Karnataka', 'Kalpa Ruchi certifications'],
  openGraph: {
    title: 'Why Choose Dhanalakshmi Agro Products',
    description: '15+ years of expertise, certified quality, exporting to 30+ countries worldwide.',
    url: 'https://dhanalakshmiagroproducts.com/why-us',
  },
  alternates: { canonical: 'https://dhanalakshmiagroproducts.com/why-us' },
}

export default function WhyUsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Why Choose Us"
        title="Quality You Can Taste & Trust"
        description="Over 15 years of expertise, global certifications, and a commitment to purity that every customer can rely on."
        breadcrumb="Why Choose Us"
      />
      <WhyUs />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}
