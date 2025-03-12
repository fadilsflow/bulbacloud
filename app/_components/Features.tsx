import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { Infinity, TrophyIcon } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Infinity className="h-12 w-12 text-primary mb-4" />,
      title: "Harga Terjangkau",
      description:
        "Solusi digital berkualitas dengan harga ramah kantong, cocok untuk semua bisnis.",
      bgColor: "bg-primary/10",
    },
    {
      icon: <LightningBoltIcon className="h-12 w-12 text-primary mb-4" />,
      title: "Cepat & Profesional",
      description:
        "Tim ahli siap memberikan layanan cepat dan solusi terbaik untuk bisnis Anda.",
      bgColor: "bg-secondary/10",
    },
    {
      icon: <TrophyIcon className="h-12 w-12 text-primary mb-4" />,
      title: "Kualitas Terbaik",
      description:
        "Prioritas kami adalah kepuasan Anda dengan layanan berkualitas tinggi.",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section
      id="features"
      className="w-full  flex items-center justify-center pt-12 md:pt-24 lg:pt-32 bg-background"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="mb-2 rounded-full">
              Keunggulan Kami
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tighter md:text-4xl">
              Solusi Digital Terpercaya untuk Bisnis Anda
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Hosting, VPS, Website, dan Domain untuk mendukung pertumbuhan
              bisnis Anda.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center  py-12 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={` ${feature.bgColor} p-6 rounded-none border-none`}
            >
              <CardHeader className="p-0">
                <div className="flex items-center justify-center">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-semibold text-center mt-4">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <CardDescription className="text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
