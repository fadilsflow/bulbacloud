// "use client";

// export default function Showcase() {
//   return (
//     <div className=" px-4 py-8 text-center">
//       <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
//         Showcase
//       </h1>
//       <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
//         menghadirkan website yang {' '}
//         <span className="text-foreground">powerful, modern.</span>
//       </p>
//     </div>
//   );
// }
"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ExternalLink, Eye, Check, Tag, Calendar } from "lucide-react";

// Data contoh project, ganti dengan data sebenarnya
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Fashion",
    client: "BoutiqueStyle",
    category: "E-Commerce",
    date: "2024",
    description: "Website e-commerce modern dengan fitur katalog produk dinamis, pembayaran terintegrasi, dan dashboard admin komprehensif.",
    features: ["Responsive Design", "Payment Gateway", "Admin Dashboard", "Product Search", "Order Tracking"],
    image: "/api/placeholder/600/400",
    color: "#4F46E5" // Indigo
  },
  {
    id: 2,
    title: "Company Profile",
    client: "TechVision Corp",
    category: "Corporate",
    date: "2024",
    description: "Website company profile elegan dengan animasi scroll, integrasi media sosial, dan form kontak interaktif.",
    features: ["Animasi Modern", "Blog Terintegrasi", "Multi-bahasa", "SEO Optimized", "Analytics"],
    image: "/api/placeholder/600/400",
    color: "#0EA5E9" // Sky blue
  },
  {
    id: 3,
    title: "Portal Berita",
    client: "DailyUpdate",
    category: "Media",
    date: "2023",
    description: "Portal berita dengan fitur kategorisasi berita, sistem komentar, dan halaman editor untuk manajemen konten.",
    features: ["Content Management", "Live Search", "User Comments", "Social Sharing", "Video Integration"],
    image: "/api/placeholder/600/400",
    color: "#F59E0B" // Amber
  }
];

export function ProjectShowcase() {
  const [hoverProject, setHoverProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Portfolio Kami</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lihat beberapa karya terbaik kami dalam pembuatan website profesional yang telah membantu klien meningkatkan kehadiran online mereka.
        </p>
      </motion.div>

      {/* Main Showcase */}
      <div className="relative max-w-5xl mx-auto">
        {/* Navigation arrows */}
        <button 
          onClick={prevProject}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100"
          aria-label="Previous project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        
        <button 
          onClick={nextProject}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100"
          aria-label="Next project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        {/* Project card */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="md:flex">
            {/* Image section */}
            <div className="md:w-3/5 relative group">
              <div 
                className="h-64 md:h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${projectsData[activeIndex].image})` }}
              >
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium flex items-center shadow-lg hover:bg-gray-100 transition-colors">
                    <Eye className="h-4 w-4 mr-2" />
                    Lihat Preview
                  </button>
                </div>
                
                {/* Category badge */}
                <div 
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: projectsData[activeIndex].color }}
                >
                  {projectsData[activeIndex].category}
                </div>
              </div>
            </div>
            
            {/* Content section */}
            <div className="md:w-2/5 p-6 md:p-8">
              <div className="flex items-center mb-3">
                <Tag className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm text-gray-500">{projectsData[activeIndex].client}</span>
                <span className="mx-2 text-gray-300">•</span>
                <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm text-gray-500">{projectsData[activeIndex].date}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{projectsData[activeIndex].title}</h3>
              
              <p className="text-gray-600 mb-6">
                {projectsData[activeIndex].description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Fitur Utama:</h4>
                <div className="space-y-2">
                  {projectsData[activeIndex].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  style={{ color: projectsData[activeIndex].color }}
                >
                  Lihat Selengkapnya
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Pagination indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {projectsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Go to project ${idx + 1}`}
              style={{ backgroundColor: idx === activeIndex ? projectsData[activeIndex].color : undefined }}
            />
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Siap Untuk Membuat Website Anda?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Kami siap membantu mewujudkan visi website Anda dengan desain modern dan teknologi terkini.
        </p>
        <button className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg">
          Konsultasi Gratis
        </button>
      </motion.div>
    </div>
  );
}