import styles from "./Links.module.css";

import Link from "next/link";

export default function Links() {
  return (
    <nav>
      <ul className={styles.links}>
        <li>
          <Link className={styles.link} href="mailto:support@shipkitapp.com">Support</Link>
        </li>
        <li>
          <Link className={styles.link} href="/privacy">Privacy Policy</Link>
        </li>
      </ul>
    </nav>
  )
}