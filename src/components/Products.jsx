import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    id: 1,
    name: "Desiccated Coconut Powder",
    tag: "Export Grade",
    img: "/images/prod1.png",
    short: "Ultra-fine coconut powder with natural sweetness and aroma.",
    desc: "Our desiccated coconut powder is made from freshly grated coconut flesh, carefully dried and milled to a fine, uniform consistency. It retains the natural flavour, aroma, and nutritional value of fresh coconut — with no artificial additives.",
    uses: ["Baking & Confectionery", "Beverages", "Ice Cream", "Chocolates", "Cereals"],
  },
  {
    id: 2,
    name: "Desiccated Coconut Flakes",
    tag: "Premium",
    img: "/images/prod2.png",
    short: "Lightly dried coconut strips — sweet, chewy, and versatile.",
    desc: "Premium coconut flakes crafted from hand-selected mature coconuts. Available in fine, medium, and coarse grades. Perfect for baking, snacking, or as a natural garnish with consistent moisture and bright white colour.",
    uses: ["Granola & Muesli", "Toppings", "Baking", "Snack Bars", "Desserts"],
  },
  {
    id: 3,
    name: "Virgin Coconut Oil",
    tag: "Cold-Pressed",
    img: "/images/prod3.png",
    short: "Cold-pressed, unrefined oil with a delicate coconut fragrance.",
    desc: "Extracted through cold-pressing fresh coconut milk without heat or chemicals, our Virgin Coconut Oil preserves all natural antioxidants, vitamins, and the characteristic mild coconut aroma. Suitable for cooking, skincare, and hair care.",
    uses: ["Cooking & Frying", "Skincare", "Hair Care", "Health Supplements", "Cosmetics"],
  },
  {
    id: 4,
    name: "Coconut Milk",
    tag: "Natural",
    img: "/images/prod4.png",
    short: "Rich, creamy coconut milk with deep flavour and high fat content.",
    desc: "Freshly pressed from mature coconut flesh, our coconut milk offers a full-bodied, rich texture with naturally high coconut fat content. Available as standard, lite, and organic variants in BPA-free packaging.",
    uses: ["Curries & Soups", "Smoothies", "Baking", "Dairy-Free Cooking", "Beverages"],
  },
  {
    id: 5,
    name: "Coconut Shell",
    tag: "Eco-Friendly",
    img: "/images/prod5.jpg",
    short: "Hard, fibrous coconut shells — ideal for activated carbon and crafts.",
    desc: "Premium-grade coconut shells sourced from mature, fully ripened coconuts. Used as raw material for activated carbon production, artisan crafts, and fuel briquettes. Our shells are cleaned, graded, and dried for consistent quality.",
    uses: ["Activated Carbon", "Craft & Decor", "Fuel Briquettes", "Horticulture", "Incense"],
  },
  {
    id: 6,
    name: "Testa",
    tag: "By-Product",
    img: "/images/prod6.png",
    short: "The inner brown skin of coconut — rich in fibre and nutrients.",
    desc: "Testa is the thin brown skin found between the coconut shell and the white kernel. Rich in dietary fibre, antioxidants, and phenolic compounds, it is used in health food formulations, animal feed, and as a functional food ingredient.",
    uses: ["Health Foods", "Animal Feed", "Fibre Supplements", "Food Industry", "Nutraceuticals"],
  },
  {
    id: 7,
    name: "D-Fat Coconut Powder",
    tag: "Low Fat",
    img: "/images/prod7.png",
    short: "Desiccated coconut with reduced fat — ideal for health-conscious use.",
    desc: "Our D-Fat (de-fatted) coconut powder undergoes a careful fat-extraction process that reduces fat content significantly while preserving coconut flavour and fibre. Ideal for health-conscious consumers and specialty food applications.",
    uses: ["Dietary Foods", "Protein Powders", "Health Bars", "Weight Management", "Baking"],
  },
  {
    id: 8,
    name: "Coconut Milk Powder",
    tag: "Instant",
    img: "/images/prod8.jpg",
    short: "Spray-dried coconut milk — easy to use, long shelf life.",
    desc: "Produced by spray-drying fresh coconut milk, our Coconut Milk Powder dissolves instantly in warm water to recreate rich, creamy coconut milk. It has a 24-month shelf life and requires no refrigeration — perfect for retail and food service.",
    uses: ["Instant Beverages", "Ready Meals", "Baking", "Confectionery", "Soups & Sauces"],
  },
];

function ProductModal({ product, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <img className="modal-img" src={product.img} alt={product.name} />
        <div className="modal-body">
          <p className="modal-tag">{product.tag}</p>
          <h2 className="modal-title">{product.name}</h2>
          <p className="modal-desc">{product.desc}</p>
          <p className="modal-uses">Applications</p>
          <div className="modal-use-list">
            {product.uses.map((u) => (
              <span key={u} className="use-tag">{u}</span>
            ))}
          </div>
          <a href="#contact" className="btn btn-primary" onClick={onClose}>
            Enquire Now <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const ref = useRef();
  const [active, setActive] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      ".product-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section id="products" className="products" ref={ref}>
      <div className="container">
        <div className="products-header">
          <p className="section-label">What We Offer</p>
          <h2 className="section-heading">
            8 Premium <span className="accent">Coconut Products</span>
          </h2>
          <p style={{ marginTop: "1rem", color: "var(--muted)", lineHeight: 1.75 }}>
            From grove to global market — every product reflects our commitment
            to purity, quality, and natural goodness.
          </p>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className="product-card"
              onClick={() => setActive(p)}
            >
              <div className="product-img-wrap">
                <img src={p.img} alt={p.name} loading="lazy" />
                <span className="product-tag">{p.tag}</span>
              </div>
              <div className="product-info">
                <h3>{p.name}</h3>
                <p>{p.short}</p>
                <span className="product-link">
                  View Details <i className="fa-solid fa-arrow-right" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <ProductModal product={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
