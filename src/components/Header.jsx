import { useCart } from "../context/CartContext";

function Header() {
  const { cartCount } = useCart();

  return (
    <>
      <header className="amazon-header">

        <div className="header-logo">
          <div className="shop-logo">
            Shop<span>Kart</span>
          </div>
          <small>in</small>
        </div>

        <div className="delivery-location">
          <span>📍</span>

          <div>
            <small>Deliver to</small>
            <strong>Kolkata 700001</strong>
          </div>
        </div>

        <div className="search-bar">

          <select>
            <option>All</option>
            <option>Electronics</option>
            <option>Gaming</option>
            <option>Computers</option>
            <option>Audio</option>
          </select>

          <input
            type="text"
            placeholder="Search ShopKart"
          />

          <button>
            🔍
          </button>

        </div>

        <div className="header-language">
          <span>🇮🇳</span>
          <strong>EN</strong>
        </div>

        <div className="header-account">
          <small>Hello, sign in</small>
          <strong>Account & Lists ▾</strong>
        </div>

        <div className="header-orders">
          <small>Returns</small>
          <strong>& Orders</strong>
        </div>

        <div className="header-cart">
          🛒
          <span>{cartCount}</span>
          <strong>Cart</strong>
        </div>

      </header>

      <nav className="category-navbar">

        <div className="nav-menu">
          ☰ <strong>All</strong>
        </div>

        <div>Today's Deals</div>
        <div>Best Sellers</div>
        <div>Electronics</div>
        <div>Fashion</div>
        <div>Home & Kitchen</div>
        <div>Mobiles</div>
        <div>Customer Service</div>

        <div className="nav-right">
          🛍️ ShopKart Shopping Festival
        </div>

      </nav>
    </>
  );
}

export default Header;