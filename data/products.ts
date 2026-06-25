export interface NutritionRow {
  label: string
  value: string
}

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
  // Rich content sourced from original Quill HTML pages
  whatIs: string
  howMade: string[]
  nutritionFacts: NutritionRow[]
  keyFeatures?: string[]
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'desiccated-coconut-powder',
    name: 'Desiccated Coconut Powder',
    tagline: 'Export Grade',
    badge: 'Export Grade',
    desc: 'Ultra-fine coconut powder with natural sweetness and aroma.',
    longDesc:
      'Desiccated coconut is the product obtained by drying the granulated or shredded white meat of the fully mature coconut kernel through mechanical air drying. Made from freshly grated coconut flesh, carefully dried and milled to a fine, uniform consistency — retaining natural flavour, aroma, and nutritional value with no artificial additives.',
    image: '/images/desiccated-coconut-powder.png',
    modalImage: '/images/desiccated-coconut-powder.png',
    uses: ['Baking & Confectionery', 'Smoothies & Beverages', 'Ice Cream', 'Chocolates', 'Cereals & Granola', 'Coatings for Meat & Fish'],
    specs: [
      { label: 'Moisture',       value: '≤ 3%' },
      { label: 'Fat Content',    value: '60–65%' },
      { label: 'Particle Size',  value: 'Fine / Medium / Coarse' },
      { label: 'Shelf Life',     value: '12 months' },
      { label: 'Packaging',      value: '25 kg bags / Custom' },
    ],
    grades: ['Fine Grade', 'Medium Grade', 'Coarse Grade', 'High Fat Grade'],
    whatIs:
      'A free-flowing white powder made from pasteurised, homogenised, and spray-dried natural extract of coconut kernel. Obtained by drying ground or shredded coconut kernel after removal of the brown testa. Finds extensive use in confectioneries, puddings, and many other food preparations.',
    howMade: [
      'Harvesting — mature coconuts carefully selected from certified farms',
      'Husking — outer green husk removed to expose the coconut shell',
      'Extracting — white kernel extracted and separated from the shell',
      'Washing — kernel thoroughly cleaned to remove any surface impurities',
      'Grating — kernel finely grated or shredded to uniform particle size',
      'Drying — moisture reduced under precisely controlled temperature using mechanical air drying',
      'Milling — dried coconut milled to achieve fine, medium, or coarse powder grades',
      'Packaging — sealed in food-grade, tamper-proof bags to preserve freshness',
    ],
    nutritionFacts: [
      { label: 'Calories',       value: '666.7 kcal per 100g' },
      { label: 'Total Fat',      value: '60g' },
      { label: 'Carbohydrates',  value: '26.6g' },
      { label: 'Protein',        value: '6g' },
    ],
  },

  {
    id: 2,
    slug: 'desiccated-coconut-flakes',
    name: 'Desiccated Coconut Flakes',
    tagline: 'Premium',
    badge: 'Premium',
    desc: 'Lightly dried coconut strips — sweet, chewy, and versatile.',
    longDesc:
      'A type of dried coconut that has been grated or shredded into larger pieces and dried to remove moisture. Commonly used in baking, as a topping for desserts or smoothie bowls, and in savoury dishes. A great source of fibre, healthy fats, and essential vitamins and minerals.',
    image: '/images/coconut-flakes.png',
    modalImage: '/images/coconut-flakes.png',
    uses: ['Granola & Muesli', 'Dessert Toppings', 'Baking', 'Snack Bars', 'Smoothie Bowls', 'Savoury Dishes'],
    specs: [
      { label: 'Moisture',       value: '≤ 3%' },
      { label: 'Fat Content',    value: '60–65%' },
      { label: 'Size',           value: 'Thin / Medium / Thick' },
      { label: 'Shelf Life',     value: '12 months' },
      { label: 'Packaging',      value: '25 kg bags / Custom' },
    ],
    grades: ['Thin Flakes', 'Medium Flakes', 'Thick Flakes', 'Toasted Flakes'],
    whatIs:
      'Desiccated coconut flakes are produced from the white meat of mature coconuts, cut or shredded into larger pieces compared to desiccated powder, then dried to reduce moisture. They retain the natural sweetness, aroma, and nutritional value of fresh coconut in a shelf-stable form.',
    howMade: [
      'Harvesting — mature coconuts selected from certified sustainable farms',
      'Husking & shell removal — outer husk and shell removed to access the white kernel',
      'Shredding — kernel cut into thin, medium, or thick strips to order',
      'Washing — shredded flakes washed to remove surface residues',
      'Drying — controlled-temperature drying to ≤3% moisture',
      'Grading & sorting — flakes graded by size and quality',
      'Packaging — sealed in food-grade bags for freshness and shelf life',
    ],
    nutritionFacts: [
      { label: 'Calories',       value: '666.7 kcal per 100g' },
      { label: 'Total Fat',      value: '60g' },
      { label: 'Carbohydrates',  value: '26.6g' },
      { label: 'Protein',        value: '6g' },
    ],
  },

  {
    id: 3,
    slug: 'virgin-coconut-oil',
    name: 'Virgin Coconut Oil',
    tagline: 'Cold-Pressed',
    badge: 'Cold-Pressed',
    desc: 'Cold-pressed, unrefined oil with a delicate coconut fragrance.',
    longDesc:
      'Extracted from fresh coconuts using the traditional cold-press method with zero chemicals, preservatives, or artificial processing. Preserves all natural antioxidants, vitamins, and the characteristic mild coconut aroma. Rich in medium-chain triglycerides (MCTs) and lauric acid.',
    image: '/images/virgin-coconut-oil.jpg',
    modalImage: '/images/virgin-coconut-oil.jpg',
    uses: ['Cooking & Baking', 'Oil Pulling', 'Skincare & Beauty', 'Hair & Scalp Care', 'Health Supplements', 'Massage Oil'],
    specs: [
      { label: 'FFA',            value: '≤ 0.1%' },
      { label: 'Moisture',       value: '≤ 0.1%' },
      { label: 'Process',        value: 'Cold-pressed, unrefined' },
      { label: 'Shelf Life',     value: '24 months' },
      { label: 'Packaging',      value: '500 ml / 1 L / Bulk' },
    ],
    grades: ['Food Grade', 'Cosmetic Grade', 'Organic Grade'],
    whatIs:
      'Virgin Coconut Oil is extracted from fresh coconuts using the traditional cold-press method — the purest gift from nature. Unlike refined oils, it undergoes zero chemicals, preservatives, or artificial processing, retaining all natural antioxidants, vitamins, and the characteristic mild coconut fragrance.',
    howMade: [
      'Select coconuts — mature coconuts hand-picked from certified farms at peak ripeness',
      'Grate and cold-press — fresh coconut grated and pressed to extract coconut milk without heat',
      'Natural separation — coconut milk is naturally separated without heat or chemicals to yield pure oil',
      'Pure unrefined product — oil bottled directly without any refining, bleaching, or deodorising',
    ],
    nutritionFacts: [
      { label: 'Calories',        value: '862 kcal per 100g' },
      { label: 'Total Fat',       value: '100g' },
      { label: 'Saturated Fat',   value: '86–90g' },
      { label: 'Lauric Acid',     value: '40–50%' },
    ],
    keyFeatures: [
      'Cold-Pressed & Unrefined',
      '100% Pure & Natural',
      'Rich in MCTs & Lauric Acid',
      'Promotes Healthy Digestion',
      'Skin & Hair Care Benefits',
      'Versatile for Daily Use',
    ],
  },

  {
    id: 4,
    slug: 'coconut-milk',
    name: 'Coconut Milk',
    tagline: 'Natural',
    badge: 'Natural',
    desc: 'Rich, creamy coconut milk with deep flavour and high fat content.',
    longDesc:
      'A plant-based liquid extracted from the grated white flesh of mature coconuts, characterised by a creamy texture and rich, slightly sweet flavour. Freshly pressed from mature coconut flesh — full-bodied, with naturally high coconut fat content. Available as standard, lite, and organic variants.',
    image: '/images/coconut-milk.png',
    modalImage: '/images/coconut-milk.png',
    uses: ['Curries & Soups', 'Smoothies & Beverages', 'Baking & Desserts', 'Dairy-Free Cooking', 'Rice & Porridge', 'Sauces & Dressings'],
    specs: [
      { label: 'Fat Content',    value: '17–22% (standard)' },
      { label: 'Total Solids',   value: '22–28%' },
      { label: 'pH',             value: '5.5–6.5' },
      { label: 'Shelf Life',     value: '18 months' },
      { label: 'Packaging',      value: 'Aseptic cartons / Cans / Bulk' },
    ],
    grades: ['Standard (Full Fat)', 'Lite (Low Fat)', 'Organic', 'Concentrated'],
    whatIs:
      'Coconut milk is a plant-based liquid extracted from the grated white flesh of mature coconuts. Finely grating the coconut meat and pressing it releases a thick, smooth, and flavourful liquid with a naturally creamy texture and a rich, slightly sweet taste.',
    howMade: [
      'Select coconuts — mature coconuts of consistent quality selected',
      'Grate and soak — coconut meat finely grated and soaked in warm water to loosen the fat',
      'Press — grated coconut pressed through fine cloth to release the rich, milky liquid',
      'First pressing — full-fat coconut milk collected from the initial press for premium grade',
      'Filtration — milk filtered to remove solid particles and ensure smooth, uniform consistency',
      'Packaging — sealed in aseptic cartons, cans, or bulk containers',
    ],
    nutritionFacts: [
      { label: 'Fat Content',    value: '17–22% (standard grade)' },
      { label: 'Total Solids',   value: '22–28%' },
      { label: 'Carbohydrates',  value: '3–4g per 100ml' },
      { label: 'Protein',        value: '1–2g per 100ml' },
    ],
  },

  {
    id: 5,
    slug: 'coconut-shell',
    name: 'Coconut Shell',
    tagline: 'Eco-Friendly',
    badge: 'Eco-Friendly',
    desc: 'Hard, fibrous shells — ideal for activated carbon and crafts.',
    longDesc:
      'An agricultural by-product widely available in tropical countries. The hard outer covering of the coconut has a high calorific value of 20.8 MJ/kg, making it ideal for producing activated carbon (25–30% yield by pit method), charcoal briquettes, and steam or bio-oil through thermochemical conversion.',
    image: '/images/coconut-shells.png',
    modalImage: '/images/coconut-shells.png',
    uses: ['Activated Carbon Production', 'Craft & Decor', 'Fuel & Charcoal Briquettes', 'Horticulture & Gardening', 'Animal Bedding', 'Incense & Aroma Products'],
    specs: [
      { label: 'Moisture',       value: '≤ 10%' },
      { label: 'Ash Content',    value: '≤ 1%' },
      { label: 'Calorific Value',value: '20.8 MJ/kg' },
      { label: 'Size',           value: 'Half shell / Chips / Powder' },
      { label: 'Shelf Life',     value: '24 months' },
      { label: 'Packaging',      value: '50 kg bags / Bulk' },
    ],
    grades: ['Shell Halves', 'Shell Chips', 'Shell Powder', 'Activated Carbon Grade'],
    whatIs:
      'The hard outer covering of the coconut, composed of three layers — exocarp, mesocarp, and endocarp. Brown in colour with a rough fibrous texture, coconut shell is widely available as an agricultural by-product in tropical countries. It is valued for its high calorific value and versatility in industrial and artisanal applications.',
    howMade: [
      'Collection — shells collected after coconut kernel extraction at processing facilities',
      'Cleaning — residual fibre, husk, and surface deposits removed',
      'Grading — shells sorted by size and quality into half-shells, chips, or powder',
      'Drying — moisture reduced to ≤10% for long shelf life and stability',
      'Packaging — bagged in 50 kg sacks or prepared for bulk shipment',
    ],
    nutritionFacts: [],
  },

  {
    id: 6,
    slug: 'testa',
    name: 'Testa',
    tagline: 'By-Product',
    badge: 'By-Product',
    desc: 'The inner brown skin of coconut — rich in fibre and nutrients.',
    longDesc:
      'The thin brown skin between the hard coconut shell and the white kernel. Rich in dietary fibre, antioxidants, and phenolic compounds. Widely used in health foods, animal feed, biofilters, and nutraceuticals for its functional nutritional properties.',
    image: '/images/coconut-testa.png',
    modalImage: '/images/coconut-testa.png',
    uses: ['Health Foods & Functional Ingredients', 'Animal Feed', 'Fibre Supplements', 'Biofilters', 'Nutraceuticals', 'Erosion Control & Horticulture'],
    specs: [
      { label: 'Fibre Content',  value: '45–55%' },
      { label: 'Moisture',       value: '≤ 8%' },
      { label: 'Form',           value: 'Powder / Flakes' },
      { label: 'Shelf Life',     value: '12 months' },
      { label: 'Packaging',      value: '25 kg bags' },
    ],
    grades: ['Food Grade', 'Feed Grade', 'Industrial Grade'],
    whatIs:
      'Coconut testa is the thin brown skin that lies between the hard coconut shell and the white kernel. Composed of tough fibres, it provides protection to the inner kernel and is rich in dietary fibre, antioxidants, and phenolic compounds — making it a valuable functional ingredient.',
    howMade: [
      'Extraction — testa is separated from the white kernel during coconut processing',
      'Cleaning — sorted and cleaned to remove any shell fragments or impurities',
      'Drying — moisture reduced to ≤8% using controlled drying technology',
      'Grinding or flaking — processed to a uniform powder or flake form as required',
      'Packaging — sealed in food-grade or industrial bags for export',
    ],
    nutritionFacts: [
      { label: 'Dietary Fibre',  value: '45–55%' },
      { label: 'Moisture',       value: '≤ 8%' },
      { label: 'Antioxidants',   value: 'Present (phenolic compounds)' },
    ],
  },

  {
    id: 7,
    slug: 'd-fat-coconut-powder',
    name: 'D-Fat Coconut Powder',
    tagline: 'Low Fat',
    badge: 'Low Fat',
    desc: 'Desiccated coconut with reduced fat — ideal for health-conscious use.',
    longDesc:
      'Also known as defatted coconut powder — a low-fat, high-fibre coconut product made by mechanically extracting most of the natural oils from fresh coconut meat. A fine, white powder that retains essential nutrients, natural coconut flavour, and aroma while delivering significantly lower fat content.',
    image: '/images/d-fat-coconut-powder.png',
    modalImage: '/images/d-fat-coconut-powder.png',
    uses: ['Dietary & Health Foods', 'Protein Powders & Bars', 'Weight Management Products', 'Baking & Confectionery', 'Soups & Smoothies', 'Skincare & Hair Care Formulations'],
    specs: [
      { label: 'Fat Content',    value: '≤ 14%' },
      { label: 'Moisture',       value: '≤ 3%' },
      { label: 'Protein',        value: '18–22%' },
      { label: 'Dietary Fibre',  value: '30–40%' },
      { label: 'Shelf Life',     value: '12–24 months' },
      { label: 'Packaging',      value: '25 kg bags / Custom' },
    ],
    grades: ['Low Fat (≤14%)', 'Defatted (≤8%)', 'Partially Defatted'],
    whatIs:
      'D-Fat Coconut Powder — also called defatted coconut powder — is produced by removing most of the natural oils from fresh coconut meat through cold-pressing or mechanical extraction. The result is a fine, white powder that retains the natural coconut flavour and aroma while being significantly lower in fat and higher in protein and dietary fibre.',
    howMade: [
      'Select — finest mature coconuts chosen for processing',
      'Cold-press / mechanical extraction — coconut meat pressed to extract and remove the bulk of its natural oils',
      'Dry — the remaining press cake is dried under controlled conditions to ≤3% moisture',
      'Grind — dried cake milled to a fine, uniform white powder',
      'Quality check — fat content verified before packaging',
      'Packaging — sealed in food-grade bags; no artificial additives added',
    ],
    nutritionFacts: [
      { label: 'Fat',            value: '8–14% (grade-dependent)' },
      { label: 'Protein',        value: '18–22%' },
      { label: 'Dietary Fibre',  value: '30–40%' },
      { label: 'Moisture',       value: '≤ 3%' },
    ],
    keyFeatures: [
      'Low in Fat',
      'Rich in Dietary Fibre',
      'Natural Coconut Flavour',
      'High in Protein',
      'Gluten-Free & Dairy-Free',
      'Long Shelf Life (12–24 months)',
    ],
  },

  {
    id: 8,
    slug: 'coconut-milk-powder',
    name: 'Coconut Milk Powder',
    tagline: 'Instant',
    badge: 'Instant',
    desc: 'Spray-dried coconut milk — easy to use, long shelf life.',
    longDesc:
      'A dehydrated form of coconut milk made from fresh coconut meat that has been extracted, spray-dried, and finely powdered. Retains the natural flavour, aroma, and nutrients of coconut milk while offering a 24-month shelf life with no refrigeration required — an instant, dairy-free alternative.',
    image: '/images/coconut-milk-powder.png',
    modalImage: '/images/coconut-milk-powder.png',
    uses: ['Instant Beverages & Drinks', 'Ready Meals', 'Baking & Confectionery', 'Soups & Curries', 'Protein & Energy Bars', 'Dairy-Free Formulations'],
    specs: [
      { label: 'Fat Content',    value: '42–50%' },
      { label: 'Moisture',       value: '≤ 3%' },
      { label: 'Solubility',     value: '98%+' },
      { label: 'Shelf Life',     value: '24 months' },
      { label: 'Packaging',      value: '25 kg bags / 1 kg retail' },
    ],
    grades: ['Full Fat', 'Reduced Fat', 'Organic', 'Instant Dissolve'],
    whatIs:
      'Coconut milk powder is a dehydrated form of coconut milk produced by spray-drying freshly extracted coconut milk into a fine powder. It dissolves instantly in warm water, recreating the creamy, rich taste of fresh coconut milk — with a 24-month shelf life requiring no refrigeration.',
    howMade: [
      'Select and grate — mature coconuts selected, husked, and grated',
      'Cold-press extraction — coconut meat pressed to extract full-fat coconut milk',
      'Spray-drying — liquid coconut milk atomised into a chamber of heated air, instantly drying into fine particles',
      'Collection — powder collected, cooled, and sieved to uniform particle size',
      'Quality check — solubility, fat content, and moisture verified',
      'Packaging — sealed in food-grade bags to preserve freshness and flavour',
    ],
    nutritionFacts: [
      { label: 'Energy',         value: '600–700 kcal per 100g' },
      { label: 'Total Fat',      value: '50–65g' },
      { label: 'Saturated Fat',  value: '45–55g' },
      { label: 'Carbohydrates',  value: '20–30g' },
      { label: 'Protein',        value: '5–10g' },
      { label: 'Dietary Fibre',  value: '5–10g' },
      { label: 'Lauric Acid',    value: '15–25%' },
    ],
    keyFeatures: [
      '100% Pure & Natural',
      'Dairy-Free & Lactose-Free',
      'Instant & Convenient',
      'Rich in MCTs',
      'Creamy Texture & Authentic Taste',
      'Long Shelf Life — 24 months',
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
