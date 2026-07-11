import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Dhanalakshmi Agro Products',
  description: 'Answers to common questions about our coconut products, MOQ, export documentation, certifications, shipping, payment terms, and sampling. Dhanalakshmi Agro Products, India.',
  keywords: [
    'coconut products FAQ',
    'desiccated coconut MOQ',
    'coconut exporter India FAQ',
    'Dhanalakshmi Agro Products questions',
    'coconut supplier minimum order',
    'coconut export documentation India',
  ],
  openGraph: {
    title: 'FAQ | Dhanalakshmi Agro Products',
    description: 'Common questions about products, ordering, export, and certifications answered by our team.',
    url: 'https://dhanalakshmiagroproducts.com/faq',
  },
  alternates: { canonical: 'https://dhanalakshmiagroproducts.com/faq' },
}

export default function FAQPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <Navbar />
      <PageHero
        label="Help Centre"
        title="Frequently Asked Questions"
        description="Everything you need to know about our products, ordering, export documentation, certifications, and shipping — answered by our team."
        breadcrumb="FAQ"
      />

      <FAQ />

      {/* Still have questions CTA */}
      <section className="pb-20 bg-ivory">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <div
            className="rounded-3xl p-10 text-center border border-beige/60"
            style={{ background: 'linear-gradient(160deg, #EAE4DA 0%, #EDF0E6 100%)' }}
          >
            <p className="section-label justify-center">Still have questions?</p>
            <h3 className="font-playfair text-3xl font-bold text-text-dark mb-3">
              We're Here to Help
            </h3>
            <p className="text-muted text-[0.92rem] mb-7 leading-relaxed">
              Can't find the answer you're looking for? Our export team is happy to assist
              with any product, compliance, or logistics question.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm text-white rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-green"
              style={{ background: 'linear-gradient(135deg, #125426 0%, #5D6B36 100%)' }}
            >
              Contact Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
