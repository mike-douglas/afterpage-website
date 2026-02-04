'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Where are my documents stored?',
    answer: 'In your iCloud Drive or locally on your device—your choice during setup. All processing happens on-device using Apple\'s Vision framework.',
  },
  {
    question: 'What makes Afterpage different from other document apps?',
    answer: 'Most apps stop at capture. Afterpage focuses on organization-first with Smart Organization that learns your patterns, making every document instantly findable.',
  },
  {
    question: 'Can I try before upgrading?',
    answer: 'Yes! The free tier includes 20 archived documents, scanning, Text Recognition, and full search. Upgrade when you\'re ready for unlimited documents and Smart Organization.',
  },
  {
    question: 'Does it work on iPad?',
    answer: 'Yes! Afterpage syncs across iPhone and iPad through iCloud.',
  },
  {
    question: 'How does Smart Organization learn?',
    answer: 'As you organize documents, Afterpage learns your patterns using on-device AI. The more you use it, the better its suggestions become—all without sending data to the cloud.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>Questions?</h2>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  className={`${styles.chevron} ${openIndex === index ? styles.chevronOpen : ''}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div
                className={`${styles.answer} ${openIndex === index ? styles.answerOpen : ''}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.footer}>
          Have another question? Email us at{' '}
          <a href="mailto:support@afterpage.app" className={styles.link}>
            support@afterpage.app
          </a>
        </p>
      </div>
    </section>
  );
}
