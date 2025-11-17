// /hooks/useBookmarks.js
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../utils/firebase";
import { ref, set, onValue } from "firebase/database";

export default function useBookmarks() {
  const { user } = useAuth();
  const [bookmarks, setBookmarks] = useState([]);

  // Load bookmarks from Firebase or localStorage
  useEffect(() => {
    if (user) {
      const userRef = ref(db, `users/${user.uid}/bookmarks`);
      onValue(userRef, (snapshot) => {
        setBookmarks(snapshot.val() || []);
      });
    } else {
      const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
      setBookmarks(saved);
    }
  }, [user]);

  // Save bookmarks (Firebase or Local)
  const saveBookmark = (article) => {
    const updated = [...bookmarks, article];

    if (user) {
      set(ref(db, `users/${user.uid}/bookmarks`), updated);
    } else {
      localStorage.setItem("bookmarks", JSON.stringify(updated));
    }

    setBookmarks(updated);
  };

  const removeBookmark = (link) => {
    const updated = bookmarks.filter((a) => a.link !== link);

    if (user) {
      set(ref(db, `users/${user.uid}/bookmarks`), updated);
    } else {
      localStorage.setItem("bookmarks", JSON.stringify(updated));
    }

    setBookmarks(updated);
  };

  const isBookmarked = (link) => {
    return bookmarks.some((a) => a.link === link);
  };

  return {
    bookmarks,
    saveBookmark,
    removeBookmark,
    isBookmarked,
  };
}
