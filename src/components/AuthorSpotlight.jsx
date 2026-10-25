import { Link } from "react-router-dom";
import { img } from "../assets/img";

const authors = [
  {
    name: "Rebecca Yarros",
    genre: "Fantasy & Romance",
    book: "Fourth Wing",
    image: "fourth-wing.jpg",
    description: "Discover immersive fantasy worlds, adventure and unforgettable characters.",
  },
  {
    name: "Colleen Hoover",
    genre: "Contemporary Fiction",
    book: "It Ends with Us",
    image: "it-ends-with-us.jpg",
    description: "Explore emotional stories about relationships, choices and personal growth.",
  },
  {
    name: "Andy Weir",
    genre: "Science Fiction",
    book: "Project Hail Mary",
    image: "project-hail-mary.jpg",
    description: "Explore science-driven adventures, mysteries and journeys into space.",
  },
];

export default function AuthorSpotlight() {
  return (
    <>
      <nav className="navbar navbar-expand-lg orbit-nav">
        <div className="container">
          <Link className="navbar-brand orbit-brand" to="/">Orbit Books</Link>
          <button className="navbar-toggler" data-bs-toggle="collapse"
            data-bs-target="#authorMenu" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="authorMenu">
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
          <span className="orbit-eyebrow">MEET THE STORYTELLERS</span>
          <h1>Author Spotlight</h1>
          <p>Meet the minds behind the books you can't put down.</p>
          <img className="orbit-banner-img"
            src={img("author-hero.jpg")} alt="Author Spotlight" />
        </section>

        <section className="container py-5">
          <div className="row align-items-center g-5 mb-5">
            <div className="col-lg-5">
              <img className="orbit-author-img"
                src={img("author.jpg")}
                alt="Featured author" />
            </div>
            <div className="col-lg-7">
              <span className="orbit-eyebrow">FEATURED THIS MONTH</span>
              <h2>Stories That Stay With You</h2>
              <p>
                Great authors help us see the world differently. Discover
                imaginative worlds, thrilling mysteries and stories that
                keep readers turning pages.
              </p>
              <Link className="btn orbit-btn" to="/products">
                Explore All Books
              </Link>
            </div>
          </div>

          <div className="orbit-section-heading">
            <h2>Meet Our Featured Authors</h2>
          </div>

          <div className="row g-4">
            {authors.map((author) => (
              <div className="col-md-4" key={author.name}>
                <div className="orbit-author-card">
                  <img src={img(author.image)} alt={author.book} />
                  <div className="p-4">
                    <span className="orbit-book-genre">{author.genre}</span>
                    <h4 className="mt-3">{author.name}</h4>
                    <p>{author.description}</p>
                    <strong>Featured book: {author.book}</strong>
                    <Link className="btn orbit-btn w-100 mt-3" to="/products">
                      Browse Books
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="orbit-author-banner mt-5">
            <span className="orbit-eyebrow">YOUR NEXT FAVOURITE AUTHOR</span>
            <h2>Every Story Has a Voice.</h2>
            <p>
              Find new perspectives, explore different genres and discover
              the authors who make reading unforgettable.
            </p>
            <Link className="btn orbit-btn" to="/products">
              Browse the Collection
            </Link>
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