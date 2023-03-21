import Link from "next/link";
import styles from "./LandingNav.module.css";

export default function LandingNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="#features">Features</Link>
        </li>
        <li>
          <Link href="#sign">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}
