import { Link, useNavigate } from "react-router-dom";
const serverhost = import.meta.env.VITE_SERVERHOST;
const ProductItem = ({ product, title, price, addToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="product-item">
      <Link className="link" to={`/products/${product.id}`}>
        <img src={`${serverhost}/${product.img}`} alt={title} />
        <h1>{title}</h1>
      </Link>
      <p>{price}</p>
      <button
        className="CartButton"
        onClick={() => {
          addToCart(title, product);
          navigate("/cart");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
