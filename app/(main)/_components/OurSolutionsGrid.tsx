import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { ServicesProducts } from "@/data/services";
import { Check, ChevronRight } from "lucide-react"; // Asumsi menggunakan lucide-react untuk ikon centang

import { Button } from "@/components/ui/button";

export default function OurSolutionsGrid() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        {/* Grid container with horizontal scrolling on mobile */}
        <div className="flex overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible">
          {ServicesProducts.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    id: number;
    href: string;
    name: string;
    specs: string[]; // Array of features
    priceStart: number;
    bgColor: string; // Warna latar belakang card
  };
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={service.href} passHref>
      <Card
        className={`min-w-full w-[290px]  group relative overflow-hidden transition-shadow duration-300 h-full backdrop-blur-sm rounded-none ${service.bgColor}`}
      >
        <CardHeader className="relative z-10 p-6">
          <CardTitle className="text-left text-primary text-xl font-semibold ">
            {service.name}
          </CardTitle>
          <CardDescription className=" w-full text-left text-muted-foreground mt-2">
            {/* Daftar fitur dengan ikon centang */}
            <ul className="space-y-2">
              {service.specs.map((spec, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-4 w-4 shrink-0 mr-2 mt-0.5 text-primary" />
                  <span className="text-sm text-foreground">{spec}</span>
                </li>
              ))}
            </ul>
          </CardDescription>
        </CardHeader>
        <CardContent className="text-left relative z-10 p-6 pt-0">
          <div className="text-xl font-medium text-muted-foreground">
            Mulai Dari
          </div>
          <div className="text-xl font-bold text-foreground">
            <span className="text-lg font-normal">Rp</span>
            {service.priceStart.toLocaleString()}
            <span className="text-sm font-normal text-muted-foreground"></span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
