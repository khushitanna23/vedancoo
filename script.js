(function () {
  const phrases = [
    "Viral Reels",
    "Marketing & Meta Ads",
    "Web & App Development",
    "AI Workflow Automation",
    "Autonomous AI Agents"
  ];

  const typedEl = document.getElementById("typedText");
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    if (!typedEl) return;
    const current = phrases[phraseIndex];
    if (!deleting) {
      typedEl.textContent = current.slice(0, charIndex + 1);
      charIndex += 1;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
      setTimeout(tick, 70);
    } else {
      typedEl.textContent = current.slice(0, charIndex - 1);
      charIndex -= 1;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 350);
        return;
      }
      setTimeout(tick, 35);
    }
  }
  tick();

  // Mobile nav
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navMenu");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Header scroll
  const header = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 20);
  });

  // Active nav on scroll
  const sections = ["home", "services", "ai-call-agent", "portfolio", "about", "testimonials", "pricing", "contact"];
  const navLinks = document.querySelectorAll(".nav a");
  function updateActiveNav() {
    let current = "home";
    sections.forEach(function (id) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 140) current = id;
    });
    navLinks.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();

  // Stats counters
  const stats = document.querySelectorAll(".stats__item");
  let statsDone = false;
  function animateCount(el, target) {
    const start = performance.now();
    const duration = 1800;
    function frame(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  function checkStats() {
    if (statsDone) return;
    const section = document.getElementById("stats");
    if (!section) return;
    if (section.getBoundingClientRect().top < window.innerHeight * 0.85) {
      statsDone = true;
      stats.forEach(function (item) {
        const target = Number(item.dataset.target || 0);
        const countEl = item.querySelector(".count");
        if (countEl) animateCount(countEl, target);
      });
    }
  }
  window.addEventListener("scroll", checkStats);
  checkStats();

  // Testimonials — from vedanco.com
  const testimonials = [
    {
      name: "James Carter",
      role: "CTO, FinEdge Inc.",
      text: "Vedanco delivered a flawless mobile banking app ahead of schedule. Their AI team is world-class — absolute professionals!",
      initials: "JC"
    },
    {
      name: "Sarah Mitchell",
      role: "CEO, RetailX",
      text: "Our eCommerce revenue doubled in 6 months after launch. The Shopify Plus store they built is lightning-fast and stunning.",
      initials: "SM"
    },
    {
      name: "Rohan Mehta",
      role: "Founder, MediCare+",
      text: "Building a HIPAA-compliant telemedicine platform is no joke. They nailed it — compliance, UX and performance all together.",
      initials: "RM"
    }
  ];

  const track = document.getElementById("testimonialTrack");
  if (track) {
    const loop = testimonials.concat(testimonials).concat(testimonials);
    track.innerHTML = loop
      .map(function (t) {
        return (
          '<article class="testimonial-card">' +
          '<div class="testimonial-card__quote">"</div>' +
          '<p class="testimonial-card__text">' +
          t.text +
          "</p>" +
          '<div class="testimonial-card__stars" aria-label="5 out of 5 stars">' +
          "★★★★★" +
          "</div>" +
          '<div class="testimonial-card__author">' +
          '<div class="testimonial-card__avatar">' +
          t.initials +
          "</div>" +
          "<div><strong class=\"testimonial-card__name\">" +
          t.name +
          '</strong><span class="testimonial-card__role">' +
          t.role +
          "</span></div></div></article>"
        );
      })
      .join("");

    let offset = 0;
    function animateTestimonials() {
      offset += 0.4;
      const half = track.scrollWidth / 3;
      if (offset >= half) offset = 0;
      track.style.transform = "translateX(-" + offset + "px)";
      requestAnimationFrame(animateTestimonials);
    }
    requestAnimationFrame(animateTestimonials);
  }

  // Hero particle network animation
  (function initHeroCanvas() {
    const canvas = document.getElementById("heroCanvas");
    const hero = document.getElementById("home");
    if (!canvas || !hero) return;
    const ctx = canvas.getContext("2d");
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
          r: Math.random() * 1.8 + 0.6
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
        ctx.fillStyle = "rgba(255,255,255,0.55)";
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
            ctx.strokeStyle = "rgba(255,255,255," + (0.18 * (1 - dist / 120)) + ")";
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
            ctx.strokeStyle = "rgba(183,228,199," + (0.35 * (1 - dist / 160)) + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }

    hero.addEventListener("mousemove", function (e) {
      const rect = hero.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    hero.addEventListener("mouseleave", function () {
      mouse.x = null;
      mouse.y = null;
    });

    window.addEventListener("resize", resize);
    resize();
    draw();

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) cancelAnimationFrame(raf);
      else draw();
    });
  })();

  // Pricing toggles
  document.querySelectorAll(".pricing-card").forEach(function (card) {
    const amount = card.querySelector(".amount");
    const period = card.querySelector(".period");
    const note = card.querySelector(".pricing-card__note");
    const months = card.querySelector(".months");
    const buttons = card.querySelectorAll(".pricing-card__toggle button");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        const p = btn.dataset.period;
        if (!amount || !period) return;
        if (p === "monthly") {
          amount.textContent = amount.dataset.m;
          period.textContent = "/month";
          if (note) {
            note.hidden = true;
            note.textContent = "";
          }
          if (months) {
            months.textContent = "1";
            months.nextElementSibling.textContent = "Month";
          }
        } else if (p === "quarterly") {
          amount.textContent = amount.dataset.q;
          period.textContent = "/quarter";
          if (note) {
            note.hidden = false;
            note.textContent = "Minimum Term: 3 Months";
          }
          if (months) {
            months.textContent = "3";
            months.nextElementSibling.textContent = "Months";
          }
        } else {
          amount.textContent = amount.dataset.a;
          period.textContent = "/year";
          if (note) {
            note.hidden = false;
            note.textContent = "Pay for 10 Months + 2 Months Free";
          }
          if (months) {
            months.textContent = "10+2";
            months.nextElementSibling.textContent = "Months";
          }
        }
      });
    });
  });

  // Contact form
  const form = document.getElementById("contactForm");
  const success = document.getElementById("contactSuccess");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (success) success.hidden = false;
      form.reset();
      setTimeout(function () {
        if (success) success.hidden = true;
      }, 4000);
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
