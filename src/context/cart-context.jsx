import  { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
 

  const addToCart = (key, product) => {
    setCartItems((currentItems) => {
      // Check if the item is already in the cart
      const itemExists = currentItems.find((item) => item.key === key);
      if (itemExists) {
        itemExists.quantity = itemExists.quantity + 1;
        // Update the quantity if the item already exists
        return [...currentItems];
      } else {
        // Add a new item to the cart
        return [...currentItems, { ...product, quantity: 1, key }];
      }
    });
  };
  const checkout = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token") || "",
        },
        body: JSON.stringify(cartItems),
      });

      if (response.ok) {
        setCartItems([]);
        toast("Purchase successful!", { type: "success" });
      } else {
        const errorData = await response.json();
        toast(errorData.message, { type: "error" });
      }
    } catch (error) {
      toast(error.toString(), { type: "error" });
      console.error(
        "An error occurred during checkout. Please try again.",
        error
      );
    }
  };

  const removeFromCart = (title) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.key !== title)
    );
  };

  const updateQuantity = (title, quantity) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.key === title ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
};
