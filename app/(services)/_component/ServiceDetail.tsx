"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Service } from "./data"; // Import tipe Service dari file data
import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

interface ServiceDetailProps {
  currentService: Service;
  children: ReactNode;
}

export function ServiceDetail({
  currentService,
  children,
}: ServiceDetailProps) {
  const Icon = currentService.icon;
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-full w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <CardTitle>{currentService.name}</CardTitle>
          </div>
          <Badge variant="outline" className="text-sm font-medium">
            {currentService.price}
          </Badge>
        </div>
        <CardDescription className="text-base mt-2">
          {currentService.description}
        </CardDescription>
      </CardHeader>
      {children}
      <CardFooter className="flex justify-between items-center py-6">
        <p className="text-sm text-muted-foreground">
          Estimasi waktu: 2-4 minggu
        </p>
        <Button size="lg" className="gap-2 rounded-full">
          {currentService.cta}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
