import type { Metadata } from 'next'
import { ShieldCheck, Award, Leaf, Star, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Certifications & Compliance | Dhanalakshmi Agro Products',
  description: 'ISO 22000, FSSAI, Organic (NPOP/NOP), and Halal certified coconut products from India. Export-grade compliance for global food markets. Download certificates on request.',
  keywords: [
    'ISO 22000 coconut products India',
    'FSSAI certified coconut manufacturer',
    'organic coconut powder NPOP NOP',
    'Halal certified coconut exporter India',
    'food safety certifications coconut',
    'Dhanalakshmi Agro certifications',
  ],
  openGraph: {
    title: 'Certifications | Dhanalakshmi Agro Products',
    description: 'ISO 22000, FSSAI, Organic and Halal certified — our certifications ensure compliance for all global markets.',
    url: 'https://dhanalakshmiagroproducts.com/certifications',
  },
  alternates: { canonical: 'https://dhanalakshmiagroproducts.com/certifications' },
}

const certs = [
  {
    icon: ShieldCheck,
    title: 'ISO 22000:2018',
    subtitle: 'Food Safety Management System',
    iconColor: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
    body: 'ISO 22000 is the internationally recognised standard for food safety management. Our certification covers the full production chain — from raw material intake to finished product dispatch — ensuring systematic hazard control and food safety at every step.',
    scope: 'All coconut-based products manufactured at our Tiptur facility.',
    points: [
      'Covers hazard analysis and critical control points (HACCP)',
      'Annual surveillance audits by an accredited certification body',
      'Applies to all 8 product lines',
      'Recognised in EU, UK, USA, UAE, and 80+ countries',
    ],
  },
  {
    icon: Award,
    title: 'FSSAI',
    subtitle: 'Food Safety & Standards Authority of India',
    iconColor: '#ea580c',
    bg: '#fff7ed',
    border: '#fed7aa',
    body: 'FSSAI is the statutory body governing food safety in India. Our FSSAI licence confirms that our manufacturing premises, processes, and products comply with Indian food safety law — essential for domestic supply and Indian export documentation.',
    scope: 'All products manufactured and sold within India and for export.',
    points: [
      'Mandatory for all food businesses in India',
      'Required on product labels for domestic sale',
      'Included in Indian export documentation (CoA, Invoice)',
      'Regularly renewed and inspected',
    ],
  },
  {
    icon: Leaf,
    title: 'Organic Certified',
    subtitle: 'NPOP & NOP Compliant',
    iconColor: '#125426',
    bg: 'rgba(18,84,38,0.05)',
    border: 'rgba(18,84,38,0.18)',
    body: 'Our organic certification covers the National Programme for Organic Production (NPOP, India) and the USDA National Organic Program (NOP, USA). This dual certification allows us to supply certified organic products to both Indian and US markets, and to countries that accept NPOP equivalence (EU, Switzerland, Japan).',
    scope: 'Organic grade desiccated coconut powder, desiccated coconut flakes, and virgin coconut oil.',
    points: [
      'NPOP certification accredited by APEDA',
      'NOP equivalent for US market import',
      'EU Organic equivalence recognised under India–EU agreement',
      'Transaction certificates (TCs) issued per shipment',
    ],
  },
  {
    icon: Star,
    title: 'Halal Certified',
    subtitle: 'Global Halal Accreditation',
    iconColor: '#059669',
    bg: '#ecfdf5',
    border: '#a7f3d0',
    body: 'Our Halal certification confirms that our products are manufactured in compliance with Islamic dietary law, from raw material sourcing through to final packaging. This is essential for supply to Muslim-majority markets in the Middle East, Southeast Asia, and North Africa.',
    scope: 'All product lines, including desiccated coconut, coconut milk powder, and virgin coconut oil.',
    points: [
      'Issued by an internationally recognised Halal certification body',
      'Covers ingredients, additives, and manufacturing process',
      'Accepted in UAE, Saudi Arabia, Malaysia, Indonesia, and 50+ countries',
      'Certificate number available upon request',
    ],
  },
]

const standards = [
  'GMP — Good Manufacturing Practices',
  'HACCP — Hazard Analysis Critical Control Points',
  'Traceability system — batch-level from farm to dispatch',
  'In-house laboratory — moisture, fat, FFA, microbial testing',
  'Third-party testing — SGS / Intertek / Bureau Veritas on request',
  'Allergen management programme',
  'Pest control and sanitation programme (verified monthly)',
]

export default function CertificationsPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <Navbar />
      <PageHero
        label="Accreditations"
        title="Certified for Every Global Market"
        description="Our certifications give buyers the documentation they need to import, retail, and distribute Kalpa Ruchi products anywhere in the world — with confidence."
        breadcrumb="Certifications"
      />

      {/* Cert cards */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certs.map(({ icon: Icon, title, subtitle, iconColor, bg, border, body, scope, points }) => (
              <div
                key={title}
                className="rounded-3xl p-8 border-2 flex flex-col gap-5 hover:shadow-card-hover transition-shadow duration-300"
                style={{ background: bg, borderColor: border }}
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border-2"
                    style={{ background: bg, borderColor: border }}
                  >
                    <Icon className="w-7 h-7" style={{ color: iconColor }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="font-playfair text-xl font-bold text-text-dark">{title}</h2>
                    <p className="text-sm font-medium mt-0.5" style={{ color: iconColor }}>{subtitle}</p>
                  </div>
                </div>

                {/* Body */}
                <p className="text-[0.88rem] text-muted leading-relaxed">{body}</p>

                {/* Scope */}
                <div
                  className="text-[0.78rem] font-semibold px-4 py-2.5 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.6)', color: '#5D6B36' }}
                >
                  <span className="font-bold text-text-dark">Scope: </span>{scope}
                </div>

                {/* Points */}
                <ul className="flex flex-col gap-2">
                  {points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: iconColor }} />
                      <span className="text-[0.83rem] text-muted">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional standards */}
      <section className="py-16 bg-card-white border-t border-beige/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Beyond Certification</p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-text-dark mb-4">
                Our Quality <span className="text-gradient">Infrastructure</span>
              </h2>
              <p className="text-muted text-[0.92rem] leading-relaxed">
                Certifications are the foundation, not the ceiling. We operate a complete food safety
                infrastructure that ensures every batch leaving our facility meets the same high standard
                our global buyers expect.
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {standards.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(18,84,38,0.08)' }}
                  >
                    <CheckCircle className="w-3.5 h-3.5" style={{ color: '#125426' }} />
                  </div>
                  <span className="text-[0.88rem] text-text-dark font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ivory">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
          <h3 className="font-playfair text-3xl font-bold text-text-dark mb-3">
            Need Certificates for Onboarding?
          </h3>
          <p className="text-muted text-[0.92rem] mb-7 leading-relaxed">
            We provide full certificate packs — including CoA, Halal, Organic TC, and ISO certificates —
            to qualified buyers. Contact our export team to request your documentation pack.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm text-white rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-green"
            style={{ background: 'linear-gradient(135deg, #125426 0%, #5D6B36 100%)' }}
          >
            Request Certificate Pack <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
