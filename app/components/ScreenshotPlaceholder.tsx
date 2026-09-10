import styles from "./ScreenshotPlaceholder.module.css";

interface ScreenshotPlaceholderProps {
  label: string;
  variant?: "phone" | "wide";
}

export default function ScreenshotPlaceholder({
  label,
  variant = "phone",
}: ScreenshotPlaceholderProps) {
  return (
    <div
      className={`${styles.placeholder} ${variant === "wide" ? styles.wide : ""}`}
    >
      <span className={styles.label}>{label}</span>
    </div>
  );
}
