// components/service-pricing-grid.tsx
"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OrderMethodDialog } from "@/components/order-method-dialog";
import { cn } from "@/lib/utils";
import { useOrder } from "@/hooks/useOrder";
import { ServiceTypes } from "@/types/services-types";

interface ServicePricingGridProps {
  services: ServiceTypes[];
  className?: string;
}

export default function ServicePricingGrid({
  services,
  className,
}: ServicePricingGridProps) {
  const { dialogOpen, setDialogOpen, handleOrderClick, orderOptions } =
    useOrder();

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

  return (
    <section className={cn("py-8 bg-background", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Card
              key={service.id}
              className={cn(
                "h-full flex flex-col relative rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-2xl overflow-hidden border-2 transition-all duration-300",
                service.featured
                  ? "border-primary shadow-lg hover:shadow-xl"
                  : "border-border/40 shadow-md hover:shadow-lg hover:border-primary/50"
              )}
              style={{ maxWidth: "450px" }} // Atur lebar maksimal card
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent opacity-100 transition-opacity duratiaon-300" />

              {service.badge && (
                <div className="absolute top-0 right-0 mt-2 mr-2 z-20">
                  <Badge
                    variant={service.featured ? "default" : "secondary"}
                    className="px-2 py-1  text-xs font-semibold uppercase tracking-wider shadow-sm"
                  >
                    {service.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="relative z-10 pt-4 pb-2 px-3 sm:pt-6 sm:pb-3 sm:px-4">
                <CardTitle className="-ml-4  sm:-ml-4 text-center text-base sm:text-lg font-bold text-primary-foreground bg-primary py-1 px-3  shadow-md">
                  {service.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10 px-3 py-2 sm:px-4 sm:py-3 flex-grow">
                <div className="mb-3 sm:mb-4">
                  <div className="text-xl sm:text-2xl font-bold text-foreground mt-1">
                    Rp{formatCurrency(service.price)}*
                    <span className="text-sm ">/{service.times}</span>
                  </div>
                </div>

                <div className="border-t border-border/60 pt-3 sm:pt-4 mb-2 sm:mb-3">
                  <h4 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">
                    Yang Anda Dapatkan:
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.specs.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 shrink-0 mr-1 sm:mr-2 mt-0.5 text-primary" />
                        <span className="text-xs sm:text-sm text-foreground">
                          {spec}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="relative z-10 px-3 py-3 sm:px-4 sm:py-4 mt-auto border-t border-border/30">
                <Button
                  variant={service.featured ? "default" : "outline"}
                  className="w-full py-2 sm:py-3 text-xs sm:text-sm font-medium shadow-md transition-all"
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
