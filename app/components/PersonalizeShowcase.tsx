import Image from "next/image";
import copy from "../content/copy.json";
import styles from "./PersonalizeShowcase.module.css";

export default function PersonalizeShowcase() {
  return (
    <section id="personalize" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{copy.personalize.title}</h2>
          <p className={styles.subtitle}>{copy.personalize.subtitle}</p>
        </div>

        <Image
          src="/images/screenshots/en-US/personalize/Personalize@0.5x.png"
          alt={copy.personalize.imageAlt}
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
