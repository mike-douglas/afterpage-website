import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Link href="/" className={styles.brand}>
          <Image
            src="/images/icon.png"
            alt="Afterpage"
            width={24}
            height={24}
            className={styles.brandIcon}
          />
          <span className={styles.brandName}>Afterpage</span>
        </Link>
        <nav className={styles.links}>
          <Link href="/privacy" className={styles.link}>Privacy</Link>
          <a href="mailto:support@afterpage.app" className={styles.link}>Contact</a>
        </nav>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {currentYear} Afterpage. All rights reserved.</p>
      </div>
    </footer>
  );
}
