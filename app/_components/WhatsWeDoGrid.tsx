"use client";

import Link from "next/link";
import { Code, ShoppingCart, Building, Images, Landmark } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";

const features = [
  {
    name: "Custom Websites",
    description:
      "Kami membuat website custom sesuai dengan kebutuhan bisnis Anda, dengan desain yang unik dan fungsionalitas yang handal.",
    href: "/custom-websites",
    Icon: Code,
    className: "col-span-1", // Selalu 1 kolom
  },
  {
    name: "Toko Online",
    description:
      "Bangun toko online yang powerful dan mudah dikelola, dilengkapi dengan fitur pembayaran dan manajemen produk yang lengkap.",
    href: "/toko-online",
    Icon: ShoppingCart,
    className: "col-span-1", // Selalu 1 kolom
  },
  {
    name: "Company Profile",
    description:
      "Tampilkan profil perusahaan Anda secara profesional dengan website yang informatif dan menarik.",
    href: "/company-profile",
    Icon: Building,
    className: "col-span-1", // Selalu 1 kolom
  },
  {
    name: "Portfolio Website",
    description:
      "Pamerkan karya dan proyek Anda dengan website portfolio yang elegan dan responsif.",
    href: "/portfolio-website",
    Icon: Images,
    className: "col-span-1", // Selalu 1 kolom
    background: "/batman",
  },
  {
    name: "Landing Page",
    description:
      "Buat landing page yang menarik dan konversi tinggi untuk kampanye pemasaran Anda.",
    href: "/landing-page",
    Icon: Landmark,
    className: "col-span-1", // Selalu 1 kolom
  },
  {
    name: "Website Redesign",
    description:
      "Perbarui tampilan dan fungsionalitas website lama Anda agar lebih modern dan efisien.",
    href: "/website-redesign",
    Icon: Landmark,
    className: "col-span-1", // Selalu 1 kolom
  },
];

export function WhatsWeDoGrid() {
  const { theme } = useTheme();

  // Tentukan warna gradient berdasarkan tema
  const getGradientColor = () => {
    if (theme === "dark") {
      return "#262626"; // Warna untuk dark mode
    } else {
      return "#D9D9D955"; // Warna untuk light mode (dengan transparansi)
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Link
            key={index}
            href={feature.href}
            className="block transition-all duration-200 h-full"
          >
            <Card className="h-full border border-border hover:border-primary/50 hover:shadow-sm transition-all duration-200 cursor-pointer group">
              <MagicCard gradientColor={getGradientColor()}>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 rounded-md bg-primary/5 text-primary">
                    <feature.Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-medium">
                    {feature.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </MagicCard>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}