import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

/* ─── Company & site config (main source of truth) ─── */

export const CANONICAL_SITE_URL = "https://www.ghlco.in";

export function getSiteUrl(): string {
  if (process.env.VERCEL_ENV === "production") return CANONICAL_SITE_URL;
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return CANONICAL_SITE_URL;
}

export const COMPANY = {
  name: "GHL | Gali High Living",
  shortName: "Gali High Living",
  legalName: "GHL Builders & Developers",
  description:
    "Premium real estate builders and developers in Bengaluru. Luxury apartments, villas, and commercial landmarks crafted with uncompromising quality.",
  locale: "en_IN",
  email: "contact@ghlco.in",
  phone: "+919606037011",
  address: {
    street: "Site No: 4C-414, Falcon Ritz, OMBR Layout, Banaswadi",
    city: "Bengaluru",
    region: "Karnataka",
    postalCode: "560043",
    country: "IN",
  },
  social: {
    instagram: "https://www.instagram.com/gali.highliving/",
  },
} as const;

const KEYWORDS = [
  "Gali High Living",
  "GHL Builders",
  "luxury apartments Bengaluru",
  "premium real estate Bangalore",
  "real estate developers India",
  "Falcon Ritz Banaswadi",
  "GHL projects",
];

const GOOGLE_VERIFICATION =
  process.env.GOOGLE_SITE_VERIFICATION ??
  "GtYGjdcDMpnxLIlZgeEBM8v2Z3Beh8QDhsZR95sc0Os";

/* ─── Fonts ─── */

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

/* ─── SEO metadata (Next.js reads this from layout) ─── */

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: COMPANY.name,
    template: `%s | ${COMPANY.shortName}`,
  },
  description: COMPANY.description,
  keywords: KEYWORDS,
  authors: [{ name: COMPANY.legalName, url: siteUrl }],
  creator: COMPANY.legalName,
  publisher: COMPANY.legalName,
  category: "Real Estate",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: COMPANY.locale,
    url: siteUrl,
    siteName: COMPANY.name,
    title: COMPANY.name,
    description: COMPANY.description,
    images: [
      {
        url: `${siteUrl}/mainhero.png`,
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY.name,
    description: COMPANY.description,
    images: [`${siteUrl}/mainhero.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
  verification: { google: GOOGLE_VERIFICATION },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
};

/* ─── Structured data (JSON-LD) ─── */

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: COMPANY.legalName,
  alternateName: COMPANY.shortName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/mainhero.png`,
  description: COMPANY.description,
  email: COMPANY.email,
  telephone: COMPANY.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.region,
    postalCode: COMPANY.address.postalCode,
    addressCountry: COMPANY.address.country,
  },
  sameAs: [COMPANY.social.instagram],
  areaServed: { "@type": "City", name: "Bengaluru" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY.name,
  url: siteUrl,
  description: COMPANY.description,
  publisher: {
    "@type": "Organization",
    name: COMPANY.legalName,
    logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
  },
};

/* ─── Root layout ─── */

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${instrumentSans.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
