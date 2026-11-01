import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Package, MapPin, CreditCard, CheckCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

const STEPS = ['Shipping', 'Review', 'Confirmation'];

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: 'Maharashtra',
  pincode: '',
  landmark: '',
};

const Checkout = () => {
  const { cartItems, cartTotal, cartCount, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber] = useState(() => `KM${Date.now().toString().slice(-6)}`);

  const shipping = cartTotal >= 999 ? 0 : 99;
  const finalTotal = cartTotal + shipping;

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Valid email is required';
    if (!form.phone.match(/^[6-9]\d{9}$/)) errs.phone = 'Valid 10-digit phone number required';
    if (!form.address.trim()) errs.address = 'Address is required';
    if (!form.city.trim()) errs.city = 'City is required';
    if (!form.pincode.match(/^\d{6}$/)) errs.pincode = 'Valid 6-digit pincode required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleNext = () => {
    if (step === 0 && !validate()) return;
    if (step === 1) {
      setOrderPlaced(true);
      clearCart();
      setStep(2);
      return;
    }
    setStep(step + 1);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <main className="checkout-page page-wrapper">
        <div className="container">
          <div className="checkout-empty">
            <Package size={64} />
            <h1>Your cart is empty</h1>
            <p>Please add items before proceeding to checkout</p>
            <Link to="/shop" className="btn btn-primary">Browse Collections</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page page-wrapper">
      <div className="container">
        {/* Progress Steps */}
        <div className="checkout-progress">
          {STEPS.map((s, i) => (
            <div key={s} className={`progress-step ${i <= step ? 'active' : ''} ${i < step ? 'done' : ''}`}>
              <div className="progress-step-circle">
                {i < step ? <CheckCircle size={20} /> : <span>{i + 1}</span>}
              </div>
              <span className="progress-step-label">{s}</span>
              {i < STEPS.length - 1 && <ChevronRight size={16} className="progress-arrow" />}
            </div>
          ))}
        </div>

        {step === 2 ? (
          /* Order Confirmation */
          <div className="order-confirmation">
            <div className="confirmation-icon">
              <CheckCircle size={72} />
            </div>
            <h1 className="confirmation-title">Order Placed Successfully!</h1>
            <p className="confirmation-sub">Thank you for shopping with Krushnai Motivale</p>
            <div className="confirmation-order-num">
              Order Number: <strong>#{orderNumber}</strong>
            </div>
            <div className="confirmation-details">
              <p>A confirmation will be sent to <strong>{form.email}</strong></p>
              <p>Your jewellery will be delivered to:<br />
                <strong>{form.fullName}</strong>, {form.address}, {form.city} — {form.pincode}
              </p>
              <p className="confirmation-note">
                For queries, contact us on <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">WhatsApp</a> or 
                visit our store at Kunal Market, Chinchwad Gaon, Pune.
              </p>
            </div>
            <div className="confirmation-actions">
              <Link to="/" className="btn btn-primary btn-lg">Back to Home</Link>
              <Link to="/shop" className="btn btn-outline btn-lg">Continue Shopping</Link>
            </div>
          </div>
        ) : (
          <div className="checkout-layout">
            <div className="checkout-form-section">
              {step === 0 && (
                <div className="checkout-step">
                  <h2 className="step-title">
                    <MapPin size={22} /> Shipping Details
                  </h2>
                  <div className="checkout-form-grid">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        name="fullName" value={form.fullName} onChange={handleChange}
                        className={`form-input ${errors.fullName ? 'error' : ''}`}
                        placeholder="Your full name"
                      />
                      {errors.fullName && <span className="form-error">{errors.fullName}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        name="email" type="email" value={form.email} onChange={handleChange}
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        name="phone" type="tel" value={form.phone} onChange={handleChange}
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="10-digit mobile number"
                      />
                      {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>
                    <div className="form-group full-span">
                      <label className="form-label">Delivery Address *</label>
                      <textarea
                        name="address" value={form.address} onChange={handleChange}
                        className={`form-input form-textarea ${errors.address ? 'error' : ''}`}
                        placeholder="House/Flat No., Street, Area"
                        rows={3}
                      />
                      {errors.address && <span className="form-error">{errors.address}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Landmark (Optional)</label>
                      <input
                        name="landmark" value={form.landmark} onChange={handleChange}
                        className="form-input"
                        placeholder="Near school, temple, etc."
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">City *</label>
                      <input
                        name="city" value={form.city} onChange={handleChange}
                        className={`form-input ${errors.city ? 'error' : ''}`}
                        placeholder="City"
                      />
                      {errors.city && <span className="form-error">{errors.city}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">State</label>
                      <select name="state" value={form.state} onChange={handleChange} className="form-input">
                        <option>Maharashtra</option>
                        <option>Goa</option>
                        <option>Karnataka</option>
                        <option>Delhi</option>
                        <option>Gujarat</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Pincode *</label>
                      <input
                        name="pincode" value={form.pincode} onChange={handleChange}
                        className={`form-input ${errors.pincode ? 'error' : ''}`}
                        placeholder="6-digit pincode"
                        maxLength={6}
                      />
                      {errors.pincode && <span className="form-error">{errors.pincode}</span>}
                    </div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="checkout-step">
                  <h2 className="step-title">
                    <CreditCard size={22} /> Review Your Order
                  </h2>
                  <div className="review-shipping">
                    <h3>Delivering to:</h3>
                    <p><strong>{form.fullName}</strong></p>
                    <p>{form.address}{form.landmark ? `, ${form.landmark}` : ''}</p>
                    <p>{form.city}, {form.state} — {form.pincode}</p>
                    <p>{form.phone} | {form.email}</p>
                    <button className="btn btn-outline btn-sm" onClick={() => setStep(0)}>
                      Edit Address
                    </button>
                  </div>
                  <div className="review-items">
                    {cartItems.map(item => (
                      <div key={`${item.id}-${item.variant}`} className="review-item">
                        <img src={item.image} alt={item.name} />
                        <div>
                          <p className="review-item-name">{item.name}</p>
                          <p className="review-item-meta">
                            {item.variant !== 'Standard' && `Size: ${item.variant} · `}Qty: {item.quantity}
                          </p>
                        </div>
                        <span className="review-item-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                      </div>
                    ))}
                  </div>
                  <div className="payment-note">
                    <CreditCard size={20} />
                    <div>
                      <strong>Payment on Delivery / WhatsApp Order</strong>
                      <p>Pay cash on delivery or confirm order via WhatsApp. We will contact you to confirm your order.</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="checkout-nav">
                {step > 0 && (
                  <button className="btn btn-outline" onClick={() => setStep(step - 1)}>
                    <ArrowLeft size={16} /> Back
                  </button>
                )}
                <button className="btn btn-primary btn-lg" onClick={handleNext}>
                  {step === 0 ? 'Proceed to Review' : 'Place Order'}
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Order Summary sidebar */}
            <div className="checkout-summary">
              <div className="checkout-summary-card">
                <h3 className="checkout-summary-title">Order Summary</h3>
                <div className="checkout-items-list">
                  {cartItems.map(item => (
                    <div key={`${item.id}-${item.variant}`} className="checkout-item-row">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <p>{item.name}</p>
                        <span>Qty: {item.quantity}</span>
                      </div>
                      <span>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
                <div className="checkout-summary-totals">
                  <div className="sum-row">
                    <span>Subtotal ({cartCount} items)</span>
                    <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="sum-row">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? 'free' : ''}>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                  </div>
                  <div className="sum-row total">
                    <span>Total</span>
                    <span>₹{finalTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Checkout;
