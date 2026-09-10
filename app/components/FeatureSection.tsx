import Image from "next/image";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";
import IconPlaceholder from "./IconPlaceholder";
import styles from "./FeatureSection.module.css";

interface Bullet {
  title: string;
  body: string;
}

interface Media {
  src: string;
  width: number;
  height: number;
}

interface FeatureSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
  bullets?: Bullet[];
  mediaLabel: string;
  media?: Media;
  reverse?: boolean;
  invert?: boolean;
}

export default function FeatureSection({
  id,
  eyebrow,
  title,
  subtitle,
  body,
  bullets,
  mediaLabel,
  media,
  reverse,
  invert,
}: FeatureSectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${invert ? styles.inverted : ""} ${reverse ? styles.reverse : ""}`}
    >
      <div className={`container ${styles.grid}`}>
        <div>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {body && <p className={styles.body}>{body}</p>}
          {bullets && (
            <ul className={styles.bullets}>
              {bullets.map((bullet) => (
                <li className={styles.bullet} key={bullet.title}>
                  <IconPlaceholder inverted={invert} />
                  <div className={styles.bulletCopy}>
                    <h3>{bullet.title}</h3>
                    <p>{bullet.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          {media ? (
            <Image
              src={media.src}
              alt={mediaLabel}
              width={media.width}
              height={media.height}
              className={styles.media}
              sizes="(min-width: 860px) 50vw, 100vw"
            />
          ) : (
            <ScreenshotPlaceholder label={mediaLabel} />
          )}
        </div>
      </div>
    </section>
  );
}
