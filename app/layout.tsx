import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://afterpage.app"),
  title: "Afterpage - Smart Document Scanner for iPhone & iPad",
  description: "Transform document chaos into an organized, searchable archive. Smart organization that learns your patterns. Free to start. Download for iPhone, iPad, and Mac.",
  keywords: ["document scanner", "PDF scanner", "iOS scanner", "receipt scanner", "smart organization", "OCR", "text recognition"],
  openGraph: {
    title: "Afterpage - Smart Document Scanner for iPhone & iPad",
    description: "Transform document chaos into an organized, searchable archive. Smart organization that learns your patterns.",
    type: "website",
    url: "https://afterpage.app",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afterpage - Smart Document Scanner",
    description: "Transform document chaos into clarity. Smart organization for iPhone & iPad.",
    images: ["/images/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Afterpage",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "iOS, iPadOS",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FF6B6B" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className={styles.skipLink}>
          Skip to content
        </a>
        <div className={styles.container}>
          {children}
        </div>
      </body>
    </html>
  );
}
