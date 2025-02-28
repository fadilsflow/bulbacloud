"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Zap, BarChart, Code, Headphones, Users } from "lucide-react"; // Import ikon yang diperlukan
import { motion } from "framer-motion"; // Import animasi dari Framer Motion

const excellences = [
  {
    title: "Desain Menarik & Modern",
    description:
      "Desain website yang eye-catching dan responsif, sesuai dengan tren terbaru untuk meningkatkan citra bisnis Anda.",
    icon: Palette, // Ikon untuk desain
  },
  {
    title: "Cepat & Responsif",
    description:
      "Website dengan kecepatan loading tinggi dan tampilan sempurna di semua perangkat.",
    icon: Zap, // Ikon untuk kecepatan
  },
  {
    title: "SEO Friendly",
    description:
      "Struktur website yang ramah mesin pencari untuk meningkatkan visibilitas di Google.",
    icon: BarChart, // Ikon untuk SEO
  },
  {
    title: "Teknologi Terkini",
    description:
      "Menggunakan framework modern untuk performa terbaik dan skalabilitas.",
    icon: Code, // Ikon untuk teknologi
  },
  {
    title: "Dukungan 24/7",
    description:
      "Tim support siap membantu Anda kapan saja untuk memastikan website selalu berjalan lancar.",
    icon: Headphones, // Ikon untuk dukungan
  },
  {
    title: "Tim Profesional",
    description:
      "Dikerjakan oleh tim ahli dengan pengalaman di bidang web development dan digital marketing.",
    icon: Users, // Ikon untuk tim profesional
  },
];

export function ExcellenceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {excellences.map((excellence, index) => {
        const Icon = excellence.icon; // Simpan ikon ke dalam variabel
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="relative overflow-hidden group border bg-gradient-to-b from-background to-muted/50 border-accent hover:border-primary/30 transition-all duration-300 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-lg font-semibold">
                  {excellence.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {excellence.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
