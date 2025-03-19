import { PricingHeader } from "@/app/(main)/_components/PricingHeader";
import ServicesPricingGrid from "@/components/ServicePricingGrid";
import { vpsDedicatedIndonesia } from "@/data/vps-dedicated-indonesia";
import VpsFaq from "../_components/vpsFaq";
import { createMetadata, viewport } from "@/lib/metadata";
export const metadata = createMetadata({
  title: "VPS Dedicated Indonesia - Performa Tinggi dengan Harga Terjangkau",
  description:
    "Layanan VPS Dedicated Indonesia dengan performa tinggi, SSD NVMe, jaminan uptime 99.9%, keamanan terbaik, dan dukungan teknis 24/7. Ideal untuk aplikasi bisnis dengan trafik tinggi.",
  path: "/vps-dedicated-indonesia",
  ogImage: "/vps-dedicated-indonesia.svg",
  ogImageAlt: "VPS Dedicated Indonesia dengan Performa Tinggi",
  keywords: [
    "VPS Indonesia",
    "Dedicated Server",
    "Cloud VPS",
    "Virtual Private Server",
    "SSD NVMe",
  ],
  type: "product",
});

export { viewport };

export default function Page() {
  return (
    <main className="bg-background w-full my-auto pt-8 sm:pt-12 md:pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "VPS Dedicated Indonesia",
            description:
              "Layanan VPS Dedicated Indonesia dengan performa tinggi dan dukungan 24/7.",
            image: "https://bulba.cloud/vps-dedicated-indonesia.svg",
            sku: "VPS-DED-ID",
            mpn: "VPS001",
            brand: {
              "@type": "Brand",
              name: "Nama Perusahaan Anda",
            },
            offers: {
              "@type": "AggregateOffer",
              url: "https://bulba.cloud/vps-dedicated-indonesia",
              priceCurrency: "IDR",
              lowPrice: "100000",
              highPrice: "1000000",
              offerCount: "5",
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
        <PricingHeader
          title="VPS Terkuat di Indonesia dengan Harga Terjangkau"
          spec={[
            "Dedicated Resources",
            "NVMe SSD Storage",
            "Prosesor AMD EPYC",
          ]}
          price="50.000"
          period="/bulan"
          headerBadge="Performa Unggul"
          SubHeaderBadge="Terpercaya & Stabil"
          ctaText="Pilih Paket"
          ctaHref="#product"
          imageSrc="/vps-dedicated-indonesia.svg"
          imageAlt="VPS Dedicated Indonesia"
          className="mb-8"
        />

        <ServicesPricingGrid
          services={vpsDedicatedIndonesia}
          titleServices="Pilih Paket VPS Dedicated Indonesia"
          className="mt-8"
        />
      </div>
      <VpsFaq />
    </main>
  );
}
