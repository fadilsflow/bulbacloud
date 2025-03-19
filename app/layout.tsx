import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "./_components/Footer";

import type { Metadata, Viewport } from "next";
import { WEBSITE_URL } from "@/data/data";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bulba.cloud"),
  title: {
    template: "%s | Bulba Cloud",
    default: "Bulba Cloud - Web Hosting & Domain Terbaik di Indonesia",
  },
  description:
    "Penyedia layanan web hosting, domain, VPS, dan solusi website terpercaya di Indonesia dengan dukungan teknis 24/7.",
  applicationName: "Bulba Cloud",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id-ID" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bulba Cloud",
              alternateName: "Bulba",
              url: WEBSITE_URL,
              image: "https://bulba.cloud/bubla.png",
              sameAs: [
                "https://github.com/fadilsflow",
                "https://linkedin.com/in/wahyu-akhmad-fadillah",
                "https://twitter.com/wahyuakhmadfad3",
                "https://instagram.com/bulba.cloud",
              ],
              potentialAction: {
                "@type": "SearchAction",
                target: `${WEBSITE_URL}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
