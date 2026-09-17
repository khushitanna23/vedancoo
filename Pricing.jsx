import React, { useState } from 'react';

const plans = [
  {
    id: 'basic',
    name: 'Basic Boost',
    popular: false,
    prices: {
      monthly: { amount: '₹30,000', period: '/month', note: '', months: '1' },
      quarterly: { amount: '₹90,000', period: '/quarter', note: 'Minimum Term: 3 Months', months: '3' },
      annual: { amount: '₹3,00,000', period: '/year', note: 'Pay for 10 Months + 2 Months Free', months: '10+2' },
    },
    reels: '10',
    shoots: '1',
    features: [
      '10 Reels per Month',
      '1 Shoot Visit',
      'Minimum Term: 3 Months',
      'Meta Ads Budget: ₹500/day by Client',
      'Instagram Page Management',
      'Content Planning & Strategy',
      'Monthly Performance Report',
    ],
    btnClass: 'btn btn--outline btn--block',
  },
  {
    id: 'advanced',
    name: 'Advanced Growth',
    popular: true,
    prices: {
      monthly: { amount: '₹40,000', period: '/month', note: '', months: '1' },
      quarterly: { amount: '₹1,20,000', period: '/quarter', note: 'Minimum Term: 3 Months', months: '3' },
      annual: { amount: '₹4,00,000', period: '/year', note: 'Pay for 10 Months + 2 Months Free', months: '10+2' },
    },
    reels: '15',
    shoots: '2',
    features: [
      '15 Reels per Month',
      '2 Shoot Visits',
      'Minimum Term: 3 Months',
      'Meta Ads Budget: ₹500/day by Client',
      'Instagram Page Management',
      'Content Planning & Strategy',
      'Influencer Marketing',
      'Monthly Performance Report',
    ],
    btnClass: 'btn btn--primary btn--block',
  },
  {
    id: 'premium',
    name: 'Premium Impact',
    popular: false,
    prices: {
      monthly: { amount: '₹70,000', period: '/month', note: '', months: '1' },
      quarterly: { amount: '₹2,10,000', period: '/quarter', note: 'Minimum Term: 3 Months', months: '3' },
      annual: { amount: '₹7,00,000', period: '/year', note: 'Pay for 10 Months + 2 Months Free', months: '10+2' },
    },
    reels: '25',
    shoots: '3',
    features: [
      '25 Reels per Month',
      '3 Shoot Visits',
      'Minimum Term: 3 Months',
      'Meta Ads Budget: ₹500/day by Client',
      'Instagram Page Management',
      'Content Planning & Strategy',
      'Influencer Marketing',
      'Priority Support & Performance Report',
    ],
    btnClass: 'btn btn--outline btn--block',
  },
];

export default function Pricing() {
  const [periods, setPeriods] = useState({
    basic: 'monthly',
    advanced: 'monthly',
    premium: 'monthly',
  });

  const handlePeriodChange = (planId, period) => {
    setPeriods((prev) => ({ ...prev, [planId]: period }));
  };

  return (
    <section className="section section--soft" id="pricing">
      <div className="container">
        <div className="section__header">
          <div className="section-label">Regular Package Options</div>
          <h2 className="section-title">
            Choose Your <span>Growth Plan</span>
          </h2>
          <p className="section-sub">
            All packages include a minimum term of 3 months. Meta Ads budget (₹500/day) paid directly by client. 18% GST charged additionally on all packages.
          </p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan) => {
            const currentPeriod = periods[plan.id];
            const priceInfo = plan.prices[currentPeriod];

            return (
              <article
                key={plan.id}
                className={`pricing-card ${plan.popular ? 'pricing-card--popular' : ''}`}
                data-plan={plan.id}
              >
                {plan.popular && <div className="pricing-card__badge">Most Popular</div>}
                <h3>{plan.name}</h3>

                <div className="pricing-card__price">
                  <span className="amount">{priceInfo.amount}</span>
                  <span className="period">{priceInfo.period}</span>
                </div>

                <p className="pricing-card__note" hidden={!priceInfo.note}>
                  {priceInfo.note}
                </p>

                <div className="pricing-card__toggle" role="group" aria-label="Billing period">
                  <button
                    type="button"
                    className={currentPeriod === 'monthly' ? 'active' : ''}
                    onClick={() => handlePeriodChange(plan.id, 'monthly')}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    className={currentPeriod === 'quarterly' ? 'active' : ''}
                    onClick={() => handlePeriodChange(plan.id, 'quarterly')}
                  >
                    Quarterly
                  </button>
                  <button
                    type="button"
                    className={currentPeriod === 'annual' ? 'active' : ''}
                    onClick={() => handlePeriodChange(plan.id, 'annual')}
                  >
                    Annual
                  </button>
                </div>

                <div className="pricing-card__highlights">
                  <div>
                    <strong className="reels">{plan.reels}</strong>
                    <span>Reels/mo</span>
                  </div>
                  <div>
                    <strong className="shoots">{plan.shoots}</strong>
                    <span>{Number(plan.shoots) > 1 ? 'Shoots' : 'Shoot'}</span>
                  </div>
                  <div>
                    <strong className="months">{priceInfo.months}</strong>
                    <span>{priceInfo.months === '1' ? 'Month' : 'Months'}</span>
                  </div>
                </div>

                <ul>
                  {plan.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>

                <a href="#contact" className={plan.btnClass}>
                  Get Started
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </article>
            );
          })}
        </div>

        <p className="pricing__gst">
          * 18% GST charged additionally on all packages. Ad budgets paid directly by the client to Meta platforms.
        </p>
      </div>
    </section>
  );
}
