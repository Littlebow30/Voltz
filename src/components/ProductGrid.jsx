import ProductItem from "./ProductItem"
export default function ProductGrid() {
    return  <section className="product-grid">
            <ProductItem title="Product 1" price="$100" />
            <ProductItem title="Product 2" price="$120" />
            <ProductItem title="Product 3" price="$90" />
            {/* Add more <Product /> as needed */}
            </section>
  };