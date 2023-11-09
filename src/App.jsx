import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import Header from "./components/header";

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

export default App;

