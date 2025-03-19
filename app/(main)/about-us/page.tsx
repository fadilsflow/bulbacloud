import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Shield, Zap, Clock, CheckCircle } from "lucide-react";
import OurSolutionsGrid from "../_components/OurSolutionsGrid";
import Link from "next/link";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import ContactDropdownMenu from "../_components/ContactDropdownMenu";

import { createMetadata, viewport } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tentang Kami - Bulba Cloud",
  description:
    "Kenali lebih dekat Bulba Cloud! Kami menyediakan solusi hosting, domain, dan server terbaik dengan dukungan teknologi terkini dan tim profesional yang siap membantu bisnis Anda.",
  path: "/about-us",
  ogImage: "/bulba.png",
  ogImageAlt: "Tentang Kami - Bulba Cloud",
  keywords: [
    "Tentang Kami",
    "About Us",
    "Bulba Cloud",
    "Layanan Hosting",
    "Layanan Domain",
    "Tim Profesional",
    "Solusi Server Terbaik",
  ],
});

export { viewport };
export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
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
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Solusi Website, Domain, dan VPS Hosting terjangkau dan terbaik
                untuk Anda
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Dapatkan Website, Domain, dan VPS Hosting dengan harga
                terjangkau. Cepat, aman, dan didukung oleh teknologi terbaik
                untuk bisnis, developer, dan individu.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="default">Mulai Sekarang</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link
                      href="https://wa.me/yourwhatsappnumber"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="https://discord.gg/kdE5QC4t"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Discord
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-[400px]:w-auto"
                asChild
              >
                <Link href={"/#pricing"}>Lihat Paket</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Badge
                  variant="outline"
                  className="mb-4 rounded-full bg-primary/20"
                >
                  Misi Kami
                </Badge>
              </div>
              <h2 className="text-3xl font-normal tracking-tighter md:text-4xl">
                Menyediakan Layanan Hosting Terjangkau dan Berkualitas
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Kami berkomitmen untuk menyediakan solusi hosting yang cepat,
                aman, dan modern dengan harga terjangkau. Baik Anda seorang
                developer, pemilik bisnis, atau individu, kami memiliki solusi
                yang tepat untuk Anda.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/bulba.svg"
                alt="Bulba Cloud Mission"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" relative  mx-auto  w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Badge
                  variant="outline"
                  className="mb-4 rounded-full bg-primary/20"
                >
                  <Badge variant="default" className="rounded-full mr-2 -ml-2">
                    New
                  </Badge>
                  Our Services
                </Badge>
              </div>
              <h2 className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
                Layanan Kami
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Temukan solusi hosting yang tepat untuk kebutuhan Anda
              </p>
              <div></div>
            </div>
          </div>
        </div>
        <OurSolutionsGrid />
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-backround">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge
                variant="outline"
                className="mb-4 rounded-full bg-primary/20"
              >
                Why Chose Us
              </Badge>
              <h2 className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
                Mengapa Memilih Kami?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Kami menawarkan layanan terbaik dengan keunggulan yang tidak
                dimiliki yang lain
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Cepat",
                description: "Performa tinggi dengan server terbaik",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Aman",
                description: "Keamanan tingkat tinggi untuk data Anda",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "24/7 Support",
                description: "Dukungan teknis setiap saat",
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Terpercaya",
                description: "Uptime 99.9% dijamin",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center space-y-2 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-normal">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12   md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge
                variant="default"
                className="mb-4 rounded-full bg-primary/20"
              >
                Letsgoooo
              </Badge>
              <h2 className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
                Siap Untuk Memulai?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Dapatkan solusi hosting terbaik untuk kebutuhan Anda. Mulai dari
                Rp 50.000/bulan.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <ContactDropdownMenu
                triggerLabel="Mulai Sekarang"
                triggerVariant="default"
              />
              <Button
                size="lg"
                variant="outline"
                className="w-full min-[400px]:w-auto"
                asChild
              >
                <Link href={"/#pricing"}>Lihat Paket</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
