import { PricingHeader } from "@/app/_components/PricingHeader";
import ServicesPricingGrid from "@/components/ServicePricingGrid";
import { vpsDedicatedIndonesia } from "@/data/vps-dedicated-indonesia";

export default function Page() {
  return (
    <main className="bg-background w-full my-auto pt-8 sm:pt-12 md:pt-12">
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
    </main>
  );
}
