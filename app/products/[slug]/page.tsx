import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { products, getProductBySlug } from '@/data/products'

/* ── Static params for all 8 products ── */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

/* ── Per-product metadata ── */
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.longDesc,
    keywords: [product.name, 'coconut products India', 'Dhanalakshmi Agro Products', product.badge, 'Kalpa Ruchi'],
    openGraph: {
      title: `${product.name} | Dhanalakshmi Agro Products`,
      description: product.longDesc,
      url: `https://dhanalakshmiagroproducts.com/products/${product.slug}`,
      images: [{ url: product.image, alt: product.name }],
    },
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4)

  return (
    <main>
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-0 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0EBE3 0%, #F3EEE9 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(93,107,54,0.07),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-muted mb-8 flex-wrap">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-forest transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="font-semibold" style={{ color: '#125426' }}>{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center pb-16">
            {/* Image */}
            <div className="flex items-center justify-center bg-card-white rounded-3xl p-10 shadow-card border border-beige/40">
              <Image
                src={product.image}
                alt={product.name}
                width={420}
                height={420}
                className="object-contain w-full max-h-[380px]"
                priority
              />
            </div>

            {/* Info */}
            <div>
              <span className="inline-block text-[0.68rem] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full mb-4"
                style={{ background: 'rgba(18,84,38,0.1)', color: '#125426' }}>
                {product.badge}
              </span>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-text-dark leading-[1.1] mb-4">
                {product.name}
              </h1>
              <p className="text-muted leading-relaxed mb-6 text-[0.95rem]">{product.longDesc}</p>

              {/* Uses */}
              <p className="text-[0.7rem] font-bold tracking-widest uppercase text-olive mb-3">Applications</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {product.uses.map((u) => (
                  <span key={u} className="text-[0.75rem] font-medium px-3 py-1.5 rounded-full border"
                    style={{ background: 'rgba(18,84,38,0.06)', color: '#125426', borderColor: 'rgba(18,84,38,0.15)' }}>
                    {u}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm text-white rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-green"
                  style={{ background: 'linear-gradient(135deg, #125426 0%, #5D6B36 100%)' }}
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm rounded-full border-2 transition-all duration-300 hover:bg-forest/5"
                  style={{ color: '#125426', borderColor: 'rgba(18,84,38,0.25)' }}
                >
                  All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specifications & Grades ── */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Specs */}
            <div className="bg-card-white rounded-3xl p-8 border border-beige/40 shadow-card">
              <p className="text-[0.7rem] font-bold tracking-widest uppercase text-olive mb-6">Specifications</p>
              <table className="w-full">
                <tbody>
                  {product.specs.map((s, i) => (
                    <tr key={s.label} className={i < product.specs.length - 1 ? 'border-b border-beige/60' : ''}>
                      <td className="py-3 pr-4 text-sm font-semibold text-text-dark w-2/5">{s.label}</td>
                      <td className="py-3 text-sm text-muted">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Grades */}
            <div className="bg-card-white rounded-3xl p-8 border border-beige/40 shadow-card">
              <p className="text-[0.7rem] font-bold tracking-widest uppercase text-olive mb-6">Available Grades</p>
              <div className="flex flex-col gap-3">
                {product.grades.map((g, i) => (
                  <div key={g} className="flex items-center gap-3 py-3 border-b border-beige/60 last:border-0">
                    <span className="w-6 h-6 rounded-full bg-forest/10 border border-forest/20 flex items-center justify-center text-[0.65rem] font-bold text-forest flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-text-dark">{g}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-2xl" style={{ background: 'rgba(18,84,38,0.05)', border: '1px solid rgba(18,84,38,0.1)' }}>
                <p className="text-xs text-muted leading-relaxed">
                  Custom grades and packaging available on request. Contact us for bulk orders and private label options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ── */}
      <section className="py-20 bg-card-white border-t border-beige/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="section-label">Explore More</p>
              <h2 className="font-playfair text-3xl font-bold text-text-dark">Related Products</h2>
            </div>
            <Link href="/products" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-forest hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.slug}`}
                className="group bg-ivory rounded-2xl overflow-hidden border border-beige/50 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-ivory flex items-center justify-center p-5" style={{ height: 160 }}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={140}
                    height={140}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-card-white">
                  <span className="text-[0.6rem] font-bold tracking-widest uppercase" style={{ color: '#858367' }}>{p.badge}</span>
                  <h4 className="font-playfair text-[0.9rem] font-bold text-text-dark mt-1 leading-snug">{p.name}</h4>
                  <span className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-forest mt-2 group-hover:gap-2 transition-all">
                    View <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
