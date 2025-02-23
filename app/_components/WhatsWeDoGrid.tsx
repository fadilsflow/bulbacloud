import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";

const features = [
  {
    name: "Custom Websites",
    description:
      "Kami membuat website custom sesuai dengan kebutuhan bisnis Anda, dengan desain yang unik dan fungsionalitas yang handal.",
    href: "/custom-websites",
    cta: "Lihat lebih lanjut",
    background: (
      <Image
src="/batman.jpg"
        alt="Custom Websites"
        width={500}
        height={300}
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className:
      "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 text-left", // Tambahkan text-left di sini
  },
  {
    name: "Toko Online",
    description:
      "Bangun toko online yang powerful dan mudah dikelola, dilengkapi dengan fitur pembayaran dan manajemen produk yang lengkap.",
    href: "/toko-online",
    cta: "Lihat lebih lanjut",
    background: (
      <Image
src="/batman.jpg"
        alt="Toko Online"
        width={500}
        height={300}
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 text-left", // Tambahkan text-left di sini
  },
  {
    name: "Company Profile",
    description:
      "Tampilkan profil perusahaan Anda secara profesional dengan website yang informatif dan menarik.",
    href: "/company-profile",
    cta: "Lihat lebih lanjut",
    background: (
      <Image
src="/batman.jpg"
        alt="Company Profile"
        width={500}
        height={300}
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 text-left", // Tambahkan text-left di sini
  },
  {
    name: "Portfolio Website",
    description:
      "Pamerkan karya dan proyek Anda dengan website portfolio yang elegan dan responsif.",
    href: "/portfolio-website",
    cta: "Lihat lebih lanjut",
    background: (
      <Image
src="/batman.jpg"
        alt="Portfolio Website"
        width={500}
        height={300}
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className:
      "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 text-left", // Tambahkan text-left di sini
  },
  {
    name: "Landing Page",
    description:
      "Buat landing page yang menarik dan konversi tinggi untuk kampanye pemasaran Anda.",
    href: "/landing-page",
    cta: "Lihat lebih lanjut",
    background: (
      <Image
src="/batman.jpg"
        alt="Landing Page"
        width={500}
        height={300}
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className:
      "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 text-left", // Tambahkan text-left di sini
  },
];

export function WhatsWeDoGrid() {
  return (
    <BentoGrid className="lg:grid-rows-3">
    {features.map((feature) => (
      <BentoCard Icon={"symbol"} key={feature.name} {...feature} />
    ))}
  </BentoGrid>
  );
}
