import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/images/icon.png"
                alt="Afterpage"
                width={32}
                height={32}
                className={styles.logo}
              />
              <span className={styles.brandName}>Afterpage</span>
            </Link>
            <p className={styles.tagline}>Transform document chaos into clarity</p>
          </div>

          <nav className={styles.links}>
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
            <a href="mailto:support@afterpage.app" className={styles.link}>Support</a>
          </nav>

          <div className={styles.contact}>
            <a href="mailto:support@afterpage.app" className={styles.link}>
              support@afterpage.app
            </a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {currentYear} Afterpage. Made for Apple devices.</p>
        </div>
      </div>
    </footer>
  );
}
