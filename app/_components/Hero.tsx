import { GridPattern } from "@/components/magicui/grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import OurSolutionsGrid from "./OurSolutionsGrid";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative  mx-auto px-4 pt-8 sm:pt-12 md:pt-12 text-center">
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
        {/* <div
          className={cn(
            "rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary shadow-sm transition-all duration-300 ease-in-out hover:bg-primary/20 hover:shadow-md dark:bg-primary/20 dark:text-primary-foreground"
          )}
        >
          <span>🚀 Bangun Website & Infrastruktur Digital Anda</span>
        </div> */}
        <Badge variant="outline" className="mb-4 rounded-full bg-primary/20">
          <Badge variant="default" className="rounded-full mr-2 -ml-2">
            New
          </Badge>
          Our Website, Hosting & VPS Solutions
        </Badge>
      </div>

      {/* Main Headline */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mt-4 text-foreground">
        Smart & Reliable Digital Solutions for Everyone
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-sm sm:text-lg max-w-2xl mx-auto text-muted-foreground">
        Solusi website, hosting, dan VPS{" "}
        <span className="text-primary">terjangkau</span> untuk semua. Cepat,
        aman, dan modern dengan teknologi{" "}
        <span className="text-primary">terbaik</span> untuk bisnis, developer,
        dan individu.
      </p>

      {/* Call to Action Buttons */}
      <div className="mt-6 flex flex-row justify-center gap-3 sm:gap-4">
        {/* Call to Action Buttons */}
        <div className="mt-6 flex flex-row justify-center gap-3 sm:gap-4">
          <Button
            variant="default"
            className="inline-flex shadow-xl items-center gap-2  text-primary-foreground  transition-all duration-300 text-sm sm:text-base"
            asChild
          >
            <Link href="/konsultasi">Get Started</Link>
          </Button>
          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="shadow-xl inline-flex items-center gap-2 text-sm hover:border-border/80 hover:bg-background hover:text-foreground sm:text-base"
        >
          Consultation
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="https://discord.gg/yourdiscordlink" target="_blank" rel="noopener noreferrer">
            Discord
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>
      </div>
      <OurSolutionsGrid />
    </section>
  );
};

export default Hero;
