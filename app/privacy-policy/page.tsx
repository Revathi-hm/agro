import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Dhanalakshmi Agro Products',
  description: 'Privacy Policy for Dhanalakshmi Agro Products — how we collect, use, and protect your personal data when you use our website.',
  openGraph: {
    title: 'Privacy Policy | Dhanalakshmi Agro Products',
    url: 'https://dhanalakshmiagroproducts.com/privacy-policy',
  },
  alternates: { canonical: 'https://dhanalakshmiagroproducts.com/privacy-policy' },
  robots: { index: true, follow: false },
}

const sections = [
  {
    title: '1. Who We Are',
    content: `Dhanalakshmi Agro Products ("we", "us", "our") is a food manufacturing and export company incorporated in India, operating at SH47, Shankar Nagara, Tiptur, Karnataka 572226. Our website is https://dhanalakshmiagroproducts.com. For privacy-related queries, contact us at info@dhanalakshmiagroproducts.com.`,
  },
  {
    title: '2. Data We Collect',
    content: `We collect personal data only when you voluntarily provide it through our contact form or newsletter subscription. This may include: your full name, email address, phone number, company name, country, and the contents of your message. We do not collect payment information on this website. We also collect non-personal technical data via cookies and server logs — including IP address, browser type, pages visited, and visit duration — to maintain and improve our website.`,
  },
  {
    title: '3. How We Use Your Data',
    content: `We use the data you provide to: respond to your enquiries and quote requests; send product updates and newsletters (only if you subscribed); improve our website and services. We do not sell, rent, or share your personal data with third parties for marketing purposes. We may share data with trusted service providers (email delivery, web hosting) who process data on our behalf under strict confidentiality agreements.`,
  },
  {
    title: '4. Legal Basis for Processing',
    content: `For users in the European Economic Area (EEA) and United Kingdom, we process personal data under the following legal bases: Legitimate interest — to respond to business enquiries. Consent — for newsletter subscriptions (you may withdraw at any time). Contractual necessity — where processing is required to fulfil a business contract.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain enquiry data for up to 3 years to support ongoing business relationships. Newsletter subscriber data is retained until you unsubscribe. Technical log data is retained for up to 12 months. You may request deletion of your data at any time by contacting us.`,
  },
  {
    title: '6. Your Rights',
    content: `Depending on your jurisdiction, you may have the right to: access the personal data we hold about you; correct inaccurate data; request erasure of your data; withdraw consent at any time; lodge a complaint with a data protection authority. To exercise these rights, email us at info@dhanalakshmiagroproducts.com with the subject line "Data Rights Request".`,
  },
  {
    title: '7. Cookies',
    content: `Our website uses essential cookies required for basic website function and analytics cookies (Google Analytics) to understand visitor behaviour. Analytics cookies are anonymised and do not identify individuals. You may disable cookies in your browser settings, though this may affect website functionality.`,
  },
  {
    title: '8. Third-Party Links',
    content: `Our website may contain links to third-party websites (e.g. Google Maps, social media). We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently.`,
  },
  {
    title: '9. Security',
    content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, or loss. Our website uses HTTPS encryption for all data in transit.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. The date at the top of the page indicates when the policy was last revised. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '11. Contact',
    content: `For any privacy-related questions or to exercise your data rights:\n\nDhanalakshmi Agro Products\nSH47, Shankar Nagara, Tiptur, Karnataka 572226, India\nEmail: info@dhanalakshmiagroproducts.com\nPhone: (+91) 9844151267`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <Navbar />

      {/* Page header */}
      <section
        className="pt-28 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #EAE4DA 0%, #F3EEE9 50%, #EDF0E6 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex items-center gap-2 text-xs text-muted mb-6">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="font-semibold" style={{ color: '#125426' }}>Privacy Policy</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-text-dark mb-3">
            Privacy Policy
          </h1>
          <p className="text-muted text-sm">Last updated: 12 June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="bg-card-white rounded-3xl border border-beige/60 shadow-card p-8 md:p-12 flex flex-col gap-8">
            {sections.map(({ title, content }) => (
              <div key={title}>
                <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">{title}</h2>
                <p className="text-[0.9rem] text-muted leading-relaxed whitespace-pre-line">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
