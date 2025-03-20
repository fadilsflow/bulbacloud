"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OrderMethodDialog } from "@/components/order-method-dialog";
import { cn } from "@/lib/utils";
import type { WebsiteServices } from "@/types/website-services";

interface PricingGridProps {
  title?: string;
  description?: string;
  services: WebsiteServices[];
  footnote?: string;
  className?: string;
}

export default function WebServicesPricingGrid({
  services,

  className,
}: PricingGridProps) {
  const [selectedService, setSelectedService] =
    useState<WebsiteServices | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Format currency to Indonesian Rupiah
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace("Rp", "");
  };

  const handleOrderClick = (service: WebsiteServices) => () => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  const orderOptions = [
    {
      title: "Melalui Form Order",
      description: "Dengan sistem yang mudah & otomatis",
      image: "/bulba.svg",
      action: () => {
        // Navigate to form order page
        window.location.href = selectedService?.href
          ? `${selectedService.href}/form`
          : "/order/form";
      },
    },
    {
      title: "Melalui WhatsApp",
      description: "Untuk konsultasi & informasi penawaran",
      image: "/bulba.svg",
      action: () => {
        // Open WhatsApp with pre-filled message
        const message = `Halo, saya tertarik dengan paket ${selectedService?.name}. Boleh info lebih lanjut?`;
        window.open(
          `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      },
    },
  ];

  return (
    <section className={cn("py-16 bg-background", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className={cn(
                "h-full flex flex-col  relative rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-2xl overflow-hidden border-2 transition-all duration-300 ",
                service.featured
                  ? "border-primary shadow-lg hover:shadow-xl"
                  : "border-border/40 shadow-md hover:shadow-lg hover:border-primary/50"
              )}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent opacity-100 transition-opacity duration-300" />

              {/* Badge */}
              {service.badge && (
                <div className="absolute top-0 right-0 mt-4 mr-4 z-20">
                  <Badge
                    variant={service.featured ? "default" : "secondary"}
                    className="px-3 py-1 text-xs font-semibold uppercase tracking-wider shadow-sm"
                  >
                    {service.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="relative z-10 pt-6 pb-3 px-4 sm:pt-8 sm:pb-4 sm:px-6">
                <CardTitle className="-ml-4 sm:-ml-6 text-center text-lg sm:text-xl font-bold text-primary-foreground bg-primary py-2 px-4 rounded-r-lg shadow-md">
                  {service.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-4 text-sm sm:text-base">
                  {service.desc}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 px-4 py-3 sm:px-6 sm:py-4 flex-grow">
                <div className="mb-4 sm:mb-6">
                  <div className="text-base sm:text-lg font-medium text-primary">
                    Mulai Dari
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
                    Rp{formatCurrency(service.pricestart)}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Rp{formatCurrency(service.priceNextYear)}/tahun berikutnya
                  </div>
                </div>

                <div className="border-t border-border/60 pt-4 sm:pt-5 mb-3 sm:mb-4">
                  <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                    Yang Anda Dapatkan:
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.specs.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 mr-2 sm:mr-2.5 mt-0.5 text-primary" />
                        <span className="text-xs sm:text-sm text-foreground">
                          {spec}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="relative z-10 px-4 py-4 sm:px-6 sm:py-6 mt-auto border-t border-border/30">
                <Button
                  variant={service.featured ? "default" : "outline"}
                  className="w-full py-4 sm:py-6 text-sm sm:text-base font-medium shadow-md transition-all"
                  onClick={handleOrderClick(service)}
                >
                  Pilih Paket
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <OrderMethodDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        options={orderOptions}
      />
    </section>
  );
}
