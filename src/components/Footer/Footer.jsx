import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { categories } from '../../data/categories';
import logoImg from '../../assets/logo/logo.png';
import './Footer.css';

// Custom Instagram SVG since lucide-react v1.66 doesn't export Instagram
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Footer = () => {
  const emailRef = useRef(null);

  return (
    <footer className="footer" role="contentinfo">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <img src={logoImg} alt="Krushnai Motivale" />
                <div>
                  <span className="footer-brand-name">Krushnai Motivale</span>
                  <span className="footer-brand-marathi">कृष्णाई मोतीवाले</span>
                </div>
              </Link>
              <p className="footer-brand-desc">
                Traditional Maharashtrian jewellery crafted with passion and heritage. 
                Celebrating the timeless beauty of Peshwai culture through exquisite pearl and gold jewellery.
              </p>
              <div className="footer-social">
                <a
                  href="https://www.instagram.com/krushnai_motiwale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Follow on Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
              <div className="footer-whatsapp">
                <a
                  href="https://wa.me/?text=Hi, I'm interested in your jewellery collection at Krushnai Motivale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold-outline btn-sm"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/shop', label: 'Shop All' },
                  { to: '/about', label: 'About Us' },
                  { to: '/contact', label: 'Contact Us' },
                  { to: '/wishlist', label: 'My Wishlist' },
                  { to: '/cart', label: 'Shopping Cart' },
                ].map(link => (
                  <li key={link.to}>
                    <Link to={link.to} className="footer-link">
                      <ChevronRight size={12} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collections */}
            <div className="footer-col">
              <h4 className="footer-col-title">Our Collections</h4>
              <ul className="footer-links">
                {categories.map(cat => (
                  <li key={cat.id}>
                    <Link to={`/category/${cat.slug}`} className="footer-link">
                      <ChevronRight size={12} />
                      <span>{cat.name}</span>
                      <span className="footer-link-marathi">{cat.nameMarathi}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-col-title">Visit Our Store</h4>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <MapPin size={16} className="footer-contact-icon" />
                  <div>
                    <address className="footer-address">
                      Kunal Market, Bhoi Ali,<br />
                      Chapekar Chowk, Chinchwad Gaon,<br />
                      Pune, Maharashtra — 411033
                    </address>
                    <span className="footer-landmark">
                      Opp. P.N. Gadgil Jewellers, Near Super Style
                    </span>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <InstagramIcon size={16} />
                  <a
                    href="https://www.instagram.com/krushnai_motiwale/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-contact-link"
                  >
                    @krushnai_motiwale
                  </a>
                </li>
              </ul>
              <div className="footer-directions">
                <a
                  href="https://maps.google.com/?q=Kunal+Market+Bhoi+Ali+Chapekar+Chowk+Chinchwad+Gaon+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold-outline btn-sm"
                >
                  📍 Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Krushnai Motivale — कृष्णाई मोतीवाले. All rights reserved.
            </p>
            <p className="footer-disclaimer">
              Traditional Maharashtrian Jewellery | Chinchwad, Pune
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
