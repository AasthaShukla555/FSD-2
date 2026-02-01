import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    padding: "15px",
    backgroundColor: "#E75480",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
};
