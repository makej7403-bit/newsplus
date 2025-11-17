export default function NewsCard({ article }) {
  return (
    <div style={styles.card}>
      {/* Thumbnail Image */}
      {article.image_url ? (
        <img
          src={article.image_url}
          alt={article.title}
          style={styles.image}
        />
      ) : (
        <div style={styles.noImage}>No Image</div>
      )}

      {/* Content */}
      <div style={styles.content}>
        <h3 style={styles.title}>{article.title}</h3>

        <p style={styles.description}>
          {article.description
            ? article.description.substring(0, 120) + "..."
            : "No description available."}
        </p>

        <p style={styles.source}>
          Source: <strong>{article.source_id}</strong>
        </p>

        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.btn}
        >
          Read Full Article
        </a>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  noImage: {
    width: "100%",
    height: "180px",
    background: "#ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#555",
    fontSize: "16px",
  },
  content: {
    padding: "15px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  description: {
    fontSize: "15px",
    opacity: 0.8,
    marginBottom: "10px",
  },
  source: {
    fontSize: "14px",
    opacity: 0.7,
    marginBottom: "15px",
  },
  btn: {
    display: "inline-block",
    padding: "10px 15px",
    background: "#111",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "14px",
  },
};
