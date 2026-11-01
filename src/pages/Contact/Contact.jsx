import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const InstagramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Valid email required';
    if (form.phone && !form.phone.match(/^[6-9]\d{9}$/)) errs.phone = 'Valid 10-digit phone number';
    if (!form.message.trim() || form.message.length < 10) errs.message = 'Message must be at least 10 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <main className="contact-page page-wrapper">
      {/* Hero Banner */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="container contact-hero-content">
          <span className="section-tag" style={{ color: 'var(--color-gold-light)' }}>Get in Touch</span>
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-sub">
            We'd love to hear from you. Visit us at our store in Chinchwad Gaon,<br />
            or reach out through any of the channels below.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="contact-layout">
          {/* Info Column */}
          <div className="contact-info">
            <h2 className="contact-info-title">Visit Our Store</h2>
            <p className="contact-info-sub font-devanagari">कृष्णाई मोतीवाले — चिंचवड गाव, पुणे</p>

            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3>Store Address</h3>
                  <address>
                    Kunal Market, Bhoi Ali,<br />
                    Chapekar Chowk, Chinchwad Gaon,<br />
                    Pune, Maharashtra — 411033
                  </address>
                  <p className="contact-landmark">
                    Opposite P.N. Gadgil Jewellers, Near Super Style
                  </p>
                  <a
                    href="https://maps.google.com/?q=Kunal+Market+Bhoi+Ali+Chapekar+Chowk+Chinchwad+Gaon+Pune+411033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    📍 Get Directions →
                  </a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <InstagramIcon size={22} />
                </div>
                <div>
                  <h3>Instagram</h3>
                  <a
                    href="https://www.instagram.com/krushnai_motiwale/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    @krushnai_motiwale
                  </a>
                  <p>Follow us for latest collections, offers and inspiration</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <h3>WhatsApp Enquiry</h3>
                  <a
                    href="https://wa.me/?text=Hi, I am interested in your jewellery collection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    💬 Message us on WhatsApp
                  </a>
                  <p>For product enquiries, custom orders and more</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Clock size={22} />
                </div>
                <div>
                  <h3>Store Hours</h3>
                  <p><strong>Monday – Saturday:</strong> 10:00 AM – 8:00 PM</p>
                  <p><strong>Sunday:</strong> 11:00 AM – 6:00 PM</p>
                  <p className="contact-note">Open on all public holidays</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="contact-map">
              <div className="contact-map-inner">
                <MapPin size={36} />
                <p>Kunal Market, Bhoi Ali, Chapekar Chowk<br />Chinchwad Gaon, Pune — 411033</p>
                <a
                  href="https://maps.google.com/?q=Kunal+Market+Bhoi+Ali+Chapekar+Chowk+Chinchwad+Gaon+Pune+411033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="contact-form-card">
              {submitted ? (
                <div className="form-success">
                  <CheckCircle size={56} className="form-success-icon" />
                  <h2>Thank You!</h2>
                  <p>Your message has been received. We'll get back to you shortly.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="contact-form-header">
                    <h2 className="contact-form-title">Send a Message</h2>
                    <p className="contact-form-sub">Fill in the form below and we will respond within 24 hours</p>
                  </div>
                  <form onSubmit={handleSubmit} className="contact-form" noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-name">Your Name *</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          className={`form-input ${errors.name ? 'input-error' : ''}`}
                          placeholder="Full name"
                        />
                        {errors.name && <span className="form-error">{errors.name}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-email">Email Address *</label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          className={`form-input ${errors.email ? 'input-error' : ''}`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-phone">Phone (Optional)</label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className={`form-input ${errors.phone ? 'input-error' : ''}`}
                          placeholder="Mobile number"
                        />
                        {errors.phone && <span className="form-error">{errors.phone}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-subject">Subject</label>
                        <select
                          id="contact-subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="">Select a topic</option>
                          <option value="product">Product Enquiry</option>
                          <option value="order">Order Query</option>
                          <option value="custom">Custom Order</option>
                          <option value="wholesale">Wholesale</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">Your Message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                        placeholder="Tell us about your enquiry, the jewellery you're looking for, or any questions you have..."
                        rows={5}
                      />
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg contact-submit-btn">
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
