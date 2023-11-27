import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-content";

export default function Navigation() {
  const { isAuthenticated } = useAuth();
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/cart">Cart</Link>
      {isAuthenticated && <Link to="/order-history">Order History</Link>}
    </nav>
  );
}
