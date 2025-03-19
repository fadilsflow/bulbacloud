import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // URL dasar situs Anda
  const baseUrl = "https://bulba.cloud";

  // Daftar semua halaman dari struktur aplikasi Anda
  const pages = [
    "",
    "/about-us",
    "/blog",
    "/contact",
    "/domain-murah",
    "/faq",
    "/hosting-minecraft",
    "/privacy-policy",
    "/solusi-website-terbaik",
    "/terms-of-service",
    "/vps-dedicated-indonesia",
    "/vps-digital-ocean",
  ];

  // Tanggal update terakhir
  const lastModified = new Date();

  // Buat sitemap entries
  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified,
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1.0 : 0.8,
  }));
}
