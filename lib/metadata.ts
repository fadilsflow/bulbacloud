import type { Metadata, Viewport } from "next";

// Fungsi helper untuk membuat metadata yang konsisten
export function createMetadata({
  title,
  description,
  path = "",
  ogImage = "/bulba.png",
  ogImageAlt = "Bulba Cloud",
  keywords = [],
  noIndex = false,
  locale = "id-ID",
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogImageAlt?: string;
  keywords?: string[];
  noIndex?: boolean;
  locale?: string;
  type?: "website" | "product";
}): Metadata {
  // Base URL
  const baseUrl = "https://bulba.cloud";
  const url = `${baseUrl}${path}`;

  // Default keywords untuk semua halaman
  const defaultKeywords = [
    "hosting indonesia",
    "vps",
    "domain murah",
    "web hosting",
  ];
  const combinedKeywords = [...defaultKeywords, ...keywords];

  return {
    title,
    description,
    keywords: combinedKeywords,

    // Pengaturan Robots
    robots: {
      index: !noIndex,
      follow: true,
      nocache: noIndex,
      googleBot: {
        index: !noIndex,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    // Canonical URL
    alternates: {
      canonical: url,
      languages: {
        "id-ID": url,
      },
    },

    // Open Graph
    openGraph: {
      title,
      description,
      url,
      siteName: "Bulba Cloud",
      locale,
      type: "website",
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`],
      creator: "@wahyuakhmadfad3",
      site: "@CloudBulba43704",
    },

    // Penulis dan Pemilik Konten
    authors: [{ name: "Bulba Cloud", url: baseUrl }],
    creator: "Nama Perusahaan Anda",
    publisher: "Bulba Cloud",

    // Verifikasi untuk search console dan webmaster tools
    verification: {
      google: "google-site-verification-code",
      yandex: "yandex-verification-code",
      yahoo: "yahoo-verification-code",
    },
  };
}

// Viewport metadata yang konsisten untuk responsive design
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};
