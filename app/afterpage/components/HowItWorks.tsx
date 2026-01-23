import styles from './HowItWorks.module.css';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Scan',
    description: 'Capture documents with your camera or import from Photos, Files, or Mail. Multi-page support handles everything from single receipts to full contracts.',
  },
  {
    number: '2',
    title: 'Organize',
    description: 'Quick triage in your Inbox. Add tags, set document types, and specify contacts. Smart Organization suggests where documents belong based on your patterns.',
  },
  {
    number: '3',
    title: 'Find',
    description: 'Search any document by the text inside or filter by tags, types, and contacts. Export searchable PDFs when you need to share.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>
          From chaos to clarity in three steps
        </h2>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
