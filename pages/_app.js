// /pages/_app.js
import "../styles/globals.css";
import { ThemeProvider } from "../utils/theme-context";
import { AuthProvider } from "../contexts/AuthContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}
