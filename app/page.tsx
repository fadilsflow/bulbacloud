// import WebsiteServicesPricingGrid from "@/components/website-services-pricing-grid";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import { PricingSection } from "./_components/Pricing";
import ServicesSection from "./_components/Services";
import Testimoni from "./_components/TestimoniHeader";

// import { WebsiteServicesProduct } from "@/data/WebsiteServicesProduct";
// import ServicePricingGrid from "@/components/ServicePricingGrid";
// import { vpsDigitalOceanProducts } from "@/data/vps-dogital-ocean";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <WebsiteServicesPricingGrid services={WebsiteServicesProduct} /> */}
      {/* <ServicePricingGrid services={vpsDigitalOceanProducts}/> */}
      {/* <WhatWeDo/>
       */}
      <Features />
      <ServicesSection />
      <PricingSection />
      <Testimoni />
    </div>
  );
}
