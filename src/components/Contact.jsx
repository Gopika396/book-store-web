import { Link } from "react-router-dom";
import { img } from "../assets/img";

export default function Contact() {
  const submitForm = (e) => {
    e.preventDefault();
    alert("Thank you! Your demo message has been submitted.");
    e.target.reset();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg orbit-nav">
        <div className="container">
          <Link className="navbar-brand orbit-brand" to="/">Orbit Books</Link>
          <button className="navbar-toggler" data-bs-toggle="collapse"
            data-bs-target="#contactMenu" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="contactMenu">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/products">Products</Link>
              <Link className="nav-link" to="/author-spotlight">Author Spotlight</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/cart">Cart</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="orbit-page">
        <section className="orbit-page-hero">
          <span className="orbit-eyebrow">WE'RE HERE FOR YOU</span>
          <h1>Let's Connect.</h1>
          <p>Questions about a book? Need a recommendation? Talk to us.</p>
          <img className="orbit-banner-img"
            src={img("contact-hero.jpg")} alt="Contact Orbit Books" />
        </section>

        <section className="container py-5">
          <div className="row g-5">
            <div className="col-lg-5">
              <span className="orbit-eyebrow">GET IN TOUCH</span>
              <h2>Contact Orbit</h2>
              <p>
                Our team is ready to help you discover your next favourite book.
              </p>
              <div className="orbit-contact-detail">
                <i className="bi bi-geo-alt" />
                <div><h6>Visit Us</h6><p>Bengaluru, India</p></div>
              </div>
              <div className="orbit-contact-detail">
                <i className="bi bi-envelope" />
                <div><h6>Email</h6><p>orbitbooks@gmail.com</p></div>
              </div>
              <div className="orbit-contact-detail">
                <i className="bi bi-telephone" />
                <div><h6>Phone</h6><p>+91 98765 43210</p></div>
              </div>
              <div className="orbit-contact-detail">
                <i className="bi bi-clock" />
                <div><h6>Opening Hours</h6><p>Monday–Saturday, 10 AM–7 PM</p></div>
              </div>
            </div>

            <div className="col-lg-7">
              <form className="orbit-form" onSubmit={submitForm}>
                <h3>Send Us a Message</h3>

                <label htmlFor="contactName">Full Name</label>
                <input id="contactName" className="form-control"
                  placeholder="Your name" required />

                <label htmlFor="contactEmail">Email Address</label>
                <input id="contactEmail" className="form-control"
                  type="email" placeholder="you@example.com" required />

                <label htmlFor="contactSubject">Subject</label>
                <select id="contactSubject" className="form-select">
                  <option>Book recommendation</option>
                  <option>Order enquiry</option>
                  <option>Return or refund</option>
                  <option>Author enquiry</option>
                  <option>Other</option>
                </select>

                <label htmlFor="contactMessage">Message</label>
                <textarea id="contactMessage" className="form-control"
                  rows="5" placeholder="Tell us how we can help..."
                  required />

                <button className="btn orbit-btn mt-4">
                  Send Message <i className="bi bi-send ms-2" />
                </button>
              </form>
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