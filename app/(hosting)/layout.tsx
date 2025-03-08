"use client";

import { usePathname } from "next/navigation";
import { hostingServices } from "./_component/ServicesData";
import { ServiceBreadcrumb } from "./_component/ServiceBreadcrumb";
import { ServiceHeader } from "./_component/ServiceHeader";
import NavbarService from "./_component/navbar-services";

interface ServicesLayoutProps {
  children: React.ReactNode;
  currrentService: string;
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  return (
    <>
      <div className=" space-y-5">
        <NavbarService services={hostingServices} />

        {/* <div className="lg:col-span-2">
          <ServiceDetail currentService={currentService}>
            <ServiceTabs currentService={currentService}>
              {children}
            </ServiceTabs>
          </ServiceDetail>
        </div> */}
        <div>{children}</div>
      </div>
    </>
  );
}
