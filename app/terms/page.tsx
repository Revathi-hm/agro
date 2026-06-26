import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Use | Dhanalakshmi Agro Products',
  description: 'Terms and conditions for using the Dhanalakshmi Agro Products website.',
  alternates: { canonical: 'https://dhanalakshmiagroproducts.com/terms' },
  robots: { index: false, follow: false },
}

const LAST_UPDATED = '26 June 2026'

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 bg-ivory">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">

          <p className="text-[0.68rem] font-bold tracking-widest uppercase text-olive mb-3">Legal</p>
          <h1 className="font-playfair text-4xl font-bold text-text-dark mb-2">Terms of Use</h1>
          <p className="text-sm text-muted mb-10">Last updated: {LAST_UPDATED}</p>

          <div className="prose prose-sm max-w-none text-muted leading-relaxed space-y-8">

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using <strong className="text-text-dark">dhanalakshmiagroproducts.com</strong> ("the website"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the website.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">2. About the Website</h2>
              <p>This website is operated by <strong className="text-text-dark">Dhanalakshmi Agro Products</strong> (brand: Kalpa Ruchi), SH47, Shankar Nagara, Tiptur, Karnataka 572226, India. The website provides product information and a channel for business enquiries only — it is not a consumer e-commerce platform.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">3. Intellectual Property</h2>
              <p>All content on this website — including text, images, product descriptions, logos, and design — is the property of Dhanalakshmi Agro Products or its suppliers and is protected by Indian and international copyright law.</p>
              <p className="mt-2">You may not reproduce, distribute, or commercially exploit any content without prior written consent.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">4. Product Information</h2>
              <p>Product specifications (moisture, fat content, shelf life, etc.) stated on this website are indicative and may vary by batch, grade, and season. Full technical specifications and certificates of analysis are provided separately for confirmed orders.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">5. No Warranty</h2>
              <p>The website is provided "as is" without warranties of any kind. We do not warrant that the website will be uninterrupted, error-free, or that any information is complete, accurate, or current.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">6. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Dhanalakshmi Agro Products will not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on any information contained herein.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">7. External Links</h2>
              <p>This website may contain links to third-party websites (such as IndiaMart, TradeIndia, etc.). We are not responsible for the content or practices of these sites and their inclusion does not imply endorsement.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">8. Enquiries and Contracts</h2>
              <p>Submitting an enquiry through our contact form does not constitute a binding contract or purchase order. All business transactions are subject to separate written agreements, purchase orders, and invoice terms agreed between the parties.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">9. Governing Law</h2>
              <p>These terms are governed by the laws of the State of Karnataka, India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Tumkur / Bengaluru, Karnataka.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">10. Changes to These Terms</h2>
              <p>We reserve the right to modify these terms at any time. The "Last updated" date will reflect changes. Continued use of the website after modifications constitutes acceptance of the updated terms.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">11. Contact</h2>
              <p>Questions about these Terms? Email <a href="mailto:info@dhanalakshmiagroproducts.com" className="text-forest hover:underline">info@dhanalakshmiagroproducts.com</a>.</p>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
