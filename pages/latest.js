import Navbar from "../components/Navbar";

export default function LatestNews() {
  return (
    <div style={styles.container}>
      <Navbar />

      <header style={styles.header}>
        <h1>Latest News</h1>
        <p>Stay updated with breaking news from around the world.</p>
      </header>

      <section style={styles.section}>
        <h2>Breaking News Feed</h2>

        <div style={styles.placeholderBox}>
          <p>Latest news will appear here once we integrate the API.</p>
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
};
