
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="amazon-product-card">

      <div className="deal-badge">
        {product.badge}
      </div>

      {/* Real Product Image */}
      <div className="amazon-product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="amazon-product-info">

        <div className="product-category">
          {product.category}
        </div>

        <h3>{product.name}</h3>

        <div className="rating">

          <span className="stars">
            ★★★★★
          </span>

          <span className="rating-number">
            {product.rating}
          </span>

          <span className="review-count">
            ({product.reviews.toLocaleString("en-IN")})
          </span>

        </div>

        <div className="price-area">

          <span className="currency">
            ₹
          </span>

          <span className="product-price">
            {product.price.toLocaleString("en-IN")}
          </span>

        </div>

        <div className="old-price">
          M.R.P.:{" "}
          <span>
            ₹{product.oldPrice.toLocaleString("en-IN")}
          </span>

          <b>
            {product.discount}% off
          </b>
        </div>

        <p className="delivery">
          🚚 <strong>FREE Delivery</strong> tomorrow
        </p>

        <button
          className="amazon-add-button"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;

