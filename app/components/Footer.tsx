import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <div>
          <div className={styles.wordmark}>Afterpage</div>
          <p className={styles.tagline}>
            © {new Date().getFullYear()} Afterpage. Made for iPhone and iPad.
          </p>
        </div>
        <nav className={styles.links} aria-label="Footer">
          <Link href="/privacy">Privacy Policy</Link>
          <a href="mailto:support@afterpage.app">support@afterpage.app</a>
        </nav>
      </div>
    </footer>
  );
}
