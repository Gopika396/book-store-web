import { useState } from "react";
import { Link } from "react-router-dom";
import { img } from "../assets/img";

export default function Cart() {
  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem("orbitCart") || "[]")
  );

  const removeBook = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem("orbitCart", JSON.stringify(updated));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("orbitCart");
  };

  const total = cart.reduce((sum, book) => sum + book.price, 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg orbit-nav">
        <div className="container">
          <Link className="navbar-brand orbit-brand" to="/">Orbit Books</Link>
          <button className="navbar-toggler" data-bs-toggle="collapse"
            data-bs-target="#cartMenu" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="cartMenu">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/products">Products</Link>
              <Link className="nav-link" to="/author-spotlight">Author Spotlight</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container orbit-page py-5">
        <img className="orbit-banner-img orbit-banner-flat mb-4"
          src={img("cart-hero.jpg")} alt="Orbit Books" />
        <span className="orbit-eyebrow">YOUR BOOK COLLECTION</span>
        <h1 className="mb-4">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="orbit-empty">
            <i className="bi bi-cart3 display-3" />
            <h3>Your cart is empty.</h3>
            <p>Your next great read is waiting.</p>
            <Link className="btn orbit-btn" to="/products">Explore Books</Link>
          </div>
        ) : (
          <>
            {cart.map((book, index) => (
              <div className="orbit-cart-item" key={`${book.name}-${index}`}>
                <img src={img(book.image)} alt={book.name} />
                <div className="flex-grow-1">
                  <h5>{book.name}</h5>
                  <p>{book.author}</p>
                  <strong>₹{book.price}</strong>
                </div>
                <button className="btn btn-outline-danger"
                  onClick={() => removeBook(index)}>
                  Remove
                </button>
              </div>
            ))}

            <div className="orbit-total">
              <div>
                <p className="mb-1">Order total</p>
                <h3>₹{total}</h3>
                <small>{cart.length} book(s) in your cart</small>
              </div>
              <button className="btn orbit-btn"
                onClick={() => alert(
                  "Demo checkout only. No payment has been processed."
                )}>
                Proceed to Checkout
              </button>
            </div>

            <div className="text-end mt-3">
              <button className="btn btn-outline-danger" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </main>

      <footer className="orbit-footer">
        <div className="container">
          <div className="row g-4 text-center text-md-start">
            <div className="col-md-4">
              <h4><i className="bi bi-globe2 me-2" />Orbit Books</h4>
              <p>Books. People. New Perspectives.</p>
              <div className="orbit-social">
                <i className="bi bi-instagram" />
                <i className="bi bi-facebook" />
                <i className="bi bi-youtube" />
              </div>
            </div>
            <div className="col-md-4">
              <h6>Quick Links</h6>
              <p><Link to="/">Home</Link></p>
              <p><Link to="/products">Products</Link></p>
              <p><Link to="/author-spotlight">Author Spotlight</Link></p>
              <p><Link to="/about">About</Link></p>
              <p><Link to="/contact">Contact</Link></p>
            </div>
            <div className="col-md-4">
              <h6>Contact</h6>
              <p>Bengaluru, India</p>
              <p>orbitbooks@gmail.com</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <hr />
          <p className="text-center mb-0">© 2026 Orbit Books. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}