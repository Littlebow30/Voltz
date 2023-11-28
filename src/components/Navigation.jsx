import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-content";

export default function Navigation() {
    return  <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>
            </nav>
}