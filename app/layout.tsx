import type { Metadata } from "next";
import "./globals.css";
import PostHogProvider from "./components/PostHogProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://afterpage.app"),
  title: "Afterpage — Keep everything important in one place",
  description:
    "Afterpage is a home for the documents you don't want to lose. Scan, import, or share things in, and find them again instantly. Free to start, no account needed.",
  keywords: [
    "document organizer",
    "document archive",
    "OCR",
    "text recognition",
    "document management",
    "iOS",
  ],
  openGraph: {
    title: "Afterpage — Keep everything important in one place",
    description:
      "Afterpage is a home for the documents you don't want to lose. Scan, import, or share things in, and find them again instantly.",
    type: "website",
    url: "https://afterpage.app",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afterpage — Keep everything important in one place",
    description:
      "Afterpage is a home for the documents you don't want to lose. Free to start, no account needed.",
    images: ["/images/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Afterpage",
  applicationCategory: "BusinessApplication",
  operatingSystem: "iOS, iPadOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
