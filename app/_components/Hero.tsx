import { GridPattern } from "@/components/magicui/grid-pattern";

import { cn } from "@/lib/utils";

import OurSolutionsGrid from "./OurSolutionsGrid";
import { Badge } from "@/components/ui/badge";

import ContactDropdownMenu from "./ContactDropdownMenu";
import PaketDropdownMenu from "./PaketDropdownMenu";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative  mx-auto px-4 pt-8 sm:pt-12 md:pt-12 text-center"
    >
      {/* Background Grid Pattern */}

      <GridPattern
        width={80}
        height={80}
        x={-1}
        y={-1}
        strokeDasharray={"10  1"}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="flex items-center justify-center">
        <Badge variant="outline" className="mb-4 rounded-full bg-primary/20">
          <Badge variant="default" className="rounded-full mr-2 -ml-2">
            New
          </Badge>
          Our Website, Domain & VPS Hosting Solutions
        </Badge>
      </div>

      {/* Main Headline */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mt-4 text-foreground">
        Smart & Reliable Digital Solutions for Everyone
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-sm sm:text-lg max-w-2xl mx-auto text-muted-foreground">
        Solusi Website, Domain, dan VPS Hosting{" "}
        <span className="text-primary">terjangkau</span> untuk semua. Cepat,
        aman, dan modern dengan teknologi{" "}
        <span className="text-primary">terbaik</span> untuk bisnis, developer,
        dan individu.
      </p>

      {/* Call to Action Buttons */}
      <div className="mt-6 flex flex-row justify-center gap-3 sm:gap-4">
        {/* Call to Action Buttons */}
        <div className="mt-6 flex flex-row justify-center gap-3 sm:gap-4">
          <PaketDropdownMenu
            triggerLabel="Lihat Paket"
            triggerVariant="default"
          />
          <ContactDropdownMenu
            triggerLabel="Konsultasi"
            triggerVariant="outline"
          />
        </div>
      </div>
      <OurSolutionsGrid />
    </section>
  );
};

export default Hero;
