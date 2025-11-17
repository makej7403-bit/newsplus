import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { auth, provider } from "../firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

export default function AccountPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const loginGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div style={styles.container}>
      <Navbar />

      <header style={styles.header}>
        <h1>Your Account</h1>
        <p>Manage your login and subscription settings.</p>
      </header>

      <section style={styles.content}>
        {!user ? (
          <button style={styles.btn} onClick={loginGoogle}>
            Sign in with Google
          </button>
        ) : (
          <div style={styles.profileBox}>
            <img
              src={user.photoURL}
              alt="Profile"
              style={styles.profileImage}
            />
            <h3>{user.displayName}</h3>
            <p>{user.email}</p>

            <button style={styles.logoutBtn} onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

const styles = {
  container: {
    background: "#f4f4f4",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    padding: "40px 20px",
    background: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  content: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
  btn: {
    padding: "15px 30px",
    background: "#111",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
  },
  profileBox: {
    background: "white",
    width: "320px",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  profileImage: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    marginBottom: "15px",
  },
  logoutBtn: {
    marginTop: "15px",
    background: "crimson",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
