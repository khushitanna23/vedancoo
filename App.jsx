import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import AiCallAgent from './components/AiCallAgent';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="page-bg" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <AiCallAgent />
        <Portfolio />
        <Clients />
        <About />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
