import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omnileads.shop"),
  title: "Omni Leads LLC — À La Carte Marketing Services",
  description:
    "Pick the marketing services you need. SEO, Google My Business, content writing, press releases, citations & more. À la carte pricing — pay only for what you use. (801) 898-7022.",
  keywords: [
    "SEO services Utah",
    "Google My Business optimization",
    "content writing services",
    "digital marketing à la carte",
    "Omni Leads LLC",
  ],
  openGraph: {
    type: "website",
    siteName: "Omni Leads LLC",
    title: "Omni Leads LLC — À La Carte Marketing Services",
    description: "Pick the marketing services you need. Pay only for what you use. SEO, GMB, content, citations & more.",
    url: "https://omnileads.shop",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omni Leads LLC — À La Carte Marketing",
    description: "Pick the marketing services you need. Pay only for what you use.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://omnileads.shop" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">Skip to content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Omni Leads LLC",
              url: "https://omnileads.shop",
              telephone: "+18018987022",
              address: {
                "@type": "PostalAddress",
                streetAddress: "307 W 200 S #5002-118",
                addressLocality: "Salt Lake City",
                addressRegion: "UT",
                postalCode: "84101",
                addressCountry: "US",
              },
              description: "À la carte digital marketing services — SEO, Google My Business, content writing, press releases, and directory citations.",
              sameAs: ["https://omnileadsllc.com"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
