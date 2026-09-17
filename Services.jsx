import React from 'react';

export default function Services() {
  return (
    <section className="section section--white" id="services">
      <div className="container">
        <div className="section__header">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">
            Four Core Verticals. <span>Real Business Growth.</span>
          </h2>
          <p className="section-sub">
            Vedanco is your complete business growth + technology partner. We combine demand generation, digital engineering, intelligent workflow automation, and autonomous AI agents into one powerful revenue engine.
          </p>
        </div>

        <div className="services__grid">
          {/* 1. MARKETING */}
          <article className="service-card" id="marketing">
            <div className="service-card__header">
              <div className="service-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <span className="service-card__num">01</span>
            </div>
            <h3>Marketing</h3>
            <p>
              Performance-driven brand growth and demand generation engines that convert attention into high-ticket pipeline and measurable revenue.
            </p>
            <ul className="service-card__list">
              <li><span className="check-icon">✓</span> <span>Social Media Management</span></li>
              <li><span className="check-icon">✓</span> <span>Meta Ads (Targeted Scaling)</span></li>
              <li><span className="check-icon">✓</span> <span>Influencer Marketing</span></li>
              <li><span className="check-icon">✓</span> <span>Content Creation</span></li>
              <li><span className="check-icon">✓</span> <span>Personal Branding</span></li>
            </ul>
            <div className="tags">
              <span>Social Media</span>
              <span>Meta Ads</span>
              <span>Influencer Marketing</span>
              <span>Content Creation</span>
              <span>Personal Branding</span>
            </div>
          </article>

          {/* 2. WEB & APP DEVELOPMENT */}
          <article className="service-card" id="web-app">
            <div className="service-card__header">
              <div className="service-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <span className="service-card__num">02</span>
            </div>
            <h3>Web &amp; App Development</h3>
            <p>
              High-converting digital products, custom web applications, and cross-platform mobile apps engineered for speed, UX, and scale.
            </p>
            <ul className="service-card__list">
              <li><span className="check-icon">✓</span> <span>Website Development</span></li>
              <li><span className="check-icon">✓</span> <span>High-Converting Landing Pages</span></li>
              <li><span className="check-icon">✓</span> <span>Custom Web Applications</span></li>
              <li><span className="check-icon">✓</span> <span>Mobile App Development (iOS &amp; Android)</span></li>
              <li><span className="check-icon">✓</span> <span>Maintenance &amp; Support</span></li>
            </ul>
            <div className="tags">
              <span>Web Development</span>
              <span>Landing Pages</span>
              <span>Web Applications</span>
              <span>Mobile Apps</span>
              <span>Support</span>
            </div>
          </article>

          {/* 3. AI AUTOMATION */}
          <article className="service-card" id="ai-automation">
            <div className="service-card__header">
              <div className="service-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <span className="service-card__num">03</span>
            </div>
            <h3>AI Automation</h3>
            <p>
              End-to-end intelligent workflow automation that eliminates operational friction, connects systems, and moves leads to close instantly.
            </p>
            <ul className="service-card__list">
              <li><span className="check-icon">✓</span> <span>Business Workflow Automation</span></li>
              <li><span className="check-icon">✓</span> <span>Lead Automation &amp; Instant Sync</span></li>
              <li><span className="check-icon">✓</span> <span>WhatsApp Automation</span></li>
              <li><span className="check-icon">✓</span> <span>CRM Automation</span></li>
              <li><span className="check-icon">✓</span> <span>Appointment Automation</span></li>
              <li><span className="check-icon">✓</span> <span>Customer Support Automation</span></li>
              <li><span className="check-icon">✓</span> <span>AI-Powered Business Automation</span></li>
            </ul>
            <div className="tags">
              <span>Workflow Automation</span>
              <span>Lead Automation</span>
              <span>WhatsApp AI</span>
              <span>CRM Automation</span>
              <span>Support AI</span>
            </div>
          </article>

          {/* 4. AI AGENT */}
          <article className="service-card" id="ai-agents">
            <div className="service-card__header">
              <div className="service-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                </svg>
              </div>
              <span className="service-card__num">04</span>
            </div>
            <h3>AI Agent</h3>
            <p>
              Autonomous AI voice &amp; conversational agents that handle phone calls, qualify intent, book appointments, and follow up around the clock.
            </p>
            <ul className="service-card__list">
              <li><span className="check-icon">✓</span> <span>AI Call Agent</span></li>
              <li><span className="check-icon">✓</span> <span>AI Voice Receptionist</span></li>
              <li><span className="check-icon">✓</span> <span>AI Lead Qualification</span></li>
              <li><span className="check-icon">✓</span> <span>Appointment Booking</span></li>
              <li><span className="check-icon">✓</span> <span>Customer Follow-up</span></li>
              <li><span className="check-icon">✓</span> <span>Inbound &amp; Outbound AI Calls</span></li>
            </ul>
            <div className="tags">
              <span>AI Call Agent</span>
              <span>Voice Receptionist</span>
              <span>Lead Qualification</span>
              <span>Appointment Booking</span>
              <span>Inbound &amp; Outbound</span>
            </div>
            <a href="#ai-call-agent" className="service-card__link">
              <span>Explore Dedicated AI Call Agent</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
