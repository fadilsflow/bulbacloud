"use client";

import { ExcellenceGrid } from "./excellenceGrid";
import { Button } from "@/components/ui/button"; // Import komponen Button
import { motion } from "framer-motion"; // Import animasi dari Framer Motion

export default function Excellence() {
  return (
    <div className="px-4 py-20 text-center flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20">
      {/* Judul Section dengan Animasi */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
      >
        Kenapa Harus <span className="text-primary">Webtron</span>?
      </motion.h1>

      {/* Subjudul Section dengan Animasi */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
      >
        Kami menggabungkan teknologi terkini dengan desain yang memukau untuk
        memberikan solusi website terbaik bagi bisnis Anda.
      </motion.p>

      {/* Grid untuk Menampilkan Keunggulan */}
      <div className="text-left w-full max-w-6xl">
        <ExcellenceGrid />
      </div>

      {/* Call-to-Action (CTA) dengan Animasi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12"
      >
        <Button
          size="lg"
          className="rounded-full  transition-colors"
        >
Buat Website Anda Sekarang!
        </Button>
      </motion.div>
    </div>
  );
} 
