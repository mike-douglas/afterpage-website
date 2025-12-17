import styles from './WhyAfterpage.module.css';

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 12l8-5M12 12v10M12 12L4 7" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Organization-first',
    description: 'Unlike scanner apps that stop at capture, Afterpage emphasizes intelligent organization from day one.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Gets smarter over time',
    description: 'AI classification that learns your patterns. The more you use it, the better suggestions become.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 11V7a4 4 0 118 0v4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: 'Private by design',
    description: 'All processing happens on your device. Documents stay in your iCloud Drive - no third-party servers.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 12h20M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10 15 15 0 014-10z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Apple ecosystem native',
    description: 'Built for iPhone and iPad. Works seamlessly with iCloud, Files, and your existing Apple setup.',
  },
];

export default function WhyAfterpage() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Why Afterpage?</h2>
        <p className={styles.subtitle}>
          Document management that puts humans first.
        </p>
      </div>
      <div className={styles.grid}>
        {reasons.map((reason, index) => (
          <div key={index} className={styles.reason}>
            <div className={styles.iconContainer}>
              {reason.icon}
            </div>
            <h3 className={styles.reasonTitle}>{reason.title}</h3>
            <p className={styles.reasonDescription}>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
