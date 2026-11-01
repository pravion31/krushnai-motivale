import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product, 'Standard', 1);
  };

  if (wishlistItems.length === 0) {
    return (
      <main className="wishlist-page page-wrapper">
        <div className="container">
          <div className="wishlist-empty">
            <Heart size={64} className="wishlist-empty-icon" />
            <h1 className="wishlist-empty-title">Your Wishlist is Empty</h1>
            <p className="wishlist-empty-sub">Save your favourite pieces to your wishlist and shop them later</p>
            <Link to="/shop" className="btn btn-primary btn-lg">
              <ArrowRight size={18} />
              Explore Collections
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="wishlist-page page-wrapper">
      <div className="container">
        <div className="wishlist-header">
          <div>
            <h1 className="wishlist-title">My Wishlist</h1>
            <p className="wishlist-sub">{wishlistItems.length} saved {wishlistItems.length === 1 ? 'piece' : 'pieces'}</p>
          </div>
          <button className="btn btn-outline btn-sm" onClick={clearWishlist}>
            <Trash2 size={15} /> Clear All
          </button>
        </div>

        <div className="wishlist-grid">
          {wishlistItems.map(product => (
            <div key={product.id} className="wishlist-card">
              <div className="wishlist-card-image">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} loading="lazy" />
                </Link>
                <button
                  className="wishlist-remove-btn"
                  onClick={() => removeFromWishlist(product.id)}
                  aria-label="Remove from wishlist"
                >
                  <Trash2 size={16} />
                </button>
                {product.isNew && <span className="wishlist-badge new">New</span>}
                {product.originalPrice && (
                  <span className="wishlist-badge sale">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                  </span>
                )}
              </div>
              <div className="wishlist-card-body">
                <span className="wishlist-category">{product.categoryLabel}</span>
                <Link to={`/product/${product.id}`} className="wishlist-name">{product.name}</Link>
                <span className="wishlist-marathi">{product.nameMarathi}</span>
                <div className="wishlist-pricing">
                  <span className="wishlist-price">₹{product.price.toLocaleString('en-IN')}</span>
                  {product.originalPrice && (
                    <span className="wishlist-original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  )}
                </div>
                <div className="wishlist-actions">
                  <button
                    className={`btn ${isInCart(product.id) ? 'btn-outline' : 'btn-primary'} btn-sm`}
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                  >
                    <ShoppingBag size={15} />
                    {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                  <Link to={`/product/${product.id}`} className="btn btn-outline btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="wishlist-footer-cta">
          <Link to="/shop" className="btn btn-outline btn-lg">
            <ArrowRight size={18} />
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
