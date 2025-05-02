import { Link } from "react-router-dom";

function Navigation({ styles }) {
  return (
    <nav className={styles.NavigationList}>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
export default Navigation;
