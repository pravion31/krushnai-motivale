import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, MapPin, ShieldCheck, Gem, Gift, Sparkles
} from 'lucide-react';
import Hero from '../../components/Hero/Hero';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import ProductCard from '../../components/ProductCard/ProductCard';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newsletter/Newsletter';
import { categories } from '../../data/categories';
import { getBestsellers, getNewArrivals } from '../../data/products';
import storeImg from '../../assets/images/about_store.png';
import tanmaniImg from '../../assets/images/category_tanmani.png';
import './Home.css';

// Custom Instagram SVG icon
const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

// Instagram gallery placeholder items
const instagramItems = [
  { id: 1, img: tanmaniImg, alt: 'Traditional Tanmani Necklace' },
  { id: 2, img: storeImg, alt: 'Krushnai Motivale Store' },
  { id: 3, img: tanmaniImg, alt: 'Pearl Jewellery' },
  { id: 4, img: storeImg, alt: 'Jewellery Display' },
  { id: 5, img: tanmaniImg, alt: 'Bridal Jewellery' },
  { id: 6, img: storeImg, alt: 'Traditional Collection' },
];

const whyChooseUs = [
  {
    icon: <Gem size={28} />,
    title: 'Traditional Jewellery Designs',
    titleMarathi: 'पारंपरिक दागिने',
    desc: 'Authentic Maharashtrian jewellery designs rooted in centuries of cultural tradition and craftsmanship.',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Maharashtrian Heritage',
    titleMarathi: 'महाराष्ट्रियन वारसा',
    desc: 'Every piece celebrates the rich Peshwai culture and traditional artistry of Maharashtra.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Elegant Collections',
    titleMarathi: 'सुंदर संग्रह',
    desc: 'Carefully curated jewellery collections for every occasion — from festivals to weddings.',
  },
  {
    icon: <Gift size={28} />,
    title: 'Special Gift Collections',
    titleMarathi: 'भेट संग्रह',
    desc: 'Beautifully packaged gift sets perfect for weddings, festivals, and special celebrations.',
  },
];

const Home = () => {
  const bestsellers = getBestsellers().slice(0, 4);
  const newArrivals = getNewArrivals().slice(0, 4);

  return (
    <main className="home-page page-wrapper">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Shop by Category */}
      <section className="section home-categories" aria-labelledby="categories-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Explore</span>
            <h2 id="categories-heading" className="section-title">Shop by Collection</h2>
            <div className="section-divider"><span className="section-divider-icon">✦</span></div>
            <p className="section-subtitle">
              Discover our seven beautiful categories of traditional Maharashtrian jewellery
            </p>
          </div>

          <div className="categories-grid">
            {categories.map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bestselling Collection */}
      <section className="section home-bestsellers" aria-labelledby="bestsellers-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Most Loved</span>
            <h2 id="bestsellers-heading" className="section-title">Bestselling Collection</h2>
            <div className="section-divider"><span className="section-divider-icon">✦</span></div>
            <p className="section-subtitle">Our most beloved pieces, cherished by customers across Maharashtra</p>
          </div>
          <div className="products-grid">
            {bestsellers.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="section-footer-cta">
            <Link to="/shop" className="btn btn-primary btn-lg">
              View All Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Featured Collection Banner */}
      <section className="home-featured section" aria-labelledby="featured-heading">
        <div className="home-featured-bg">
          <img src={storeImg} alt="Featured Collection" />
          <div className="home-featured-overlay" />
        </div>
        <div className="container home-featured-content">
          <div className="home-featured-text">
            <span className="section-tag" style={{ color: 'var(--color-gold-light)' }}>
              Featured
            </span>
            <h2 id="featured-heading" className="home-featured-title">
              The Bridal<br />
              <em>Peshwai Collection</em>
            </h2>
            <p className="home-featured-desc">
              Our signature bridal collection brings together the finest Maharashtrian jewellery 
              traditions. From intricate tanmani necklaces to traditional nath — every piece 
              tells a story of heritage and love.
            </p>
            <Link to="/shop" className="btn btn-gold btn-lg">
              Explore Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. New Arrivals */}
      <section className="section home-new-arrivals" aria-labelledby="new-arrivals-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Fresh in Store</span>
            <h2 id="new-arrivals-heading" className="section-title">New Arrivals</h2>
            <div className="section-divider"><span className="section-divider-icon">✦</span></div>
            <p className="section-subtitle">Discover our latest additions to the Krushnai Motivale collection</p>
          </div>
          <div className="products-grid">
            {newArrivals.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="section-footer-cta">
            <Link to="/shop?filter=new" className="btn btn-outline btn-lg">
              View All New Arrivals
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Our Story */}
      <section className="section home-story" aria-labelledby="story-heading">
        <div className="container">
          <div className="home-story-grid">
            <div className="home-story-image">
              <img src={storeImg} alt="Krushnai Motivale Store — Our Heritage" />
              <div className="home-story-badge">
                <span className="font-devanagari">कृष्णाई</span>
                <span>Est. Chinchwad, Pune</span>
              </div>
            </div>
            <div className="home-story-content">
              <span className="section-tag" style={{ textAlign: 'left' }}>Our Heritage</span>
              <h2 id="story-heading" className="section-title" style={{ textAlign: 'left' }}>
                The Story of<br />
                <span className="home-story-brand">Krushnai Motivalé</span>
              </h2>
              <div className="home-story-marathi font-devanagari">
                कृष्णाई मोतीवाले
              </div>
              <p className="home-story-text">
                Nestled in the heart of Chinchwad Gaon, Pune, Krushnai Motivale is a beloved 
                destination for traditional Maharashtrian jewellery. We celebrate the timeless 
                beauty of pearl and gold jewellery rooted in the rich Peshwai heritage.
              </p>
              <p className="home-story-text">
                Our collection brings together the finest traditional designs — from intricate 
                tanmani necklaces to elegant kanache vel and stunning nath — each piece crafted 
                to preserve and celebrate Maharashtrian cultural identity.
              </p>
              <p className="home-story-text">
                Located opposite P.N. Gadgil Jewellers at Chapekar Chowk, we are proud to serve 
                the community with authentic traditional jewellery that makes every occasion 
                memorable.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="section home-why-us" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Promise</span>
            <h2 id="why-heading" className="section-title">Why Choose Krushnai Motivale</h2>
            <div className="section-divider"><span className="section-divider-icon">✦</span></div>
          </div>
          <div className="why-us-grid">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="why-us-card">
                <div className="why-us-icon">{item.icon}</div>
                <div className="why-us-marathi font-devanagari">{item.titleMarathi}</div>
                <h3 className="why-us-title">{item.title}</h3>
                <p className="why-us-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Instagram Gallery */}
      <section className="section home-instagram" aria-labelledby="instagram-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Follow Us</span>
            <h2 id="instagram-heading" className="section-title">Our Instagram Gallery</h2>
            <div className="section-divider"><span className="section-divider-icon">✦</span></div>
            <p className="section-subtitle">
              Follow us on Instagram for the latest jewellery collections and inspiration
            </p>
          </div>
          <div className="instagram-grid">
            {instagramItems.map(item => (
              <a
                key={item.id}
                href="https://www.instagram.com/krushnai_motiwale/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-item"
                aria-label={`View on Instagram: ${item.alt}`}
              >
                <img src={item.img} alt={item.alt} loading="lazy" />
                <div className="instagram-item-overlay">
              <InstagramIcon size={24} />
                </div>
              </a>
            ))}
          </div>
          <div className="section-footer-cta">
            <a
              href="https://www.instagram.com/krushnai_motiwale/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg"
            >
              <InstagramIcon size={18} />
              Follow @krushnai_motiwale
            </a>
          </div>
        </div>
      </section>

      {/* 10. Visit Our Store */}
      <section className="section home-store" aria-labelledby="store-heading">
        <div className="container">
          <div className="home-store-grid">
            {/* Map Placeholder */}
            <div className="home-store-map">
              <div className="map-placeholder">
                <MapPin size={40} className="map-pin-icon" />
                <p>Kunal Market, Bhoi Ali,<br />Chapekar Chowk, Chinchwad Gaon,<br />Pune — 411033</p>
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

            {/* Store Info */}
            <div className="home-store-info">
              <span className="section-tag" style={{ textAlign: 'left' }}>Find Us</span>
              <h2 id="store-heading" className="section-title" style={{ textAlign: 'left' }}>
                Visit Our Store
              </h2>
              <div className="store-detail">
                <MapPin size={18} className="store-detail-icon" />
                <div>
                  <strong>Store Address</strong>
                  <address>
                    Kunal Market, Bhoi Ali,<br />
                    Chapekar Chowk, Chinchwad Gaon,<br />
                    Pune, Maharashtra — 411033
                  </address>
                  <span className="store-landmark">
                    Opposite P.N. Gadgil Jewellers, Near Super Style
                  </span>
                </div>
              </div>
              <div className="store-detail">
                <InstagramIcon size={18} className="store-detail-icon" />
                <div>
                  <strong>Instagram</strong>
                  <a
                    href="https://www.instagram.com/krushnai_motiwale/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @krushnai_motiwale
                  </a>
                </div>
              </div>
              <div className="store-actions">
                <a
                  href="https://maps.google.com/?q=Kunal+Market+Bhoi+Ali+Chapekar+Chowk+Chinchwad+Gaon+Pune+411033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MapPin size={16} />
                  Get Directions
                </a>
                <a
                  href="https://wa.me/?text=Hi, I'm interested in your jewellery collection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Newsletter */}
      <Newsletter />
    </main>
  );
};

export default Home;
