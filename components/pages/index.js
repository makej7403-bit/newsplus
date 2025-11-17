import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div style={styles.container}>
      <Navbar />

      <header style={styles.header}>
        <h1>Welcome to NewsPlus</h1>
        <p>Your #1 destination for global news updates</p>
      </header>

      <section style={styles.section}>
        <h2>Top Headlines</h2>
        <div style={styles.placeholderBox}>
          <p>Headlines will appear here after we connect the News API</p>
        </div>
      </section>

      <section style={styles.section}>
        <h2>Categories</h2>
        <div style={styles.grid}>
          <div style={styles.category}>Politics</div>
          <div style={styles.category}>Technology</div>
          <div style={styles.category}>Health</div>
          <div style={styles.category}>Sports</div>
          <div style={styles.category}>Business</div>
          <div style={styles.category}>Entertainment</div>
        </div>
      </section>
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
  section: {
    padding: "20px",
  },
  placeholderBox: {
    height: "150px",
    background: "#e2e2e2",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#555",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "15px",
  },
  category: {
    padding: "20px",
    background: "#fff",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    fontWeight: "bold",
  }
};
