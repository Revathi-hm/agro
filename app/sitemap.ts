import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://dhanalakshmiagroproducts.com',          lastModified: new Date(), changeFrequency: 'monthly', priority: 1   },
    { url: 'https://dhanalakshmiagroproducts.com/about',    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://dhanalakshmiagroproducts.com/products', lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: 'https://dhanalakshmiagroproducts.com/process',  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://dhanalakshmiagroproducts.com/why-us',   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://dhanalakshmiagroproducts.com/gallery',  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]
}
