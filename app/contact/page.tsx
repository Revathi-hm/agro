import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us | Dhanalakshmi Agro Products',
  description: 'Get in touch with Dhanalakshmi Agro Products for export enquiries, bulk orders, and product samples. We respond within 24 hours. Based in Tiptur, Karnataka, India.',
  keywords: [
    'contact Dhanalakshmi Agro Products',
    'coconut products export enquiry',
    'bulk coconut powder order India',
    'Kalpa Ruchi contact',
    'Tiptur coconut supplier',
  ],
  openGraph: {
    title: 'Contact Us | Dhanalakshmi Agro Products',
    description: 'Reach out for bulk orders, export enquiries, and product samples. Our team responds within 24 hours.',
    url: 'https://dhanalakshmiagroproducts.com/contact',
  },
  alternates: { canonical: 'https://dhanalakshmiagroproducts.com/contact' },
}

export default function ContactPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <Navbar />
      <PageHero
        label="Reach Out"
        title="Let's Talk Business"
        description="Whether you're a food manufacturer, retailer, or distributor — send us your requirements and our export team will respond within 24 hours."
        breadcrumb="Contact"
      />
      <Contact />

      {/* Google Maps embed */}
      <section className="pb-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="rounded-3xl overflow-hidden border border-beige/60 shadow-card" style={{ height: 360 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.0!2d76.4795!3d13.2628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDE1JzQ2LjEiTiA3NsKwMjgnNDYuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dhanalakshmi Agro Products location — Tiptur, Karnataka"
            />
          </div>
          <p className="text-center text-xs text-muted mt-3">
            SH47, Shankar Nagara, Tiptur, Karnataka 572226, India
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
