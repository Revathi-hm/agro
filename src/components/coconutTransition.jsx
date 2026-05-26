import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoconutTransition() {
  const ref = useRef();

  useEffect(() => {
    gsap.to(".coconut", {
      rotate: 180,
      scale: 1.5,
      scrollTrigger: {
        trigger: ref.current,
        scrub: true
      }
    });
  }, []);

  return (
    <section ref={ref} className="section center">
      <img
        className="coconut"
        src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5"
      />
    </section>
  );
}