import Image from "next/image";
import styles from "./PersonalizeShowcase.module.css";

export default function PersonalizeShowcase() {
  return (
    <section id="personalize" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Personalize every detail</h2>
          <p className={styles.subtitle}>
            Custom icons, backgrounds, and more for your tags and categories.
          </p>
        </div>

        <Image
          src="/images/screenshots/en-US/personalize/Personalize@0.5x.png"
          alt="Custom tag and category icons, colors, and backgrounds in Afterpage"
          width={2424}
          height={1626}
          className={styles.hero}
          sizes="(min-width: 1120px) 1120px, 100vw"
          priority
        />
      </div>
    </section>
  );
}
