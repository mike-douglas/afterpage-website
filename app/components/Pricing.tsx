import copy from "../content/copy.json";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const { title, subtitle, free, pro } = copy.pricing;

  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.planName}>{free.planName}</div>
            <div className={styles.price}>{free.price}</div>
            <ul className={styles.features}>
              {free.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={`${styles.card} ${styles.featured}`}>
            <div className={styles.planName}>{pro.planName}</div>
            <div className={styles.price}>{pro.price}</div>
            <div className={styles.priceNote}>{pro.priceNote}</div>
            <ul className={styles.features}>
              {pro.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className={styles.tiers}>
              {pro.tiers.map((tier) => (
                <div className={styles.tier} key={tier.name}>
                  <div className={styles.tierName}>{tier.name}</div>
                  <div className={styles.tierPrice}>{tier.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
