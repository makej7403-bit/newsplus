// /components/AuthButton.js
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function AuthButton() {
  const { user, login, logout } = useAuth();
  const [open, setOpen] = useState(false);

  // Logged OUT UI
  if (!user) {
    return (
      <button
        onClick={login}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Sign in with Google
      </button>
    );
  }

  // Logged IN UI
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        <img
          src={user.photoURL}
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <span>{user.displayName?.split(" ")[0]}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border rounded-lg shadow-lg p-2">
          <button
            onClick={logout}
            className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
