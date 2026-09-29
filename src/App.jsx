import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="app">

      <Header />

      <main>

        <section className="hero-banner">

          <div className="hero-text">

            <span>
              SHOPKART FESTIVAL
            </span>

            <h1>
              Great Deals.
              <br />
              Amazing Prices.
            </h1>

            <p>
              Discover electronics, gaming accessories,
              smart devices and much more.
            </p>

            <button>
              Shop Today's Deals
            </button>

          </div>

          <div className="hero-graphic">
            🛍️
          </div>

        </section>

        <ProductList />

        <Cart />

      </main>

      <footer className="amazon-footer">

        <div className="footer-logo">
          Shop<span>Kart</span>
        </div>

        <p>
          © 2026 ShopKart · React State Management
          Assignment
        </p>

        <p>
          Built with React + Context API +
          useReducer
        </p>

      </footer>

    </div>
  );
}

export default App;