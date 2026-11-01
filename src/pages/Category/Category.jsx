import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getCategoryBySlug } from '../../data/categories';
import { getProductsByCategory, sortProducts } from '../../data/products';
import './Category.css';

const Category = () => {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  if (!category) {
    return (
      <main className="page-wrapper">
        <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h1>Category Not Found</h1>
          <Link to="/shop" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            Browse All Products
          </Link>
        </div>
      </main>
    );
  }

  let prods = getProductsByCategory(slug);
  prods = prods.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
  prods = sortProducts(prods, sortBy);

  return (
    <main className="category-page page-wrapper">
      {/* Category Banner */}
      <div className="category-banner">
        <div className="category-banner-bg">
          <img src={category.image} alt={category.name} />
          <div className="category-banner-overlay" />
        </div>
        <div className="container category-banner-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/shop">Shop</Link>
            <span className="breadcrumb-separator">›</span>
            <span>{category.name}</span>
          </div>
          <div className="category-banner-marathi font-devanagari">{category.nameMarathi}</div>
          <h1 className="category-banner-title">{category.name}</h1>
          <p className="category-banner-desc">{category.description}</p>
        </div>
      </div>

      <div className="container category-main-content">
        {/* Toolbar */}
        <div className="category-toolbar">
          <div className="category-results">
            <strong>{prods.length}</strong> products in {category.name}
          </div>

          <div className="category-toolbar-right">
            {/* Price Filters */}
            <div className="category-price-filters">
              {[[0, 5000], [0, 1000], [1000, 2000], [2000, 5000]].map(([min, max]) => (
                <button
                  key={`${min}-${max}`}
                  className={`price-filter-btn ${priceRange[0] === min && priceRange[1] === max ? 'active' : ''}`}
                  onClick={() => setPriceRange([min, max])}
                >
                  {min === 0 && max === 5000 ? 'All' : `₹${min/1000 > 0 ? min/1000+'k' : '0'}–₹${max/1000}k`}
                </button>
              ))}
            </div>

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
              </select>
              <ChevronDown size={14} className="sort-icon" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {prods.length === 0 ? (
          <div className="category-empty">
            <p>No products found in this price range.</p>
            <button className="btn btn-outline" onClick={() => setPriceRange([0, 5000])}>
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="category-product-grid">
            {prods.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}

        {/* More Collections */}
        <div className="more-collections">
          <h2 className="more-collections-title">Explore More Collections</h2>
          <div className="more-collections-links">
            <Link to="/shop" className="btn btn-outline">View All Products</Link>
            <Link to="/category/medium-tanmani" className="btn btn-outline">Medium Tanmani</Link>
            <Link to="/category/jhumake" className="btn btn-outline">Jhumake</Link>
            <Link to="/category/nath" className="btn btn-outline">Nath</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Category;
