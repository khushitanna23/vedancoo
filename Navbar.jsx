import React, { useState, useEffect } from 'react';
import vedancoLogo from '../assets/vedanco-logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'ai-call-agent', 'portfolio', 'clients', 'about', 'testimonials', 'pricing', 'contact'];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="header__inner">
        <a href="#home" className="logo" aria-label="Vedanco home" onClick={closeMenu}>
          <img src={vedancoLogo} alt="Vedanco" />
          <span>Vedanco</span>
        </a>
        <nav>
          <ul className={`nav ${isMenuOpen ? 'open' : ''}`} id="navMenu">
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={closeMenu}>Home</a></li>
            <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={closeMenu}>Services</a></li>
            <li><a href="#ai-call-agent" className={activeSection === 'ai-call-agent' ? 'active' : ''} onClick={closeMenu}>AI Call Agent</a></li>
            <li><a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''} onClick={closeMenu}>Portfolio</a></li>
            <li><a href="#clients" className={activeSection === 'clients' ? 'active' : ''} onClick={closeMenu}>Clients</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMenu}>About</a></li>
            <li><a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''} onClick={closeMenu}>Testimonials</a></li>
            <li><a href="#pricing" className={activeSection === 'pricing' ? 'active' : ''} onClick={closeMenu}>Pricing</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
        <div className="header__actions">
          <a href="#contact" className="btn btn--primary btn--sm" onClick={closeMenu}>
            Get Quote
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
