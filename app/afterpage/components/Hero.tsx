import Image from 'next/image';
import styles from './Hero.module.css';
import WaitlistForm from './WaitlistForm';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Never lose an important document again
        </h1>
        <p className={styles.subheadline}>
          Afterpage transforms document chaos into an organized, searchable archive
          using on-device AI that learns your patterns.
        </p>
        <WaitlistForm />
        <p className={styles.privacyNote}>
          Early access notification only. No spam.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/hero-screenshot.png"
          alt="Afterpage app showing organized document archive"
          width={400}
          height={800}
          className={styles.heroImage}
          priority
        />
      </div>
    </section>
  );
}
