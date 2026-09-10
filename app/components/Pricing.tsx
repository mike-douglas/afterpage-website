import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Free to start, simple to grow into</h2>
          <p className={styles.subtitle}>
            Scanning, OCR, and search are free for good. Pro adds the
            personalization on top.
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.planName}>Free</div>
            <div className={styles.price}>$0</div>
            <ul className={styles.features}>
              <li>Scan and import as many documents as you need</li>
              <li>On-device OCR and full-text search</li>
              <li>Tags, categories, and contacts</li>
              <li>Sync across your iPhone and iPad with iCloud</li>
            </ul>
          </div>

          <div className={`${styles.card} ${styles.featured}`}>
            <div className={styles.planName}>Pro</div>
            <div className={styles.price}>$4.99/mo</div>
            <div className={styles.priceNote}>or $29.99/yr with a 7-day free trial</div>
            <ul className={styles.features}>
              <li>Everything in Free</li>
              <li>Custom icons for your tags and categories</li>
              <li>Custom background images, like a photo from the trip behind Disney World 2026</li>
              <li>New personalization features as they ship</li>
            </ul>
            <div className={styles.tiers}>
              <div className={styles.tier}>
                <div className={styles.tierName}>Monthly</div>
                <div className={styles.tierPrice}>$4.99</div>
              </div>
              <div className={styles.tier}>
                <div className={styles.tierName}>Yearly</div>
                <div className={styles.tierPrice}>$29.99</div>
              </div>
              <div className={styles.tier}>
                <div className={styles.tierName}>Lifetime</div>
                <div className={styles.tierPrice}>$69.99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
