import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Dhanalakshmi Agro Products',
  description: 'Privacy Policy for dhanalakshmiagroproducts.com — how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://dhanalakshmiagroproducts.com/privacy-policy' },
  robots: { index: false, follow: false },
}

const LAST_UPDATED = '26 June 2026'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 bg-ivory">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">

          <p className="text-[0.68rem] font-bold tracking-widest uppercase text-olive mb-3">Legal</p>
          <h1 className="font-playfair text-4xl font-bold text-text-dark mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted mb-10">Last updated: {LAST_UPDATED}</p>

          <div className="prose prose-sm max-w-none text-muted leading-relaxed space-y-8">

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">1. Who We Are</h2>
              <p>
                This website is operated by <strong className="text-text-dark">Dhanalakshmi Agro Products</strong> (brand name: Kalpa Ruchi), registered at SH47, Shankar Nagara, Tiptur, Karnataka 572226, India. Contact: <a href="mailto:info@dhanalakshmiagroproducts.com" className="text-forest hover:underline">info@dhanalakshmiagroproducts.com</a> · +91 98441 51267.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">2. What Information We Collect</h2>
              <p>We collect information you provide directly when you:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Fill in the contact/enquiry form (name, email, phone, company, message)</li>
                <li>Subscribe to our newsletter (email address only)</li>
              </ul>
              <p className="mt-3">We do not collect payment information, passwords, or sensitive personal data. We do not use tracking cookies or third-party advertising networks.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To respond to your product enquiries and business requests</li>
                <li>To send product updates and newsletters (only if you subscribed)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p className="mt-3">We will never sell, rent, or trade your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">4. Legal Basis for Processing (GDPR)</h2>
              <p>If you are located in the European Economic Area, our legal basis for processing your data is:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong className="text-text-dark">Legitimate interests</strong> — responding to business enquiries</li>
                <li><strong className="text-text-dark">Consent</strong> — newsletter subscriptions (you can unsubscribe at any time)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">5. Data Retention</h2>
              <p>We retain enquiry data for up to 2 years for business correspondence purposes. Newsletter subscribers are retained until they unsubscribe. You may request deletion at any time.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">6. Third-Party Services</h2>
              <p>This website uses Google Maps (embed, no personal data shared) to display our location. Your browser may load Google's scripts when viewing the contact page — subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-forest hover:underline">Google's Privacy Policy</a>.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">7. Cookies</h2>
              <p>This website does not use tracking or advertising cookies. We may use a single session cookie to maintain form state — it contains no personal data and expires when your browser session ends.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">8. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent for newsletter communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, email us at <a href="mailto:info@dhanalakshmiagroproducts.com" className="text-forest hover:underline">info@dhanalakshmiagroproducts.com</a>.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">9. Data Security</h2>
              <p>We use HTTPS encryption on all pages. Form data is transmitted securely and stored only in our email and internal systems — not in any publicly accessible database.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">10. Changes to This Policy</h2>
              <p>We may update this policy from time to time. The "Last updated" date at the top of this page will reflect any changes. Continued use of the website after changes constitutes acceptance of the updated policy.</p>
            </section>

            <section>
              <h2 className="font-playfair text-xl font-bold text-text-dark mb-3">11. Contact</h2>
              <p>Questions about this Privacy Policy? Contact us at <a href="mailto:info@dhanalakshmiagroproducts.com" className="text-forest hover:underline">info@dhanalakshmiagroproducts.com</a> or write to us at the address above.</p>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
