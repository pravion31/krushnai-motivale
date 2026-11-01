import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Tag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, cartTotal, cartCount, removeFromCart, updateQuantity, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const navigate = useNavigate();

  const shipping = cartTotal >= 999 ? 0 : 99;
  const discount = couponApplied ? Math.round(cartTotal * 0.1) : 0;
  const finalTotal = cartTotal - discount + shipping;

  const handleCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'KRUSHNAI10') {
      setCouponApplied(true);
    } else {
      alert('Invalid coupon code. Try KRUSHNAI10');
    }
  };

  if (cartItems.length === 0) {
    return (
      <main className="cart-page page-wrapper">
        <div className="container">
          <div className="cart-empty">
            <ShoppingBag size={64} className="cart-empty-icon" />
            <h1 className="cart-empty-title">Your Cart is Empty</h1>
            <p className="cart-empty-sub">Discover our beautiful collection of traditional Maharashtrian jewellery</p>
            <Link to="/shop" className="btn btn-primary btn-lg">
              <ShoppingBag size={18} />
              Browse Collections
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page page-wrapper">
      <div className="container">
        {/* Page Header */}
        <div className="cart-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={18} /> Continue Shopping
          </button>
          <h1 className="cart-title">Shopping Cart</h1>
          <span className="cart-count-label">{cartCount} {cartCount === 1 ? 'item' : 'items'}</span>
        </div>

        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items-section">
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="cart-item">
                  <Link to={`/product/${item.id}`} className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </Link>
                  <div className="cart-item-details">
                    <div className="cart-item-meta">
                      <span className="cart-item-category">{item.categoryLabel}</span>
                      <Link to={`/product/${item.id}`} className="cart-item-name">{item.name}</Link>
                      <span className="cart-item-marathi">{item.nameMarathi}</span>
                      {item.variant && item.variant !== 'Standard' && (
                        <span className="cart-item-variant">Size: {item.variant}</span>
                      )}
                    </div>
                    <div className="cart-item-controls">
                      <div className="qty-controls">
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="cart-item-price-group">
                        <span className="cart-item-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                        {item.quantity > 1 && (
                          <span className="cart-item-unit">₹{item.price.toLocaleString('en-IN')} each</span>
                        )}
                      </div>
                      <button
                        className="cart-remove-btn"
                        onClick={() => removeFromCart(item.id, item.variant)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions-bar">
              <button className="btn btn-outline btn-sm" onClick={clearCart}>
                <Trash2 size={15} /> Clear Cart
              </button>
              <Link to="/shop" className="btn btn-outline btn-sm">
                <ArrowLeft size={15} /> Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="cart-summary">
            <div className="cart-summary-card">
              <h2 className="cart-summary-title">Order Summary</h2>

              <div className="summary-rows">
                <div className="summary-row">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="summary-row discount-row">
                    <span>Coupon Discount (10%)</span>
                    <span>− ₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="summary-row">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'free-shipping' : ''}>
                    {shipping === 0 ? 'Free' : `₹${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="free-shipping-hint">Add ₹{(999 - cartTotal).toLocaleString('en-IN')} more for free shipping</p>
                )}
                <div className="summary-divider" />
                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Coupon */}
              {!couponApplied ? (
                <div className="coupon-section">
                  <div className="coupon-input-group">
                    <Tag size={16} />
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={e => setCouponCode(e.target.value)}
                      className="coupon-input"
                    />
                    <button className="coupon-apply-btn" onClick={handleCoupon}>Apply</button>
                  </div>
                  <p className="coupon-hint">Try: KRUSHNAI10</p>
                </div>
              ) : (
                <div className="coupon-applied">
                  ✓ Coupon applied! 10% discount added.
                </div>
              )}

              <button
                className="btn btn-primary btn-lg checkout-btn"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </button>

              <div className="cart-trust">
                <span>🔒 Secure Checkout</span>
                <span>🚚 Reliable Delivery</span>
                <span>💎 Authentic Jewellery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
