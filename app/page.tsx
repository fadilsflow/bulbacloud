import WebsiteServicesPricingGrid from "@/components/website-services-pricing-grid";
import Hero from "./_components/Hero";

import { WebsiteServicesProduct } from "@/data/WebsiteServicesProduct";
import ServicePricingGrid from "@/components/ServicePricingGrid";
import { vpsDigitalOceanProducts } from "@/data/vps-dogital-ocean";

export default function Home() {
  return (
    <div>
      <Hero />
      <WebsiteServicesPricingGrid services={WebsiteServicesProduct} />
      <ServicePricingGrid services={vpsDigitalOceanProducts}/>
    </div>
  );
}
