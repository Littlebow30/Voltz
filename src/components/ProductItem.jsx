import { Link } from 'react-router-dom';
const serverhost = import.meta.env.VITE_SERVERHOST
const ProductItem = ({ product, title, price, addToCart }) => (
   
    
    <div className="product-item">
        <Link className='link' to={`/products/${product.id}`}>
            <img src={`${serverhost}/${product.img}`} alt={title} />
            <h1>{title}</h1>
        </Link>
        <p>{price}</p>
        <button className="CartButton" onClick={() => addToCart(title,product)}>Add to Cart</button>
    </div>

);

export default ProductItem;
