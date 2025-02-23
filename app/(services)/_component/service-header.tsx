"use client";
import {
  Code,
  ShoppingCart,
  Briefcase,
  Image,
  Layout,
  RefreshCw,
  Search,
  Settings,
  Terminal,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // Sesuaikan path dengan struktur proyek Anda

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Data layanan
const services = [
  { icon: Code, name: "Custom Websites", href: "/custom-websites" },
  { icon: ShoppingCart, name: "Toko Online", href: "/toko-online" },
  { icon: Briefcase, name: "Company Profile", href: "/company-profile" },
  { icon: Image, name: "Portfolio Website", href: "/portfolio-website" },
  { icon: Layout, name: "Landing Page", href: "/landing-page" },
  { icon: RefreshCw, name: "Website Redesign", href: "/website-redesign" },
  { icon: Search, name: "SEO Optimization", href: "/seo-optimization" },
  {
    icon: Settings,
    name: "Maintenance & Support",
    href: "/maintenance-support",
  },
  { icon: Terminal, name: "Custom Development", href: "/custom-development" },
];

export default function ServicesHeader() {
  const pathname = usePathname();

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      {/* Breadcrumb menggunakan shadcn */}
      <div className="flex justify-center w-full">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbList>Services</BreadcrumbList>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{pathname.replace("/", "")}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Judul */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
        Webtron Services
      </h1>

      {/* Deskripsi */}
      <p className="text-muted-foreground">
        Layanan Website Development Terjangkau untuk Pertumbuhan Bisnis Anda.
      </p>
      <Separator className="my-8" />

      {/* Daftar Layanan */}
      <div className="md:grid-cols-3 lg:grid-cols-4 gap-6 hidden md:flex">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isActive = pathname === service.href;
          return (
            <Link key={index} href={service.href}>
              <div className="flex flex-col items-center text-center p-4">
                <div
                  className={`flex items-center justify-center w-16 h-16 border ${
                    isActive ? "bg-foreground" : "bg-muted"
                  } rounded-full mb-4`}
                >
                  <Icon
                    className={`h-8 w-8 ${
                      isActive ? "text-background" : "text-white-500"
                    }`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    isActive ? "text-primary font-semibold" : "text-foreground"
                  } text-center break-words`}
                >
                  {service.name.replace(" ", "\n")}{" "}
                  {/* Memisahkan teks dengan newline */}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <Separator className="my-8 hidden" />
    </div>
  );
}
