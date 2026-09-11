import AppStoreButton from "./AppStoreButton";
import copy from "../content/copy.json";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{copy.finalCta.title}</h2>
        <p className={styles.subtitle}>{copy.finalCta.subtitle}</p>
        <div className={styles.actions}>
          <AppStoreButton inverted />
        </div>
      </div>
    </section>
  );
}
