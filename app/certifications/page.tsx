import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import { CheckCircle, Download, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Certifications | Dhanalakshmi Agro Products',
  description: 'Dhanalakshmi Agro Products holds FSSAI, ISO 22000, Organic (NPOP/NOP), and Halal certifications — ensuring every product meets the highest international food safety standards.',
  keywords: ['FSSAI certified coconut manufacturer', 'ISO 22000 agro products India', 'halal certified coconut products', 'organic certified coconut Karnataka', 'food safety certification India'],
  openGraph: {
    title: 'Certifications | Dhanalakshmi Agro Products',
    description: 'FSSAI, ISO 22000, Organic, and Halal certified — quality you can verify.',
    url: 'https://dhanalakshmiagroproducts.com/certifications',
  },
  alternates: { canonical: 'https://dhanalakshmiagroproducts.com/certifications' },
}

const certs = [
  {
    name: 'FSSAI',
    full: 'Food Safety and Standards Authority of India',
    description: 'India\'s central food regulatory authority. Our FSSAI licence confirms that all our coconut products meet the food safety, hygiene, and labelling standards set by the Government of India.',
    colour: '#125426',
    bg: 'rgba(18,84,38,0.06)',
    checks: ['Food safety compliant', 'Hygiene standards met', 'Labelling requirements fulfilled', 'Regular inspections passed'],
    doc: '/documents/fssai.png',
  },
  {
    name: 'ISO 22000',
    full: 'Food Safety Management System',
    description: 'ISO 22000 is the international standard for food safety management systems. It demonstrates our systematic approach to identifying and controlling food safety hazards throughout the entire production chain.',
    colour: '#1a5e8a',
    bg: 'rgba(26,94,138,0.06)',
    checks: ['Hazard analysis & control', 'Traceability throughout supply chain', 'Continual improvement process', 'Third-party audited'],
  },
  {
    name: 'Organic',
    full: 'NPOP / NOP Certified Organic',
    description: 'Our organic products are certified under the National Programme for Organic Production (NPOP) and the USDA National Organic Program (NOP) — assuring buyers that no synthetic pesticides, fertilisers, or GMOs are used.',
    colour: '#5D6B36',
    bg: 'rgba(93,107,54,0.07)',
    checks: ['No synthetic pesticides', 'No chemical fertilisers', 'Non-GMO verified', 'Third-party certification body'],
  },
  {
    name: 'Halal',
    full: 'Halal Certified',
    description: 'Our Halal certification verifies that our products and production process comply with Islamic dietary laws — opening access to markets across the Middle East, Southeast Asia, and Muslim communities worldwide.',
    colour: '#7A5230',
    bg: 'rgba(122,82,48,0.06)',
    checks: ['No prohibited ingredients', 'Dedicated production lines', 'Accredited certification body', 'Accepted in GCC markets'],
  },
]

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Quality Verified"
        title="Certified at Every Step"
        description="Four internationally recognised certifications that prove our commitment to safety, purity, and transparency."
        breadcrumb="Certifications"
      />

      {/* Cert cards */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            {certs.map((c) => (
              <div
                key={c.name}
                className="bg-card-white rounded-3xl p-8 border border-beige/60 hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 font-playfair text-2xl font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${c.colour} 0%, ${c.colour}cc 100%)` }}
                  >
                    {c.name.slice(0, 2)}
                  </div>
                  <div>
                    <h2 className="font-playfair text-2xl font-bold text-text-dark">{c.name}</h2>
                    <p className="text-xs font-semibold tracking-wide mt-1" style={{ color: c.colour }}>{c.full}</p>
                  </div>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-6">{c.description}</p>

                <div className="space-y-2 mb-6">
                  {c.checks.map((ch) => (
                    <div key={ch} className="flex items-center gap-2.5 text-sm text-text-dark">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: c.colour }} />
                      {ch}
                    </div>
                  ))}
                </div>

                {c.doc && (
                  <a
                    href={c.doc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2.5 rounded-full border-2 transition-all duration-200 hover:shadow-sm"
                    style={{ color: c.colour, borderColor: `${c.colour}30` }}
                  >
                    <Download className="w-4 h-4" /> View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality standards strip */}
      <section className="py-14 bg-card-white border-t border-beige/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[0.68rem] font-bold tracking-widest uppercase text-olive mb-3">Additional Standards</p>
          <h2 className="font-playfair text-3xl font-bold text-text-dark mb-4">We Also Comply With</h2>
          <p className="text-muted max-w-xl mx-auto mb-10 text-sm">
            Beyond formal certifications, our production process adheres to internationally recognised best practices in food manufacturing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['GMP (Good Manufacturing Practice)', 'HACCP Principles', 'Export Quality Standards', 'Kosher Compliant Process'].map((std) => (
              <span
                key={std}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border border-beige/60 bg-ivory text-text-dark"
              >
                {std}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-ivory border-t border-beige/40">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-text-dark mb-4">Need Full Documentation?</h2>
          <p className="text-muted mb-8 text-sm">
            We provide complete certification documentation, lab reports, and test certificates on request — for buyers completing supplier qualification.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 font-bold text-sm text-white rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-green"
            style={{ background: 'linear-gradient(135deg, #125426 0%, #5D6B36 100%)' }}
          >
            Request Documents <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
