import { useState } from "react";
import { useCart } from "../context/CartContext";

function Coupon() {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const {
    coupon,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const coupons = {
    SAVE10: 10,
    SAVE20: 20,
    SAVE30: 30,
  };

  const apply = () => {
    const enteredCode =
      code.trim().toUpperCase();

    if (coupons[enteredCode]) {

      applyCoupon({
        code: enteredCode,
        discount: coupons[enteredCode],
      });

      setMessage(
        `${coupons[enteredCode]}% discount applied successfully!`
      );

    } else {

      setMessage(
        "Invalid code. Try SAVE10, SAVE20 or SAVE30."
      );

    }
  };

  if (coupon) {
    return (
      <div className="coupon-section">

        <div className="coupon-applied">

          <span className="coupon-icon">
            ✓
          </span>

          <div>
            <strong>
              {coupon.code}
            </strong>

            <p>
              You saved {coupon.discount}% on your order
            </p>
          </div>

          <button
            onClick={() => {
              removeCoupon();
              setMessage("");
            }}
          >
            Remove
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="coupon-section">

      <h3>
        🎟️ Apply a Coupon
      </h3>

      <div className="coupon-input">

        <input
          value={code}
          onChange={(e) =>
            setCode(e.target.value)
          }
          placeholder="Enter coupon code"
        />

        <button onClick={apply}>
          Apply
        </button>

      </div>

      {message && (
        <p className="coupon-message">
          {message}
        </p>
      )}

      <small>
        Available: SAVE10 · SAVE20 · SAVE30
      </small>

    </div>
  );
}

export default Coupon;