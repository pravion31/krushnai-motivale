import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Priya Deshmukh',
    location: 'Pune',
    rating: 5,
    text: 'The Medium Tanmani set I purchased for my wedding was absolutely stunning. The craftsmanship was impeccable and it perfectly complemented my Paithani saree. Everyone kept asking me where I got it from!',
    occasion: 'Wedding Collection',
    avatar: 'PD',
    note: '(Demo Review)',
  },
  {
    id: 2,
    name: 'Savita Kulkarni',
    location: 'Nashik',
    rating: 5,
    text: 'I have been buying traditional jewellery from Krushnai Motivale for years. The pearl bangles and jhumke are of excellent quality. The store team is very helpful in choosing the right pieces for different occasions.',
    occasion: 'Moti Bangles',
    avatar: 'SK',
    note: '(Demo Review)',
  },
  {
    id: 3,
    name: 'Anita Joshi',
    location: 'Mumbai',
    rating: 5,
    text: 'The Chinchpeti necklace I bought is an absolute masterpiece. I ordered it for my daughter\'s engagement and it was delivered beautifully packaged. The traditional design is exactly what we were looking for.',
    occasion: 'Chinchpeti Collection',
    avatar: 'AJ',
    note: '(Demo Review)',
  },
  {
    id: 4,
    name: 'Meera Patil',
    location: 'Kolhapur',
    rating: 5,
    text: 'What a beautiful collection of traditional Maharashtrian jewellery! The Nath I purchased is simply gorgeous. It is the perfect blend of traditional design and premium quality. Highly recommend this store!',
    occasion: 'Nath Collection',
    avatar: 'MP',
    note: '(Demo Review)',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="testimonials section" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Customer Stories</span>
          <h2 id="testimonials-heading" className="section-title">What Our Customers Say</h2>
          <div className="section-divider"><span className="section-divider-icon">✦</span></div>
          <p className="section-subtitle">
            These are sample reviews. We'd love to hear about your experience with our jewellery!
          </p>
        </div>

        <div className="testimonials-slider">
          <button
            className="testimonial-nav prev"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="testimonial-card">
            <Quote size={36} className="testimonial-quote-icon" aria-hidden="true" />

            <div className="testimonial-rating" aria-label={`${t.rating} out of 5 stars`}>
              {[1, 2, 3, 4, 5].map(i => (
                <Star
                  key={i}
                  size={16}
                  fill={i <= t.rating ? 'var(--color-gold)' : 'none'}
                  color="var(--color-gold)"
                />
              ))}
            </div>

            <blockquote className="testimonial-text">"{t.text}"</blockquote>

            <div className="testimonial-note">{t.note}</div>

            <div className="testimonial-author">
              <div className="testimonial-avatar" aria-hidden="true">{t.avatar}</div>
              <div className="testimonial-author-info">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-location">{t.location}</span>
              </div>
              <div className="testimonial-occasion">{t.occasion}</div>
            </div>
          </div>

          <button
            className="testimonial-nav next"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="testimonial-dots" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
