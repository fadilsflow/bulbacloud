import { PricingHeader } from "@/app/(main)/_components/PricingHeader";
import ServicesPricingGrid from "@/components/ServicePricingGrid";
import { vpsDigitalOcean } from "@/data/vps-digital-ocean";
import DigitalOceanFaq from "../_components/digitalOceanFaq";

export default function Page() {
  return (
    <main className="bg-background w-full my-auto pt-8 sm:pt-12 md:pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "VPS Digital Ocean",
            description:
              "Nikmati performa tinggi dengan VPS Digital Ocean. High-performance SSD storage, scalable cloud infrastructure, dan global data centers.",
            image: "https://bulba.cloud/vps-digital-ocean.svg",
            sku: "VPS-DO-ID",
            mpn: "VPS001",
            brand: {
              "@type": "Brand",
              name: "Bulba Cloud",
            },
            offers: {
              "@type": "AggregateOffer",
              url: "https://bulba.cloud/vps-digital-ocean",
              priceCurrency: "IDR",
              lowPrice: "30000",
              highPrice: "45000",
              offerCount: "3",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "150",
            },
          }),
        }}
      />
      {/* Container untuk membatasi lebar konten */}
      <div className="mx-auto max-w-screen-xl px-10 sm:px-6 lg:px-36">
        {/* PricingHeader dengan margin bawah */}
        <PricingHeader
          title="VPS Digital Ocean"
          spec={[
            "High-Performance SSD Storage",
            "Scalable Cloud Infrastructure",
            "Global Data Centers",
          ]}
          price="30.000"
          period="/bulan"
          headerBadge="Performa Unggul"
          SubHeaderBadge="Scalable & Reliable"
          ctaText="Pilih Paket"
          ctaHref="#product"
          imageSrc="/vps-digital-ocean.svg"
          imageAlt="Digital Ocean VPS Illustration"
          className="mb-8"
        />

        <ServicesPricingGrid
          services={vpsDigitalOcean}
          titleServices="Pilih Paket VPS Digital Ocean"
          className="mt-8"
        />
      </div>
      <DigitalOceanFaq />
    </main>
  );
}
