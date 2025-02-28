import Hero from "./_components/Hero";
import MaintenancePage from "./_components/maintenance";
import Showcase from "./_components/showcase";
import WhatWeDo from "./_components/WhatsWeDo";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <Showcase />

      <MaintenancePage />
    </div>
  );
}
