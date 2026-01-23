import styles from './Features.module.css';

const SparklesIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3.333L22.5 15L34.167 17.5L22.5 20L20 31.667L17.5 20L5.833 17.5L17.5 15L20 3.333Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30.833 25.833L32.5 30.833L37.5 32.5L32.5 34.167L30.833 39.167L29.167 34.167L24.167 32.5L29.167 30.833L30.833 25.833Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TextIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6.667" y="5" width="26.667" height="30" rx="2" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M13.333 13.333H26.667M13.333 20H26.667M13.333 26.667H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const CloudIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.667 31.667H11.667C7.083 31.667 3.333 27.917 3.333 23.333C3.333 19.167 6.417 15.667 10.417 15.083C11.25 10 15.583 6.25 20.833 6.25C26.667 6.25 31.25 10.833 31.25 16.667V17.5C34.583 17.917 37.083 20.833 37.083 24.167C37.083 27.917 34.167 31.667 30 31.667H26.667Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 20V28.333M20 20L16.667 23.333M20 20L23.333 23.333" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InboxIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36.667 20H28.333L25 25H15L11.667 20H3.333" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.083 8.583L3.333 20V30C3.333 30.884 3.684 31.732 4.309 32.357C4.934 32.982 5.783 33.333 6.667 33.333H33.333C34.217 33.333 35.066 32.982 35.691 32.357C36.316 31.732 36.667 30.884 36.667 30V20L30.917 8.583C30.632 8.01 30.195 7.529 29.655 7.191C29.114 6.852 28.491 6.67 27.853 6.667H12.147C11.509 6.67 10.886 6.852 10.345 7.191C9.805 7.529 9.368 8.01 9.083 8.583Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShareIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.667 20V33.333C6.667 34.217 7.018 35.066 7.643 35.691C8.268 36.316 9.116 36.667 10 36.667H30C30.884 36.667 31.732 36.316 32.357 35.691C32.982 35.066 33.333 34.217 33.333 33.333V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.667 10L20 3.333L13.333 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 3.333V25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 36.667S33.333 30 33.333 20V8.333L20 3.333L6.667 8.333V20C6.667 30 20 36.667 20 36.667Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.167 20L18.333 24.167L26.667 15.833" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface Feature {
  icon: React.ComponentType;
  title: string;
  description: string;
  badge?: string;
  isSmart?: boolean;
}

const features: Feature[] = [
  {
    icon: SparklesIcon,
    title: 'Smart Organization',
    description: 'Learns your filing patterns to suggest tags, document types, and contacts automatically. Gets smarter with every document.',
    badge: 'PLUS FEATURE',
    isSmart: true,
  },
  {
    icon: TextIcon,
    title: 'Text Recognition',
    description: 'On-device OCR powered by Apple Vision. Search any document by the words inside—fast, private, no internet required.',
  },
  {
    icon: CloudIcon,
    title: 'iCloud Sync',
    description: 'Stores in your iCloud Drive. Syncs across iPhone, iPad, and Mac. Your documents, your cloud, your control.',
  },
  {
    icon: InboxIcon,
    title: 'Inbox Workflow',
    description: 'Scan now, organize later. Documents land in your Inbox for quick processing when you have time.',
  },
  {
    icon: ShareIcon,
    title: 'Searchable Export',
    description: 'Export PDFs with embedded text. Share via AirDrop, email, or save to Files. Your documents stay searchable everywhere.',
  },
  {
    icon: ShieldIcon,
    title: 'Privacy by Default',
    description: 'Everything happens on your device. No third-party accounts, no cloud uploads, just seamless Apple ecosystem integration.',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>
          Built for your Apple ecosystem
        </h2>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={`${styles.icon} ${feature.isSmart ? styles.iconSmart : ''}`}>
                  <feature.icon />
                </div>
                {feature.badge && (
                  <span className={styles.badge}>{feature.badge}</span>
                )}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
