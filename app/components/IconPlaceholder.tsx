import styles from "./IconPlaceholder.module.css";

interface IconPlaceholderProps {
  inverted?: boolean;
}

export default function IconPlaceholder({ inverted }: IconPlaceholderProps) {
  return (
    <div className={`${styles.icon} ${inverted ? styles.inverted : ""}`}>
      <span className={styles.dot} />
    </div>
  );
}
