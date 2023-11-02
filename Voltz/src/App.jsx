import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Navigation />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/products" element={<ProductsPage/>} />
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/contact" element={<ContactPage/>} />
                    <Route path="/cart" element={<CartPage/>} />
                </Routes>
                <Footer />
            </div>
         </Router>
    );
}

const Header = () => (
    <header>
        Voltz
        <button className="sign-in-btn">Sign In</button>
    </header>
);

const Navigation = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
    </nav>
);

const Home = () => (
    <div>
        <h1>Welcome to Voltz!</h1>
      
    </div>
);

const ProductsPage = () => (
    <div>
        <h1>Our Products</h1>
        <ProductGrid />
        {/* Add content as needed */}
    </div>
);

const AboutPage = () => (
    <div>
        <h1>About Us</h1>
        {/* Add content as needed */}
    </div>
);

const ContactPage = () => (
    <div>
        <h1>Contact Us</h1>
        {/* Add content as needed */}
    </div>
)
const ProductGrid = () => (
    <section className="product-grid">
        <ProductItem title="Product 1" price="$100" />
        <ProductItem title="Product 2" price="$120" />
        <ProductItem title="Product 3" price="$90" />
        {/* Add more <Product /> as needed */}
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
const CartPage = () => (
    <div className='CartPage'>
       
       <h1>Items In Your Cart</h1>
    </div>

);

const Footer = () => (
    <footer>
        Copyright © 2023 Voltz
    </footer>
);

export default App;
