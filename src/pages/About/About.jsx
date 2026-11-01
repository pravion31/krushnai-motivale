import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import storeImg from '../../assets/images/about_store.png';
import logoImg from '../../assets/logo/logo.png';
import './About.css';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const About = () => {
  return (
    <main className="about-page page-wrapper">
      {/* Hero Banner */}
      <div className="about-hero">
        <div className="about-hero-bg">
          <img src={storeImg} alt="Krushnai Motivale — Our Story" />
          <div className="about-hero-overlay" />
        </div>
        <div className="container about-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">›</span>
            <span>About Us</span>
          </div>
          <h1 className="about-hero-title">Our Story</h1>
          <div className="about-hero-marathi font-devanagari">आमची गोष्ट</div>
        </div>
      </div>

      <div className="container">
        {/* Brand Section */}
        <section className="about-brand section" aria-labelledby="about-brand-heading">
          <div className="about-brand-grid">
            <div className="about-brand-image">
              <img src={logoImg} alt="Krushnai Motivale Logo" className="about-logo-large" />
            </div>
            <div className="about-brand-content">
              <span className="section-tag" style={{ textAlign: 'left' }}>Who We Are</span>
              <h2 id="about-brand-heading" className="section-title" style={{ textAlign: 'left' }}>
                Krushnai Motivale
              </h2>
              <div className="about-marathi-name font-devanagari">कृष्णाई मोतीवाले</div>
              <p className="about-text">
                Krushnai Motivale is a beloved destination for authentic traditional Maharashtrian 
                jewellery, located in the heart of Chinchwad Gaon, Pune. Our store is dedicated 
                to preserving and celebrating the rich cultural heritage of Maharashtra through 
                beautiful pearl and gold jewellery.
              </p>
              <p className="about-text">
                We offer an exquisite range of traditional jewellery including Medium Tanmani, 
                Kanache Vel, Chinchpeti, Moti Bangles, Bajuband, Jhumake, and Nath — each piece 
                reflecting the timeless artistry of Maharashtrian craftsmanship.
              </p>
              <p className="about-text">
                Located conveniently opposite P.N. Gadgil Jewellers at Chapekar Chowk, we are 
                proud to serve families across Pune and beyond with traditional jewellery that 
                makes every occasion truly special.
              </p>
            </div>
          </div>
        </section>

        {/* Our Collections */}
        <section className="about-collections section" aria-labelledby="about-collections-heading">
          <div className="section-header">
            <span className="section-tag">What We Offer</span>
            <h2 id="about-collections-heading" className="section-title">Our Collections</h2>
            <div className="section-divider"><span className="section-divider-icon">✦</span></div>
          </div>
          <div className="about-collections-grid">
            {[
              { name: 'Medium Tanmani', marathi: 'मेडियम तनमणी', desc: 'Traditional pearl and gold necklaces in classic Maharashtrian style.', link: '/category/medium-tanmani' },
              { name: 'Kanache Vel', marathi: 'कानाचे वेल', desc: 'Intricate ear chain sets with delicate pearl and gold work.', link: '/category/kanache-vel' },
              { name: 'Chinchpeti', marathi: 'चिंचपेटी', desc: 'Authentic tamarind seed necklaces with traditional craftsmanship.', link: '/category/chinchpeti' },
              { name: 'Moti Bangles', marathi: 'मोती बांगड्या', desc: 'Elegant pearl bangles crafted in traditional Maharashtrian style.', link: '/category/moti-bangles' },
              { name: 'Bajuband', marathi: 'बाजूबंद', desc: 'Royal upper arm bracelets with intricate traditional designs.', link: '/category/bajuband' },
              { name: 'Jhumake', marathi: 'झुमके', desc: 'Beautiful traditional earrings with delicate bells and pearl drops.', link: '/category/jhumake' },
              { name: 'Nath', marathi: 'नाथ', desc: 'Majestic nose rings in traditional Maharashtrian bridal style.', link: '/category/nath' },
            ].map((item, i) => (
              <Link key={i} to={item.link} className="about-collection-card">
                <div className="about-collection-marathi font-devanagari">{item.marathi}</div>
                <h3 className="about-collection-name">{item.name}</h3>
                <p className="about-collection-desc">{item.desc}</p>
                <div className="about-collection-cta">
                  Explore <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Store Info */}
        <section className="about-store section" aria-labelledby="about-store-heading">
          <div className="about-store-grid">
            <div className="about-store-content">
              <span className="section-tag" style={{ textAlign: 'left' }}>Find Us</span>
              <h2 id="about-store-heading" className="section-title" style={{ textAlign: 'left' }}>
                Visit Our Store
              </h2>

              <div className="about-store-detail">
                <MapPin size={20} className="about-store-icon" />
                <div>
                  <h3>Store Address</h3>
                  <address>
                    Kunal Market, Bhoi Ali,<br />
                    Chapekar Chowk, Chinchwad Gaon,<br />
                    Pune, Maharashtra — 411033
                  </address>
                  <p className="about-store-landmark">
                    Landmark: Opposite P.N. Gadgil Jewellers, Near Super Style
                  </p>
                </div>
              </div>

              <div className="about-store-detail">
                <InstagramIcon size={20} className="about-store-icon" />
                <div>
                  <h3>Follow Us</h3>
                  <a
                    href="https://www.instagram.com/krushnai_motiwale/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-instagram-link"
                  >
                    @krushnai_motiwale
                  </a>
                </div>
              </div>

              <div className="about-store-actions">
                <a
                  href="https://maps.google.com/?q=Kunal+Market+Bhoi+Ali+Chapekar+Chowk+Chinchwad+Gaon+Pune+411033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MapPin size={16} /> Get Directions
                </a>
                <a
                  href="https://wa.me/?text=Hi, I'm interested in your jewellery at Krushnai Motivale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
            <div className="about-store-image">
              <img src={storeImg} alt="Krushnai Motivale Store" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
