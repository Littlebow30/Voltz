import React, { useEffect, useState } from 'react';
import ProductItem from "./ProductItem";
import { useCart } from './cart-context'; 
import { useProduct } from './product-context';

export default function ProductGrid() {
    const { addToCart } = useCart(); // Use the `useCart` hook here

    const {productlist} = useProduct()


    return (
        <section className="product-grid">
            {productlist.map(product => (
                <ProductItem 
                    key={product.id}
                    product={product}
                    title={`${product.clothing} - ${product.color} - ${product.size}`}
                    price={`$${product.price}`}
                    addToCart={addToCart}
                />
            ))}
        </section>
    );
}
