import Image from 'next/image';
import styles from './Hero.module.css';
import AppStoreButton from '../../components/AppStoreButton';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <Image
              src="/images/logotype.png"
              alt="Afterpage"
              width={400}
              height={80}
              className={styles.logotype}
              priority
            />
            <h1 className={styles.headline}>
              Never lose an important document again
            </h1>

            <p className={styles.subheadline}>
              The intelligent document archive that learns your patterns. Organize, search, and find anything instantly.
            </p>

            <div className={styles.ctaGroup}>
              <AppStoreButton />
              <a href="#how-it-works" className={styles.secondaryCta}>
                See How It Works
              </a>
            </div>

            <p className={styles.subtext}>
              Free to start • iPhone and iPad • No account required
            </p>
          </div>

          <div className={styles.imageContent}>
            <Image
              src="/images/screenshots/en-US-1-Website_Hero.png"
              alt="Afterpage app showing organized document library"
              width={400}
              height={800}
              className={styles.screenshot}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
