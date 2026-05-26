import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.6 });

    tl.fromTo(
      ".hero-badge",
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
    )
      .fromTo(
        ".hero-line",
        { opacity: 0, y: 50, skewY: 3 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.12, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.7"
      )
      .fromTo(
        ".hero-img-frame",
        { opacity: 0, scale: 0.88, x: 60 },
        { opacity: 1, scale: 1, x: 0, duration: 1.4, ease: "power3.out" },
        "-=1.3"
      )
      .fromTo(
        ".hero-float-card",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ".hero-float-card2",
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=0.7"
      );

    gsap.to(".hero-img", {
      y: -40,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    gsap.to(".hero-text-content", {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "30% top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section ref={heroRef} id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-bg-texture" />

      <div className="hero-container">
        <div className="hero-text-content">
          <div className="hero-badge">
            <i className="fa-solid fa-leaf" />
            Est. 2007 &nbsp;·&nbsp; Dhanalakshmi Agro Products
          </div>

          <h1 className="hero-title">
            <span className="hero-line">Pure By</span>
            <span className="hero-line gold-word">Nature,</span>
            <span className="hero-line">Refined By</span>
            <span className="hero-line gold-word">Craft.</span>
          </h1>

          <p className="hero-subtitle">
            Premium coconut-derived products crafted with generations of
            expertise — pure, natural, and sustainably sourced from the finest
            coconut groves.
          </p>

          <div className="hero-cta">
            <a href="#products" className="btn btn-gold">
              <i className="fa-solid fa-grid-2" />
              Explore Products
            </a>
            <a href="#about" className="btn btn-ghost">
              Our Story &nbsp;<i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-img-frame">
            <img
              className="hero-img"
              src="/images/hero.jpg"
              alt="Kalpa Ruchi premium coconut products"
            />
          </div>

          <div className="hero-float-card">
            <span className="float-number">15+</span>
            <span className="float-text">Years of Excellence</span>
          </div>

          <div className="hero-float-card2">
            <span className="float-number">8</span>
            <span className="float-text">Premium Products</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-mouse" />
        <span>Scroll to Explore</span>
      </div>
    </section>
  );
}
