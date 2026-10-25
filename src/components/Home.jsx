import { Link } from "react-router-dom";
import { img } from "../assets/img";

const books = [
  ["Fourth Wing", "Rebecca Yarros", 599, "fourth-wing.jpg"],
  ["It Ends with Us", "Colleen Hoover", 399, "it-ends-with-us.jpg"],
  ["Project Hail Mary", "Andy Weir", 499, "project-hail-mary.jpg"],
  ["The 5 AM Club", "Robin Sharma", 449, "the-5am-club.jpg"],
  ["Verity", "Colleen Hoover", 479, "verity.jpg"],
  ["The Silent Patient", "Alex Michaelides", 399, "silent-patient.jpg"],
  ["The Midnight Library", "Matt Haig", 429, "midnight-library.jpg"],
  ["The Alchemist", "Paulo Coelho", 299, "alchemist.jpg"],
  ["The Housemaid", "Freida McFadden", 399, "housemaid.jpg"],
  ["The Song of Achilles", "Madeline Miller", 449, "song-of-achilles.jpg"],
];

function addBook(book) {
  const cart = JSON.parse(localStorage.getItem("orbitCart") || "[]");
  cart.push({
    name: book[0],
    author: book[1],
    price: book[2],
    image: book[3],
  });
  localStorage.setItem("orbitCart", JSON.stringify(cart));
  alert(`${book[0]} added to cart!`);
}

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg orbit-nav">
        <div className="container">
          <Link className="navbar-brand orbit-brand" to="/">
            <i className="bi bi-globe2 me-2" /> Orbit Books
          </Link>
          <button className="navbar-toggler" data-bs-toggle="collapse"
            data-bs-target="#orbitMenu" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="orbitMenu">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/products">Products</Link>
              <Link className="nav-link" to="/author-spotlight">Author Spotlight</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="nav-link" to="/cart">
                <i className="bi bi-cart3" /> Cart
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="orbit-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 py-5">
                <span className="orbit-eyebrow">NEW WORLDS AWAIT</span>
                <h1>Read More.<br /><span>Live Bigger.</span></h1>
                <p>
                  Bestsellers, new releases and hidden gems
                  for every kind of reader.
                </p>
                <Link className="btn orbit-btn" to="/products">
                  Shop Now <i className="bi bi-arrow-right ms-2" />
                </Link>
              </div>
              <div className="col-lg-6">
                <img className="orbit-hero-img"
                  src={img("orbit-hero.jpg")}
                  alt="Featured books from Orbit Books" />
              </div>
            </div>
          </div>
        </section>

        <section className="orbit-benefits">
          <div className="container">
            <div className="row g-3 text-center">
              {[
                ["bi-truck", "Free Shipping", "On orders above ₹499"],
                ["bi-arrow-repeat", "Easy Returns", "Hassle-free returns"],
                ["bi-shield-check", "Secure Payment", "Safe and secure"],
                ["bi-headset", "24/7 Support", "We're here to help"],
              ].map(([icon, title, description]) => (
                <div className="col-6 col-lg-3" key={title}>
                  <i className={`bi ${icon}`} />
                  <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="orbit-section-heading">
            <h2>Shop by Category</h2>
            <Link to="/products">View All <i className="bi bi-arrow-right" /></Link>
          </div>
          <div className="row g-3">
            {[
              ["Fiction", "orbit-purple", "cat-fiction.jpg"],
              ["Non-Fiction", "orbit-blue", "cat-nonfiction.jpg"],
              ["Self-Help", "orbit-yellow", "cat-selfhelp.jpg"],
              ["Fantasy", "orbit-dark", "cat-fantasy.jpg"],
              ["Romance", "orbit-pink", "cat-romance.jpg"],
              ["Graphic Novels", "orbit-cyan", "cat-graphic-novels.jpg"],
              ["Children", "orbit-orange", "cat-children.jpg"],
              ["Young Adult", "orbit-lilac", "cat-young-adult.jpg"],
            ].map(([category, color, image]) => (
              <div className="col-6 col-md-3 col-lg" key={category}>
                <Link to="/products" className={`orbit-category ${color}`}>
                  <img src={img(image)} alt={category} />
                  <strong>{category}</strong>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="container pb-5">
          <div className="orbit-section-heading">
            <h2>Bestselling Books</h2>
            <Link to="/products">View All <i className="bi bi-arrow-right" /></Link>
          </div>
          <div className="row g-4">
            {books.slice(0, 5).map((book) => (
              <div className="col-6 col-md-4 col-lg" key={book[0]}>
                <div className="orbit-book-card">
                  <img src={img(book[3])} alt={book[0]} />
                  <div className="p-3">
                    <h6>{book[0]}</h6>
                    <p>{book[1]}</p>
                    <strong>₹{book[2]}</strong>
                    <button className="btn orbit-btn w-100 mt-3"
                      onClick={() => addBook(book)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="orbit-offer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 py-5">
                <span className="orbit-eyebrow">SPECIAL OFFER</span>
                <h2>Buy 2 Get 1 Free</h2>
                <p>Explore your next adventure with selected books.</p>
                <Link className="btn orbit-btn" to="/products">
                  Explore Now <i className="bi bi-arrow-right ms-2" />
                </Link>
              </div>
              <div className="col-lg-5 pb-4 pb-lg-0">
                <img className="orbit-offer-img"
                  src={img("offer-banner.jpg")}
                  alt="Special offer on selected books" />
              </div>
            </div>
          </div>
        </section>
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