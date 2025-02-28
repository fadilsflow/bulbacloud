"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Service } from "./data"; // Import tipe Service dari file data

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
}

export function ServiceCard({ service, isActive }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <Link href={service.href} passHref>
      <Card
        className={cn(
          "w-40 lg:w-44 flex-shrink-0 transition-all duration-200 cursor-pointer hover:shadow-md border",
          isActive
            ? "border-primary bg-primary/5"
            : "hover:border-primary/20"
        )}
      >
        <CardHeader className="p-4 pb-2 text-center">
          <div
            className={cn(
              "mx-auto rounded-full w-12 h-12 flex items-center justify-center mb-2",
              isActive
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}
          >
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-sm">{service.name}</CardTitle>
        </CardHeader>
        {service.badge && (
          <div className="px-4 pb-2">
            <Badge
              variant={service.badge === "Promo" ? "destructive" : "default"}
              className="w-full"
            >
              {service.badge}
            </Badge>
          </div>
        )}
      </Card>
    </Link>
  );
}