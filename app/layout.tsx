import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";

import MeshGradient from "./components/MeshGradient";
import Links from "./components/Links";

export const metadata: Metadata = {
  title: "ShipKit - World Package Tracker",
  description: "Keep track of all of your packages in one place.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="FFF4E9" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <MeshGradient />
        <div className={styles.container}>
        <Links />
        {children}
        </div>
      </body>
    </html>
  );
}