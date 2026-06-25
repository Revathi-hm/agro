/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },

  async redirects() {
    return [
      // ── www → non-www (replaces .htaccess rule, extended to all paths) ──
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.dhanalakshmiagroproducts.com' }],
        destination: 'https://dhanalakshmiagroproducts.com/:path*',
        permanent: true,
      },

      // ── Old .html URLs → new Next.js routes (SEO-critical 301s) ──
      // These were in the sitemap at dhanalakshmiagroproducts.com and must not 404
      { source: '/index.html',                     destination: '/',                                     permanent: true },
      { source: '/about.html',                     destination: '/about',                                permanent: true },
      { source: '/gallery2.html',                  destination: '/gallery',                              permanent: true },
      { source: '/classes.html',                   destination: '/products',                             permanent: true },
      { source: '/contact.html',                   destination: '/#contact',                             permanent: true },
      { source: '/desiccated-coconut-powder.html', destination: '/products/desiccated-coconut-powder',   permanent: true },
      { source: '/desiccated-coconut-flakes.html', destination: '/products/desiccated-coconut-flakes',   permanent: true },
      { source: '/coconut-shell.html',             destination: '/products/coconut-shell',               permanent: true },
      { source: '/coconut-testa.html',             destination: '/products/testa',                       permanent: true },
      { source: '/vco.html',                       destination: '/products/virgin-coconut-oil',          permanent: true },
      { source: '/coconut-milk.html',              destination: '/products/coconut-milk',                permanent: true },
      { source: '/d-fat-coconut-powder.html',      destination: '/products/d-fat-coconut-powder',        permanent: true },
      { source: '/coconut-milk-p.html',            destination: '/products/coconut-milk-powder',         permanent: true },
    ]
  },
}

export default nextConfig
