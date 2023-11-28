import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import Header from "./components/Header";
import AboutPage from './components/AboutPage';
import CartPage from './components/CartPage';
import ContactPage from './components/ContactPage'
import Footer from "./components/Footer";
import Home from "./components/HomePage"; 
import Navigation from "./components/Navigation"
import Product from "./components/ProductPage";
import { CartProvider } from "./components/cart-context"; 
import ProductDetail from './components/PruductDetail';
import { ProductProvider } from './components/product-context';

const App = () => {
    return (
        <ProductProvider>
        <CartProvider>
        <Router>
            <div className="app">
                <Header />
                <Navigation />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/products" element={<Product/>} />
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/contact" element={<ContactPage/>} />
                    <Route path="/cart" element={<CartPage/>} />
                    <Route path="/SignUpForm" element={<SignUpForm/>} />
                     <Route path="/products/:productId" element={<ProductDetail />} />   
                </Routes>
                <Footer />
            </div>
         </Router>
         </CartProvider>
         </ProductProvider>
    );
}

export default App;
