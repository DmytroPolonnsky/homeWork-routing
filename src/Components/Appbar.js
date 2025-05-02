import Navigation from "./Navigation";
import styles from "../App.module.css";

function Appbar() {
  return (
    <header>
      <Navigation styles={styles} />
    </header>
  );
}
export default Appbar;
