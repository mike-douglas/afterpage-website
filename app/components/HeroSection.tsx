import Image from "next/image";
import AppStoreButton from "./AppStoreButton";
import Features from "./Features";
import Header from "./Header";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>      
      <div className={styles.heroSection}>
        <Header />
        <p className={styles.heroSubtitle}>Track all your packages in one place.</p>
        <AppStoreButton />
        <Features />
      </div>

      <div className={styles.heroImage}>
        <Image 
          src="/images/screenshots/hero.png" 
          alt="ShipKit Home Screen"
          fill
          objectFit="contain" />
      </div>
    </div>
  )
}