"use client"
import { motion } from "framer-motion";
import OurSolutionsGrid from "./OurSolutionsGrid";

export default function OurSolutions() {
  return (
    <div className="px-4 py-20 text-center flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20">
      {/* Judul Section dengan Animasi */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} // ✅ Tambahkan viewport untuk menghindari error
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
      >
        The <span className="text-primary">Solutions</span> We Provide
      </motion.h1>
      <div className="text-left w-full max-w-6xl">
        <OurSolutionsGrid />
      </div>
    </div>
  );
}
