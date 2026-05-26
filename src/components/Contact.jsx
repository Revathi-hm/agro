import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "", product: "", message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/form-c7.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", phone: "", product: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <p className="section-label" style={{ color: "var(--gold)" }}>
              Get In Touch
            </p>
            <h2>
              Let's Build Something <span>Pure Together</span>
            </h2>
            <p>
              Whether you're a food manufacturer, retailer, or distributor —
              we'd love to discuss how Kalpa Ruchi products can elevate your
              offering. Reach out and our team will respond within 24 hours.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="detail-icon"><i className="fa-solid fa-location-dot" /></div>
                <div className="detail-text">
                  <strong>Address</strong>
                  <span>Dhanalakshmi Agro Products,<br />Tamil Nadu, India</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="detail-icon"><i className="fa-solid fa-envelope" /></div>
                <div className="detail-text">
                  <strong>Email</strong>
                  <span>info@kalparuchi.com</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="detail-icon"><i className="fa-solid fa-phone" /></div>
                <div className="detail-text">
                  <strong>Phone</strong>
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              {[
                { icon: "fa-brands fa-linkedin-in", label: "LinkedIn" },
                { icon: "fa-brands fa-whatsapp",   label: "WhatsApp" },
                { icon: "fa-brands fa-instagram",  label: "Instagram" },
                { icon: "fa-brands fa-facebook-f", label: "Facebook" },
              ].map(({ icon, label }) => (
                <a key={label} href="#" className="social-btn" aria-label={label}>
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  id="name" name="name" required
                  placeholder="John Smith"
                  value={form.name} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email" name="email" type="email" required
                  placeholder="john@company.com"
                  value={form.email} onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company / Organisation</label>
                <input
                  id="company" name="company"
                  placeholder="Your Company Ltd."
                  value={form.company} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone" name="phone"
                  placeholder="+44 7700 900000"
                  value={form.phone} onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="product">Product of Interest</label>
              <select id="product" name="product" value={form.product} onChange={handleChange}>
                <option value="">— Select a product —</option>
                <option>Desiccated Coconut Powder</option>
                <option>Desiccated Coconut Flakes</option>
                <option>Virgin Coconut Oil</option>
                <option>Coconut Milk</option>
                <option>Coconut Shell</option>
                <option>Testa</option>
                <option>D-Fat Coconut Powder</option>
                <option>Coconut Milk Powder</option>
                <option>Multiple Products</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message" name="message" required
                placeholder="Tell us about your requirements — quantities, grades, packaging preferences..."
                value={form.message} onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-gold"
              style={{ width: "100%", justifyContent: "center" }}
              disabled={loading}
            >
              {loading ? (
                <><i className="fa-solid fa-spinner fa-spin" /> Sending…</>
              ) : (
                <><i className="fa-solid fa-paper-plane" /> Send Enquiry</>
              )}
            </button>

            {status === "success" && (
              <div className="form-success">
                <i className="fa-solid fa-circle-check" />
                Thank you! We'll get back to you within 24 hours.
              </div>
            )}
            {status === "error" && (
              <div className="form-success" style={{ borderColor: "rgba(239,68,68,0.3)", color: "#f87171", background: "rgba(239,68,68,0.08)" }}>
                <i className="fa-solid fa-circle-exclamation" />
                Something went wrong. Please email us directly at info@kalparuchi.com
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
