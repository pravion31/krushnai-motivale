import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Search, ShoppingBag, Heart, User, Menu, X, ChevronDown
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { searchProducts } from '../../data/products';
import { categories } from '../../data/categories';
import logoImg from '../../assets/logo/logo.png';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      setSearchResults(searchProducts(searchQuery).slice(0, 6));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
        setSearchQuery('');
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCollectionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        {/* Logo */}
        <Link to="/" className="header-logo" onClick={closeMobileMenu}>
          <img src={logoImg} alt="Krushnai Motivale — Traditional Maharashtrian Jewellery" />
          <div className="header-brand-text">
            <span className="header-brand-name">Krushnai Motivale</span>
            <span className="header-brand-marathi">कृष्णाई मोतीवाले</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header-nav" aria-label="Main navigation">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Shop All
          </NavLink>

          {/* Collections Dropdown */}
          <div className="nav-dropdown" ref={dropdownRef}>
            <button
              className="nav-link nav-dropdown-trigger"
              onClick={() => setCollectionsOpen(!collectionsOpen)}
              aria-expanded={collectionsOpen}
              aria-haspopup="true"
            >
              Collections
              <ChevronDown size={14} className={`dropdown-arrow ${collectionsOpen ? 'open' : ''}`} />
            </button>
            {collectionsOpen && (
              <div className="nav-dropdown-menu">
                <div className="dropdown-inner">
                  {categories.map(cat => (
                    <Link
                      key={cat.id}
                      to={`/category/${cat.slug}`}
                      className="dropdown-item"
                      onClick={() => setCollectionsOpen(false)}
                    >
                      <img src={cat.image} alt={cat.name} className="dropdown-item-img" />
                      <div>
                        <span className="dropdown-item-name">{cat.name}</span>
                        <span className="dropdown-item-marathi">{cat.nameMarathi}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Contact
          </NavLink>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Search */}
          <div className="search-wrapper" ref={searchRef}>
            <button
              className="header-icon-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            {searchOpen && (
              <div className="search-panel">
                <form onSubmit={handleSearchSubmit} className="search-form">
                  <Search size={16} className="search-form-icon" />
                  <input
                    type="text"
                    placeholder="Search jewellery..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="search-input"
                    autoFocus
                    aria-label="Search products"
                  />
                  <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">
                    <X size={16} />
                  </button>
                </form>
                {searchResults.length > 0 && (
                  <div className="search-results">
                    {searchResults.map(p => (
                      <Link
                        key={p.id}
                        to={`/product/${p.id}`}
                        className="search-result-item"
                        onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                      >
                        <img src={p.image} alt={p.name} />
                        <div>
                          <span className="search-result-name">{p.name}</span>
                          <span className="search-result-price">₹{p.price.toLocaleString('en-IN')}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Wishlist */}
          <Link to="/wishlist" className="header-icon-btn" aria-label={`Wishlist (${wishlistCount} items)`}>
            <Heart size={20} />
            {wishlistCount > 0 && <span className="badge-count">{wishlistCount}</span>}
          </Link>

          {/* Cart */}
          <Link to="/cart" className="header-icon-btn" aria-label={`Cart (${cartCount} items)`}>
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="badge-count cart-badge">{cartCount}</span>}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="header-icon-btn mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="mobile-menu-inner">
            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="mobile-search-form">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search jewellery..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
              <button type="submit">Go</button>
            </form>

            {/* Mobile Nav Links */}
            <nav className="mobile-nav">
              <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'} end>
                Home
              </NavLink>
              <NavLink to="/shop" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}>
                Shop All
              </NavLink>

              <div className="mobile-nav-section">
                <span className="mobile-nav-section-title">Collections</span>
                {categories.map(cat => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                    onClick={closeMobileMenu}
                    className="mobile-nav-link mobile-nav-sub"
                  >
                    <span className="mobile-nav-marathi">{cat.nameMarathi}</span>
                    <span>{cat.name}</span>
                  </Link>
                ))}
              </div>

              <NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}>
                About Us
              </NavLink>
              <NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}>
                Contact
              </NavLink>
              <NavLink to="/wishlist" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}>
                Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
              </NavLink>
              <NavLink to="/cart" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}>
                Cart {cartCount > 0 && `(${cartCount})`}
              </NavLink>
            </nav>

            <div className="mobile-menu-footer">
              <a
                href="https://www.instagram.com/krushnai_motiwale/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-instagram-link"
              >
                Follow us on Instagram @krushnai_motiwale
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
