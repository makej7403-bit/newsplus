// /components/Layout.js

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="app-wrapper">
      {/* Background Wrapper */}
      <div className="background-pattern"></div>

      {/* Main Content */}
      <Navbar />

      <main className="content-container">
        {children}
      </main>

      <Footer />
    </div>
  );
}
