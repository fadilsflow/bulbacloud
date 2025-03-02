"use client";

import Link from "next/link";
import { Code, ShoppingCart, Building, Images, Landmark, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { motion } from "framer-motion"; // Import animasi dari Framer Motion

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
    Icon: RefreshCw,
    className: "col-span-1", // Selalu 1 kolom
  },
];

export function WhatsWeDoGrid() {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Link
            key={index}
            href={feature.href}
            className="block transition-all duration-200 h-full"
          >
            {/* Animasi Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden cursor-pointer group border bg-gradient-to-b from-background to-muted/50 border-accent hover:border-primary/30 transition-all duration-300 shadow-sm">
                {/* Border Beam Effect */}
                <BorderBeam
                  size={250}
                  duration={12}
                  delay={9}
                  colorFrom="var(--primary)"
                  colorTo="var(--primary)"
                />

                {/* Card Content */}
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <feature.Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-lg font-medium">
                    {feature.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-left text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
