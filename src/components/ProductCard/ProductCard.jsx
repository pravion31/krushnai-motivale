import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import './ProductCard.css';

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart, isInCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [addedToCart, setAddedToCart] = useState(false);

  const inCart = isInCart(product.id);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <article className="product-card">
      <div className="product-card-image-wrap">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <img
            src={product.image}
            alt={product.name}
            className="product-card-img"
            loading="lazy"
          />
        </Link>

        {/* Badges */}
        <div className="product-card-badges">
          {product.isNew && <span className="badge badge-new">New</span>}
          {discount && <span className="badge badge-sale">-{discount}%</span>}
          {product.isBestseller && <span className="badge badge-maroon">Bestseller</span>}
        </div>

        {/* Wishlist */}
        <button
          className={`product-wishlist-btn ${inWishlist ? 'active' : ''}`}
          onClick={handleToggleWishlist}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={16} fill={inWishlist ? 'currentColor' : 'none'} />
        </button>

        {/* Hover Actions */}
        <div className="product-card-actions">
          {onQuickView && (
            <button
              className="product-action-btn"
              onClick={(e) => { e.preventDefault(); onQuickView(product); }}
              aria-label="Quick view"
            >
              <Eye size={14} />
              Quick View
            </button>
          )}
          <button
            className={`product-action-btn ${addedToCart ? 'added' : ''} ${inCart ? 'in-cart' : ''}`}
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <ShoppingBag size={14} />
            {addedToCart ? 'Added!' : inCart ? 'In Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <div className="product-card-info">
        <div className="product-card-category">{product.categoryLabel}</div>
        <Link to={`/product/${product.id}`} className="product-card-name-link">
          <h3 className="product-card-name">{product.name}</h3>
          <span className="product-card-marathi">{product.nameMarathi}</span>
        </Link>

        <div className="product-card-rating">
          {[1,2,3,4,5].map(i => (
            <Star key={i} size={11} fill={i <= 4 ? 'var(--color-gold)' : 'none'} color="var(--color-gold)" />
          ))}
          <span className="product-card-rating-count">(Demo)</span>
        </div>

        <div className="product-card-price-row">
          <span className="product-card-price">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && (
            <span className="product-card-original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          )}
        </div>

        <Link to={`/product/${product.id}`} className="btn btn-outline btn-sm product-card-cta">
          View Details
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
