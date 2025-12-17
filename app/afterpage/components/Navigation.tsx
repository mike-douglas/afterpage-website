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
    </nav>
  );
}
