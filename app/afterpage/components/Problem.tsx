import styles from './Problem.module.css';

export default function Problem() {
  return (
    <section className={styles.problem}>
      <div className={styles.container}>
        <h2 className={styles.headline}>
          Your documents deserve better than chaos
        </h2>
        <p className={styles.body}>
          Receipts stuffed in drawers. Contracts buried in email. Tax forms scattered across devices. When you need something important, you can&apos;t find it—and that moment of panic is all too familiar.
        </p>
      </div>
    </section>
  );
}
