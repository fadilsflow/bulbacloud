import { LucideIcon } from "lucide-react";
import {
  Code,
  ShoppingCart,
  Briefcase,
  Image,
  Layout,
  RefreshCw,
  Search,
  Settings,
} from "lucide-react";

export interface Service {
  id: number;
  icon: LucideIcon;
  name: string;
  href: string;
  description: string;
  features: string[];
  cta: string;
  price: string;
  image: string;
  badge?: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: Code,
    name: "Custom Websites",
    href: "/custom-websites",
    description:
      "Website khusus yang dirancang sesuai kebutuhan spesifik bisnis Anda",
    features: [
      "Desain kustom",
      "Fungsionalitas unik",
      "Optimasi performa",
      "UX/UI modern",
    ],
    cta: "Konsultasi Gratis",
    price: "Mulai dari Rp 5jt",
    image: "/api/placeholder/600/400",
  },
  // Tambahkan layanan lainnya di sini
  {
    id: 2,
    icon: Code,
    name: "Toko Online",
    href: "/toko-online",
    description:
      "Website khusus yang dirancang sesuai kebutuhan spesifik bisnis Anda",
    features: [
      "Desain kustom",
      "Fungsionalitas unik",
      "Optimasi performa",
      "UX/UI modern",
    ],
    cta: "Konsultasi Gratis",
    price: "Mulai dari Rp 5jt",
    image: "/api/placeholder/600/400",
  },
  {
    id: 3,
    icon: Code,
    name: "Company Profile",
    href: "/company-profile",

    description:
      "Website khusus yang dirancang sesuai kebutuhan spesifik bisnis Anda",
    features: [
      "Desain kustom",
      "Fungsionalitas unik",
      "Optimasi performa",
      "UX/UI modern",
    ],
    cta: "Konsultasi Gratis",
    price: "Mulai dari Rp 5jt",
    image: "/api/placeholder/600/400",
  },
  {
    id: 4,
    icon: Code,
    name: "Company Profile",
    href: "/company-profile",

    description:
      "Website khusus yang dirancang sesuai kebutuhan spesifik bisnis Anda",
    features: [
      "Desain kustom",
      "Fungsionalitas unik",
      "Optimasi performa",
      "UX/UI modern",
    ],
    cta: "Konsultasi Gratis",
    price: "Mulai dari Rp 5jt",
    image: "/api/placeholder/600/400",
  },
  {
    id: 5,
    icon: Code,
    name: "Company Profile",
    href: "/company-profile",

    description:
      "Website khusus yang dirancang sesuai kebutuhan spesifik bisnis Anda",
    features: [
      "Desain kustom",
      "Fungsionalitas unik",
      "Optimasi performa",
      "UX/UI modern",
    ],
    cta: "Konsultasi Gratis",
    price: "Mulai dari Rp 5jt",
    image: "/api/placeholder/600/400",
  },
  {
    id: 6,
    icon: Code,
    name: "Company Profile",
    href: "/company-profile",

    description:
      "Website khusus yang dirancang sesuai kebutuhan spesifik bisnis Anda",
    features: [
      "Desain kustom",
      "Fungsionalitas unik",
      "Optimasi performa",
      "UX/UI modern",
    ],
    cta: "Konsultasi Gratis",
    price: "Mulai dari Rp 5jt",
    image: "/api/placeholder/600/400",
  },
  {
    id: 7,
    icon: Code,
    name: "Company Profile",
    href: "/company-profile",

    description:
      "Website khusus yang dirancang sesuai kebutuhan spesifik bisnis Anda",
    features: [
      "Desain kustom",
      "Fungsionalitas unik",
      "Optimasi performa",
      "UX/UI modern",
    ],
    cta: "Konsultasi Gratis",
    price: "Mulai dari Rp 5jt",
    image: "/api/placeholder/600/400",
  },
  {
    id: 8,
    icon: Code,
    name: "Company Profile",
    href: "/company-profile",

    description:
      "Website khusus yang dirancang sesuai kebutuhan spesifik bisnis Anda",
    features: [
      "Desain kustom",
      "Fungsionalitas unik",
      "Optimasi performa",
      "UX/UI modern",
    ],
    cta: "Konsultasi Gratis",
    price: "Mulai dari Rp 5jt",
    image: "/api/placeholder/600/400",
  },
  {
    id: 9,
    icon: Code,
    name: "Company Profile",
    href: "/company-profile",

    description:
      "Website khusus yang dirancang sesuai kebutuhan spesifik bisnis Anda",
    features: [
      "Desain kustom",
      "Fungsionalitas unik",
      "Optimasi performa",
      "UX/UI modern",
    ],
    cta: "Konsultasi Gratis",
    price: "Mulai dari Rp 5jt",
    image: "/api/placeholder/600/400",
  },
  {
    id: 10,
    icon: Code,
    name: "Company Profile",
    href: "/company-profile",

    description:
      "Website khusus yang dirancang sesuai kebutuhan spesifik bisnis Anda",
    features: [
      "Desain kustom",
      "Fungsionalitas unik",
      "Optimasi performa",
      "UX/UI modern",
    ],
    cta: "Konsultasi Gratis",
    price: "Mulai dari Rp 5jt",
    image: "/api/placeholder/600/400",
  },
  // Tambahkan layanan lainnya di sini
];
