import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import './AnnouncementBar.css';

const announcements = [
  '🌸 New Arrivals: Bridal Tanmani Collection — Shop Now',
  '✨ Free Shipping on Orders Above ₹1,500 | Across India',
  '🎁 Gift Vouchers Available — ₹299 Onwards | Perfect for Every Occasion',
  '💎 Traditional Maharashtrian Jewellery | 20+ Years of Heritage',
];

const AnnouncementBar = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + announcements.length) % announcements.length);
  const next = () => setCurrent(c => (c + 1) % announcements.length);

  return (
    <div className="announcement-bar" role="marquee" aria-live="polite">
      <div className="announcement-container">
        <button className="announcement-nav" onClick={prev} aria-label="Previous announcement">
          <ChevronLeft size={14} />
        </button>
        <div className="announcement-content">
          <Tag size={12} className="announcement-icon" />
          <span className="announcement-text">{announcements[current]}</span>
        </div>
        <button className="announcement-nav" onClick={next} aria-label="Next announcement">
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
