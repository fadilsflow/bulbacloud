import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingHeaderProps {
  title: string;
  spec: string[];
  price: string;
  period: string;
  headerBadge: string;
  SubHeaderBadge: string;
  serverName: string;
  serverSpec: string;
  serverUptime: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export function PricingHeader({
  title,
  spec,
  price,
  period,
  headerBadge,
  SubHeaderBadge,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
  className,
}: PricingHeaderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-background text-foreground",
        className
      )}
    >
      <div className="grid gap-6 md:grid-cols-2 md:items-center md:gap-8">
        {/* Bagian Kiri: Konten Teks */}
        <div className="flex flex-col gap-4">
          <div className="space-y-4">
            {/* Badge */}
            <Badge variant="outline" className="rounded-full bg-primary/20">
              <Badge variant="default" className="rounded-full mr-2 -ml-2">
                {SubHeaderBadge}
              </Badge>
              {headerBadge}
            </Badge>

            {/* Judul */}
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl max-w-[80%] break-words">
              {title}
            </h1>

            {/* Daftar Fitur */}
            <ul className="space-y-2">
              {spec.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> {/* Ikon Check */}
                  <span className="text-base text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Harga */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-1">
              <span className="text-lg text-muted-foreground">Rp</span>
              <span className="text-3xl font-semibold sm:text-4xl md:text-5xl">
                {price}
              </span>
              <span className="text-lg text-muted-foreground">{period}</span>
            </div>
          </div>

          {/* Tombol CTA */}
          <div>
            <Button asChild className="px-6">
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
        </div>

        {/* Bagian Kanan: Gambar */}
        <div className="relative">
          <Image
            src={imageSrc || "/bulba.svg"}
            alt={imageAlt}
            width={500} // Mengurangi ukuran gambar
            height={500} // Mengurangi ukuran gambar
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
