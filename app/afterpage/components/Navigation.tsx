import Image from 'next/image';
import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/icon.png"
          alt="Afterpage"
          width={32}
          height={32}
          className={styles.logoIcon}
        />
        <span className={styles.logoText}>Afterpage</span>
      </Link>
      <div className={styles.links}>
        <a href="#features" className={styles.link}>Features</a>
        <a href="#how-it-works" className={styles.link}>How It Works</a>
        <Link href="/privacy" className={styles.link}>Privacy</Link>
      </div>
    </nav>
  );
}
