// /components/Footer.js

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2 className="footer-logo">
            <span className="logo-main">News</span>
            <span className="logo-accent">Plus</span>
          </h2>
          <p className="footer-tagline">
            Bringing you trusted news, fast and personalized.
          </p>
        </div>

        <div className="footer-links">
          <a href="/latest">Latest News</a>
          <a href="/categories">Categories</a>
          <a href="/search">Search</a>
          <a href="/account">Account</a>
        </div>

        <div className="footer-copy">
          <p>© {new Date().getFullYear()} NewsPlus. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
