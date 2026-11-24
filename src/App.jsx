import { useState } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';

const products = [
  { id: 1, name: 'Everyday Backpack', category: 'Accessories', price: 2499 },
  { id: 2, name: 'Wireless Headphones', category: 'Electronics', price: 3999 },
  { id: 3, name: 'Ceramic Table Lamp', category: 'Home', price: 1899 },
  { id: 4, name: 'Classic Sneakers', category: 'Fashion', price: 3299 },
];
const categories = ['All', 'Accessories', 'Electronics', 'Home', 'Fashion'];
const price = (amount) => `₹${amount.toLocaleString('en-IN')}`;

function Home() {
  const [category, setCategory] = useState('All');
  const visibleProducts = products.filter(
    (product) => category === 'All' || product.category === category,
  );

  return (
    <>
      <section className="home" id="home">
        <h1>Good things for every day.</h1>
        <p>Thoughtfully picked essentials for you and your home.</p>
        <a className="shop-button" href="#products">Explore products</a>
      </section>
      <section className="product-section" id="products">
        <h2>Our products</h2>
        <div className="categories" aria-label="Product categories">
          {categories.map((item) => (
            <button
              className={category === item ? 'category active' : 'category'}
              key={item}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="products">
          {visibleProducts.map((product) => (
            <article className="product" key={product.id}>
              <div className="product-icon" aria-hidden="true">{product.icon}</div>
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>
              <p>{price(product.price)}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="store">
        <header>
          <Link className="logo" to="/">GoodFinds</Link>
          <nav aria-label="Main menu">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
