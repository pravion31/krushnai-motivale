import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="category-card"
      aria-label={`Explore ${category.name} collection`}
    >
      <div className="category-card-image">
        <img src={category.image} alt={category.name} loading="lazy" />
        <div className="category-card-overlay" />
      </div>
      <div className="category-card-content">
        <div className="category-card-marathi">{category.nameMarathi}</div>
        <h3 className="category-card-name">{category.name}</h3>
        <p className="category-card-desc">{category.shortDesc}</p>
        <div className="category-card-cta">
          <span>Explore Collection</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
