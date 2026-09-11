import PersonalizeReveal from "./PersonalizeReveal";
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

        <PersonalizeReveal />
      </div>
    </section>
  );
}
