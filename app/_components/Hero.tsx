import { GridPattern } from "@/components/magicui/grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import TechnologiesWeUse from "./stack";

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
            "rounded-full border border-neutral-200 bg-white px-2 py-1 text-xs font-medium text-neutral-800 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
          )}
        >
          <span>🚀 Solusi Website Terbaik</span>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl  sm:text-5xl md:text-6xl font-semibold mt-4">
        Wujudkan Website
      </h1>
      <h1 className="text-4xl  sm:text-5xl md:text-6xl font-semibold mt-4">
        Impian Anda!
      </h1>

      {/* Subheading */}
      <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-muted-foreground">
        Layanan Website Development{" "}
        <span className="text-foreground">
          Terjangkau untuk Pertumbuhan Bisnis Anda.{" "}
        </span>{" "}
        Wujudkan website profesional untuk berbagai kebutuhan dengan desain{" "}
        <span className="text-foreground">
          tampilan, fitur dan teknologi website yang paling up-to-date! 🚀
        </span>
      </p>

      {/* Call to Action Button */}
      <div className="mt-8">
        <Button
          variant="default"
          size="lg"
          className="inline-flex items-center gap-2 rounded-full"
          asChild
        >
          <Link
            href="/konsultasi"
            className="inline-flex items-center gap-2 mb-5"
          >
            Mulai Proyek Anda Sekarang!
            <ArrowRightIcon className="ml-2 size-4" />
          </Link>
        </Button>
        <div className="mt-4">
          <TechnologiesWeUse />
        </div>
      </div>
    </section>
  );
};

export default Hero;
