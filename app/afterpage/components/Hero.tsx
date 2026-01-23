import Image from 'next/image';
import styles from './Hero.module.css';
import AppStoreButton from '../../components/AppStoreButton';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.headline}>
              Never lose an important document again
            </h1>

            <p className={styles.subheadline}>
              Transform document chaos into an organized, searchable archive. Smart organization that learns your patterns.
            </p>

            <div className={styles.ctaGroup}>
              <AppStoreButton />
              <a href="#how-it-works" className={styles.secondaryCta}>
                See How It Works
              </a>
            </div>

            <p className={styles.subtext}>
              Free to start • iPhone, iPad, and Mac • No account required
            </p>
          </div>

          <div className={styles.imageContent}>
            <Image
              src="/images/hero-screenshot.png"
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
