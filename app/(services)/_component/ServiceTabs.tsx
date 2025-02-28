"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import { Service } from "./data"; // Import tipe Service dari file data
import { ReactNode } from "react";

interface ServiceTabsProps {
  currentService: Service;
  children: ReactNode;
}

export function ServiceTabs({ currentService, children }: ServiceTabsProps) {
  return (
    <Tabs defaultValue="overview" className="px-6">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="features">Portofolio</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="py-4">
        {children}
      </TabsContent>
      <TabsContent value="Portofolio" className="py-4">
        <h3 className="font-medium mb-4">Fitur Utama:</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {currentService.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                <ChevronRight className="h-3 w-3 text-primary" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </TabsContent>
    </Tabs>
  );
}
