import AppStoreButton from "./AppStoreButton";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 className={styles.title}>Keep everything important in one place.</h1>
          <p className={styles.subtitle}>
            Afterpage is a home for the documents you don&apos;t want to lose,
            organized the way you think about them.
          </p>
          <div className={styles.actions}>
            <AppStoreButton />
            <span className={styles.trust}>
              No account needed. Your documents stay in your own iCloud.
            </span>
          </div>
        </div>
        <div className={styles.media}>
          <ScreenshotPlaceholder label="Hero screenshot — Recents view" />
        </div>
      </div>
    </section>
  );
}
