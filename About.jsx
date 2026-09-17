import React from 'react';
import vedancoLogo from '../assets/vedanco-logo.png';

export default function About() {
  return (
    <section className="section section--green" id="about">
      <div className="container about__grid">
        <div className="about__content">
          <div className="section-label section-label--light">Why Vedanco</div>
          <h2 className="section-title section-title--light">
            Not an agency that posts.<br />
            A <span>growth + technology</span> partner.
          </h2>
          <p>
            Most firms stop at ads, a website, or a chatbot. Vedanco owns the full loop: attract, convert, automate, and converse.
          </p>
          <p>
            Marketing creates demand. Web and apps capture it. Automation moves it. AI agents close and follow up. That is the Vedanco stack.
          </p>
          <blockquote>
            Positioning: Marketing + Web/App Development + AI Automation + AI Agents — engineered as one operating system for revenue.
          </blockquote>
          <div className="about__actions">
            <a href="#contact" className="btn btn--white">
              Start a project
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#portfolio" className="btn btn--outline-light">
              View Portfolio
            </a>
          </div>
        </div>
        <div className="about__visual">
          <img src={vedancoLogo} alt="Vedanco logo" className="about__logo" />
          <div className="about__badge">
            <strong>Vedanco</strong>
            <span>Instagram Growth Agency</span>
          </div>
        </div>
      </div>
    </section>
  );
}
