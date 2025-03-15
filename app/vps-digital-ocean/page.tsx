import { PricingHeader } from "@/app/_components/PricingHeader";
import ServicesPricingGrid from "@/components/ServicePricingGrid";
import { vpsDigitalOcean } from "@/data/vps-digital-ocean";

export default function Page() {
  return (
    <main className="bg-background w-full my-auto pt-8 sm:pt-12 md:pt-12">
      {/* Container untuk membatasi lebar konten */}
      <div className="mx-auto max-w-screen-xl  px-10 sm:px-6 lg:px-36">
        {/* PricingHeader dengan margin bawah */}
        <PricingHeader
          title="VPS Digital Ocean"
          spec={[
            "Unlimited Player Slots",
            "Dedicated IP Address",
            "24/7 Server Monitoring",
          ]}
          price="45.000"
          period="/bulan"
          headerBadge="Server Uptime"
          SubHeaderBadge="99.9%"
          ctaText="Pilih Paket"
          ctaHref="#product"
          imageSrc="/vps-digital-ocean.svg"
          imageAlt="Valheim game server illustration"
          className="mb-8"
        />

        <ServicesPricingGrid
          services={vpsDigitalOcean}
          titleServices="Pilih Paket Minecraft Server Hosting"
          className="mt-8"
        />
      </div>
    </main>
  );
}
