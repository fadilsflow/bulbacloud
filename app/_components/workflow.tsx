"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clipboard, PenTool, Code2, Settings, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button"; // Import Button dari shadcn/ui
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import Card dari shadcn/ui

const workflowSteps = [
  {
    title: "Konsultasi",
    description:
      "Kami mendengarkan kebutuhan dan menganalisis tujuan bisnis Anda.",
    icon: Clipboard,
  },
  {
    title: "Desain",
    description:
      "Tim desainer kami membuat mockup sesuai identitas brand Anda.",
    icon: PenTool,
  },
  {
    title: "Pengembangan",
    description:
      "Developer mengimplementasikan desain dengan teknologi terkini.",
    icon: Code2,
  },
  {
    title: "Pengujian",
    description:
      "Website diuji secara menyeluruh dan disesuaikan berdasarkan feedback.",
    icon: Settings,
  },
  {
    title: "Peluncuran",
    description: "Website diluncurkan dengan dukungan pasca-peluncuran.",
    icon: Rocket,
  },
];

export function Workflow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-background to-muted/20">
      {/* Judul Section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
      >
        Alur Kerja Kami
      </motion.h2>

      {/* Timeline Steps Indicator */}
      <div className="relative mb-8">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted transform-translate-y-1/2"></div>

        {/* Timeline Points */}
        <div className="flex justify-between relative">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative z-10 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <motion.button
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                  ${
                    activeStep >= index
                      ? "bg-primary text-black"
                      : "bg-muted text-muted-foreground"
                  }`}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveStep(index)}
              >
                {index + 1}
              </motion.button>
              <span
                className={`text-xs mt-2 font-medium  ${
                  activeStep >= index ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {step.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Current Step Content */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mx-auto max-w-2xl"
      >
        <Card className="border border-muted bg-background/50">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              {React.createElement(workflowSteps[activeStep].icon, {
                className: "h-6 w-6",
              })}
            </div>
            <CardTitle className="text-xl font-bold">
              {workflowSteps[activeStep].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {workflowSteps[activeStep].description}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Navigation Controls */}
      <div className="flex justify-center mt-6 gap-4">
        <Button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          variant={activeStep === 0 ? "secondary" : "default"}
        >
          Sebelumnya
        </Button>
        <Button
          onClick={() =>
            setActiveStep(Math.min(workflowSteps.length - 1, activeStep + 1))
          }
          disabled={activeStep === workflowSteps.length - 1}
          variant={
            activeStep === workflowSteps.length - 1 ? "secondary" : "default"
          }
        >
          Selanjutnya
        </Button>
      </div>
    </div>
  );
}