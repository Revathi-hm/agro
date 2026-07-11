'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    category: 'About Us',
    items: [
      {
        q: 'Who are Dhanalakshmi Agro Products?',
        a: 'Dhanalakshmi Agro Products is a coconut-based food manufacturer and exporter based in Tiptur, Karnataka, India — the coconut capital of India. Established in 2007, we produce premium coconut-derived ingredients under our brand Kalpa Ruchi, supplying food manufacturers, retailers, and distributors across the globe.',
      },
      {
        q: 'Where are your manufacturing facilities located?',
        a: 'Our processing facility is located at SH47, Shankar Nagara, Tiptur, Karnataka 572226. Tiptur is renowned for its coconut cultivation and processing heritage, giving us direct access to the finest raw coconuts year-round.',
      },
    ],
  },
  {
    category: 'Products & Quality',
    items: [
      {
        q: 'What coconut products do you manufacture?',
        a: 'We manufacture 8 core products: Desiccated Coconut Powder, Desiccated Coconut Flakes, Virgin Coconut Oil, Coconut Milk, Coconut Shell, Testa, D-Fat Coconut Powder, and Coconut Milk Powder. All are available in multiple grades and packaging formats.',
      },
      {
        q: 'Are your products organic certified?',
        a: 'Yes. Our products are NPOP (National Programme for Organic Production) and NOP (USDA National Organic Program) compliant. We hold Organic Certification for our export-grade product lines. Please contact us for specific organic certificates for the product you need.',
      },
      {
        q: 'What is the shelf life of your products?',
        a: 'Shelf life varies by product: Desiccated Coconut Powder (12–18 months), Desiccated Coconut Flakes (12 months), Virgin Coconut Oil (24 months), Coconut Milk Powder (12–18 months), D-Fat Coconut Powder (12 months). All products are stored and packed under controlled conditions to maximise shelf life.',
      },
      {
        q: 'Do you offer private labelling or custom packaging?',
        a: 'Yes, we offer private labelling and custom packaging for qualified buyers. This includes custom bag sizes (25 kg, 50 kg bulk; 500 g, 1 kg retail), branded packaging, and custom moisture/fat specifications for specific product grades. Minimum order quantities apply for custom runs.',
      },
    ],
  },
  {
    category: 'Ordering & Pricing',
    items: [
      {
        q: 'What is the Minimum Order Quantity (MOQ)?',
        a: 'For export orders, the typical MOQ is one 20-foot container (approximately 10–15 MT depending on the product). For domestic orders, the MOQ starts at 100 kg per SKU. For sampling purposes, we offer 500 g to 1 kg commercial samples for evaluation.',
      },
      {
        q: 'How do I request a quote or place an order?',
        a: 'You can submit an enquiry through our Contact page or send an email directly to info@dhanalakshmiagroproducts.com with your product requirements, quantity, destination country, and preferred delivery terms. Our team will respond within 24 hours with a detailed quotation.',
      },
      {
        q: 'What payment terms do you offer?',
        a: 'We accept payment via Telegraphic Transfer (T/T), Letter of Credit (L/C) at sight, and Documents against Payment (D/P). Standard terms for new buyers are 100% advance or confirmed L/C. Established buyers may qualify for 30–50% advance + balance against shipping documents.',
      },
      {
        q: 'What is your typical lead time for export orders?',
        a: 'For standard products in stock, lead time is 7–14 business days from order confirmation. For large custom orders or specific grades, lead time may be 21–28 days. We will provide a confirmed production schedule at the time of order.',
      },
    ],
  },
  {
    category: 'Export & Shipping',
    items: [
      {
        q: 'Which countries do you export to?',
        a: 'We export to over 25 countries across Europe (UK, Germany, Netherlands, France), the Middle East (UAE, Saudi Arabia, Qatar), Asia-Pacific (Australia, Singapore, Malaysia), and the Americas (USA, Canada). If your country is not listed, please contact us — we evaluate new markets regularly.',
      },
      {
        q: 'What shipping terms (Incoterms) do you offer?',
        a: 'We offer FOB (Free on Board) Chennai/Mangalore ports, CIF (Cost, Insurance & Freight), and CFR (Cost and Freight) to all major ports. Ex-Works (EXW) is also available for buyers who manage their own freight.',
      },
      {
        q: 'What export documentation do you provide?',
        a: 'We provide a full set of export documents: Commercial Invoice, Packing List, Certificate of Origin (CoO), Bill of Lading, Certificate of Analysis (CoA), Phytosanitary Certificate, Health Certificate, and Fumigation Certificate where required. Halal and Organic certificates are provided on request.',
      },
    ],
  },
  {
    category: 'Certifications & Compliance',
    items: [
      {
        q: 'What certifications does Dhanalakshmi Agro Products hold?',
        a: 'We hold ISO 22000 (Food Safety Management System), FSSAI (India Food Safety), Organic Certification (NPOP/NOP), and Halal Certification. Our facility maintains GMP (Good Manufacturing Practices) and HACCP protocols throughout the production process.',
      },
      {
        q: 'Do you provide product samples before bulk orders?',
        a: 'Yes, we provide commercial samples (500 g – 1 kg) for buyer evaluation. Samples are available at cost price plus courier charges. Please contact our export team with your address and the product you wish to sample, and we will arrange dispatch within 3–5 business days.',
      },
      {
        q: 'How do you ensure consistent product quality?',
        a: "We operate an in-house quality laboratory that tests every batch for moisture, fat content, free fatty acids, microbial count, and sensory parameters before dispatch. Third-party testing by SGS, Intertek, or Bureau Veritas can be arranged at the buyer's request for an additional charge.",
      },
    ],
  },
]

export default function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>(null)

  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">

        {faqs.map((group) => (
          <div key={group.category} className="mb-12">

            {/* Category heading */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[0.68rem] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(18,84,38,0.08)', color: '#125426' }}
              >
                {group.category}
              </span>
              <div className="flex-1 h-px bg-beige" />
            </div>

            {/* Accordion items */}
            <div className="flex flex-col gap-3">
              {group.items.map((item) => {
                const key = `${group.category}-${item.q}`
                const isOpen = openKey === key

                return (
                  <motion.div
                    key={key}
                    layout
                    className="bg-card-white rounded-2xl border border-beige/60 overflow-hidden hover:shadow-card transition-shadow duration-300"
                  >
                    <button
                      onClick={() => setOpenKey(isOpen ? null : key)}
                      className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-playfair text-[1rem] font-semibold text-text-dark leading-snug group-hover:text-forest transition-colors">
                        {item.q}
                      </span>
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 mt-0.5"
                        style={{ background: isOpen ? '#125426' : 'rgba(18,84,38,0.08)' }}
                      >
                        {isOpen
                          ? <Minus className="w-3.5 h-3.5 text-white" />
                          : <Plus className="w-3.5 h-3.5" style={{ color: '#125426' }} />
                        }
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-[0.9rem] text-muted leading-relaxed">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
