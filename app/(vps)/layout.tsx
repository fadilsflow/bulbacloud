"use client";

import NavbarService from "../(hosting)/_component/navbar-services";
import { vpsServices } from "../(hosting)/_component/ServicesData";

interface ServicesLayoutProps {
  children: React.ReactNode;
  currrentService: string;
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  return (
    <>
      <div className=" space-y-5">
        <NavbarService services={vpsServices} />

        <div>{children}</div>
      </div>
    </>
  );
}
