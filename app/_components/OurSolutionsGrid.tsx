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
                    {/* Grid container with horizontal scrolling on mobile */}
                    <div className="flex space-x-4 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible gap-6">
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
                id: string;
                href: string;
                name: string;
                desc: string;
                priceStart: number;
              };
            }

            function ServiceCard({ service }: ServiceCardProps) {
              return (
                <Link href={service.href} passHref>
                  <Card className="min-w-[80%] sm:min-w-0 group relative  overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full ">
                    {/* Gradient Background */}
                    <div className="absolute inset-0  opacity-100 group-hover:opacity-90 transition-opacity duration-300" />

                    <CardHeader className="relative z-10 p-6">
                      <CardTitle className="-ml-6 w-full  text-center text-xl font-semibold text-primary-foreground bg-primary">
                        {service.name}
                      </CardTitle>
                      <CardDescription className="text-left text-muted-foreground mt-2">
                        {service.desc}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-left relative z-10 p-6 pt-0">
                      <div className="text-xl  font-medium text-muted-foreground">Mulai Dari</div>
                      <div className="text-xl font-bold text-foreground">
                        Rp{service.priceStart.toLocaleString()}*
                        <span className="text-sm font-normal text-muted-foreground">/bulan</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            }
