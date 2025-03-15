"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderMethodDialog } from "@/components/order-method-dialog";
import { cn } from "@/lib/utils";
import { useOrder } from "@/hooks/useOrder";
import { DomainServiceTypes } from "@/data/domain";

interface DomainPricingGridProps {
  services: DomainServiceTypes[];
  className?: string;
  titleServices: string;
}

function getDomainColor(name: string): string {
  // Menetapkan warna berdasarkan ekstensi domain
  switch (name.toLowerCase()) {
    case ".com":
      return "text-blue-500";
    case ".net":
      return "text-green-500";
    case ".org":
      return "text-orange-500";
    case ".id":
      return "text-red-500";
    default:
      return "text-primary";
  }
}

export default function DomainPricingGrid({
  services,
  className,
  titleServices,
}: DomainPricingGridProps) {
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
                "flex flex-col rounded-lg border shadow-sm transition-all duration-300 hover:shadow-md relative overflow-hidden",
                service.featureed
                  ? "border-primary bg-primary/10 shadow-lg"
                  : "border-border"
              )}
            >
              {/* Badge jika ada */}
              {service.badge && (
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <div className="px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase rounded-b-md">
                    {service.badge}
                  </div>
                </div>
              )}

              <CardHeader className="pt-8 pb-1 px-6 text-center">
                <CardTitle
                  className={cn(
                    "text-4xl font-bold",
                    getDomainColor(service.name)
                  )}
                >
                  {service.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-6 pb-6 flex-grow text-center">
                <div className="mt-3">
                  <div className="text-2xl font-bold text-foreground">
                    <span className="text-base font-normal"> Rp</span>
                    {formatCurrency(service.price)}
                  </div>
                </div>

                <Button
                  variant={service.featureed ? "default" : "outline"}
                  className="w-full mt-4"
                  onClick={() => handleOrderClick(service)}
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
