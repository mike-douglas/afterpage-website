"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import PersonalizeReveal from "./PersonalizeReveal";
import copy from "../content/copy.json";
import styles from "./PersonalizeShowcase.module.css";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

interface Floater {
  src: string;
  left: string;
  top: string;
  size: number;
  rotate: number;
  delay: number;
  round?: boolean;
}

const floaters: Floater[] = [
  { src: "/images/archive-box-store.png", left: "8%", top: "10%", size: 46, rotate: -8, delay: 0.05 },
  { src: "/images/archive-box-tower.png", left: "84%", top: "8%", size: 50, rotate: 10, delay: 0.15 },
  { src: "/images/contact-avatar-1.png", left: "91%", top: "32%", size: 52, rotate: 0, delay: 0.08, round: true },
  { src: "/images/archive-box-wallet.png", left: "5%", top: "40%", size: 40, rotate: 8, delay: 0 },
  { src: "/images/archive-box-plane.png", left: "14%", top: "68%", size: 44, rotate: 14, delay: 0.1 },
  { src: "/images/contact-avatar-3.png", left: "4%", top: "88%", size: 46, rotate: 0, delay: 0.18, round: true },
  { src: "/images/archive-box-ticket.png", left: "90%", top: "62%", size: 42, rotate: -10, delay: 0.2 },
  { src: "/images/contact-avatar-5.png", left: "86%", top: "88%", size: 40, rotate: 0, delay: 0.12, round: true },
];

export default function PersonalizeShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
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
      const el = sectionRef.current;
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
    <section
      id="personalize"
      className={styles.section}
      ref={sectionRef}
      style={{ "--progress": progress } as CSSProperties}
    >
      <Image
        src="/images/aurora-background.webp"
        alt=""
        fill
        aria-hidden="true"
        className={styles.aurora}
        sizes="100vw"
      />

      <div className={styles.floaters} aria-hidden="true">
        {floaters.map((floater) => (
          <div
            key={floater.src}
            className={`${styles.floater} ${floater.round ? styles.round : ""}`}
            style={
              {
                left: floater.left,
                top: floater.top,
                width: `${floater.size}px`,
                "--delay": floater.delay,
                "--rotate": `${floater.rotate}deg`,
              } as CSSProperties
            }
          >
            <Image
              src={floater.src}
              alt=""
              width={floater.size}
              height={floater.size}
              className={styles.floaterImage}
              sizes={`${floater.size}px`}
            />
          </div>
        ))}
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>{copy.personalize.title}</h2>
          <p className={styles.subtitle}>{copy.personalize.subtitle}</p>
        </div>

        <PersonalizeReveal progress={progress} />
      </div>
    </section>
  );
}
