import Image from "next/image";
import styles from "./PersonalizeShowcase.module.css";

const items = [
  {
    label: "Yellowstone Road Trip — custom background",
    src: "/images/screenshots/en-US/personalize/Yellowstone-Tag@0.5x.png",
  },
  {
    label: "Taxes 2025 — custom icon",
    src: "/images/screenshots/en-US/personalize/Taxes-Tag@0.5x.png",
  },
  {
    label: "Pet — custom icon and color",
    src: "/images/screenshots/en-US/personalize/Pet-Tag@0.5x.png",
  },
  {
    label: "Disney World 2026 — custom background",
    src: "/images/screenshots/en-US/personalize/Disney-Tag@0.5x.png",
  },
];

export default function PersonalizeShowcase() {
  return (
    <section id="personalize" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Pro</span>
          <h2 className={styles.title}>Personalize every detail</h2>
          <p className={styles.subtitle}>
            Custom icons, backgrounds, and more for your tags and categories.
          </p>
          <p className={styles.body}>
            Add a background image behind a tag or category, like an actual
            photo from the trip behind Disney World 2026, on top of the color
            and icon you&apos;ve already picked.
          </p>
        </div>
      </div>

      <div className={styles.strip}>
        {items.map(({ label, src }) => (
          <div className={styles.item} key={label}>
            <Image
              src={src}
              alt={label}
              width={735}
              height={1500}
              className={styles.screenshot}
              sizes="(min-width: 860px) 220px, 200px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
