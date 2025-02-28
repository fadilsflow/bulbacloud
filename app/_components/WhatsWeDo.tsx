"use client";

import { WhatsWeDoGrid } from "./WhatsWeDoGrid";

export default function WhatWeDo() {
  return (
    <div className="px-4 py-8 text-left flex flex-col items-center justify-center">
      {/* Judul Section */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
        Yang dilakukan Webtron?
        <span className="text-muted-foreground text-xl sm:text-xl md:text-2xl font-normal">
          Membuat Semua yang Anda perlukan dalam bentuk web.
        </span>
      </h1>

      {/* Grid untuk Menampilkan Layanan */}
      <div className="w-full max-w-6xl mt-8">
        <WhatsWeDoGrid />
      </div>
    </div>
  );
}
