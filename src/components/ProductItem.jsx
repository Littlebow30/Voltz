const ProductItem = ({ title, price }) => (
    <div className="product-item">
        <img src="" alt={title} />
        <h1>{title}</h1>
        <p>{price}</p>
        <button>Add to Cart</button>
    </div>
);