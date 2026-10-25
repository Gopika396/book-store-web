import { Link } from "react-router-dom";
import { img } from "../assets/img";

const books = [
  ["Fourth Wing", "Rebecca Yarros", 599, "fourth-wing.jpg", "Fantasy"],
  ["It Ends with Us", "Colleen Hoover", 399, "it-ends-with-us.jpg", "Romance"],
  ["Project Hail Mary", "Andy Weir", 499, "project-hail-mary.jpg", "Science Fiction"],
  ["The 5 AM Club", "Robin Sharma", 449, "the-5am-club.jpg", "Self-Help"],
  ["Verity", "Colleen Hoover", 479, "verity.jpg", "Mystery"],
  ["The Silent Patient", "Alex Michaelides", 399, "silent-patient.jpg", "Thriller"],
  ["The Midnight Library", "Matt Haig", 429, "midnight-library.jpg", "Fiction"],
  ["The Alchemist", "Paulo Coelho", 299, "alchemist.jpg", "Classic"],
  ["The Housemaid", "Freida McFadden", 399, "housemaid.jpg", "Thriller"],
  ["The Song of Achilles", "Madeline Miller", 449, "song-of-achilles.jpg", "Fantasy"],
];

export default function Products() {
  const add = (book) => {
    const cart = JSON.parse(localStorage.getItem("orbitCart") || "[]");
    cart.push({
      name: book[0], author: book[1], price: book[2], image: book[3],
    });
    localStorage.setItem("orbitCart", JSON.stringify(cart));
    alert(`${book[0]} added to cart!`);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg orbit-nav">
        <div className="container">
          <Link className="navbar-brand orbit-brand" to="/">Orbit Books</Link>
          <button className="navbar-toggler" data-bs-toggle="collapse"
            data-bs-target="#productsMenu" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="productsMenu">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/products">Products</Link>
              <Link className="nav-link" to="/author-spotlight">Author Spotlight</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="nav-link" to="/cart">Cart</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="orbit-page">
        <section className="orbit-page-hero">
          <span className="orbit-eyebrow">YOUR NEXT OBSESSION STARTS HERE</span>
          <h1>Find Your Next Read.</h1>
          <p>Explore our collection of 10 books across different genres.</p>
          <img className="orbit-banner-img"
            src={img("products-hero.jpg")} alt="Orbit Books collection" />
        </section>

        <section className="container py-5">
          <div className="orbit-section-heading">
            <h2>All Books</h2>
            <span>{books.length} books available</span>
          </div>

          <div className="row g-4">
            {books.map((book) => (
              <div className="col-6 col-md-4 col-lg-3" key={book[0]}>
                <div className="orbit-book-card h-100">
                  <img src={img(book[3])} alt={book[0]} />
                  <div className="p-3">
                    <span className="orbit-book-genre">{book[4]}</span>
                    <h5 className="mt-2">{book[0]}</h5>
                    <p>{book[1]}</p>
                    <strong>₹{book[2]}</strong>
                    <button className="btn orbit-btn w-100 mt-3"
                      onClick={() => add(book)}>
                      <i className="bi bi-cart-plus me-1" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
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