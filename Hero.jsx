import React, { useState, useEffect, useRef } from 'react';
import vedancoLogo from '../assets/vedanco-logo.png';

export default function Hero() {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const [typedText, setTypedText] = useState('');

  // Typing animation
  useEffect(() => {
    const phrases = [
      'Viral Reels',
      'Marketing & Meta Ads',
      'Web & App Development',
      'AI Workflow Automation',
      'Autonomous AI Agents',
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    function tick() {
      const current = phrases[phraseIndex];
      if (!deleting) {
        setTypedText(current.slice(0, charIndex + 1));
        charIndex += 1;
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1600);
          return;
        }
        timeoutId = setTimeout(tick, 70);
      } else {
        setTypedText(current.slice(0, charIndex - 1));
        charIndex -= 1;
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timeoutId = setTimeout(tick, 350);
          return;
        }
        timeoutId = setTimeout(tick, 35);
      }
    }

    timeoutId = setTimeout(tick, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  // Canvas particle network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let raf = 0;
    let mouse = { x: null, y: null };

    function resize() {
      const rect = hero.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      spawn();
    }

    function spawn() {
      const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 18000));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,
          r: Math.random() * 1.8 + 0.6,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(255,255,255,${0.18 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        if (mouse.x !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(183,228,199,${0.35 * (1 - dist / 160)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }

    const onMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const onVisibilityChange = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else draw();
    };

    hero.addEventListener('mousemove', onMouseMove);
    hero.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibilityChange);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      hero.removeEventListener('mousemove', onMouseMove);
      hero.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <canvas className="hero__canvas" id="heroCanvas" ref={canvasRef} aria-hidden="true"></canvas>
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__stars"></div>
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
        <div className="hero__grid"></div>
      </div>
      <div className="container hero__layout">
        <div className="hero__content">
          <div className="badge">
            <span className="badge__dot"></span>
            Gujarat's 1st &amp; Only Agency Exclusively Focused on Instagram Marketing.
          </div>
          <h1>
            We Don't Just Grow <span className="hero__ig">Instagram.</span><br />
            We Grow Your <span>Business.</span>
          </h1>
          <p className="hero__specialize">
            We specialize in <span id="typedText">{typedText}</span>
            <span className="typed-cursor" aria-hidden="true"></span>
          </p>
          <p className="hero__lead">We Scale Brands with Viral Content &amp; Performance Marketing</p>
          <p className="hero__copy">
            Most agencies only post content. Vedanco combines Viral Reels, Meta Ads &amp; Content Strategy to help brands generate real leads and sales.
          </p>
          <div className="hero__actions">
            <a href="#pricing" className="btn btn--primary">
              Grow My Business
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#contact" className="btn btn--outline">
              <span className="phone-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
                </svg>
              </span>
              Book Strategy Call
            </a>
          </div>
        </div>

        <aside className="hero__visual" aria-hidden="true">
          <div className="hero__ring hero__ring--outer"></div>
          <div className="hero__ring hero__ring--mid"></div>
          <div className="hero__logo-glow">
            <img src={vedancoLogo} alt="" />
          </div>
          <div className="float-card float-card--1">
            <strong>2700+</strong>
            <span>Trusted Clients</span>
          </div>
          <div className="float-card float-card--2">
            <strong>98%</strong>
            <span>Client Retention</span>
          </div>
          <div className="float-card float-card--3">
            <strong>12+</strong>
            <span>Years Experience</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
