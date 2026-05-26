import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductSection() {
  const ref = useRef();

  useEffect(() => {
    gsap.to(".product", {
      rotateY: 180,
      scrollTrigger: {
        trigger: ref.current,
        scrub: true
      }
    });
  }, []);

  return (
    <section ref={ref} className="section center">
      <img
        className="product"
        src="https://images.unsplash.com/photo-1625948515291-69613efd103f"
      />
    </section>
  );
}
