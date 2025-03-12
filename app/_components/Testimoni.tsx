import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

import Link from "next/link";
import { TestimoniMarque } from "./TestimoniMarque";

export default function Testimoni() {
  return (
    <section
      id="features"
      className="w-full flex items-center justify-center pt-12 md:pt-24 lg:pt-32 bg-background relative"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-5">
            <Badge
              variant="outline"
              className="mb-2 bg-primary/20 text-primary rounded-full"
            >
              Our Customers
            </Badge>
            <h2 className="text-3xl font-normal tracking-tighter md:text-4xl">
              Join the community
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Temukan pengalaman mereka menggunakan layanan Bulba Cloud
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://chat.whatsapp.com/E8r7E45ZRd4DfnNvaovDZN"
                target="_blank"
                className={buttonVariants({
                  variant: "outline",
                  className: "gap-2 rounded-full",
                })}
              >
                Whatsapp Community
                <MessageCircle className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                target="_blank"
                className={buttonVariants({
                  variant: "outline",
                  className: "gap-2 rounded-full",
                })}
              >
                Discord Community
                <MessageCircle className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonial Marquee */}
        <div className="mx-auto max-w-full py-12">
          <TestimoniMarque />
        </div>
      </div>
    </section>
  );
}
