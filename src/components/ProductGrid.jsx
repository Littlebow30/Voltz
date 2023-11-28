import ProductItem from "./ProductItem";
import { useCart } from '../context/cart-context'; 
import { useProduct } from '../context/product-context'

export default function ProductGrid() {
    const { addToCart } = useCart(); 

    const {productlist} = useProduct()


    return (
        <section className="product-grid">
            {productlist.map(product => (
                <ProductItem 
                    key={product.id}
                    product={product}
                    title={`${product.clothing} - ${product.color} - ${product.size}`}
                    price={`$${product.price}`}
                    addToCart={addToCart}
                />
            ))}
        </section>
    );
}
