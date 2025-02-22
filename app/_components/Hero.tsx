import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen relative mx-auto px-4 pt-12 sm:pt-12 md:pt-32 text-center border-b">
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

      {/* Animated Shiny Text */}
      <div className=" flex items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Solusi Website Terbaik</span>
          </AnimatedShinyText>
        </div>
      </div>
      {/* Main Headline */}
      <h1 className="text-6xl font-bold mt-4">Wujudkan Website Impian Anda!</h1>

      {/* Subheading */}
      <p className="mt-6 text-xl max-w-2xl mx-auto text-muted-foreground">
      Wujudkan website profesional untuk berbagai kebutuhan dengan desain tampilan, fitur dan teknologi website yang paling up-to-date! 🚀
      </p>

      {/* Call to Action Button */}
      <div className="mt-8">
        <Button
          variant="default"
          size="lg"
          className="inline-flex items-center gap-2 rounded-full"
          asChild
        >
          <Link href="/konsultasi" className="inline-flex items-center gap-2">
            Mulai Proyek Anda Sekarang!
            <ArrowRightIcon className="ml-2 size-4" />
          </Link>
        </Button>
      </div>

    </section>
  );
};

export default Hero;
