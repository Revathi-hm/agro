export interface Product {
  id: number
  slug: string
  name: string
  tagline: string
  badge: string
  desc: string
  longDesc: string
  image: string
  modalImage: string
  uses: string[]
  specs: { label: string; value: string }[]
  grades: string[]
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'desiccated-coconut-powder',
    name: 'Desiccated Coconut Powder',
    tagline: 'Export Grade',
    badge: 'Export Grade',
    desc: 'Ultra-fine coconut powder with natural sweetness and aroma.',
    longDesc: 'Made from freshly grated coconut flesh, carefully dried and milled to a fine, uniform consistency. Retains natural flavour, aroma, and nutritional value — no artificial additives.',
    image: '/images/desiccated-coconut-powder.png',
    modalImage: '/images/desiccated-coconut-powder.png',
    uses: ['Baking & Confectionery', 'Beverages', 'Ice Cream', 'Chocolates', 'Cereals'],
    specs: [
      { label: 'Moisture', value: '≤ 3%' },
      { label: 'Fat Content', value: '60–65%' },
      { label: 'Particle Size', value: 'Fine / Medium / Coarse' },
      { label: 'Shelf Life', value: '12 months' },
      { label: 'Packaging', value: '25 kg bags / Custom' },
    ],
    grades: ['Fine Grade', 'Medium Grade', 'Coarse Grade', 'High Fat Grade'],
  },
  {
    id: 2,
    slug: 'desiccated-coconut-flakes',
    name: 'Desiccated Coconut Flakes',
    tagline: 'Premium',
    badge: 'Premium',
    desc: 'Lightly dried coconut strips — sweet, chewy, and versatile.',
    longDesc: 'Premium flakes from hand-selected mature coconuts. Available in fine, medium, and coarse grades. Perfect for baking, snacking, or as a natural garnish.',
    image: '/images/coconut-flakes.png',
    modalImage: '/images/coconut-flakes.png',
    uses: ['Granola & Muesli', 'Toppings', 'Baking', 'Snack Bars', 'Desserts'],
    specs: [
      { label: 'Moisture', value: '≤ 3%' },
      { label: 'Fat Content', value: '60–65%' },
      { label: 'Size', value: 'Thin / Medium / Thick' },
      { label: 'Shelf Life', value: '12 months' },
      { label: 'Packaging', value: '25 kg bags / Custom' },
    ],
    grades: ['Thin Flakes', 'Medium Flakes', 'Thick Flakes', 'Toasted Flakes'],
  },
  {
    id: 3,
    slug: 'virgin-coconut-oil',
    name: 'Virgin Coconut Oil',
    tagline: 'Cold-Pressed',
    badge: 'Cold-Pressed',
    desc: 'Cold-pressed, unrefined oil with a delicate coconut fragrance.',
    longDesc: 'Cold-pressed from fresh coconut milk without heat or chemicals. Preserves all natural antioxidants, vitamins, and the characteristic mild coconut aroma.',
    image: '/images/virgin-coconut-oil.jpg',
    modalImage: '/images/virgin-coconut-oil.jpg',
    uses: ['Cooking & Frying', 'Skincare', 'Hair Care', 'Health Supplements', 'Cosmetics'],
    specs: [
      { label: 'FFA', value: '≤ 0.1%' },
      { label: 'Moisture', value: '≤ 0.1%' },
      { label: 'Process', value: 'Cold-pressed, unrefined' },
      { label: 'Shelf Life', value: '24 months' },
      { label: 'Packaging', value: '500 ml / 1 L / Bulk' },
    ],
    grades: ['Food Grade', 'Cosmetic Grade', 'Organic Grade'],
  },
  {
    id: 4,
    slug: 'coconut-milk',
    name: 'Coconut Milk',
    tagline: 'Natural',
    badge: 'Natural',
    desc: 'Rich, creamy coconut milk with deep flavour and high fat content.',
    longDesc: 'Freshly pressed from mature coconut flesh. Full-bodied, rich texture with naturally high coconut fat content. Available as standard, lite, and organic variants.',
    image: '/images/coconut-milk.png',
    modalImage: '/images/coconut-milk.png',
    uses: ['Curries & Soups', 'Smoothies', 'Baking', 'Dairy-Free Cooking', 'Beverages'],
    specs: [
      { label: 'Fat Content', value: '17–22% (standard)' },
      { label: 'Total Solids', value: '22–28%' },
      { label: 'pH', value: '5.5–6.5' },
      { label: 'Shelf Life', value: '18 months' },
      { label: 'Packaging', value: 'Aseptic cartons / Cans / Bulk' },
    ],
    grades: ['Standard (Full Fat)', 'Lite (Low Fat)', 'Organic', 'Concentrated'],
  },
  {
    id: 5,
    slug: 'coconut-shell',
    name: 'Coconut Shell',
    tagline: 'Eco-Friendly',
    badge: 'Eco-Friendly',
    desc: 'Hard, fibrous shells — ideal for activated carbon and crafts.',
    longDesc: 'Premium-grade shells from mature, fully ripened coconuts. Cleaned, graded, and dried. Used for activated carbon, crafts, and fuel briquettes.',
    image: '/images/coconut-shells.png',
    modalImage: '/images/coconut-shells.png',
    uses: ['Activated Carbon', 'Craft & Decor', 'Fuel Briquettes', 'Horticulture', 'Incense'],
    specs: [
      { label: 'Moisture', value: '≤ 10%' },
      { label: 'Ash Content', value: '≤ 1%' },
      { label: 'Size', value: 'Half shell / Chips / Powder' },
      { label: 'Shelf Life', value: '24 months' },
      { label: 'Packaging', value: '50 kg bags / Bulk' },
    ],
    grades: ['Shell Halves', 'Shell Chips', 'Shell Powder', 'Activated Carbon Grade'],
  },
  {
    id: 6,
    slug: 'testa',
    name: 'Testa',
    tagline: 'By-Product',
    badge: 'By-Product',
    desc: 'The inner brown skin of coconut — rich in fibre and nutrients.',
    longDesc: 'The thin brown skin between the shell and white kernel. Rich in dietary fibre, antioxidants, and phenolic compounds. Used in health foods, animal feed, and nutraceuticals.',
    image: '/images/coconut-testa.png',
    modalImage: '/images/coconut-testa.png',
    uses: ['Health Foods', 'Animal Feed', 'Fibre Supplements', 'Food Industry', 'Nutraceuticals'],
    specs: [
      { label: 'Fibre Content', value: '45–55%' },
      { label: 'Moisture', value: '≤ 8%' },
      { label: 'Form', value: 'Powder / Flakes' },
      { label: 'Shelf Life', value: '12 months' },
      { label: 'Packaging', value: '25 kg bags' },
    ],
    grades: ['Food Grade', 'Feed Grade', 'Industrial Grade'],
  },
  {
    id: 7,
    slug: 'd-fat-coconut-powder',
    name: 'D-Fat Coconut Powder',
    tagline: 'Low Fat',
    badge: 'Low Fat',
    desc: 'Desiccated coconut with reduced fat — ideal for health-conscious use.',
    longDesc: 'Fat-extraction process reduces fat content significantly while preserving coconut flavour and fibre. Ideal for health-conscious consumers and specialty food applications.',
    image: '/images/d-fat-coconut-powder.png',
    modalImage: '/images/d-fat-coconut-powder.png',
    uses: ['Dietary Foods', 'Protein Powders', 'Health Bars', 'Weight Management', 'Baking'],
    specs: [
      { label: 'Fat Content', value: '≤ 14%' },
      { label: 'Moisture', value: '≤ 3%' },
      { label: 'Protein', value: '6–8%' },
      { label: 'Shelf Life', value: '12 months' },
      { label: 'Packaging', value: '25 kg bags / Custom' },
    ],
    grades: ['Low Fat (≤14%)', 'Defatted (≤8%)', 'Partially Defatted'],
  },
  {
    id: 8,
    slug: 'coconut-milk-powder',
    name: 'Coconut Milk Powder',
    tagline: 'Instant',
    badge: 'Instant',
    desc: 'Spray-dried coconut milk — easy to use, long shelf life.',
    longDesc: 'Spray-dried fresh coconut milk. Dissolves instantly in warm water. 24-month shelf life, no refrigeration required — perfect for retail and food service.',
    image: '/images/coconut-milk-powder.png',
    modalImage: '/images/coconut-milk-powder.png',
    uses: ['Instant Beverages', 'Ready Meals', 'Baking', 'Confectionery', 'Soups & Sauces'],
    specs: [
      { label: 'Fat Content', value: '42–50%' },
      { label: 'Moisture', value: '≤ 3%' },
      { label: 'Solubility', value: '98%+' },
      { label: 'Shelf Life', value: '24 months' },
      { label: 'Packaging', value: '25 kg bags / 1 kg retail' },
    ],
    grades: ['Full Fat', 'Reduced Fat', 'Organic', 'Instant Dissolve'],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
