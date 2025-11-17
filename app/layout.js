export const metadata = {
  title: "NewsPlus",
  description: "Reliable global news updated in real time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Arial, sans-serif",
          background: "#f9f9f9",
        }}
      >
        <header
          style={{
            padding: "20px",
            background: "#111",
            color: "white",
            textAlign: "center",
          }}
        >
          <h1>NewsPlus</h1>
        </header>

        <main style={{ padding: "20px" }}>{children}</main>

        <footer
          style={{
            marginTop: "40px",
            padding: "20px",
            background: "#111",
            color: "white",
            textAlign: "center",
          }}
        >
          <p>© 2025 NewsPlus. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
            }
