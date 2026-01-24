import styles from './Pricing.module.css';
import AppStoreButton from '../../components/AppStoreButton';

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const freeFeatures = [
  '20 archived documents',
  'Camera scanning & import',
  'On-device Text Recognition',
  'Full-text search',
  'Manual organization',
  'iCloud sync',
];

const plusFeatures = [
  { text: 'Unlimited documents', isPlus: true },
  { text: 'Smart Organization', isPlus: true },
  { text: 'Auto-suggestions', isPlus: true },
  { text: 'Batch operations', isPlus: true },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>
          Start free, upgrade when you&apos;re ready
        </h2>

        <div className={styles.grid}>
          <div className={styles.cardFree}>
            <h3 className={styles.tierName}>Free</h3>
            <div className={styles.price}>$0</div>
            <ul className={styles.featureList}>
              {freeFeatures.map((feature, index) => (
                <li key={index} className={styles.feature}>
                  <CheckIcon className={styles.checkIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.cardPlus}>
            <h3 className={styles.tierName}>Plus</h3>
            <div className={styles.price}>$2.99<span className={styles.pricePeriod}>/month</span></div>
            <div className={styles.priceAnnual}>or $24.99/year</div>
            <div className={styles.savings}>Save 30% with annual</div>
            <div className={styles.plusDivider}>Everything in Free, plus:</div>
            <ul className={styles.featureList}>
              {plusFeatures.map((feature, index) => (
                <li key={index} className={styles.feature}>
                  <span className={styles.sparkle}>✨</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.ctaContainer}>
          <AppStoreButton />
          <p className={styles.subtext}>
            Try Afterpage free with 20 documents. Upgrade to Plus when you&apos;re ready for unlimited documents and Smart Organization.
          </p>
        </div>
      </div>
    </section>
  );
}
