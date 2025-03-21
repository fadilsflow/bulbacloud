import { WEBSITE_URL } from "@/data/data";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import MainFaq from "./_components/mainFaq";

import ServicesSection from "./_components/Services";
import { createMetadata, viewport } from "@/lib/metadata";
import Script from "next/script";

export const metadata = createMetadata({
  title: "Bulba Cloud - Layanan Hosting & Domain Terpercaya di Indonesia",
  description:
    "Penyedia layanan hosting terbaik di Indonesia dengan uptime 99.9%, domain murah, VPS performa tinggi, dan solusi website untuk semua kebutuhan bisnis Anda.",
  path: "/",
  keywords: [
    "vps hosting",
    "cloud hosting",
    "minecraft hosting",
    "jasa pembuatan website",
    "domain murah",
    "vps digital ocean",
  ],
});

export { viewport };

export default function Home() {
  return (
    <div>
      <Script
        id="schema-personal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: "Bulba Cloud",
              alternateName: "Bulba",
              description:
                "Penyedia layanan hosting terbaik di Indonesia dengan uptime 99.9%, domain murah, VPS performa tinggi, dan solusi website untuk semua kebutuhan bisnis Anda.",
              image: `${WEBSITE_URL}/bulba.png`,
              jobTitle: "Fullstack Web Developer",
              url: WEBSITE_URL,
              sameAs: [
                "https://github.com/fadilsflow",
                "https://linkedin.com/in/wahyu-akhmad-fadillah",
                "https://twitter.com/wahyuakhmadfad3",
                "https://instagram.com/bulba.cloud",
              ],
              knowsAbout: [
                "vps hosting",
                "cloud hosting",
                "minecraft hosting",
                "jasa pembuatan website",
                "domain murah",
                "vps digital ocean",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            },
          }),
        }}
      />
      <Hero />
      <Features />
      <ServicesSection />
      <MainFaq />
    </div>
  );
}
