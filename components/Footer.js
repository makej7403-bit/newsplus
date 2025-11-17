// /components/Footer.js

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="brand">
          <div className="logo">N+</div>
          <h2>NewsPlus</h2>
          <p>Reliable global news updated in real time.</p>
        </div>

        <div className="footer-links">
          <div>
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/latest">Latest News</a>
            <a href="/categories">Categories</a>
            <a href="/search">Search</a>
            <a href="/account">Account</a>
          </div>

          <div>
            <h3>Support</h3>
            <a href="/contact">Contact</a>
            <a href="mailto:support@newsplus.com">support@newsplus.com</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 NewsPlus. All rights reserved.</p>
        <p>Created by Akin</p>
      </div>
    </footer>
  );
}
