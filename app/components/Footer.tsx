import Link from "next/link";
import copy from "../content/copy.json";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <div>
          <div className={styles.wordmark}>{copy.footer.wordmark}</div>
          <p className={styles.tagline}>
            © {new Date().getFullYear()} {copy.footer.wordmark}.{" "}
            {copy.footer.tagline}
          </p>
        </div>
        <nav className={styles.links} aria-label="Footer">
          <Link href="/privacy">{copy.footer.privacyLabel}</Link>
          <a href={`mailto:${copy.footer.supportEmail}`}>
            {copy.footer.supportEmail}
          </a>
        </nav>
      </div>
    </footer>
  );
}
