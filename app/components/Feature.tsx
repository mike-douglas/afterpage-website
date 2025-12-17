import styles from "./Feature.module.css";

interface FeatureProps {
  title: string;
  description: string;
}

export default function Feature({ title, description }: FeatureProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}