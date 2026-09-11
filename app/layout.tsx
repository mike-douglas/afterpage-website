import type { Metadata } from "next";
import "./globals.css";
import PostHogProvider from "./components/PostHogProvider";
import copy from "./content/copy.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://afterpage.app"),
  title: copy.meta.title,
  description: copy.meta.description,
  keywords: copy.meta.keywords,
  openGraph: {
    title: copy.meta.openGraph.title,
    description: copy.meta.openGraph.description,
    type: "website",
    url: "https://afterpage.app",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: copy.meta.twitter.title,
    description: copy.meta.twitter.description,
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
