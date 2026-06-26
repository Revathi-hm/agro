import { MetadataRoute } from 'next'
import { products } from '@/data/products'

const BASE = 'https://dhanalakshmiagroproducts.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    // ── Core pages ───────────────────────────────────────────────
    { url: BASE,                        lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0  },
    { url: `${BASE}/products`,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE}/contact`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.90 },
    { url: `${BASE}/certifications`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/about`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/why-us`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/process`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.70 },
    { url: `${BASE}/gallery`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/blog`,              lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.60 },

    // ── All 8 product detail pages ───────────────────────────────
    ...productPages,

    // ── Legal (low priority — tell Google not to skip) ───────────
    { url: `${BASE}/privacy-policy`,    lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.20 },
    { url: `${BASE}/terms`,             lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.20 },
  ]
}
