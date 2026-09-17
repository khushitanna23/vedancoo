import React, { useState, useEffect, useRef } from 'react';

const statsData = [
  { target: 500, suffix: '+', label: 'Clients Served' },
  { target: 200, suffix: '+', label: 'Verified Influencers' },
  { target: 12, suffix: '+', label: 'Years Work Experience' },
  { target: 99, suffix: '%', label: 'Satisfaction Rate' },
];

export default function Stats() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (animatedRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        animatedRef.current = true;
        const start = performance.now();
        const duration = 1800;

        function frame(now) {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCounts(statsData.map((s) => Math.floor(eased * s.target)));
          if (p < 1) {
            requestAnimationFrame(frame);
          } else {
            setCounts(statsData.map((s) => s.target));
          }
        }
        requestAnimationFrame(frame);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="stats" id="stats" ref={sectionRef} aria-label="Company statistics">
      <div className="container">
        <div className="stats__bar">
          {statsData.map((stat, idx) => (
            <div key={idx} className="stats__item" data-target={stat.target} data-suffix={stat.suffix}>
              <div className="stats__value">
                <span className="count">{counts[idx]}</span>
                {stat.suffix}
              </div>
              <div className="stats__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
