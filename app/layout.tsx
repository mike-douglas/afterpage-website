import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import PostHogProvider from "./components/PostHogProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://afterpage.app"),
  title: "Afterpage - Smart Document Organizer for iPhone & iPad",
  description: "The intelligent document archive that learns your patterns. Organize, search, and find anything instantly. Free to start. Download for iPhone and iPad.",
  keywords: ["document organizer", "document archive", "smart organization", "OCR", "text recognition", "document management", "iOS"],
  openGraph: {
    title: "Afterpage - Smart Document Organizer for iPhone & iPad",
    description: "The intelligent document archive that learns your patterns. Organize, search, and find anything instantly.",
    type: "website",
    url: "https://afterpage.app",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afterpage - Smart Document Organizer",
    description: "The intelligent document archive that learns your patterns. Smart organization for iPhone & iPad.",
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
        <PostHogProvider>
          <div className={styles.container}>
            {children}
          </div>
        </PostHogProvider>
      </body>
    </html>
  );
}
