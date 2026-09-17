import React from 'react';
import vedancoLogo from '../assets/vedanco-logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="logo">
            <img src={vedancoLogo} alt="Vedanco" />
            <span>Vedanco</span>
          </a>
          <p>Complete Business Growth + Technology Partner. Engineering Demand, Products &amp; AI Intelligence.</p>
        </div>
        <div>
          <h4>Our 4 Verticals</h4>
          <ul>
            <li><a href="#marketing">Marketing</a></li>
            <li><a href="#web-app">Web &amp; App Development</a></li>
            <li><a href="#ai-automation">AI Automation</a></li>
            <li><a href="#ai-call-agent">AI Call Agent &amp; AI Agents</a></li>
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@vedanco.com">info@vedanco.com</a></li>
            <li><a href="tel:+919510774987">+91 95107 74987</a></li>
            <li><span>Gandhinagar</span></li>
          </ul>
          <a href="#contact" className="btn btn--primary btn--sm">Get Free Quote</a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© <span>{currentYear}</span> <strong>Vedanco</strong>. All rights reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
