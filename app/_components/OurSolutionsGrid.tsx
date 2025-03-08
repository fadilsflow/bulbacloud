import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { ServicesProducts } from "@/data/services";
export default function OurSolutionsGrid() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Gunakan flexbox + overflow-x untuk scrolling di mobile */}
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible gap-6 p-10">
          {ServicesProducts.map((service) => (
            <Link key={service.id} href={`/layanan/${service.id}`} passHref>
              <Card className="min-w-[80%] sm:min-w-0 group relative rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-2xl overflow-hidden shadow-xl hover:shadow-xl transition-shadow duration-300">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-card-gradient opacity-100 group-hover:opacity-90 transition-opacity duration-300" />

                <CardHeader className="relative z-10 p-6">
                  <CardTitle className="-ml-6 text-center text-xl font-semibold text-primary-foreground bg-button-metallic">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">
                    {service.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 p-6 pt-0">
                  <div className="text-xl font-semibold text-primary">
                    Mulai Dari
                  </div>
                  <div className="text-xl font-bold text-foreground">
                    Rp{service.priceStart.toLocaleString()}*
                    <span className="text-sm">/bulan</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
