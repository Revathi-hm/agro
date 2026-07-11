import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Use | Dhanalakshmi Agro Products',
  description: 'Terms and conditions governing use of the Dhanalakshmi Agro Products website.',
  openGraph: {
    title: 'Terms of Use | Dhanalakshmi Agro Products',
    url: 'https://dhanalakshmiagroproducts.com/terms',
  },
  alternates: { canonical: 'https://dhanalakshmiagroproducts.com/terms' },
  robots: { index: true, follow: false },
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the website at https://dhanalakshmiagroproducts.com ("the Site"), you agree to be bound by these Terms of Use. If you do not agree, please discontinue use of the Site immediately. These terms apply to all visitors, including those who submit enquiries or subscribe to our newsletter.`,
  },
  {
    title: '2. Use of the Site',
    content: `You may use the Site for lawful purposes only. You agree not to: use the Site in any way that violates applicable laws or regulations; transmit any unsolicited commercial communications (spam); attempt to gain unauthorised access to any part of the Site; reproduce, duplicate, copy, or sell any part of the Site without our express written permission.`,
  },
  {
    title: '3. Intellectual Property',
    content: `All content on this Site — including text, images, logos, product descriptions, and design — is the property of Dhanalakshmi Agro Products or its content suppliers and is protected by applicable intellectual property law. You may not reproduce or distribute any content without prior written consent.`,
  },
  {
    title: '4. Product Information',
    content: `Product specifications, prices, and availability displayed on the Site are for informational purposes only and are subject to change without notice. They do not constitute a binding offer. A binding commercial agreement is only formed upon written confirmation (Purchase Order and Order Acknowledgement) between the parties.`,
  },
  {
    title: '5. Contact Form & Enquiries',
    content: `Submitting an enquiry through our contact form does not constitute a binding order or contract. We will respond to enquiries in good faith but are not obligated to accept any order or supply any product solely on the basis of a website enquiry.`,
  },
  {
    title: '6. Disclaimer of Warranties',
    content: `The Site is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses. We make no warranties regarding the accuracy or completeness of any content on the Site.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, Dhanalakshmi Agro Products shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the Site or its content.`,
  },
  {
    title: '8. Third-Party Links',
    content: `The Site may contain links to third-party websites for your convenience. We have no control over those sites and accept no responsibility for their content, privacy practices, or terms. Links do not constitute endorsement.`,
  },
  {
    title: '9. Governing Law',
    content: `These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Karnataka, India.`,
  },
  {
    title: '10. Changes to These Terms',
    content: `We reserve the right to modify these Terms of Use at any time. Changes take effect immediately upon publication on the Site. Continued use of the Site after changes constitutes your acceptance of the revised terms.`,
  },
  {
    title: '11. Contact',
    content: `For questions regarding these Terms:\n\nDhanalakshmi Agro Products\nSH47, Shankar Nagara, Tiptur, Karnataka 572226, India\nEmail: info@dhanalakshmiagroproducts.com`,
  },
]

export default function TermsPage() {
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
            <span className="font-semibold" style={{ color: '#125426' }}>Terms of Use</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-text-dark mb-3">
            Terms of Use
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
