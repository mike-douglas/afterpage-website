import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Afterpage - Document Scanner & Organization",
  description: "Transform document chaos into an organized, searchable archive. On-device AI that learns your patterns. Privacy-first document management for iOS.",
  keywords: ["document scanner", "iOS", "organization", "OCR", "document management", "iCloud"],
  openGraph: {
    title: "Afterpage - Document Scanner & Organization",
    description: "Transform document chaos into an organized, searchable archive using on-device AI that learns your patterns.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afterpage - Document Scanner & Organization",
    description: "Transform document chaos into an organized, searchable archive using on-device AI that learns your patterns.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <div className={styles.container}>
          {children}
        </div>
      </body>
    </html>
  );
}
