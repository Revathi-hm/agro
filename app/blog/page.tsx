import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import { ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Dhanalakshmi Agro Products',
  description: 'Insights on coconut processing, export regulations, product applications, and the health benefits of natural coconut products — from the team at Dhanalakshmi Agro Products.',
  openGraph: {
    title: 'Blog | Dhanalakshmi Agro Products',
    description: 'Expert insights on coconut products, export, and natural food manufacturing.',
    url: 'https://dhanalakshmiagroproducts.com/blog',
  },
  alternates: { canonical: 'https://dhanalakshmiagroproducts.com/blog' },
}

const articles = [
  {
    title: "Desiccated Coconut Powder vs Coconut Flour — What's the Difference?",
    excerpt: 'Buyers often confuse desiccated coconut powder with coconut flour. While both come from coconut, they are made differently, taste different, and behave differently in recipes. Here is what you need to know before placing an order.',
    category: 'Product Knowledge',
    readTime: '4 min read',
    slug: '#',
  },
  {
    title: 'Exporting Coconut Products from India — Regulations & Documentation',
    excerpt: 'A complete guide to the permits, phytosanitary certificates, and FSSAI requirements for exporting desiccated coconut, coconut oil, and coconut milk powder from India to Europe, the Middle East, and North America.',
    category: 'Export Guide',
    readTime: '7 min read',
    slug: '#',
  },
  {
    title: 'Why Cold-Pressed Virgin Coconut Oil Is Worth the Premium',
    excerpt: 'The difference between refined and virgin coconut oil goes far beyond taste. Cold-pressing preserves MCTs, lauric acid, and natural antioxidants that are destroyed by heat. For cosmetics and premium food applications, the grade matters.',
    category: 'Health & Nutrition',
    readTime: '5 min read',
    slug: '#',
  },
  {
    title: 'Understanding D-Fat Coconut Powder in Health Food Formulations',
    excerpt: 'Defatted coconut powder has seen growing demand from protein bar and supplement manufacturers. With 30–40% dietary fibre and 18–22% protein, it fills a unique space in functional food ingredient sourcing.',
    category: 'Product Knowledge',
    readTime: '6 min read',
    slug: '#',
  },
  {
    title: 'How to Choose the Right Desiccated Coconut Grade for Your Application',
    excerpt: 'Fine, medium, coarse, high-fat, low-fat — desiccated coconut comes in more grades than most buyers realise. This guide maps each grade to its ideal food manufacturing application.',
    category: 'Buyer Guide',
    readTime: '5 min read',
    slug: '#',
  },
  {
    title: "The Tiptur Coconut Belt — Why Karnataka Produces India's Best Coconut",
    excerpt: "Tiptur and the surrounding Tumkur district account for over 30% of India's desiccated coconut output. The soil, climate, and traditional farming methods behind this concentration of quality — and why it matters for buyers.",
    category: 'Our Story',
    readTime: '4 min read',
    slug: '#',
  },
]

const categoryColours: Record<string, { bg: string; text: string }> = {
  'Product Knowledge': { bg: 'rgba(18,84,38,0.07)',   text: '#125426' },
  'Export Guide':      { bg: 'rgba(26,94,138,0.07)',  text: '#1a5e8a' },
  'Health & Nutrition':{ bg: 'rgba(93,107,54,0.08)',  text: '#5D6B36' },
  'Buyer Guide':       { bg: 'rgba(122,82,48,0.07)',  text: '#7A5230' },
  'Our Story':         { bg: 'rgba(47,41,19,0.07)',   text: '#2F2913' },
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Insights"
        title="Knowledge from the Grove"
        description="Guides, product knowledge, and industry insights from 15+ years of coconut product manufacturing and export."
        breadcrumb="Blog"
      />

      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Coming soon notice */}
          <div className="mb-12 px-6 py-4 rounded-2xl border border-beige bg-card-white text-sm text-muted">
            Full articles coming soon — we are currently writing in-depth guides for buyers and partners. Subscribe in the footer to be notified when new posts are published.
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => {
              const colour = categoryColours[article.category] ?? { bg: 'rgba(18,84,38,0.07)', text: '#125426' }
              return (
                <div
                  key={article.title}
                  className="bg-card-white rounded-3xl border border-beige/60 overflow-hidden hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
                >
                  {/* Category + read time */}
                  <div className="px-6 pt-6 pb-0 flex items-center justify-between">
                    <span
                      className="text-[0.65rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{ background: colour.bg, color: colour.text }}
                    >
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-[0.7rem] text-muted">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="font-playfair text-lg font-bold text-text-dark leading-snug mb-3">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed mb-6 flex-1">{article.excerpt}</p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-muted cursor-default">
                      Coming Soon <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-14 bg-card-white border-t border-beige/40">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-2xl font-bold text-text-dark mb-3">Get Notified When We Publish</h2>
          <p className="text-muted text-sm mb-6">Subscribe to our newsletter below — we publish guides for B2B buyers, product launches, and export updates.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-bold text-sm text-white rounded-full hover:-translate-y-0.5 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #125426 0%, #5D6B36 100%)' }}
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
