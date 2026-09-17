import React from 'react';

// Exact 12 client logos extracted from VEDANCO MARKETING PDF -> Clients page
import aarefaLogo from '../assets/clients/aarefa.png';
import ugrowthLogo from '../assets/clients/ugrowth.png';
import covidLogo from '../assets/clients/covid-home-care.png';
import amanLogo from '../assets/clients/aman-consultancy.png';
import wellTreatLogo from '../assets/clients/well-treat.png';
import mapLogo from '../assets/clients/map-medicare.png';
import jagadambaLogo from '../assets/clients/jagadamba-mobiles.png';
import shreeLogo from '../assets/clients/shree-import-export.png';
import pizzaliciousLogo from '../assets/clients/pizzalicious.png';
import guraceLogo from '../assets/clients/gurace.png';
import gabbarsLogo from '../assets/clients/gabbars.png';
import smileAllLogo from '../assets/clients/smile-all.png';

const clientLogos = [
  { name: 'Aarefa Atelier', logo: aarefaLogo, category: 'Fashion & Apparel' },
  { name: 'ugrowth', logo: ugrowthLogo, category: 'Business Development' },
  { name: 'Covid Home Care', logo: covidLogo, category: 'Healthcare Services' },
  { name: 'Aman Consultancy', logo: amanLogo, category: 'Consulting & Strategy' },
  { name: 'WellTreat', logo: wellTreatLogo, category: 'Healthcare & Wellness' },
  { name: 'M&P Medical & Devices', logo: mapLogo, category: 'Medical & Diagnostics' },
  { name: 'Jagadamba Mobiles', logo: jagadambaLogo, category: 'Electronics & Retail' },
  { name: 'Shree Import Export', logo: shreeLogo, category: 'Global Trade & Logistics' },
  { name: 'Pizzalicious', logo: pizzaliciousLogo, category: 'Food & Dining' },
  { name: 'Gurace', logo: guraceLogo, category: 'Enterprise & Brands' },
  { name: "Gabbar's", logo: gabbarsLogo, category: 'Food & Hospitality' },
  { name: 'SmileAll', logo: smileAllLogo, category: 'Dental & Wellness' },
];

export default function Clients() {
  // Loop list for the auto-scrolling ticker
  const marqueeList = [...clientLogos, ...clientLogos];

  return (
    <section className="section section--soft" id="clients">
      <div className="container">
        <div className="section__header">
          <div className="section-label">Trusted By Industry Leaders</div>
          <h2 className="section-title">
            Our <span>Clients &amp; Partners</span>
          </h2>
          <p className="section-sub">
            A snapshot of businesses and brands who trusted Vedanco for performance-driven digital marketing, branding, and sustainable sales growth.
          </p>
        </div>

        {/* Subtle Auto-scrolling Marquee Ticker */}
        <div className="clients-marquee" aria-hidden="true">
          <div className="clients-marquee__track">
            {marqueeList.map((client, idx) => (
              <div key={idx} className="clients-marquee__item">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Premium Equal-Size Logo Grid */}
        <div className="clients-grid">
          {clientLogos.map((client, idx) => (
            <article key={idx} className="client-card">
              <div className="client-card__logo-box">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="client-card__logo"
                  loading="lazy"
                />
              </div>
              <h3 className="client-card__name">{client.name}</h3>
              <span className="client-card__category">{client.category}</span>
            </article>
          ))}
        </div>

        <div className="clients__footnote">
          <p>
            100% performance driven • Strategic content • Measurable organic &amp; paid business impact
          </p>
        </div>
      </div>
    </section>
  );
}
