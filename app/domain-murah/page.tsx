import { PricingHeader } from "@/app/_components/PricingHeader";
import DomainPricingGrid from "@/components/domain-services-pricing-grid";
import { DomainProduct } from "@/data/domain";

export default function Page() {
  return (
    <main className="bg-background w-full my-auto pt-8 sm:pt-12 md:pt-12">
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
      </div>
    </main>
  );
}
