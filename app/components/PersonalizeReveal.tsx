"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./PersonalizeReveal.module.css";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function PersonalizeReveal() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setProgress(1);
      return;
    }

    const updateProgress = () => {
      tickingRef.current = false;
      const el = stageRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.7;
      const end = viewportHeight * 0.25;
      const raw = clamp((start - rect.top) / (start - end), 0, 1);
      setProgress(raw * raw * (3 - 2 * raw));
    };

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={styles.stage}
      ref={stageRef}
      style={{ "--progress": progress } as CSSProperties}
    >
      <div className={`${styles.card} ${styles.left}`}>
        <Image
          src="/images/screenshots/en-US/personalize/Pet-Tag@0.5x.png"
          alt="Pet tag with a custom icon and color"
          width={735}
          height={1500}
          className={styles.image}
          sizes="210px"
        />
      </div>

      <div className={`${styles.card} ${styles.center}`}>
        <Image
          src="/images/screenshots/en-US/personalize/Yellowstone-Tag@0.5x.png"
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
          src="/images/screenshots/en-US/personalize/Disney-Tag@0.5x.png"
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
