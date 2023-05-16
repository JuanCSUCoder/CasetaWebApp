import Link from "next/link";
import Button from "./Button";
import styles from "./LandingNav.module.css";

export default function LandingNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#sign">Sign Up</a>
        </li>
        <Button value="Register RealState" link="/register" />
      </ul>
    </nav>
  );
}
