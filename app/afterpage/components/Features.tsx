import styles from './Features.module.css';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  isSmart?: boolean;
}

const features: Feature[] = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 10h12M10 14h12M10 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Instant Search',
    description: 'Search the text inside any document in seconds. Find receipts by amount, contracts by date, or anything by keyword.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Smart Organization',
    description: 'AI learns where your documents belong. The more you use Afterpage, the better it gets at suggesting tags, types, and categories.',
    isSmart: true,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="16" cy="22" r="2" fill="currentColor"/>
        <path d="M14 10h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Privacy-First',
    description: 'Everything happens on your device. Your documents stay in your iCloud Drive - secure, private, and under your control.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6l-10 6v12l10 6 10-6V12L16 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M16 12v12M6 12l10 6 10-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Seamless Capture',
    description: 'Scan with your camera, import from Files, drag from Mail - however documents enter your life, Afterpage is ready.',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Everything you need to stay organized</h2>
        <p className={styles.subtitle}>
          Organization-first document management that gets smarter with every document you add.
        </p>
      </div>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <div className={styles.iconContainer}>
              {feature.icon}
            </div>
            <div className={styles.content}>
              <div className={styles.titleRow}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                {feature.isSmart && (
                  <span className={styles.smartBadge}>Smart</span>
                )}
              </div>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
