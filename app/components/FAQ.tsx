import copy from "../content/copy.json";
import styles from "./FAQ.module.css";

export default function FAQ() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{copy.faqTitle}</h2>
        <dl className={styles.list}>
          {copy.faq.map((faq) => (
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
