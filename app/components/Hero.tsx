import AppStoreButton from "./AppStoreButton";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";
import copy from "../content/copy.json";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 className={styles.title}>{copy.hero.title}</h1>
          <p className={styles.subtitle}>{copy.hero.subtitle}</p>
          <div className={styles.actions}>
            <AppStoreButton />
            <span className={styles.trust}>{copy.hero.trust}</span>
          </div>
        </div>
        <div className={styles.media}>
          <ScreenshotPlaceholder label={copy.hero.mediaLabel} />
        </div>
      </div>
    </section>
  );
}
