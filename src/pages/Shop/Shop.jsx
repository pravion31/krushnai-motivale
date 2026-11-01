import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products, sortProducts } from '../../data/products';
import { categories } from '../../data/categories';
import './Shop.css';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const filterParam = searchParams.get('filter') || '';

  const [sortBy, setSortBy] = useState('default');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [filterOpen, setFilterOpen] = useState(false);

  // Filter products
  let filtered = [...products];

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.nameMarathi.includes(q) ||
      p.tags.some(t => t.includes(q))
    );
  }

  if (filterParam === 'new') {
    filtered = filtered.filter(p => p.isNew);
  }

  if (selectedCategory !== 'all') {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
  filtered = sortProducts(filtered, sortBy);

  return (
    <main className="shop-page page-wrapper">
      {/* Page Header */}
      <div className="shop-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">›</span>
            <span>Shop All</span>
          </div>
          <h1 className="shop-title">
            {searchQuery ? `Search: "${searchQuery}"` : 'Shop All Jewellery'}
          </h1>
          <p className="shop-subtitle">
            {filterParam === 'new' ? 'New Arrivals' : 'Explore our complete collection of traditional Maharashtrian jewellery'}
          </p>
        </div>
      </div>

      <div className="container">
        <div className="shop-layout">
          {/* Sidebar Filters */}
          <aside className={`shop-sidebar ${filterOpen ? 'open' : ''}`} aria-label="Product filters">
            <div className="sidebar-header">
              <h2 className="sidebar-title">Filter</h2>
              <button
                className="sidebar-close"
                onClick={() => setFilterOpen(false)}
                aria-label="Close filters"
              >
                <X size={18} />
              </button>
            </div>

            {/* Category Filter */}
            <div className="filter-group">
              <h3 className="filter-group-title">Category</h3>
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="category"
                    value="all"
                    checked={selectedCategory === 'all'}
                    onChange={() => setSelectedCategory('all')}
                  />
                  <span>All Categories</span>
                </label>
                {categories.map(cat => (
                  <label key={cat.id} className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      value={cat.id}
                      checked={selectedCategory === cat.id}
                      onChange={() => setSelectedCategory(cat.id)}
                    />
                    <span>{cat.name} <em className="font-devanagari">{cat.nameMarathi}</em></span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="filter-group">
              <h3 className="filter-group-title">Price Range</h3>
              <div className="price-range">
                <div className="price-labels">
                  <span>₹{priceRange[0].toLocaleString('en-IN')}</span>
                  <span>₹{priceRange[1].toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="price-slider"
                  aria-label="Maximum price"
                />
              </div>
              <div className="price-buttons">
                {[[0, 1000], [1000, 2000], [2000, 3000], [3000, 5000]].map(([min, max]) => (
                  <button
                    key={`${min}-${max}`}
                    className={`price-btn ${priceRange[0] === min && priceRange[1] === max ? 'active' : ''}`}
                    onClick={() => setPriceRange([min, max])}
                  >
                    ₹{min/1000}k – ₹{max/1000}k
                  </button>
                ))}
              </div>
            </div>

            {/* Reset */}
            <button
              className="btn btn-outline btn-sm"
              onClick={() => {
                setSelectedCategory('all');
                setPriceRange([0, 5000]);
                setSortBy('default');
              }}
            >
              Reset Filters
            </button>
          </aside>

          {/* Main Content */}
          <div className="shop-main">
            {/* Toolbar */}
            <div className="shop-toolbar">
              <div className="shop-results">
                <span>{filtered.length} products</span>
                {searchQuery && <span> for "{searchQuery}"</span>}
              </div>

              <div className="shop-toolbar-right">
                <button
                  className="btn btn-outline btn-sm filter-toggle-btn"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  <SlidersHorizontal size={14} />
                  Filters
                </button>

                <div className="sort-select-wrap">
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="sort-select"
                    aria-label="Sort products"
                  >
                    <option value="default">Featured</option>
                    <option value="newest">Newest First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                  </select>
                  <ChevronDown size={14} className="sort-icon" />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {filtered.length === 0 ? (
              <div className="shop-empty">
                <p>No products found matching your criteria.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 5000]);
                  }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="shop-product-grid">
                {filtered.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {filterOpen && (
        <div
          className="filter-overlay"
          onClick={() => setFilterOpen(false)}
          aria-hidden="true"
        />
      )}
    </main>
  );
};

export default Shop;
