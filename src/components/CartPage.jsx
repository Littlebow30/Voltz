import React from 'react';
import { useCart } from './cart-context'; 



const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, checkout } = useCart();

    const handleRemove = (title) => {
        removeFromCart(title);
    };

    const handleQuantityChange = (e, title) => {
        const newQuantity = parseInt(e.target.value);
        updateQuantity(title, newQuantity);
    };

    return (
        <div className='CartPage'>
            <h1>Items In Your Cart</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.key} - {item.price} - 
                        Quantity: 
                        <input 
                            type="number" 
                            value={item.quantity} 
                            onChange={(e) => handleQuantityChange(e, item.key)}
                            min="1"
                        />
                        <button onClick={() => handleRemove(item.key)}>Remove</button>
                    </li>
                ))}
            </ul>
            {cartItems.length > 0 && (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button onClick={checkout}>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
