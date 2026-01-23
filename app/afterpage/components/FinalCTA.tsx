import styles from './FinalCTA.module.css';
import AppStoreButton from '../../components/AppStoreButton';

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>
          Ready to transform document chaos?
        </h2>
        <p className={styles.subheadline}>
          Download Afterpage and start organizing your important documents today.
        </p>

        <AppStoreButton />

        <p className={styles.subtext}>
          Free to start • iPhone and iPad • No account required
        </p>
      </div>
    </section>
  );
}
