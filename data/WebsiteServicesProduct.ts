export interface WebsiteServiceTypes {
  id: number;
  name: string;
  desc: string;
  pricestart: number;
  priceNextYear: number;
  specs: string[];
  featured?: boolean;
  badge?: string;
  allFeature?: string[];
}

export const WebsiteServicesProduct: WebsiteServiceTypes[] = [
  {
    id: 1,
    name: "Elite",
    desc: "Solusi cepat dan efisien untuk memulai transformasi digital, ideal bagi UMKM yang ingin tampil modern dengan biaya terjangkau.",
    pricestart: 999000,
    priceNextYear: 70000,
    badge: "BEST VALUE",
    specs: [
      "2+ Halaman Web Responsif",
      "Gratis Domain & Hosting Tahun Pertama",
      "Desain Modern dan Mobile-Friendly",
      "Optimasi SEO Dasar",
      "Pengerjaan dalam 5 Hari",
    ],
  },
  {
    id: 2,
    name: "Professional",
    desc: "Website eksklusif dengan desain premium yang meningkatkan kredibilitas bisnis serta memaksimalkan kehadiran digital guna mendukung pertumbuhan optimal.",
    pricestart: 5000000,
    priceNextYear: 140000,
    badge: "BEST OFFER",
    featured: true,
    specs: [
      "4+ Halaman Dinamis",
      "Gratis Domain, Hosting, dan Maintenance",
      "Desain Premium dan Custom Eksklusif",
      "Optimasi SEO Lanjutan dan Kecepatan Maksimal",
      "Pengerjaan dalam 15 Hari",
    ],
  },
  {
    id: 3,
    name: "Advanced",
    desc: "Solusi komprehensif untuk bisnis yang membutuhkan fitur kustom lengkap, mulai dari e-commerce hingga sistem web kompleks dengan dukungan optimal.",
    pricestart: 10000000,
    priceNextYear: 240000,
    badge: "CUSTOM APPS",
    specs: [
      "Fitur Custom Sesuai Kebutuhan",
      "Desain UI/UX Eksklusif dan Responsif",
      "Integrasi API dan Layanan Pihak Ketiga",
      "Keamanan dan Performa Terjamin",
      "Dukungan On-Demand dan Maintenance",
    ],
  },
];
