import WebsiteServicesPricingGrid from "@/components/website-services-pricing-grid";
import { PricingHeaderWebsite } from "../_components/PricingHeaderWebsite";
import { WebsiteServicesProduct } from "@/data/WebsiteServicesProduct";
import WebsiteFaq from "../_components/websiteFaq";

import { createMetadata, viewport } from "@/lib/metadata";

export const metadata = createMetadata({
  title:
    "Solusi Website Profesional untuk Bisnis Anda - Harga Terjangkau & Desain Modern",
  description:
    "Tingkatkan citra bisnis Anda dengan website profesional. Dibuat oleh developer berpengalaman, desain responsif & modern, gratis domain + server. Harga mulai dari 900 ribuan.",
  path: "/solusi-website-terbaik",
  ogImage: "/website.png",
  ogImageAlt: "Solusi Website Profesional untuk Bisnis",
  keywords: [
    "Jasa Pembuatan Website",
    "Website Profesional",
    "Desain Website Modern",
    "Website Bisnis",
    "Harga Website Terjangkau",
    "Gratis Domain dan Server",
  ],
  type: "product",
});

export { viewport };
export default function Page() {
  return (
    <main className="bg-background w-full my-auto pt-8 sm:pt-12 md:pt-12">
      {/* Skrip schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Solusi Website Profesional",
            description:
              "Tingkatkan citra bisnis Anda dengan website profesional. Dibuat oleh developer berpengalaman, desain responsif & modern, gratis domain + server. Harga mulai dari 900 ribuan.",
            image: "https://bulba.cloud/website.png",
            sku: "WEB-PROF-ID",
            mpn: "WEB001",
            brand: {
              "@type": "Brand",
              name: "Bulba Cloud",
            },
            offers: {
              "@type": "AggregateOffer",
              url: "https://bulba.cloud/solusi-website-terbaik",
              priceCurrency: "IDR",
              lowPrice: "999000",
              highPrice: "10000000",
              offerCount: "3",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "147",
            },
          }),
        }}
      />
      {/* Container untuk membatasi lebar konten */}
      <div className="mx-auto max-w-screen-xl px-10 sm:px-6 lg:px-36">
        {/* PricingHeader dengan margin bawah */}
        <PricingHeaderWebsite
          title="Solusi Website Terbaik Untuk Bisnis Anda"
          spec={[
            "Teknologi Terbaru & Terbaik",
            "Dibuat oleh Developer Berpengalaman",
            "Desain Responsif & Modern",
            "Gratis Domain + Server",
          ]}
          price="999"
          description="Tingkatkan citra & kepercayaan bisnismu dengan website desain
              profesional harga mulai dari 900 ribuan"
          period="/paket"
          headerBadge="Kualitas Terjamin"
          SubHeaderBadge="Professional & Cepat"
          ctaText="Pilih Paket"
          ctaHref="#product"
          imageSrc="/website.png"
          imageAlt="modern website"
          className="mb-8"
        />

        <WebsiteServicesPricingGrid
          titleServices="Pilih Paket Website Terbaik Untuk Bisnis Anda"
          services={WebsiteServicesProduct}
        />
        <WebsiteFaq />
      </div>
    </main>
  );
}
