// /components/Navbar.js

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <span className="logo-gold">News</span>
          <span className="logo-red">Plus</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Nav Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link href="/latest">Latest</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/search">Search</Link>
          <Link href="/account">Account</Link>
        </nav>
      </div>
    </header>
  );
}
