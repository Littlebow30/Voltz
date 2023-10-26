import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Navigation />
            <ProductGrid />
            <Footer />
        </div>
    );
}

const Header = () => (
    <header>
        Voltz
    </header>
);

const Navigation = () => (
    <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Cart</a>
    </nav>
);

const ProductGrid = () => (
    <section className="product-grid">
        <ProductItem title="Product 1" price="$100" />
        <ProductItem title="Product 2" price="$120" />
        <ProductItem title="Product 3" price="$90" />
        {/* Add more <ProductItem /> as needed */}
    </section>
);

const ProductItem = ({ title, price }) => (
    <div className="product-item">
        <img src="" alt={title} />
        <h1>{title}</h1>
        <p>{price}</p>
        <button>Add to Cart</button>
    </div>
);

const Footer = () => (
    <footer>
        Copyright © 2023 Voltz
    </footer>
);

export default App;
