import Link from "next/link";
import AppStoreButton from "./AppStoreButton";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.wordmark}>
          <span className={styles.mark} aria-hidden="true" />
          Afterpage
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <Link href="#organize">Organize</Link>
          <Link href="#find">Find</Link>
          <Link href="#privacy">Privacy</Link>
          <Link href="#pricing">Pricing</Link>
        </nav>
        <div className={styles.actions}>
          <AppStoreButton label="Download" />
        </div>
      </div>
    </header>
  );
}
