"use client";

import { usePathname } from "next/navigation";
import { services } from "./_component/data";
import { ServiceBreadcrumb } from "./_component/ServiceBreadcrumb";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ServiceHeader } from "./_component/ServiceHeader";
import { ServiceCard } from "./_component/ServiceCard";
import { ServiceDetail } from "./_component/ServiceDetail";
import { ServiceTabs } from "./_component/ServiceTabs";
import { WhyChooseUs } from "./_component/WhyChooseUs";

interface ServicesLayoutProps {
  children: React.ReactNode;
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  const pathname = usePathname();
  const currentService =
    services.find((service) => service.href === pathname) || services[0];

  return (
    <div className="container mx-auto  py-8">
      <div className="mx-auto max-w-6xl space-y-5">
        <ServiceBreadcrumb currentService={currentService} />
        <ServiceHeader />
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-5 p-1">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isActive={pathname === service.href}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <ServiceDetail currentService={currentService}>
              <ServiceTabs currentService={currentService}>
                {children}
              </ServiceTabs>
            </ServiceDetail>
          </div>
          <div className="lg:col-span-1">
            <WhyChooseUs />
          </div>
        </div>
      </div>
    </div>
  );
}
