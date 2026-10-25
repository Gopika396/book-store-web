import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import About from "./components/About";
import AuthorSpotlight from "./components/AuthorSpotlight";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/author-spotlight" element={<AuthorSpotlight />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}