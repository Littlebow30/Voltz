import { useCart } from "../context/cart-context";
import { useAuth } from "../context/auth-content";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, checkout } = useCart();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleRemove = (title) => {
    removeFromCart(title);
  };

  const handleQuantityChange = (e, title) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(title, newQuantity);
  };
  const handleCheckout = async () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      await checkout();
      navigate("/order-history");
    }
  };

  return (
    <div className="CartPage">
      <h1>Items In Your Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.key} - {item.price} - Quantity:
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
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
