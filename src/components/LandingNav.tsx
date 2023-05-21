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
        <Button value="Register RealState" link="/app/register" />
      </ul>
    </nav>
  );
}
