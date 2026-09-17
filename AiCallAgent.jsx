import React from 'react';

export default function AiCallAgent() {
  return (
    <section className="section section--green ai-agent" id="ai-call-agent">
      <div className="container ai-agent__grid">
        <div className="ai-agent__copy">
          <div className="badge badge--gold">
            <span className="badge__dot"></span>
            Enterprise Flagship Solution
          </div>
          <h2 className="section-title section-title--light">
            AI Call Agent &amp; Voice Receptionist.<br />
            <span>Your Always-On Sales Floor.</span>
          </h2>
          <p className="ai-agent__lead">
            Vedanco’s AI Call Agent is a primary enterprise product line — not an add-on. It answers inbound phone calls in seconds, initiates proactive outbound follow-ups, qualifies customer intent, and books calendar appointments directly into your CRM.
          </p>
          <p>
            With natural, human-like voice inflection, multi-accent recognition, and instant responses, your business captures 100% of pipeline opportunities after hours and during peak volumes without expanding call center payroll.
          </p>

          <div className="ai-agent__stats">
            <div className="ai-agent__stat">
              <strong>0 sec</strong>
              <span>Wait Time</span>
            </div>
            <div className="ai-agent__stat">
              <strong>24/7/365</strong>
              <span>Continuous Coverage</span>
            </div>
            <div className="ai-agent__stat">
              <strong>100%</strong>
              <span>Calls Handled</span>
            </div>
            <div className="ai-agent__stat">
              <strong>3x</strong>
              <span>Booking Rate</span>
            </div>
          </div>

          <div className="ai-agent__actions">
            <a href="#contact" className="btn btn--white">
              Book an AI Agent Demo
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#pricing" className="btn btn--outline-light">
              View Growth Plans
            </a>
          </div>
        </div>

        <div className="ai-agent__card">
          <div className="ai-agent__card-header">
            <div className="ai-agent__card-status">
              <span className="status-dot"></span>
              <span>Live Voice Engine Ready</span>
            </div>
            <div className="ai-agent__card-pill">Enterprise AI</div>
          </div>

          <div className="ai-agent__wave" aria-hidden="true">
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </div>

          <div className="ai-agent__features">
            <div className="ai-agent__feat">
              <div className="ai-agent__feat-icon" aria-hidden="true">📞</div>
              <div>
                <strong>AI Voice Receptionist</strong>
                <p>Answers every inbound ring 24/7, greets callers professionally in your brand voice, and logs caller details with zero latency.</p>
              </div>
            </div>
            <div className="ai-agent__feat">
              <div className="ai-agent__feat-icon" aria-hidden="true">🎯</div>
              <div>
                <strong>AI Lead Qualification</strong>
                <p>Asks structured discovery questions, scores prospect intent, filters spam, and immediately notifies your team of hot deals.</p>
              </div>
            </div>
            <div className="ai-agent__feat">
              <div className="ai-agent__feat-icon" aria-hidden="true">📅</div>
              <div>
                <strong>Appointment Booking</strong>
                <p>Checks real-time team availability and reserves meeting slots directly on Google Calendar, Calendly, or Outlook.</p>
              </div>
            </div>
            <div className="ai-agent__feat">
              <div className="ai-agent__feat-icon" aria-hidden="true">🔄</div>
              <div>
                <strong>Customer Follow-up</strong>
                <p>Automatically dials abandoned web inquiries, re-engages past prospects, and confirms upcoming appointments.</p>
              </div>
            </div>
            <div className="ai-agent__feat">
              <div className="ai-agent__feat-icon" aria-hidden="true">⚡</div>
              <div>
                <strong>Inbound &amp; Outbound AI Calls</strong>
                <p>Dual-action voice engine for high-volume inbound reception and outbound speed-to-lead follow-up campaigns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
