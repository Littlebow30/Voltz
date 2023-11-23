import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (key,product) => {
        setCartItems(currentItems => {
            // Check if the item is already in the cart
            const itemExists = currentItems.find(item => item.key === key);
            if (itemExists) { 
                itemExists.quantity = itemExists.quantity +1
                // Update the quantity if the item already exists
                return [...currentItems]
            } else {
                // Add a new item to the cart
                return [...currentItems, { ...product, quantity: 1, key }];
            }
        });
    };
    const checkout = () => {
    
        console.log('Proceeding to checkout', cartItems);
        // Clear cart after checkout
        setCartItems([]);
    };
    
    
    const removeFromCart = (title) => {
        setCartItems(currentItems => currentItems.filter(item => item.key !== title));
    };

    const updateQuantity = (title, quantity) => {
        setCartItems(currentItems =>
            currentItems.map(item =>
                item.key === title ? { ...item, quantity: quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
