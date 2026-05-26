import { useEffect, useRef, useState } from "react";

function useCounter(target, duration, active) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatItem({ number, suffix, label, duration = 1800 }) {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const count = useCounter(number, duration, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          <StatItem number={15} suffix="+" label="Years of Excellence" />
          <StatItem number={8}  suffix=""  label="Premium Products" />
          <StatItem number={30} suffix="+" label="Countries Served" />
          <StatItem number={500} suffix="+" label="Satisfied Clients" />
        </div>
      </div>
    </section>
  );
}
