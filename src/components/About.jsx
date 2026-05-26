import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ".about-img-main",
      { x: -60, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
    gsap.fromTo(
      ".about-img-accent",
      { x: 40, opacity: 0, delay: 0.2 },
      {
        x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
  }, []);

  const highlights = [
    { icon: "fa-seedling",   title: "100% Natural",    desc: "No preservatives or additives" },
    { icon: "fa-award",      title: "ISO Certified",   desc: "International quality standards" },
    { icon: "fa-globe",      title: "Global Export",   desc: "Supplying to 30+ countries" },
    { icon: "fa-recycle",    title: "Sustainable",     desc: "Zero-waste production process" },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image-stack">
            <img
              className="about-img-main"
              src="/images/hero.jpg"
              alt="Kalpa Ruchi production facility"
            />
            <img
              className="about-img-accent"
              src="/images/pouch.png"
              alt="Premium coconut products"
            />
            <div className="about-badge">
              <span className="badge-num">2007</span>
              <span className="badge-text">Est.</span>
            </div>
          </div>

          <div className="about-text">
            <p className="section-label">Our Story</p>
            <h2 className="section-heading reveal">
              Rooted in Tradition,<br />
              <span className="accent">Driven by Purity</span>
            </h2>

            <p className="reveal reveal-delay-1">
              Founded in 2007, Dhanalakshmi Agro Products has grown from a
              small family operation into a trusted name in premium coconut
              processing. Under the brand <strong>Kalpa Ruchi</strong>, we bring
              the wholesome goodness of the coconut palm to kitchens and
              industries worldwide.
            </p>
            <p className="reveal reveal-delay-2">
              Every product we create — from silky virgin coconut oil to
              fine desiccated powder — is the result of careful sourcing,
              traditional expertise, and rigorous modern quality controls.
              We believe nature's finest ingredients deserve the finest
              processing.
            </p>

            <div className="about-highlights reveal reveal-delay-3">
              {highlights.map(({ icon, title, desc }) => (
                <div className="highlight-item" key={title}>
                  <div className="highlight-icon">
                    <i className={`fa-solid ${icon}`} />
                  </div>
                  <div className="highlight-text">
                    <strong>{title}</strong>
                    <span>{desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary reveal reveal-delay-4" style={{ marginTop: "2rem" }}>
              Get in Touch <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
