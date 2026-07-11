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
      // Old gallery pages
      { source: '/gallery2',                          destination: '/gallery',                              permanent: true },
      { source: '/gallery2.html',                     destination: '/gallery',                              permanent: true },

      // Old product .html pages
      { source: '/desiccated-coconut-powder.html',    destination: '/products/desiccated-coconut-powder',   permanent: true },
      { source: '/desiccated-coconut-flakes.html',    destination: '/products/desiccated-coconut-flakes',   permanent: true },
      { source: '/virgin-coconut-oil.html',           destination: '/products/virgin-coconut-oil',          permanent: true },
      { source: '/coconut-milk.html',                 destination: '/products/coconut-milk',                permanent: true },
      { source: '/coconut-milk-powder.html',          destination: '/products/coconut-milk-powder',         permanent: true },
      { source: '/coconut-shell.html',                destination: '/products/coconut-shell',               permanent: true },
      { source: '/coconut-testa.html',                destination: '/products/testa',                       permanent: true },
      { source: '/testa.html',                        destination: '/products/testa',                       permanent: true },
      { source: '/d-fat-coconut-powder.html',         destination: '/products/d-fat-coconut-powder',        permanent: true },

      // Old short slugs (no /products/ prefix, no .html)
      { source: '/desiccated-coconut-powder',         destination: '/products/desiccated-coconut-powder',   permanent: true },
      { source: '/desiccated-coconut-flakes',         destination: '/products/desiccated-coconut-flakes',   permanent: true },
      { source: '/virgin-coconut-oil',                destination: '/products/virgin-coconut-oil',          permanent: true },
      { source: '/coconut-milk-powder',               destination: '/products/coconut-milk-powder',         permanent: true },
      { source: '/coconut-shell',                     destination: '/products/coconut-shell',               permanent: true },
      { source: '/coconut-testa',                     destination: '/products/testa',                       permanent: true },
      { source: '/d-fat-coconut-powder',              destination: '/products/d-fat-coconut-powder',        permanent: true },

      // Abbreviated slugs from old site
      { source: '/vco',                               destination: '/products/virgin-coconut-oil',          permanent: true },
      { source: '/vco.html',                          destination: '/products/virgin-coconut-oil',          permanent: true },
    ]
  },
}

export default nextConfig
