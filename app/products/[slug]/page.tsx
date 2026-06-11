import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ArrowRight, Send } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { products, getProductBySlug } from '@/data/products'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

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
    },
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const related = products.filter((p) => p.slug !== product!.slug).slice(0, 4)
  const p = product!

  return (
    <main className="bg-ivory min-h-screen">
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div className="pt-28 pb-4 bg-ivory border-b border-beige/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 text-xs text-muted flex-wrap">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <Link href="/products" className="hover:text-forest transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <span className="font-semibold text-forest">{p.name}</span>
          </div>
        </div>
      </div>

      {/* ── Hero: image + info ── */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left: Image */}
            <div className="bg-card-white rounded-3xl border border-beige/60 shadow-card flex items-center justify-center p-10">
              <Image
                src={p.image}
                alt={p.name}
                width={400}
                height={400}
                className="object-contain w-full max-h-[360px]"
                priority
              />
            </div>

            {/* Right: Details */}
            <div className="flex flex-col gap-5">
              <span
                className="self-start text-[0.68rem] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(18,84,38,0.08)', color: '#125426' }}
              >
                {p.badge}
              </span>

              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-text-dark leading-[1.1]">
                {p.name}
              </h1>

              <p className="text-muted leading-relaxed text-[0.95rem]">{p.longDesc}</p>

              {/* Applications */}
              <div>
                <p className="text-[0.68rem] font-bold tracking-widest uppercase text-olive mb-3">Applications</p>
                <div className="flex flex-wrap gap-2">
                  {p.uses.map((u) => (
                    <span
                      key={u}
                      className="text-[0.75rem] font-medium px-3 py-1.5 rounded-full border"
                      style={{ background: 'rgba(18,84,38,0.06)', color: '#125426', borderColor: 'rgba(18,84,38,0.15)' }}
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className="bg-card-white rounded-2xl border border-beige/60 overflow-hidden">
                <div className="px-5 py-3 border-b border-beige/60">
                  <p className="text-[0.68rem] font-bold tracking-widest uppercase text-olive">Specifications</p>
                </div>
                <table className="w-full">
                  <tbody>
                    {p.specs.map((s, i) => (
                      <tr key={s.label} className={i < p.specs.length - 1 ? 'border-b border-beige/40' : ''}>
                        <td className="px-5 py-3 text-sm font-semibold text-text-dark w-2/5">{s.label}</td>
                        <td className="px-5 py-3 text-sm text-muted">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Grades */}
              <div>
                <p className="text-[0.68rem] font-bold tracking-widest uppercase text-olive mb-3">Available Grades</p>
                <div className="flex flex-wrap gap-2">
                  {p.grades.map((g) => (
                    <span
                      key={g}
                      className="text-[0.75rem] font-medium px-3 py-1.5 rounded-full border"
                      style={{ background: 'rgba(93,107,54,0.08)', color: '#5D6B36', borderColor: 'rgba(93,107,54,0.2)' }}
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm text-white rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-green"
                  style={{ background: 'linear-gradient(135deg, #125426 0%, #5D6B36 100%)' }}
                >
                  <Send className="w-4 h-4" /> Enquire Now
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

      {/* ── Related Products ── */}
      <section className="py-16 bg-card-white border-t border-beige/40">
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
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/products/${r.slug}`}
                className="group bg-ivory rounded-2xl overflow-hidden border border-beige/50 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center p-5 bg-ivory" style={{ height: 160 }}>
                  <Image
                    src={r.image}
                    alt={r.name}
                    width={130}
                    height={130}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-card-white">
                  <span className="text-[0.6rem] font-bold tracking-widest uppercase" style={{ color: '#858367' }}>{r.badge}</span>
                  <h4 className="font-playfair text-[0.9rem] font-bold text-text-dark mt-1 leading-snug">{r.name}</h4>
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
