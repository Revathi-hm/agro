import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { MARKETPLACES } from '@/data/social'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Dhanalakshmi Agro Products',
  description: 'Get in touch with Dhanalakshmi Agro Products — enquire about desiccated coconut powder, virgin coconut oil, coconut milk powder and other products. Based in Tiptur, Karnataka, India.',
  keywords: ['contact Dhanalakshmi Agro Products', 'coconut products enquiry India', 'buy coconut powder bulk', 'Kalpa Ruchi supplier contact'],
  openGraph: {
    title: 'Contact Dhanalakshmi Agro Products',
    description: 'Reach out to our team for product enquiries, export orders, and pricing.',
    url: 'https://dhanalakshmiagroproducts.com/contact',
  },
  alternates: { canonical: 'https://dhanalakshmiagroproducts.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Get In Touch"
        title="Let's Work Together"
        description="Whether you're sourcing for the first time or scaling an existing order — our team is ready to help."
        breadcrumb="Contact"
      />

      {/* Main contact form + info */}
      <Contact />

      {/* Google Maps */}
      <section className="bg-card-white border-t border-beige/40 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[0.68rem] font-bold tracking-widest uppercase text-olive mb-3">Find Us</p>
          <h2 className="font-playfair text-3xl font-bold text-text-dark mb-8">Our Location</h2>
          <div className="rounded-2xl overflow-hidden border border-beige/50 shadow-card" style={{ height: 420 }}>
            <iframe
              title="Dhanalakshmi Agro Products Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1!2d76.4795!3d13.2628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDE1JzQ2LjEiTiA3NsKwMjgnNDYuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-sm text-muted mt-3">SH47, Shankar Nagara, Tiptur, Karnataka 572226, India</p>
        </div>
      </section>

      {/* B2B Marketplaces */}
      <section className="py-14 bg-ivory border-t border-beige/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[0.68rem] font-bold tracking-widest uppercase text-olive mb-3">Also Find Us On</p>
          <h2 className="font-playfair text-2xl font-bold text-text-dark mb-6">B2B Marketplace Listings</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {MARKETPLACES.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-5 py-4 bg-card-white rounded-2xl border border-beige/60 hover:border-forest/30 hover:shadow-card transition-all duration-200 group"
              >
                <span className="font-semibold text-sm text-text-dark group-hover:text-forest transition-colors">{label}</span>
                <ExternalLink className="w-4 h-4 text-muted flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
