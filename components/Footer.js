export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div>
          <h3 style={styles.title}>NewsPlus</h3>
          <p style={styles.text}>
            Reliable global news updated in real time.
          </p>
        </div>

        <div>
          <h4 style={styles.subtitle}>Quick Links</h4>
          <ul style={styles.list}>
            <li>Home</li>
            <li>Latest News</li>
            <li>Categories</li>
            <li>Search</li>
            <li>Account</li>
          </ul>
        </div>

        <div>
          <h4 style={styles.subtitle}>Contact</h4>
          <p style={styles.text}>support@newsplus.com</p>
          <p style={styles.text}>Created by Akin</p>
        </div>
      </div>

      <p style={styles.copy}>
        © {new Date().getFullYear()} NewsPlus. All rights reserved.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    background: "#0e0e0e",
    color: "white",
    padding: "40px 20px",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
  },
  title: {
    fontSize: "22px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  text: {
    opacity: 0.8,
    marginBottom: "6px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    opacity: 0.8,
  },
  copy: {
    textAlign: "center",
    marginTop: "20px",
    opacity: 0.7,
  },
};
