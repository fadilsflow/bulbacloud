
"use client"

import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export interface WebsiteServices {
  id: number
  name: string
  desc: string
  pricestart: number
  priceNextYear: number
  specs: string[]
  href?: string
  badge?: string
}

export const WebsiteServicesProduct: WebsiteServices[] = [
  {
    id: 1,
    name: "Elite",
    desc: "Solusi cepat & efisien untuk Anda yang ingin mulai go digital tanpa ribet.",
    pricestart: 999000,
    priceNextYear: 70000,
    href: "/services/elite",
    badge: "BEST VALUE",
    specs: [
      "2+ Halaman Responsif",
      "Gratis Domain & Hosting Tahun Pertama",
      "Desain Modern & Mobile-Friendly",
      "Optimasi SEO Dasar",
      "Pengerjaan 5 Hari",
    ],
  },
  {
    id: 2,
    name: "Professional",
    desc: "Website eksklusif dengan desain premium untuk meningkatkan kredibilitas bisnis Anda.",
    pricestart: 5000000,
    priceNextYear: 140000,
    href: "/services/professional",
    badge: "BEST OFFER",
    specs: [
      "4+ Halaman Dinamis",
      "Gratis Domain & Hosting Tahun Pertama + Maintenance",
      "Desain Premium & Eksklusif (Custom)",
      "Optimasi SEO & Kecepatan Maksimal",
      "Integrasi WhatsApp & Formulir Kontak",
      "Pengerjaan 15 Hari",
    ],
  },
  {
    id: 3,
    name: "Advanced",
    desc: "Solusi khusus untuk bisnis yang membutuhkan fitur custom, mulai dari e-commerce hingga sistem web kompleks.",
    pricestart: 10000000,
    priceNextYear: 240000,
    href: "/services/advanced",
    badge: "CUSTOM APPS",
    specs: [
      "Fitur Full Custom Sesuai Kebutuhan",
      "Desain UI/UX Eksklusif",
      "Integrasi API & 3rd Party Services",
      "Sistem Manajemen Konten (CMS) Jika Dibutuhkan",
      "Keamanan & Performa Terjamin",
      "On-Demand Support & Maintenance",
    ],
  },
]

export default function PricingGrid({ services = WebsiteServicesProduct }: { services?: WebsiteServices[] }) {
  // Format currency to Indonesian Rupiah
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace("Rp", "")
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Pilih Paket Website Anda</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Kami menawarkan berbagai paket layanan website untuk memenuhi kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.id} href={service.href || "#"} className="block h-full">
              <Card
                className={cn(
                  "h-full flex flex-col relative rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-2xl overflow-hidden border-2 transition-all duration-300",
                  service.id === 2
                    ? "border-primary shadow-lg hover:shadow-xl"
                    : "border-border/40 shadow-md hover:shadow-lg hover:border-primary/50",
                )}
              >
                {/* Gradient Background */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-100 transition-opacity duration-300",
                    service.id === 1
                      ? "bg-gradient-to-br from-blue-50 via-blue-50/50 to-transparent"
                      : service.id === 2
                        ? "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"
                        : "bg-gradient-to-br from-purple-50 via-purple-50/50 to-transparent",
                  )}
                />

                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-0 right-0 mt-4 mr-4 z-20">
                    <Badge
                      className={cn(
                        "px-3 py-1 text-xs font-semibold uppercase tracking-wider shadow-sm",
                        service.id === 1
                          ? "bg-blue-500 hover:bg-blue-600"
                          : service.id === 2
                            ? "bg-primary hover:bg-primary/90"
                            : "bg-purple-600 hover:bg-purple-700",
                      )}
                    >
                      {service.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="relative z-10 pt-8 pb-4">
                  <CardTitle className="-ml-6 text-center text-xl font-bold text-primary-foreground bg-primary py-2.5 px-6 rounded-r-lg shadow-md">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-5 text-base">{service.desc}</CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 px-6 py-4 flex-grow">
                  <div className="mb-6">
                    <div className="text-lg font-medium text-primary">Mulai Dari</div>
                    <div className="text-3xl font-bold text-foreground mt-1">
                      Rp{formatCurrency(service.pricestart)}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Rp{formatCurrency(service.priceNextYear)}/tahun berikutnya
                    </div>
                  </div>

                  <div className="border-t border-border/60 pt-5 mb-4">
                    <h4 className="font-semibold text-base mb-3">Yang Anda Dapatkan:</h4>
                    <ul className="space-y-3">
                      {service.specs.map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <Check
                            className={cn(
                              "h-5 w-5 shrink-0 mr-2.5 mt-0.5",
                              service.id === 1
                                ? "text-blue-500"
                                : service.id === 2
                                  ? "text-primary"
                                  : "text-purple-600",
                            )}
                          />
                          <span className="text-sm text-foreground">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="relative z-10 px-6 py-6 mt-auto border-t border-border/30">
                  <Button
                    className={cn(
                      "w-full py-6 text-base font-medium shadow-md transition-all",
                      service.id === 1
                        ? "bg-blue-500 hover:bg-blue-600"
                        : service.id === 2
                          ? "bg-primary hover:bg-primary/90"
                          : "bg-purple-600 hover:bg-purple-700",
                    )}
                  >
                    Pilih Paket
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-8 text-center">* Harga belum termasuk pajak yang berlaku</p>
      </div>
    </section>
  )
}

