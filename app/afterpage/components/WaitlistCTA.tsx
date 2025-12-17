import styles from './WaitlistCTA.module.css';
import WaitlistForm from './WaitlistForm';

export default function WaitlistCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Get early access</h2>
        <p className={styles.subtitle}>
          Join the waitlist and be the first to know when Afterpage launches.
        </p>
        <WaitlistForm />
        <p className={styles.privacyNote}>
          Early access notification only. No spam. View our <a href="/privacy" className={styles.link}>Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
}
