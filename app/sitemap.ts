import { MetadataRoute } from 'next'

const BASE = 'https://dhanalakshmiagroproducts.com'

const productSlugs = [
  'desiccated-coconut-powder',
  'desiccated-coconut-flakes',
  'virgin-coconut-oil',
  'coconut-milk',
  'coconut-shell',
  'testa',
  'd-fat-coconut-powder',
  'coconut-milk-powder',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${BASE}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    // Core pages — highest priority
    { url: BASE,                           lastModified: new Date(), changeFrequency: 'weekly',   priority: 1.0 },
    { url: `${BASE}/products`,             lastModified: new Date(), changeFrequency: 'weekly',   priority: 0.95 },
    { url: `${BASE}/contact`,              lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${BASE}/certifications`,       lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.85 },

    // Individual product pages
    ...productPages,

    // Supporting pages
    { url: `${BASE}/about`,                lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.75 },
    { url: `${BASE}/why-us`,               lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.75 },
    { url: `${BASE}/process`,              lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.70 },
    { url: `${BASE}/gallery`,              lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.65 },
    { url: `${BASE}/faq`,                  lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.65 },

    // Legal — low priority, still indexed
    { url: `${BASE}/privacy-policy`,       lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.2 },
    { url: `${BASE}/terms`,                lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.2 },
  ]
}
