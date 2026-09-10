import AppStoreButton from "./AppStoreButton";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Get started with Afterpage</h2>
        <p className={styles.subtitle}>Free to download. No account required.</p>
        <div className={styles.actions}>
          <AppStoreButton inverted />
        </div>
      </div>
    </section>
  );
}
