const FEATURES = [
  {
    icon: "fa-leaf",
    title: "100% Natural & Pure",
    desc: "No artificial preservatives, colours, or flavours. What you get is exactly what nature intended.",
  },
  {
    icon: "fa-certificate",
    title: "ISO & FSSAI Certified",
    desc: "Our facility meets international food safety and quality management standards.",
  },
  {
    icon: "fa-flask",
    title: "Lab-Tested Batches",
    desc: "Every production batch undergoes microbiological, chemical, and sensory testing before dispatch.",
  },
  {
    icon: "fa-ship",
    title: "Export-Ready Packaging",
    desc: "Robust, food-grade packaging with full labelling for global regulatory compliance.",
  },
  {
    icon: "fa-handshake",
    title: "Private Label & OEM",
    desc: "We offer custom branding, private-label manufacturing and OEM partnerships.",
  },
  {
    icon: "fa-headset",
    title: "Dedicated Support",
    desc: "A dedicated account manager from first enquiry through to final delivery.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="why-grid">
          <div>
            <p className="section-label">Why Choose Us</p>
            <h2 className="section-heading reveal">
              Quality You Can <span className="accent">Taste & Trust</span>
            </h2>
            <p className="reveal reveal-delay-1" style={{ marginTop: "1rem", color: "var(--muted)", lineHeight: 1.75 }}>
              With over 15 years of expertise in coconut processing, Dhanalakshmi
              Agro Products has built a reputation for consistency, transparency,
              and exceptional product quality.
            </p>

            <div className="why-features">
              {FEATURES.map(({ icon, title, desc }, i) => (
                <div
                  className={`feature-row reveal reveal-delay-${Math.min(i + 1, 4)}`}
                  key={title}
                >
                  <div className="feature-icon">
                    <i className={`fa-solid ${icon}`} />
                  </div>
                  <div className="feature-content">
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-image reveal">
            <img src="/images/pouch.png" alt="Kalpa Ruchi premium packaging" />
            <div className="why-image-badge">
              <p>Zero Compromise</p>
              <span>on quality, ever.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
