"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderMethodDialog } from "@/components/order-method-dialog";
import { cn } from "@/lib/utils";
import { useOrder } from "@/hooks/useOrder";

import { WebsiteServiceTypes } from "@/data/WebsiteServicesProduct";

interface ServicePricingGridProps {
  services: WebsiteServiceTypes[];
  className?: string;
  titleServices: string;
}

export default function WebsiteServicesPricingGrid({
  services,
  className,
  titleServices,
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
    <section
      id="product"
      className={cn("py-12 bg-background scroll-mt-20", className)}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-10 text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
          {titleServices}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className={cn(
                // Hilangkan h-full agar card menyesuaikan tinggi isi kontennya
                "flex flex-col rounded-lg border shadow-sm transition-all duration-300 hover:shadow-md relative overflow-hidden",
                service.featured
                  ? "border-primary bg-primary/10 shadow-lg"
                  : "border-border"
              )}
            >
              {/* Featured Tag - Centered at the top */}
              {service.badge && (
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <div className="px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase rounded-b-md">
                    {service.badge}
                  </div>
                </div>
              )}

              <CardHeader className="pt-8 pb-1 px-6 text-left">
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </CardHeader>

              <CardContent className="px-6 pb-6 flex-grow text-left">
                {/* Price and Discount */}
                <div className="mb-6">
                  <div className="text-2xl font-bold text-foreground">
                    <h1 className="text-muted-foreground text-sm pt-2 ">
                      Mulai dari
                    </h1>
                    <span className="text-base font-normal"> Rp</span>
                    {formatCurrency(service.pricestart)}
                  </div>
                </div>

                {/* Features List */}
                <div className="border-t border-border/40 pt-4 mb-4">
                  <ul className="space-y-3">
                    {service.specs.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-4 w-4 shrink-0 mr-2 mt-0.5 text-primary" />
                        <span className="text-sm text-foreground">{spec}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Additional Features */}
                  {service.allFeature && service.allFeature.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Informasi Tambahan
                      </h4>
                      <ul className="space-y-3">
                        {service.allFeature.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-4 w-4 shrink-0 mr-2 mt-0.5 text-primary" />
                            <span className="text-sm text-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Call to Action Button */}
                <Button
                  variant={service.featured ? "default" : "outline"}
                  className="w-full mt-4"
                  onClick={handleOrderClick(service)}
                >
                  Pilih Paket
                </Button>
              </CardContent>
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
