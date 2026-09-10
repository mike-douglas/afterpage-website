import ScreenshotPlaceholder from "./ScreenshotPlaceholder";
import styles from "./PersonalizeShowcase.module.css";

const items = [
  "Yellowstone Road Trip — custom background",
  "Taxes 2025 — custom icon",
  "Pet — custom icon and color",
  "Disney World 2026 — custom background",
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
        {items.map((label) => (
          <div className={styles.item} key={label}>
            <ScreenshotPlaceholder label={label} />
          </div>
        ))}
      </div>
    </section>
  );
}
