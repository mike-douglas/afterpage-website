import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "Do I need to create an account?",
    answer:
      "No. Afterpage identifies you through the iCloud account already signed into your device, the same way Files or Photos does. There's no sign-in screen anywhere in the app.",
  },
  {
    question: "Where do my documents actually live?",
    answer:
      "In your own iCloud Drive. Afterpage doesn't run a server that stores your documents, and there's nothing shared or public about your library.",
  },
  {
    question: "Does Afterpage use AI to read my documents?",
    answer:
      "It uses on-device Apple Intelligence to suggest a cleaner title after a document comes in, turning \"Scan_0043\" into something like \"Comcast Bill – March 2026.\" It doesn't file or tag anything for you, and it only runs on devices where Apple Intelligence is available.",
  },
  {
    question: "What's the difference between Free and Pro?",
    answer:
      "Scanning, OCR, full-text search, and iCloud sync are free without limits. Pro adds custom icons and background images for your tags and categories, plus new personalization features as they roll out.",
  },
  {
    question: "What devices does it work on?",
    answer:
      "iPhone and iPad, kept in sync through your iCloud account.",
  },
];

export default function FAQ() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Questions</h2>
        <dl className={styles.list}>
          {faqs.map((faq) => (
            <div className={styles.item} key={faq.question}>
              <dt className={styles.question}>{faq.question}</dt>
              <dd className={styles.answer}>{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
