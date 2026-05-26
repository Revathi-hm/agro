import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    icon: "fa-tree-palm",
    title: "Sourcing",
    desc: "Hand-picked mature coconuts from certified, sustainable farms across South India.",
  },
  {
    icon: "fa-droplet",
    title: "Extraction",
    desc: "Kernels are freshly grated or pressed using cold-process technology to preserve nutrients.",
  },
  {
    icon: "fa-temperature-low",
    title: "Processing",
    desc: "Controlled drying, filtering, and refining under hygienic, food-safe conditions.",
  },
  {
    icon: "fa-shield-check",
    title: "Quality Control",
    desc: "Rigorous lab testing for purity, moisture, microbial count, and food safety standards.",
  },
  {
    icon: "fa-box-open",
    title: "Packaging",
    desc: "Sealed in food-grade, tamper-proof packaging with full traceability and labelling.",
  },
];

export default function Process() {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ".process-step",
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section id="process" className="process" ref={ref}>
      <div className="container">
        <div className="process-header">
          <p className="section-label" style={{ justifyContent: "center" }}>
            How We Work
          </p>
          <h2 className="section-heading section-heading-light">
            From <span className="accent">Grove to Global</span> Markets
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "1rem", fontSize: "0.95rem" }}>
            A five-step journey that guarantees purity in every packet.
          </p>
        </div>

        <div className="process-steps">
          {STEPS.map((step, i) => (
            <div className="process-step" key={step.title}>
              <div className="step-icon-wrap">
                <i className={`fa-solid ${step.icon}`} />
                <span className="step-num">{i + 1}</span>
              </div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
