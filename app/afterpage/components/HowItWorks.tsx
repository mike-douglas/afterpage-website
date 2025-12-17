import Image from 'next/image';
import styles from './HowItWorks.module.css';

interface Step {
  number: string;
  title: string;
  description: string;
  image?: string;
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Scan',
    description: 'Capture documents with your camera or import from anywhere - Files, Photos, or drag and drop.',
  },
  {
    number: '2',
    title: 'Organize',
    description: 'Add tags, types, and correspondents. Smart Organization learns your patterns and suggests classifications.',
    image: '/images/step-two-organize.png',
  },
  {
    number: '3',
    title: 'Find',
    description: 'Search the text inside any document instantly. Filter by tag, type, date, or correspondent.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>How it works</h2>
        <p className={styles.subtitle}>
          Three simple steps to transform your document chaos into an organized archive.
        </p>
      </div>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.stepNumber}>{step.number}</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
            {step.image ? (
              <div className={styles.screenshotContainer}>
                <Image
                  src={step.image}
                  alt={`${step.title} step screenshot`}
                  width={300}
                  height={400}
                  className={styles.screenshot}
                />
              </div>
            ) : (
              <div className={styles.screenshotPlaceholder}>
                <span className={styles.placeholderText}>Screenshot</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
