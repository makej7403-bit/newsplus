// /components/Layout.js

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />

      <main className="content-wrapper">
        {children}
      </main>

      <Footer />
    </div>
  );
}
