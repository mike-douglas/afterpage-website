import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
        <div className={styles.logo}>
          <Image src="/images/logo.png"
                fill
                objectFit="contain"
                alt="ShipKit Logo"/>
        </div>
        <h1 className={styles.title}>
          ShipKit 2
        </h1>
    </div>
  )
}