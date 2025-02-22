"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TechnologiesWeUse = () => {
  const technologies = [
    "Resend",
    "React",
    "Next.js",
    "Tailwind",
    "PostgreSQL",
    "Figma",
    "Prisma",
    "Supabase",
  ];

  return (
    <section className="py-0 overflow-hidden    ">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Teknologi yang Kami Gunakan
        </motion.h2>

        <div className="relative">
          <div className="flex overflow-x-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: [0, -1035],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                },
              }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className={cn(
                    "text-4xl font-bold mx-8",
                    "bg-clip-text text-transparent bg-gradient-to-r",
                    index % 2 === 0
                      ? "from-primary to-purple-600"
                      : "from-purple-600 to-primary"
                  )}
                >
                  {tech}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesWeUse;
