import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
    );

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why-us" },
  ];

  const close = () => setMenuOpen(false);

  return (
    <nav ref={navRef} className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <img src="/images/logo.jpeg" alt="Kalpa Ruchi Logo" />
          <div className="nav-logo-text">
            <span className="nav-logo-name">Kalpa Ruchi</span>
            <span className="nav-logo-sub">Dhanalakshmi Agro Products</span>
          </div>
        </a>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={close}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" onClick={close}>
              Contact Us
            </a>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
