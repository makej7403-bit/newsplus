import { useState } from "react";
import Navbar from "../components/Navbar";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      alert("Enter a search keyword");
      return;
    }

    alert(`Search results for: ${query} (API will be added soon)`);
  };

  return (
    <div style={styles.container}>
      <Navbar />

      <header style={styles.header}>
        <h1>Search News</h1>
        <p>Find articles from trusted global sources.</p>
      </header>

      <section style={styles.section}>
        <form onSubmit={handleSearch} style={styles.form}>
          <input
            type="text"
            placeholder="Search for news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.btn}>
            Search
          </button>
        </form>

        <div style={styles.placeholderBox}>
          <p>Search results will appear here once the News API is integrated.</p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f4f4f4",
  },
  header: {
    textAlign: "center",
    padding: "40px 20px",
    background: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  section: {
    padding: "20px",
  },
  form: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    width: "60%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  btn: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    background: "#111",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
  placeholderBox: {
    height: "150px",
    background: "#e1e1e1",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#555",
  },
};
