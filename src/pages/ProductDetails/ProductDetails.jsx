import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Heart, ShoppingBag, ArrowLeft, Minus, Plus, Share2, Star
} from 'lucide-react';
import { getProductById, products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart, isInCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) {
    return (
      <main className="page-wrapper">
        <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h1>Product Not Found</h1>
          <button className="btn btn-primary" onClick={() => navigate('/shop')} style={{ marginTop: '1rem' }}>
            Back to Shop
          </button>
        </div>
      </main>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const inCart = isInCart(product.id, selectedVariant);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedVariant, quantity);
    navigate('/cart');
  };

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <main className="product-details-page page-wrapper">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">›</span>
          <Link to="/shop">Shop</Link>
          <span className="breadcrumb-separator">›</span>
          <Link to={`/category/${product.category}`}>{product.categoryLabel}</Link>
          <span className="breadcrumb-separator">›</span>
          <span>{product.name}</span>
        </div>

        {/* Product Layout */}
        <div className="product-details-grid">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="product-main-image">
              <img
                src={product.images[activeImg] || product.image}
                alt={product.name}
              />
              {discount && (
                <span className="product-discount-badge">-{discount}%</span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="product-thumbnails">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    className={`product-thumb ${i === activeImg ? 'active' : ''}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img src={img} alt={`${product.name} view ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-info">
            {/* Category + New Badge */}
            <div className="product-info-badges">
              <Link to={`/category/${product.category}`} className="product-category-link">
                {product.categoryLabel}
              </Link>
              {product.isNew && <span className="badge badge-new">New Arrival</span>}
              {product.isBestseller && <span className="badge badge-maroon">Bestseller</span>}
            </div>

            <h1 className="product-name">{product.name}</h1>
            <div className="product-name-marathi font-devanagari">{product.nameMarathi}</div>

            {/* Rating */}
            <div className="product-rating">
              <div className="product-stars">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={14} fill={i <= 4 ? 'var(--color-gold)' : 'none'} color="var(--color-gold)" />
                ))}
              </div>
              <span className="product-rating-text">Demo rating — share your experience!</span>
            </div>

            {/* Price */}
            <div className="product-price-block">
              <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
              {product.originalPrice && (
                <>
                  <span className="product-price-original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  <span className="product-price-save">Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}</span>
                </>
              )}
            </div>

            <p className="product-description">{product.description}</p>

            {/* Product Details */}
            <div className="product-meta">
              {product.material && (
                <div className="product-meta-row">
                  <span className="product-meta-label">Material</span>
                  <span className="product-meta-value">{product.material}</span>
                </div>
              )}
              {product.weight && (
                <div className="product-meta-row">
                  <span className="product-meta-label">Weight</span>
                  <span className="product-meta-value">{product.weight}</span>
                </div>
              )}
              {product.length && (
                <div className="product-meta-row">
                  <span className="product-meta-label">Length</span>
                  <span className="product-meta-value">{product.length}</span>
                </div>
              )}
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 1 && (
              <div className="product-variants">
                <div className="product-variants-label">
                  Size: <strong>{selectedVariant}</strong>
                </div>
                <div className="product-variants-options">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      className={`variant-btn ${selectedVariant === v ? 'active' : ''}`}
                      onClick={() => setSelectedVariant(v)}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="product-quantity">
              <span className="product-quantity-label">Quantity</span>
              <div className="quantity-selector">
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="quantity-value">{quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(q => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="product-actions">
              <button
                className={`btn btn-primary btn-lg ${addedToCart ? 'added' : ''}`}
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} />
                {addedToCart ? '✓ Added to Cart!' : inCart ? 'Add More to Cart' : 'Add to Cart'}
              </button>
              <button className="btn btn-gold btn-lg" onClick={handleBuyNow}>
                Buy Now
              </button>
              <button
                className={`btn btn-outline product-wishlist-toggle ${inWishlist ? 'wishlisted' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* WhatsApp Inquiry */}
            <div className="product-whatsapp">
              <a
                href={`https://wa.me/?text=Hi, I'm interested in buying the "${product.name}" from Krushnai Motivale. Price: ₹${product.price.toLocaleString('en-IN')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold-outline"
              >
                💬 Inquire on WhatsApp
              </a>
            </div>

            {/* Store Info */}
            <div className="product-store-info">
              <div className="store-info-item">📍 Available at our Chinchwad store</div>
              <div className="store-info-item">✨ Traditional Maharashtrian Craftsmanship</div>
              <div className="store-info-item">🎁 Gift packaging available</div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="related-products" aria-labelledby="related-heading">
            <h2 id="related-heading" className="related-title">You May Also Like</h2>
            <div className="related-grid">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetails;
