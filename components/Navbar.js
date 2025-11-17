import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>NewsPlus</div>

      <div style={styles.links}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/latest" style={styles.link}>Latest</Link>
        <Link href="/categories" style={styles.link}>Categories</Link>
        <Link href="/search" style={styles.link}>Search</Link>
        <Link href="/account" style={styles.link}>Account</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    padding: "20px",
    background: "#0e0e0e",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    gap: "20px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px"
  }
};
