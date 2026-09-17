import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'James Carter',
    role: 'CTO, FinEdge Inc.',
    text: 'Vedanco delivered a flawless mobile banking app ahead of schedule. Their AI team is world-class — absolute professionals!',
    initials: 'JC',
  },
  {
    name: 'Sarah Mitchell',
    role: 'CEO, RetailX',
    text: 'Our eCommerce revenue doubled in 6 months after launch. The Shopify Plus store they built is lightning-fast and stunning.',
    initials: 'SM',
  },
  {
    name: 'Rohan Mehta',
    role: 'Founder, MediCare+',
    text: 'Building a HIPAA-compliant telemedicine platform is no joke. They nailed it — compliance, UX and performance all together.',
    initials: 'RM',
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    let raf = 0;

    function animate() {
      offset += 0.4;
      const half = track.scrollWidth / 3;
      if (offset >= half) offset = 0;
      track.style.transform = `translateX(-${offset}px)`;
      raf = requestAnimationFrame(animate);
    }

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const loopedList = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="section section--white" id="testimonials">
      <div className="container">
        <div className="section__header">
          <div className="section-label">Client Love</div>
          <h2 className="section-title">
            What Our <span>Clients Say</span>
          </h2>
          <p className="section-sub">
            Reviews from Vedanco clients on vedanco.com — real feedback from teams we have shipped with.
          </p>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t, idx) => (
            <article key={idx} className="testimonial-card">
              <div className="testimonial-card__quote">"</div>
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div>
                  <strong className="testimonial-card__name">{t.name}</strong>
                  <span className="testimonial-card__role">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="testimonials__carousel" aria-hidden="true">
        <div className="testimonials__track" id="testimonialTrack" ref={trackRef}>
          {loopedList.map((t, idx) => (
            <article key={idx} className="testimonial-card">
              <div className="testimonial-card__quote">"</div>
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div>
                  <strong className="testimonial-card__name">{t.name}</strong>
                  <span className="testimonial-card__role">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
