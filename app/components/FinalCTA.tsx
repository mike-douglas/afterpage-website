import Image from "next/image";
import AppStoreButton from "./AppStoreButton";
import copy from "../content/copy.json";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <Image
        src="/images/aurora-background.webp"
        alt=""
        fill
        aria-hidden="true"
        className={styles.aurora}
        sizes="100vw"
      />
      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>{copy.finalCta.title}</h2>
        <p className={styles.subtitle}>{copy.finalCta.subtitle}</p>
        <div className={styles.actions}>
          <AppStoreButton inverted />
        </div>
      </div>
    </section>
  );
}
