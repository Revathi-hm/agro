import { useState } from "react";

const QUICK_LINKS = [
  { label: "About Us",    href: "#about" },
  { label: "Products",   href: "#products" },
  { label: "Our Process",href: "#process" },
  { label: "Why Us",     href: "#why-us" },
  { label: "Contact",    href: "#contact" },
];

const PRODUCTS_LINKS = [
  "Desiccated Coconut Powder",
  "Desiccated Coconut Flakes",
  "Virgin Coconut Oil",
  "Coconut Milk",
  "D-Fat Coconut Powder",
  "Coconut Milk Powder",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-wrap">
              <img src="/images/logo.jpeg" alt="Kalpa Ruchi" />
              <div>
                <span className="logo-name">Kalpa Ruchi</span>
                <span className="logo-sub">Dhanalakshmi Agro Products</span>
              </div>
            </div>
            <p>
              Premium coconut-derived products crafted with purity and precision
              since 2007. From grove to global markets — naturally.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {["fa-brands fa-linkedin-in", "fa-brands fa-whatsapp", "fa-brands fa-instagram", "fa-brands fa-facebook-f"].map((icon, i) => (
                <a key={i} href="#" className="social-btn">
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Products</h4>
            <ul>
              {PRODUCTS_LINKS.map((p) => (
                <li key={p}><a href="#products">{p}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Stay Updated</h4>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", marginBottom: "1.25rem", lineHeight: 1.6 }}>
              Subscribe for product updates, certifications, and export news.
            </p>
            {subscribed ? (
              <p style={{ color: "var(--sage)", fontSize: "0.85rem" }}>
                <i className="fa-solid fa-circle-check" /> Thank you for subscribing!
              </p>
            ) : (
              <form className="newsletter-form" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">
                  <i className="fa-solid fa-arrow-right" />
                </button>
              </form>
            )}
            <p className="newsletter-note">No spam — unsubscribe anytime.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} <a href="#home">Kalpa Ruchi</a> · Dhanalakshmi Agro Products. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
