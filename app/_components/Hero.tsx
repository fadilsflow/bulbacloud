import { GridPattern } from "@/components/magicui/grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import OurSolutionsGrid from "./OurSolutionsGrid";
import { AvatarCircles } from "@/components/magicui/avatar-circles";

const Hero = () => {
  const avatars = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59228569",
      profileUrl: "https://github.com/safethecode",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59442788",
      profileUrl: "https://github.com/sanjay-mali",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/89768406",
      profileUrl: "https://github.com/itsarghyadas",
    },
  ];
  return (
    <section className="min-h-screen relative  mx-auto px-4 pt-8 sm:pt-12 md:pt-12 text-center">
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
        <div
          className={cn(
            "rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary shadow-sm transition-all duration-300 ease-in-out hover:bg-primary/20 hover:shadow-md dark:bg-primary/20 dark:text-primary-foreground"
          )}
        >
          <span>🚀 Bangun Website & Infrastruktur Digital Anda</span>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mt-4 text-foreground">
        Simple & Reliable Digital Solutions
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-sm sm:text-lg max-w-2xl mx-auto text-muted-foreground">
        Solusi website, hosting, dan VPS{" "}
        <span className="text-primary">terjangkau</span> untuk bisnis dan
        individu. Buat website cepat, aman, dan modern dengan teknologi{" "}
        <span className="text-primary">terbaik</span>. 🚀
      </p>

      {/* Call to Action Buttons */}
      <div className="mt-6 flex flex-row justify-center gap-3 sm:gap-4">
        <Button
          variant="default"
          size="sm" // Ubah size ke sm untuk mobile
          className="inline-flex items-center gap-2 rounded-full bg-button-metallic text-primary-foreground hover:bg-button-metallic-hover transition-all duration-300 text-sm sm:text-base"
          asChild
        >
          <Link href="/konsultasi">Order via WhatsApp</Link>
        </Button>
        <Button
          variant="outline"
          size="sm" // Ubah size ke sm untuk mobile
          className="inline-flex items-center gap-2 rounded-full border-primary hover:text-primary text-primary  hover:bg-primary/20 hover:border-primary/20 text-sm sm:text-base"
          asChild
        >
          <Link href="/layanan">Order via Discord</Link>
        </Button>
      </div>
      <OurSolutionsGrid />
      <AvatarCircles numPeople={99} avatarUrls={avatars} />
    </section>
  );
};

export default Hero;
