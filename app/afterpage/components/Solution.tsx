import Image from 'next/image';
import { TbScan, TbSparkles, TbSearch } from 'react-icons/tb';
import styles from './Solution.module.css';

const benefits = [
  {
    icon: TbSparkles,
    title: 'Organize Intelligently',
    description: 'Smart Organization learns your patterns and suggests where documents belong. The more you use it, the better it gets.',
    badge: 'SMART ORGANIZATION',
    isSmart: true,
    screenshot: '/images/screenshots/en-US-3-Solution_Organize.png',
    screenshotAlt: 'Afterpage inbox with Smart Organization suggestions',
  },
  {
    icon: TbSearch,
    title: 'Find Anything',
    description: 'Search the text inside any document in seconds. Filter by tags, document types, or contacts. Every document is instantly findable.',
    screenshot: '/images/screenshots/en-US-4-Solution_Find.png',
    screenshotAlt: 'Afterpage search interface with filters',
  },
  {
    icon: TbScan,
    title: 'Capture Effortlessly',
    description: 'Scan with your camera, import from Photos, or drag from Mail. However documents enter your life, Afterpage is ready.',
    screenshot: '/images/screenshots/en-US-2-Solution_Scan.png',
    screenshotAlt: 'Afterpage camera scanning interface',
  },
];

export default function Solution() {
  return (
    <section className={styles.solution}>
      <div className={styles.container}>
        <h2 className={styles.headline}>
          Organization that gets smarter
        </h2>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <div className={`${styles.icon} ${benefit.isSmart ? styles.iconSmart : ''}`}>
                <benefit.icon size={48} />
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              {benefit.badge && (
                <span className={styles.badge}>{benefit.badge}</span>
              )}
              <p className={styles.cardDescription}>{benefit.description}</p>
              <div className={styles.screenshotContainer}>
                <Image
                  src={benefit.screenshot}
                  alt={benefit.screenshotAlt}
                  width={280}
                  height={560}
                  className={styles.screenshot}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
