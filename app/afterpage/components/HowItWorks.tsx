import Image from 'next/image';
import styles from './HowItWorks.module.css';

interface Step {
  number: string;
  title: string;
  description: string;
  screenshot: string;
  screenshotAlt: string;
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Import',
    description: 'Bring in documents from anywhere—scan with your camera, import from Photos or Files, or share from Mail. Multi-page support handles everything from single receipts to full contracts.',
    screenshot: '/images/screenshots/en-US-7-Step_1_Scan.png',
    screenshotAlt: 'Afterpage importing documents from multiple sources',
  },
  {
    number: '2',
    title: 'Organize',
    description: 'Quick triage in your Inbox. Add tags, set document types, and specify contacts. Smart Organization suggests where documents belong based on your patterns.',
    screenshot: '/images/screenshots/en-US-8-Step_2_Organize.png',
    screenshotAlt: 'Afterpage document organization interface',
  },
  {
    number: '3',
    title: 'Find',
    description: 'Search any document by the text inside or filter by tags, types, and contacts. Export searchable PDFs when you need to share.',
    screenshot: '/images/screenshots/en-US-9-Step_3_Find.png',
    screenshotAlt: 'Afterpage search results with highlighted text',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>
          From chaos to clarity in three steps
        </h2>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepText}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
              <div className={styles.screenshotContainer}>
                <Image
                  src={step.screenshot}
                  alt={step.screenshotAlt}
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
