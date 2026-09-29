import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import Coupon from "./Coupon";

function Cart() {
  const {
    cart,
    subtotal,
    discount,
    gst,
    grandTotal,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="cart-container">

        <div className="empty-cart">

          <div className="empty-cart-icon">
            🛒
          </div>

          <h2>
            Your ShopKart Cart is empty.
          </h2>

          <p>
            Check out today's deals and add something
            you love to your cart.
          </p>

        </div>

      </section>
    );
  }

  return (
    <section className="cart-container">

      <div className="cart-left">

        <div className="cart-title">

          <h1>
            Shopping Cart
          </h1>

          <span>
            Price
          </span>

        </div>

        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}

        <div className="cart-subtotal">
          Subtotal ({cart.length} item
          {cart.length !== 1 ? "s" : ""}):
          <strong>
            ₹{subtotal.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}
          </strong>
        </div>

        <Coupon />

      </div>

      <aside className="order-summary">

        <div className="free-delivery">
          ✓ Your order qualifies for
          <strong> FREE Delivery</strong>
        </div>

        <h2>
          Order Summary
        </h2>

        <div className="summary-line">
          <span>
            Subtotal
          </span>

          <strong>
            ₹{subtotal.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}
          </strong>
        </div>

        <div className="summary-line discount">
          <span>
            Coupon Discount
          </span>

          <strong>
            − ₹{discount.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}
          </strong>
        </div>

        <div className="summary-line">
          <span>
            GST (18%)
          </span>

          <strong>
            ₹{gst.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}
          </strong>
        </div>

        <div className="summary-total">

          <span>
            Order Total
          </span>

          <strong>
            ₹{grandTotal.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}
          </strong>

        </div>

        <button className="checkout-button">
          Proceed to Buy
        </button>

        <div className="secure-checkout">
          🔒 Secure transaction
        </div>

      </aside>

    </section>
  );
}

export default Cart;


