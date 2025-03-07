import { GridPattern } from "@/components/magicui/grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen relative mx-auto px-4 pt-12 sm:pt-12 md:pt-12 text-center">
      {/* Background Grid Pattern */}
      <GridPattern
        width={80}
        height={50}
        x={-1}
        y={-1}
        strokeDasharray={"10 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="flex items-center justify-center">
        <div
          className={cn(
            "rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm font-medium text-neutral-800 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
          )}
        >
          <span>🚀 Bangun Website & Infrastruktur Digital Anda</span>
        </div>
      </div>

{/* Main Headline */}
      <h1 className="text-4xl  sm:text-5xl md:text-6xl font-semibold mt-4">
 Simple & Reliable 
      </h1>
      <h1 className="text-4xl  sm:text-5xl md:text-6xl font-semibold mt-4">
Digital Solutions
      </h1>

      {/* Subheading */}
      <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-muted-foreground">
        Solusi website, hosting, dan VPS <span className="text-foreground">terjangkau</span> untuk bisnis dan individu.  
        Buat website cepat, aman, dan modern dengan teknologi <span className="text-foreground">terbaik</span>. 🚀  
      </p>

      {/* Call to Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Button
          variant="default"
          size="lg"
          className="inline-flex items-center gap-2 rounded-full"
          asChild
        >
          <Link href="/konsultasi">
Order via WhatsApp
          </Link>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="inline-flex items-center gap-2 rounded-full"
          asChild
        >
          <Link href="/layanan">
Order via Discord
          </Link>
        </Button>
      </div>
    </section>

  );
};

export default Hero;
