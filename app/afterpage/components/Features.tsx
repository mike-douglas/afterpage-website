import { TbSparkles, TbTextRecognition, TbCloudUpload, TbInbox, TbShare, TbShieldCheck } from 'react-icons/tb';
import { IconType } from 'react-icons';
import styles from './Features.module.css';

interface Feature {
  icon: IconType;
  title: string;
  description: string;
  badge?: string;
  isSmart?: boolean;
}

const features: Feature[] = [
  {
    icon: TbSparkles,
    title: 'Smart Organization',
    description: 'Learns your filing patterns to suggest tags, document types, and contacts automatically. Gets smarter with every document.',
    badge: 'PLUS FEATURE',
    isSmart: true,
  },
  {
    icon: TbTextRecognition,
    title: 'Text Recognition',
    description: 'On-device OCR powered by Apple Vision. Search any document by the words inside—fast, private, no internet required.',
  },
  {
    icon: TbCloudUpload,
    title: 'iCloud Sync',
    description: 'Stores in your iCloud Drive. Syncs across iPhone and iPad. Your documents, your cloud, your control.',
  },
  {
    icon: TbInbox,
    title: 'Inbox Workflow',
    description: 'Scan now, organize later. Documents land in your Inbox for quick processing when you have time.',
  },
  {
    icon: TbShare,
    title: 'Searchable Export',
    description: 'Export PDFs with embedded text. Share via AirDrop, email, or save to Files. Your documents stay searchable everywhere.',
  },
  {
    icon: TbShieldCheck,
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
                  <feature.icon size={40} />
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
