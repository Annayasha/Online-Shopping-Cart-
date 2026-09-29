import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="amazon-cart-item">

      {/* PRODUCT IMAGE */}
      <div className="cart-product-image">
        <img
          src={item.image}
          alt={item.name}
        />
      </div>


      {/* PRODUCT DETAILS */}
      <div className="cart-product-details">

        <h3>
          {item.name}
        </h3>

        <span className="cart-stock">
          In stock
        </span>

        <p className="cart-delivery">
          FREE Delivery
        </p>


        {/* QUANTITY CONTROLS */}
        <div className="cart-controls">

          <div className="quantity-box">

            <button
              onClick={() =>
                decreaseQuantity(item.id)
              }
            >
              −
            </button>

            <span>
              {item.quantity}
            </span>

            <button
              onClick={() =>
                increaseQuantity(item.id)
              }
            >
              +
            </button>

          </div>


          {/* DELETE */}
          <button
            className="cart-action"
            onClick={() =>
              removeFromCart(item.id)
            }
          >
            Delete
          </button>


          <span className="separator">
            |
          </span>


          {/* SAVE FOR LATER */}
          <button className="cart-action">
            Save for later
          </button>

        </div>

      </div>


      {/* PRICE */}
      <div className="cart-item-price">

        <strong>
          ₹{(
            item.price * item.quantity
          ).toLocaleString("en-IN")}
        </strong>

        {item.quantity > 1 && (
          <small>
            ₹{item.price.toLocaleString("en-IN")} each
          </small>
        )}

      </div>

    </div>
  );
}

export default CartItem;

