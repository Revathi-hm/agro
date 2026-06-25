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
    // Core pages
    { url: BASE,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/products`,     lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE}/about`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/why-us`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/process`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.70 },
    { url: `${BASE}/gallery`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.65 },

    // All 8 product detail pages
    ...productPages,
  ]
}
