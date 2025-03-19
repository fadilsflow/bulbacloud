import { PricingHeader } from "@/app/(main)/_components/PricingHeader";
import DomainPricingGrid from "@/components/domain-services-pricing-grid";
import { DomainProduct } from "@/data/domain";
import DomainFaq from "../_components/domainFaq";
import { createMetadata, viewport } from "@/lib/metadata";

export const metadata = createMetadata({
  title:
    "Domain Murah dengan Setup Cloudflare - Harga Terjangkau & Performa Tinggi",
  description:
    "Dapatkan domain premium dengan harga terjangkau dan integrasi otomatis ke Cloudflare. Siap pakai, aman, dan didukung performa tinggi. Daftar sekarang dan dapatkan 1 akun Google baru gratis!",
  path: "/domain-murah",
  ogImage: "/domain.png",
  ogImageAlt: "Domain Murah dengan Integrasi Cloudflare",
  keywords: [
    "Domain Murah",
    "Domain Premium",
    "Domain Indonesia",
    "Setup Cloudflare",
    "Harga Domain Terjangkau",
    "Domain Siap Pakai",
  ],
  type: "product",
});

export { viewport };
export default function DomainMurahPage() {
  return (
    <main className="bg-background w-full my-auto pt-8 sm:pt-12 md:pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Domain Murah dengan Setup Cloudflare",
            description:
              "Dapatkan domain premium dengan harga terjangkau dan integrasi otomatis ke Cloudflare. Siap pakai, aman, dan didukung performa tinggi. Daftar sekarang dan dapatkan 1 akun Google baru gratis!",
            image: "https://bulba.cloud/domain.png",
            sku: "DOMAIN-MURAH-ID",
            mpn: "DOMAIN001",
            brand: {
              "@type": "Brand",
              name: "Nama Perusahaan Anda",
            },
            offers: {
              "@type": "AggregateOffer",
              url: "https://bulba.cloud/domain-murah",
              priceCurrency: "IDR",
              lowPrice: "15000",
              highPrice: "150000",
              offerCount: "5",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.7",
              reviewCount: "120",
            },
          }),
        }}
      />

      {/* Container untuk membatasi lebar konten */}
      <div className="mx-auto max-w-screen-xl px-10 sm:px-6 lg:px-36">
        <PricingHeader
          title="Domain Premium dengan Setup Cloudflare"
          spec={[
            "Domain Siap Pakai",
            "Integrasi Otomatis ke Cloudflare",
            "1 Akun Google Baru Gratis",
          ]}
          price="15.000"
          period="/tahun pertama"
          headerBadge="Terlaris"
          SubHeaderBadge="Mudah & Aman"
          ctaText="Daftar Sekarang"
          ctaHref="#product"
          imageSrc="/domain.png"
          imageAlt="Ilustrasi domain dengan Cloudflare"
          className="mb-8"
        />

        <DomainPricingGrid
          services={DomainProduct}
          className="mt-8"
          titleServices="Selalu ada pilihan nama domain terbaik. Daftarkan sekarang juga!

"
        />
        <DomainFaq />
      </div>
    </main>
  );
}
