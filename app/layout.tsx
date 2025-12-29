import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://afterpage.app"),
  title: "Afterpage - Document Scanner & Organization",
  description: "Transform document chaos into an organized, searchable archive. On-device AI that learns your patterns. Privacy-first document management for iOS.",
  keywords: ["document scanner", "iOS", "organization", "OCR", "document management", "iCloud"],
  openGraph: {
    title: "Afterpage - Document Scanner & Organization",
    description: "Transform document chaos into an organized, searchable archive using on-device AI that learns your patterns.",
    type: "website",
    images: ["/images/og-image.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Afterpage - Document Scanner & Organization",
    description: "Transform document chaos into an organized, searchable archive using on-device AI that learns your patterns.",
    images: ["/images/og-image.png"]
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FAFAF9" />
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
