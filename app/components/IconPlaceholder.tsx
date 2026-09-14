import { ICON_PATHS, type IconName } from "./icons";
import styles from "./IconPlaceholder.module.css";

export type IconColor = "teal" | "purple" | "indigo" | "pink";

interface IconPlaceholderProps {
  icon?: IconName;
  color?: IconColor;
  inverted?: boolean;
}

const colorClass: Record<IconColor, string> = {
  teal: styles.teal,
  purple: styles.purple,
  indigo: styles.indigo,
  pink: styles.pink,
};

export default function IconPlaceholder({
  icon,
  color = "teal",
  inverted,
}: IconPlaceholderProps) {
  return (
    <div
      className={`${styles.icon} ${icon ? colorClass[color] : ""} ${inverted ? styles.inverted : ""}`}
    >
      {icon ? (
        <svg
          className={styles.glyph}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d={ICON_PATHS[icon]} />
        </svg>
      ) : (
        <span className={styles.dot} />
      )}
    </div>
  );
}
