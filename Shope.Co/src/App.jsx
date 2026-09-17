import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home-page/Home";
import About from "./pages/About-page/About";
import Contact from "./pages/Contact-page/Contact";
import SignUp from "./pages/Sign-up-page/Sign-up";
import Profile from "./pages/Profile-page/Profile";
import Cart from "./pages/Cart-page/cart";
import Products from "./pages/Products-page/Products";
import { Product } from "./components/Home-layout/New-ariwal-clothes/new-ariwal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
