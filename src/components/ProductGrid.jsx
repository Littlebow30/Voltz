import React, { useEffect, useState } from 'react';
import ProductItem from "./ProductItem";

export default function ProductGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/clothes')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <section className="product-grid">
            {products.map(product => (
                <ProductItem 
                    key={product.clothing + product.color + product.size} // Unique key for each product
                    title={`${product.clothing} - ${product.color} - ${product.size}`} 
                    price={`$${product.price}`} 
                />
            ))}
        </section>
    );
}
