import React from 'react';

const caseStudies = [
  {
    cat: 'Multi-Brand Growth',
    title: '1 Client, 5 Businesses',
    description: 'One client trusted us for 5 different businesses — all brands growing organically through Instagram content strategy.',
    metrics: [
      { value: '800K+', label: 'Views' },
      { value: '22K', label: 'Likes' },
      { value: '310', label: 'Comments' },
    ],
  },
  {
    cat: 'Sales Growth',
    title: '7 Agencies Failed, We Delivered',
    description: 'After trying 7 digital marketing agencies with no results, 1 order grew to 200+ monthly orders on the web.',
    metrics: [
      { value: '1.2M+', label: 'Views' },
      { value: '38K', label: 'Likes' },
      { value: '520', label: 'Comments' },
    ],
  },
  {
    cat: 'Viral Organic',
    title: '12M+ Reach — 100+ Robots Sold',
    description: '100+ robots sold in just 1 month through Instagram content strategy alone — no paid ads, pure organic reach.',
    metrics: [
      { value: '12M+', label: 'Views' },
      { value: '320K', label: 'Likes' },
      { value: '1.1K', label: 'Comments' },
    ],
  },
  {
    cat: 'Influencer Marketing',
    title: '1 Crore Villa Booking',
    description: 'Influencer marketing campaign generated almost 1 Crore in business through weekend villa bookings.',
    metrics: [
      { value: '₹1 Cr', label: 'Booking Value' },
      { value: '100%', label: 'Villa Occupancy' },
      { value: 'Viral', label: 'Influencer Reach' },
    ],
  },
  {
    cat: 'Client Feedback',
    title: 'Happy Times Picnic Place',
    description: 'Owner feedback — 85+ Reels crossed 10K+ views, driving massive footfall to this one-day picnic destination.',
    metrics: [
      { value: '85+', label: 'Viral Reels' },
      { value: '10K+', label: 'Min. Views Each' },
      { value: 'Massive', label: 'Footfall' },
    ],
  },
  {
    cat: 'Client Feedback',
    title: 'Pushpnath Agarbatti',
    description: 'Owner saw our Reel on Instagram & signed up for Digital Marketing — real organic results for an agarbatti business.',
    metrics: [
      { value: 'Organic', label: 'Inbound Lead' },
      { value: 'Pan-India', label: 'Brand Reach' },
      { value: 'High ROI', label: 'Sales Growth' },
    ],
  },
];

export default function Portfolio() {
  return (
    <section className="section section--white" id="portfolio">
      <div className="container">
        <div className="section__header">
          <h2 className="section-title">
            Real Client Reviews. <span>Real Business Growth.</span>
          </h2>
          <p className="section-sub">
            Businesses choose Vedanco for one reason — performance. See genuine results from brands who trusted us with their growth.
          </p>
        </div>
        <div className="portfolio__grid">
          {caseStudies.map((study, idx) => (
            <article key={idx} className="portfolio-card">
              <div className="portfolio-card__top">
                <span className="portfolio-card__cat">{study.cat}</span>
                <h3>{study.title}</h3>
                <p>{study.description}</p>
              </div>
              <div className="portfolio-card__metrics">
                {study.metrics.map((m, mIdx) => (
                  <div key={mIdx}>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
