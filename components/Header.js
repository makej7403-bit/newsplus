// /components/Header.js
import Link from "next/link";
import { useTheme } from "../utils/theme-context";
import AuthButton from "./AuthButton";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          NewsPlus
        </Link>

        {/* Right Side: Menu */}
        <div className="flex items-center gap-4">

          <Link
            href="/bookmarks"
            className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition"
          >
            Bookmarks
          </Link>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="px-3 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>

          {/* Google Login / User Dropdown */}
          <AuthButton />
        </div>
      </div>
    </header>
  );
}
