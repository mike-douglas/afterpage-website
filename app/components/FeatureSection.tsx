import Image from "next/image";
import IconPlaceholder, { type IconColor } from "./IconPlaceholder";
import type { IconName } from "./icons";
import styles from "./FeatureSection.module.css";

interface Bullet {
  title: string;
  body: string;
  icon?: string;
  color?: string;
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
  mediaLabel?: string;
  media?: Media;
  reverse?: boolean;
  invert?: boolean;
  mediaScale?: number;
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
  mediaScale = 1,
}: FeatureSectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${invert ? styles.inverted : ""} ${reverse ? styles.reverse : ""}`}
    >
      <div
        className={`container ${styles.grid} ${!media ? styles.single : ""}`}
      >
        <div>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {body && <p className={styles.body}>{body}</p>}
          {bullets && (
            <ul className={styles.bullets}>
              {bullets.map((bullet) => (
                <li className={styles.bullet} key={bullet.title}>
                  <IconPlaceholder
                    icon={bullet.icon as IconName | undefined}
                    color={bullet.color as IconColor | undefined}
                    inverted={invert}
                  />
                  <div className={styles.bulletCopy}>
                    <h3>{bullet.title}</h3>
                    <p>{bullet.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {media && (
          <div>
            <Image
              src={media.src}
              alt={mediaLabel ?? ""}
              width={media.width}
              height={media.height}
              className={styles.media}
              style={{ maxWidth: `${mediaScale * 100}%`, marginInline: "auto" }}
              sizes="(min-width: 860px) 50vw, 100vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}
