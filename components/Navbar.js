// /components/Navbar.js

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          <span className="logo-main">News</span>
          <span className="logo-accent">Plus</span>
        </Link>

        <ul className="nav-links">
          <li><Link href="/latest">Latest</Link></li>
          <li><Link href="/categories">Categories</Link></li>
          <li><Link href="/search">Search</Link></li>
          <li><Link href="/account">Account</Link></li>
        </ul>
      </div>
    </nav>
  );
}
