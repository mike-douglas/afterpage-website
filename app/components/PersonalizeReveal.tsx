import type { CSSProperties } from "react";
import Image from "next/image";
import styles from "./PersonalizeReveal.module.css";

interface PersonalizeRevealProps {
  progress: number;
}

export default function PersonalizeReveal({ progress }: PersonalizeRevealProps) {
  return (
    <div
      className={styles.stage}
      style={{ "--progress": progress } as CSSProperties}
    >
      <div className={`${styles.card} ${styles.left}`}>
        <Image
          src="/images/screenshots/en-US/personalize/Pet-Tag@0.5x.webp"
          alt="Pet tag with a custom icon and color"
          width={735}
          height={1500}
          className={styles.image}
          sizes="210px"
        />
      </div>

      <div className={`${styles.card} ${styles.center}`}>
        <Image
          src="/images/screenshots/en-US/personalize/Yellowstone-Tag@0.5x.webp"
          alt="Yellowstone Road Trip tag with a custom background image"
          width={735}
          height={1500}
          className={styles.image}
          priority
          sizes="240px"
        />
      </div>

      <div className={`${styles.card} ${styles.right}`}>
        <Image
          src="/images/screenshots/en-US/personalize/Disney-Tag@0.5x.webp"
          alt="Disney World 2026 tag with a custom background image"
          width={735}
          height={1500}
          className={styles.image}
          sizes="210px"
        />
      </div>
    </div>
  );
}
