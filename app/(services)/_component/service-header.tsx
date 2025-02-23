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
      <p className="text-muted-foreground mb-8">
        Layanan Website Development Terjangkau untuk Pertumbuhan Bisnis Anda.
      </p>

      {/* Daftar Layanan */}
      <div className="container mx-auto px-4">
        <div className="hidden md:flex flex-row justify-center items-center gap-2 lg:gap-8 border-b pb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = pathname === service.href;
            return (
              <Link key={index} href={service.href} className="flex-1 min-w-0">
                <div className="flex flex-col items-center justify-center text-center p-2 md:p-4 space-y-2 md:space-y-4 hover:scale-105 transition-transform duration-200">
                  <div
                    className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 border ${
                      isActive ? "bg-foreground" : "bg-muted"
                    } rounded-full`}
                  >
                    <Icon
                      className={`h-6 w-6 md:h-8 md:w-8 ${
                        isActive ? "text-background" : "text-white-500"
                      }`}
                    />
                  </div>
                  <p
                    className={`text-xs md:text-sm ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-foreground"
                    } text-center whitespace-pre-line`}
                  >
                    {service.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}


