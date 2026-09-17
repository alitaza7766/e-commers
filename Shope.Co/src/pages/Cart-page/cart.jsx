import React from "react";
import Header from "../../components/Home-layout/Header-layout/Header";

import {
  getCart,
  removeFromCart,
  updateCartQuantity,
} from "../../components/Cart/cart-functions";
import "./cart-modules.css";
import Footer from "../../components/Home-layout/Footer/Footer";

function Cart() {
  const [cart, setCart] = React.useState(() => getCart());

  React.useEffect(() => {
    const refreshCart = () => setCart(getCart());
    window.addEventListener("cart-updated", refreshCart);
    return () => window.removeEventListener("cart-updated", refreshCart);
  }, []);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <Header />
      <main className="cart-page">
        <h1>Your cart</h1>
        {cart.length === 0 ? (
          <p className="empty-cart">
            Your cart is empty. Add something you love from New Arrivals.
          </p>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h2>{item.name}</h2>
                    <strong>${item.price}</strong>
                    <div className="quantity-controls">
                      <button
                        type="button"
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="remove-item"
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </article>
              ))}
            </div>
            <aside className="cart-summary">
              <h2>Order summary</h2>
              <p>
                <span>Subtotal</span>
                <strong>${subtotal}</strong>
              </p>
              <p>
                <span>Delivery</span>
                <strong>Free</strong>
              </p>
              <hr />
              <p className="cart-total">
                <span>Total</span>
                <strong>${subtotal}</strong>
              </p>
              <button type="button" className="checkout-button">
                Go to checkout
              </button>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
