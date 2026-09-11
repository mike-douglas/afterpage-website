import Link from "next/link";
import AppStoreButton from "./AppStoreButton";
import copy from "../content/copy.json";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.wordmark}>
          <span className={styles.mark} aria-hidden="true" />
          {copy.header.wordmark}
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          {copy.header.nav.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <AppStoreButton label={copy.header.downloadLabel} />
        </div>
      </div>
    </header>
  );
}
