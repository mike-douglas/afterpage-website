import Image from "next/image";
import AppStoreButton from "./AppStoreButton";
import copy from "../content/copy.json";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <Image
            src="/images/AppIcon-iOS-Default-256@1x.png"
            alt=""
            width={128}
            height={128}
            className={styles.icon}
            priority
          />
          <h1 className={styles.title}>{copy.hero.title}</h1>
          <p className={styles.subtitle}>{copy.hero.subtitle}</p>
          <div className={styles.actions}>
            <AppStoreButton />
            <span className={styles.trust}>{copy.hero.trust}</span>
          </div>
        </div>
        <div className={styles.media}>
          <Image
            src="/images/screenshots/en-US/hero/Hero@0.5x.webp"
            alt={copy.hero.mediaLabel}
            width={795}
            height={950}
            className={styles.heroImage}
            priority
            sizes="(min-width: 860px) 45vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
