import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-background py-12">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 rounded-full bg-primary/20">
            <Badge variant="default" className="rounded-full mr-2 -ml-2">
              New
            </Badge>
            Our Services
          </Badge>
          <h2 className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-4xl">
            Layanan Terbaik untuk Kebutuhan Digital Anda
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl mt-4 mx-auto">
            Dari website hingga VPS, kami menyediakan solusi terbaik untuk
            membantu bisnis Anda berkembang pesat.
          </p>
        </div>

        {/* Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          {/* Card 1 - Full width */}
          <Card className="md:col-span-12 bg-primary/10 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2">
                <Badge
                  variant="outline"
                  className="mb-2 bg-primary/20 text-primary rounded-full w-fit"
                >
                  Pengembangan Website
                </Badge>
                <h3 className="text-3xl md:text-4xl font-normal mb-2">
                  Ubah ide jadi nyata
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Punya ide luar biasa? Kami siap mewujudkannya menjadi website
                  profesional yang siap digunakan.
                </p>
                <Button variant="link" className="p-0 justify-start w-fit">
                  Jadikan Website Impian Anda Nyata! &gt;
                </Button>
              </div>
              <div className="md:w-1/2 relative h-full min-h-64">
                <Image
                  src="/website.png"
                  alt="Logo Bulba"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Card>

          {/* Card 2 - Half width */}
          <Card className="md:col-span-6 bg-primary/10">
            <Link href="/" className="block p-6 md:p-8">
              <Badge
                variant="outline"
                className="mb-2 bg-primary/20 text-primary rounded-full w-fit"
              >
                Hosting
              </Badge>
              <h3 className="text-3xl md:text-4xl font-normal mb-2">
                Hosting Apapun
              </h3>
              <p className="mb-4 text-muted-foreground">
                Performa website yang cepat, aman, dan andal untuk
                mengoptimalkan bisnis Anda.
              </p>
            </Link>
          </Card>

          {/* Card 3 - Half width */}
          <Card className="md:col-span-6 bg-primary/10">
            <Link href="/" className="block p-6 md:p-8">
              <Badge
                variant="outline"
                className="mb-2 bg-primary/20 text-primary rounded-full w-fit"
              >
                domainkamu.online
              </Badge>
              <h3 className="text-3xl md:text-4xl font-normal mb-2">
                Temukan Domain Terbaik untuk Bisnis Anda
              </h3>
              <p className="mb-4 text-muted-foreground">
                Dapatkan nama domain yang unik dan profesional untuk kehadiran
                online Anda.
              </p>
            </Link>
          </Card>

          {/* Card 4 - Full width */}
          <Card className="md:col-span-12 bg-primary/10 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2">
                <Badge
                  variant="outline"
                  className="mb-2 bg-primary/20 text-primary rounded-full w-fit"
                >
                  VPS
                </Badge>
                <h3 className="text-3xl md:text-4xl font-normal mb-2">
                  VPS Hosting untuk Anda
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Solusi VPS yang dapat diskalakan dan berperforma tinggi
                  disesuaikan dengan kebutuhan Anda.
                </p>
                <Button variant="link" className="p-0 justify-start w-fit">
                  Pelajari Lebih Lanjut &gt;
                </Button>
              </div>
              <div className="md:w-1/2 relative h-full min-h-64">
                <Image
                  src="/vps-dedicated-indonesia.svg"
                  alt="Logo Bulba"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Card>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-lg border bg-card/50 p-4 text-sm mt-5">
          <Cpu className="h-4 w-4 text-primary" />
          <p className="text-muted-foreground">
            All servers powered by high-performance hardware with NVMe storage
          </p>
        </div>
      </div>
    </section>
  );
}
