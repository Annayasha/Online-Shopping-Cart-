import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <section className="amazon-products">

      <div className="products-title">

        <div>
          <h2>Today's Deals</h2>

          <span>
            See all deals
          </span>
        </div>

        <button>
          View all products →
        </button>

      </div>

      <div className="amazon-product-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductList;

