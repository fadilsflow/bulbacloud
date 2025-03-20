import { PricingHeader } from "@/app/(main)/_components/PricingHeader";
import ServicesPricingGrid from "@/components/ServicePricingGrid";
import { minecraftProduct } from "@/data/minecraft-hosting";
import MinecraftFaq from "../_components/minecraftFaq";
import { createMetadata, viewport } from "@/lib/metadata";

export const metadata = createMetadata({
  title:
    "Hosting Minecraft Server Terbaik - Main Makin Seru dengan Performa Tinggi",
  description:
    "Nikmati pengalaman bermain Minecraft yang lancar dengan hosting server khusus. Unlimited player slots, dedicated resources, dan NVMe SSD storage. Uptime 99.9% dan dukungan 24/7.",
  path: "/hosting-minecraft",
  ogImage: "/minecraft-cover.png",
  ogImageAlt: "Hosting Minecraft Server Terbaik",
  keywords: [
    "Hosting Minecraft",
    "Minecraft Server",
    "Server Minecraft Indonesia",
    "Unlimited Player Slots",
    "NVMe SSD Storage",
    "Dedicated Resources",
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
            name: "Hosting Minecraft Server Terbaik",
            description:
              "Nikmati pengalaman bermain Minecraft yang lancar dengan hosting server khusus. Unlimited player slots, dedicated resources, dan NVMe SSD storage. Uptime 99.9% dan dukungan 24/7.",
            image: "https://bulba.cloud/minecraft-cover.png",
            sku: "MC-HOSTING-ID",
            mpn: "MC001",
            brand: {
              "@type": "Brand",
              name: "Bulba Cloud",
            },
            offers: {
              "@type": "AggregateOffer",
              url: "https://bulba.cloud/hosting-minecraft",
              priceCurrency: "IDR",
              lowPrice: "40000",
              highPrice: "580000",
              offerCount: "6",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "200",
            },
          }),
        }}
      />
      {/* Container untuk membatasi lebar konten */}
      <div className="mx-auto max-w-screen-xl  px-10 sm:px-6 lg:px-36">
        {/* PricingHeader dengan margin bawah */}
        <PricingHeader
          title=" Main Makin Seru dengan Minecraft Server"
          spec={[
            "Unlimited Player Slots",
            "Dedicated Resources",
            "NVMe SSD Storage",
          ]}
          price="45.000"
          period="/bulan"
          headerBadge="Server Uptime"
          SubHeaderBadge="99.9%"
          ctaText="Pilih Paket"
          ctaHref="#product"
          imageSrc="/minecraft-cover.png"
          imageAlt="Valheim game server illustration"
          className="mb-8"
        />

        <ServicesPricingGrid
          services={minecraftProduct}
          titleServices="Pilih Paket Minecraft Server Hosting"
          className="mt-8"
        />
      </div>
      <MinecraftFaq />
    </main>
  );
}
