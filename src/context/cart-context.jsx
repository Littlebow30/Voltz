import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./auth-content";

const CART_STORAGE_KEY = "cartItems";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || []
  );

  // Save cart to local storage whenever cartItems change
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (key, product) => {
    setCartItems((currentItems) => {
      // Check if the item is already in the cart
      const itemExists = currentItems.find((item) => item.key === key);
      if (itemExists) {
        itemExists.quantity = itemExists.quantity + 1;
        return [...currentItems];
      } else {
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
