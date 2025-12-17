import Image from 'next/image';
import styles from './Hero.module.css';
import SignUpForm from './SignUpForm';

const features = [
  'Scan documents with your camera or import from anywhere',
  'Full-text search powered by on-device OCR',
  'Smart organization that learns your patterns',
  'Private by design - everything stays on your device',
  'Syncs across iPhone and iPad via iCloud',
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.logoBanner}>
        <Image
          src="/images/logotype.png"
          alt="Afterpage"
          width={200}
          height={56}
          className={styles.logo}
          priority
        />
      </div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.headline}>
            Never lose an important document again
          </h1>

          <p className={styles.subheadline}>
            Transform document chaos into an organized, searchable archive.
          </p>

          <ul className={styles.features}>
            {features.map((feature, index) => (
              <li key={index} className={styles.feature}>
                <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <div className={styles.waitlistContainer}>
            <SignUpForm />
            <p className={styles.privacyNote}>
              Early access notification only. No spam.
            </p>
          </div>
        </div>

        <div className={styles.screenshotContainer}>
          <Image
            src="/images/hero-screenshot.png"
            alt="Afterpage app showing organized document archive"
            width={320}
            height={640}
            className={styles.screenshot}
            priority
          />
        </div>
      </div>
    </section>
  );
}
