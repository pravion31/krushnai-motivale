import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroBanner from '../../assets/banners/hero_banner.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" aria-label="Hero section">
      {/* Background */}
      <div className="hero-bg">
        <img src={heroBanner} alt="Krushnai Motivale — Traditional Maharashtrian Jewellery Collection" className="hero-bg-img" />
        <div className="hero-bg-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content container">
        <div className="hero-text-block">
          <div className="hero-eyebrow">
            <Sparkles size={14} className="hero-eyebrow-icon" />
            <span className="font-devanagari">पारंपरिक महाराष्ट्रियन दागिने</span>
          </div>

          <h1 className="hero-headline">
            Timeless Jewellery of
            <span className="hero-headline-accent"> Maharashtrian </span>
            Heritage
          </h1>

          <p className="hero-subtitle">
            Discover our exquisite collection of traditional pearl and gold jewellery, 
            inspired by the royal Peshwai culture of Maharashtra.
          </p>

          <div className="hero-brand-marathi">
            <span className="font-devanagari">कृष्णाई मोतीवाले</span>
            <span className="hero-brand-tagline">Chinchwad, Pune</span>
          </div>

          <div className="hero-actions">
            <Link to="/shop" className="btn btn-gold btn-lg hero-btn-primary">
              Shop Collection
              <ArrowRight size={18} />
            </Link>
            <Link to="/category/medium-tanmani" className="btn btn-white-outline btn-lg">
              Explore Jewellery
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="hero-trust">
            <div className="hero-trust-item">
              <span className="hero-trust-number">7+</span>
              <span className="hero-trust-label">Categories</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item">
              <span className="hero-trust-number">100%</span>
              <span className="hero-trust-label">Traditional</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item">
              <span className="hero-trust-number">🎁</span>
              <span className="hero-trust-label">Gift Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
