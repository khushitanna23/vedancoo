import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    city: 'Gandhinagar',
    business: '',
    instagram: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          city: 'Gandhinagar',
          business: '',
          instagram: '',
          message: '',
        });
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false }));
        }, 5000);
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        loading: false,
        success: false,
        error: 'Unable to connect to the server. Please try again later.',
      });
    }
  };

  return (
    <section className="section section--white" id="contact">
      <div className="container">
        <div className="section__header">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">
            Let's Build <span>Something Great</span>
          </h2>
          <p className="section-sub">
            Ready to take your brand to the next level? We'd love to hear about your project.
          </p>
        </div>

        <div className="contact__grid">
          <form className="contact__form" id="contactForm" onSubmit={handleSubmit} noValidate={false}>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="contact-phone">Phone Number</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  autoComplete="tel"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-service">Vertical / Solution Interested In</label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a vertical / solution</option>
                  <option value="Marketing">1. Marketing (Meta Ads, Social Media, Influencer)</option>
                  <option value="Web & App Development">2. Web &amp; App Development (Websites, Apps)</option>
                  <option value="AI Automation">3. AI Automation (Workflows, CRM, WhatsApp)</option>
                  <option value="AI Call Agent & AI Agents">4. AI Call Agent &amp; AI Agents (Flagship Solution)</option>
                  <option value="Complete Growth Partner">Complete Growth Stack (All 4 Verticals)</option>
                </select>
              </div>
            </div>

            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="contact-city">City</label>
                <select
                  id="contact-city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a city</option>
                  <option value="Gandhinagar">Gandhinagar</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Surat">Surat</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="contact__field">
                <label htmlFor="contact-business">Business Name</label>
                <input
                  type="text"
                  id="contact-business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Your business"
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-instagram">Instagram Handle</label>
              <input
                type="text"
                id="contact-instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder="@yourbrand"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your goals..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn--primary btn--block"
              disabled={status.loading}
            >
              {status.loading ? 'Sending...' : 'Send Message'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>

            {status.success && (
              <p className="contact__success" id="contactSuccess">
                Thanks for reaching out. We'll get back to you within 24 hours.
              </p>
            )}

            {status.error && (
              <p className="contact__error" style={{ color: '#d90429', marginTop: '1rem', fontWeight: 600 }}>
                {status.error}
              </p>
            )}
          </form>

          <aside className="contact__info">
            <div className="contact__info-card">
              <h3>Contact Vedanco</h3>
              <p>Gujarat's Instagram marketing partner for brands that want leads, not just likes.</p>
              <ul>
                <li>
                  <strong>Email</strong>
                  <a href="mailto:info@vedanco.com">info@vedanco.com</a>
                </li>
                <li>
                  <strong>Phone</strong>
                  <a href="tel:+919510774987">+91 95107 74987</a>
                  <br />
                  <a href="tel:+916353097642" style={{ display: 'inline-block', marginTop: '0.2rem' }}>+91 6353 097 642</a>
                </li>
                <li>
                  <strong>Office Address</strong>
                  <span>InfoCity, Super Mall 1, Office No. 421/M, Gandhinagar, Gujarat – India</span>
                </li>
              </ul>
              <a href="#pricing" className="btn btn--primary">
                View Pricing
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
