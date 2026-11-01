import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="newsletter section-sm" aria-labelledby="newsletter-heading">
      <div className="container">
        <div className="newsletter-inner">
          <div className="newsletter-ornament" aria-hidden="true">✦</div>

          {!submitted ? (
            <>
              <span className="section-tag">Stay Connected</span>
              <h2 id="newsletter-heading" className="newsletter-title">
                Join the Krushnai Family
              </h2>
              <p className="newsletter-subtitle">
                Be the first to discover new collections, exclusive offers, and traditional jewellery stories.
              </p>
              <form
                className="newsletter-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Newsletter subscription"
              >
                <div className="newsletter-input-group">
                  <Mail size={18} className="newsletter-input-icon" aria-hidden="true" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="newsletter-input"
                    id="newsletter-email"
                    aria-label="Email address"
                    aria-describedby={error ? 'newsletter-error' : undefined}
                    autoComplete="email"
                  />
                  <button type="submit" className="btn btn-primary newsletter-btn">
                    Subscribe
                  </button>
                </div>
                {error && (
                  <p className="newsletter-error" id="newsletter-error" role="alert">
                    {error}
                  </p>
                )}
              </form>
              <p className="newsletter-note">
                We respect your privacy. No spam, ever. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="newsletter-success" role="status" aria-live="polite">
              <CheckCircle size={48} className="newsletter-success-icon" />
              <h3>Thank You for Subscribing!</h3>
              <p>You'll receive updates about our latest collections and offers.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
