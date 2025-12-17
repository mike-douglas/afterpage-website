import styles from "./Features.module.css";

import Feature from "./Feature";

export default function Features() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Features</h2>
      <div className={styles.featureContainer}>
        <Feature title="Track Packages from Mail, Photos, and Safari" description="Take a screenshot and easily import using Share" />
        <Feature title="Keep Track of Packages from any Carrier" description="FedEx, UPS, USPS, DHL, plus international carriers. 1800+ carriers supported" />
        <Feature title="Real-time Updates for Your Stuff" description="Get notified while your packages are in transit" />
        <Feature title="Follow Your Packages in Transit" description="See each step on the map in gorgeous light and dark mode versions using Liquid Glass" />
      </div>
    </div>
  )
}