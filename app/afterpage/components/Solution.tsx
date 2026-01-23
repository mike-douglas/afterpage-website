import Image from 'next/image';
import styles from './Solution.module.css';

const CameraIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M42 38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V16C6 14.9391 6.42143 13.9217 7.17157 13.1716C7.92172 12.4214 8.93913 12 10 12H16L20 6H28L32 12H38C39.0609 12 40.0783 12.4214 40.8284 13.1716C41.5786 13.9217 42 14.9391 42 16V38Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 34C28.4183 34 32 30.4183 32 26C32 21.5817 28.4183 18 24 18C19.5817 18 16 21.5817 16 26C16 30.4183 19.5817 34 24 34Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SparklesIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L27 18L41 21L27 24L24 38L21 24L7 21L21 18L24 4Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M37 31L39 37L45 39L39 41L37 47L35 41L29 39L35 37L37 31Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 38C30.8366 38 38 30.8366 38 22C38 13.1634 30.8366 6 22 6C13.1634 6 6 13.1634 6 22C6 30.8366 13.1634 38 22 38Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M42 42L33.35 33.35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const benefits = [
  {
    icon: CameraIcon,
    title: 'Capture Anywhere',
    description: 'Scan with your camera, import from Photos, or drag from Mail. However documents enter your life, Afterpage is ready.',
    screenshot: '/images/screenshots/en-US-2-Solution_Scan.png',
    screenshotAlt: 'Afterpage camera scanning interface',
  },
  {
    icon: SparklesIcon,
    title: 'Organize Instantly',
    description: 'Smart Organization learns your patterns and suggests where documents belong. The more you use it, the better it gets.',
    badge: 'SMART ORGANIZATION',
    isSmart: true,
    screenshot: '/images/screenshots/en-US-3-Solution_Organize.png',
    screenshotAlt: 'Afterpage inbox with Smart Organization suggestions',
  },
  {
    icon: SearchIcon,
    title: 'Find Anything',
    description: 'Search the text inside any document in seconds. Filter by tags, document types, or contacts. Every document is instantly findable.',
    screenshot: '/images/screenshots/en-US-4-Solution_Find.png',
    screenshotAlt: 'Afterpage search interface with filters',
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
                <benefit.icon />
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
