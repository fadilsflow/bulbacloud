import Excellence from "./_components/excellence";
import Hero from "./_components/Hero";

import { ProjectShowcase } from "./_components/showcase";
import WhatWeDo from "./_components/WhatsWeDo";
import { Workflow } from "./_components/workflow";

export default function Home() {
  return (
    <div>
      <Hero />
      <Excellence />
      <Workflow />
      <WhatWeDo />
      <ProjectShowcase />
    </div>
  );
}
