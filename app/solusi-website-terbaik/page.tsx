import WebsiteServicesPricingGrid from "@/components/website-services-pricing-grid";
import { PricingHeaderWebsite } from "../_components/PricingHeaderWebsite";
import { WebsiteServicesProduct } from "@/data/WebsiteServicesProduct";

// import ServicesPricingGrid from "@/components/ServicePricingGrid";
// import { websiteServices } from "@/data/website-services";

export default function Page() {
  return (
    <main className="bg-background w-full my-auto pt-8 sm:pt-12 md:pt-12">
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
          imageSrc="/vps-dedicated-indonesia.png"
          imageAlt="Ilustrasi website modern"
          className="mb-8"
        />

        {/* <ServicesPricingGrid
          services={websiteServices}
          titleServices="Pilih Paket Layanan Website"
          className="mt-8"
        /> */}
        <WebsiteServicesPricingGrid
          titleServices="Pilih Paket Website Terbaik Untuk Bisnis Anda"
          services={WebsiteServicesProduct}
        />
      </div>
    </main>
  );
}
