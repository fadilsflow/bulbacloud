import { PricingHeader } from "@/app/_components/PricingHeader";
import ServicesPricingGrid from "@/components/ServicePricingGrid";
import { vpsDedicatedIndonesia } from "@/data/vps-dedicated-indonesia";

export default function Page() {
  return (
    <main className="bg-background w-full my-auto pt-8 sm:pt-12 md:pt-12">
      {/* Container untuk membatasi lebar konten */}
      <div className="mx-auto max-w-screen-xl  px-10 sm:px-6 lg:px-36">
        {/* PricingHeader dengan margin bawah */}
        <PricingHeader
          title="VPS Terkuat di Indonesia dengan harga Murah"
          spec={[
            "Unlimited Player Slots",
            "Dedicated IP Address",
            "24/7 Server Monitoring",
          ]}
          price="80.000"
          period="/bulan"
          headerBadge="Server Uptime"
          SubHeaderBadge="99.9%"
          ctaText="Pilih Paket"
          ctaHref="#minecraft-product"
          imageSrc="/minecraft-cover.png"
          imageAlt="Valheim game server illustration"
          className="mb-8"
        />

        <ServicesPricingGrid
          services={vpsDedicatedIndonesia}
          titleServices="Pilih Paket Minecraft Server Hosting"
          className="mt-8"
        />
      </div>
    </main>
  );
}
