import type { Metadata } from "next";
import {
  CANONICAL_SITE_URL,
  COMPANY,
  DEFAULT_KEYWORDS,
  getSiteUrl,
} from "@/lib/company";

export { CANONICAL_SITE_URL, getSiteUrl };

export const SITE = COMPANY;

const defaultKeywords = DEFAULT_KEYWORDS;

export const PROJECTS = {
  falcon: {
    path: "/falcon",
    name: "Falcon Ritz",
    title: "Falcon Ritz | Luxury Apartments in Banaswadi, Bengaluru",
    description:
      "Falcon Ritz by GHL — premium luxury residences in OMBR Layout, Banaswadi, Bengaluru. Explore floor plans, amenities, and availability.",
    image: "/falcon.jpeg",
    location: "OMBR Layout, Banaswadi, Bengaluru",
  },
  skylark: {
    path: "/skylark",
    name: "Sky Lark",
    title: "Sky Lark Residences | GHL Bengaluru",
    description:
      "Sky Lark by Gali High Living — architectural residences where design purity meets tranquility in Bengaluru.",
    image: "/skylark.jpeg",
    location: "Bengaluru, Karnataka",
  },
  datta: {
    path: "/datta",
    name: "Datta",
    title: "Datta Independent House | GHL Bengaluru",
    description:
      "Datta — a bespoke independent villa by GHL featuring modern elevation, premium finishes, and architectural lighting.",
    image: "/ghldatta.jpeg",
    location: "Bengaluru, Karnataka",
  },
  vivana: {
    path: "/vivana",
    name: "Vivana",
    title: "Vivana HRBR Layout | GHL Bengaluru",
    description:
      "Vivana at HRBR Layout — contemporary living spaces designed by Gali High Living in Bengaluru.",
    image: "/vivana.jpeg",
    location: "HRBR Layout, Bengaluru",
  },
  "gk-senate": {
    path: "/gk-senate",
    name: "GK Senate",
    title: "GK Senate | Commercial Project by GHL",
    description:
      "GK Senate — a commercial landmark development by GHL Builders & Developers in Bengaluru.",
    image: "/gk.jpg",
    location: "Bengaluru, Karnataka",
  },
  "vajra-avant": {
    path: "/vajra-avant",
    name: "Vajra Avant",
    title: "Vajra Avant Kondapur | GHL Bengaluru",
    description:
      "Vajra Avant in Kondapur — premium residences by Gali High Living with modern architecture and luxury amenities.",
    image: "/avant.jpeg",
    location: "Kondapur, Bengaluru",
  },
} as const;

export type ProjectSlug = keyof typeof PROJECTS;

export const ALL_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  ...Object.values(PROJECTS).map((project) => ({
    path: project.path,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
];

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = "/mainhero.png",
  keywords = defaultKeywords,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: path === "/" ? "website" : "article",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
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
  };
}

export function projectMetadata(slug: ProjectSlug): Metadata {
  const project = PROJECTS[slug];
  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: project.path,
    image: project.image,
    keywords: [
      project.name,
      "GHL",
      "Gali High Living",
      project.location,
      "luxury real estate Bengaluru",
    ],
  });
}

export function organizationJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE.legalName,
    alternateName: SITE.shortName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/mainhero.png`,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    sameAs: [SITE.social.instagram],
    areaServed: {
      "@type": "City",
      name: "Bengaluru",
    },
  };
}

export function websiteJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: siteUrl,
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: SITE.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
  };
}

export function projectJsonLd(slug: ProjectSlug) {
  const siteUrl = getSiteUrl();
  const project = PROJECTS[slug];
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: project.name,
    description: project.description,
    url: `${siteUrl}${project.path}`,
    image: `${siteUrl}${project.image}`,
    provider: {
      "@type": "RealEstateAgent",
      name: SITE.legalName,
      url: siteUrl,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: project.location,
      addressCountry: "IN",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
