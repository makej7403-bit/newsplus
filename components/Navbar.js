// /components/Navbar.js

import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const isActive = (path) => (router.pathname === path ? "active-link" : "");

  return (
    <header className="site-header">
      <div className="brand">
        <Link href="/">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className="logo">N+</div>
            <span>NewsPlus</span>
          </div>
        </Link>
      </div>

      <nav>
        <Link href="/" className={isActive("/")}>Home</Link>
        <Link href="/latest" className={isActive("/latest")}>Latest</Link>
        <Link href="/categories" className={isActive("/categories")}>Categories</Link>
        <Link href="/search" className={isActive("/search")}>Search</Link>
        <Link href="/account" className={isActive("/account")}>Account</Link>
      </nav>

      <div className="actions">
        <button
          className="btn gold"
          onClick={() => {
            document.body.dataset.theme =
              document.body.dataset.theme === "dark" ? "light" : "dark";
          }}
        >
          Toggle Theme
        </button>
      </div>

      <style jsx>{`
        .active-link {
          color: var(--red-600) !important;
          background: rgba(210, 47, 47, 0.12);
          border-radius: 8px;
          padding: 8px 12px;
        }
      `}</style>
    </header>
  );
}
