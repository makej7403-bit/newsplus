import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Categories() {
  const categories = [
    "Technology",
    "Business",
    "Sports",
    "Entertainment",
    "Health",
    "Science",
    "World",
    "Politics",
    "Education",
    "Environment",
  ];

  return (
    <div style={styles.container}>
      <Navbar />

      <header style={styles.header}>
        <h1>News Categories</h1>
        <p>Select a category to explore the latest news.</p>
      </header>

      <div style={styles.grid}>
        {categories.map((cat, index) => (
          <Link
            key={index}
            href={`/category/${cat.toLowerCase()}`}
            style={styles.card}
          >
            <div style={styles.cardInner}>
              <h3>{cat}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#f5f5f5",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    padding: "40px 20px",
    background: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  grid: {
    marginTop: "30px",
    padding: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
  },
  card: {
    textDecoration: "none",
  },
  cardInner: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "0.3s",
  },
};
