import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Header-layout/Header-modules.css";

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");

  function handleSearch(event) {
    event.preventDefault();
    const query = search.trim();
    navigate(
      query ? `/products?search=${encodeURIComponent(query)}` : "/products",
    );
  }

  return (
    <div>
      <div className="Navbar">
        <div className="Navbar1">
          <Link to="/" className="ch logo">
            <b>SHOPE.CO</b>
          </Link>
        </div>
        <div className="navbar01">
          <Link to="/" className="ch home">
            Home
          </Link>
          <Link to="/contact" className="ch contact">
            Contact
          </Link>
          <Link to="/about" className="ch about">
            About
          </Link>
          <Link to="/sign-up" className="ch signup">
            Sign Up
          </Link>
          <div className="menu">☰</div>
        </div>
        <form className="searchbox" onSubmit={handleSearch}>
          <span className="search-icon" aria-hidden="true">
            ⌕
          </span>
          <input
            className="ch search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search"
            aria-label="Search products"
          />
        </form>
        <div className="nav-actions">
          <Link to="/cart" className="cart" aria-label="Shopping cart">
            🛒
          </Link>
          <Link className="profile-logo" to="/profile" aria-label="Profile">
            👤
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
