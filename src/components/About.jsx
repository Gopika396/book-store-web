import { Link } from "react-router-dom";
import { img } from "../assets/img";

export default function About() {
  return (
    <>
      <nav className="navbar navbar-expand-lg orbit-nav">
        <div className="container">
          <Link className="navbar-brand orbit-brand" to="/">Orbit Books</Link>
          <button className="navbar-toggler" data-bs-toggle="collapse"
            data-bs-target="#aboutMenu" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="aboutMenu">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/products">Products</Link>
              <Link className="nav-link" to="/author-spotlight">Author Spotlight</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="nav-link" to="/cart">Cart</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="orbit-page">
        <section className="orbit-page-hero">
          <span className="orbit-eyebrow">OUR WORLD OF STORIES</span>
          <h1>Books Change Everything.</h1>
          <p>
            Discover ideas, voices and stories that take you somewhere new.
          </p>
          <img className="orbit-banner-img"
            src={img("about-hero.jpg")} alt="About Orbit Books" />
        </section>

        <section className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img className="orbit-about-img"
                src={img("orbit-hero.jpg")}
                alt="A collection of books at Orbit Books" />
            </div>
            <div className="col-lg-6">
              <span className="orbit-eyebrow">WHY ORBIT?</span>
              <h2>A Universe of Possibilities</h2>
              <p>
                Orbit Books is a modern bookstore built for readers who want
                to explore beyond the familiar. We bring together bestsellers,
                new releases and memorable stories in one convenient place.
              </p>
              <p>
                Whether you love fantasy, romance, personal growth, mystery
                or science fiction, our goal is to make discovering books
                exciting and easy.
              </p>
              <Link className="btn orbit-btn" to="/products">
                Discover Books
              </Link>
            </div>
          </div>

          <div className="row g-4 text-center mt-4">
            {[
              ["Our Vision", "Make discovering your next great read effortless."],
              ["Our Promise", "A thoughtful selection for every kind of reader."],
              ["Our Community", "Bring book lovers and fresh ideas together."],
            ].map(([title, description]) => (
              <div className="col-md-4" key={title}>
                <div className="orbit-info-card">
                  <i className="bi bi-stars" />
                  <h4>{title}</h4>
                  <p>{description}</p>
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