
import { ServiceTypes } from "@/types/services-types";

export const vpsDedicatedIndonesia: ServiceTypes[] = [
  {
    id: 1,
    name: "VPS Digital Ocean I",
    price: 30.000,
    originalPrice: 45000,
    discount: 11.11, // (45000 - 40000) / 45000 * 100
    times: "bulan",
    specs: [
      "2 vCPU Cores",
      "4 GB RAM",
      "170 GB NVMe disk space",
      "4 TB bandwidth",
      "Data Center Singapore",
      "FREE SETUP"
    ],
    featured: false,
    badge: "Best Seller",
    allFeature: [
    ],
  },
  {
    id: 2,
    name: "VPS Digital Ocean II",
    price: 40.000,
    originalPrice: 45000,
    discount: 11.11, // (45000 - 40000) / 45000 * 100
    times: "bulan",
    specs: [
      "4 vCPU Cores",
      "8 GB RAM",
      "200 GB NVMe disk space",
      "6 TB bandwidth",
      "Data Center Singapore",
      "FREE SETUP"
    ],
    featured: false,
    badge: "Best Seller",
    allFeature: [
    ],
  },

  {
    id: 3, 
    name: "VPS Digital Ocean III",
    price: 45.000,
    originalPrice: 45000,
    discount: 11.11, // (45000 - 40000) / 45000 * 100
    times: "bulan",
    specs: [
      "4 vCPU Cores",
      "16 GB RAM",
      "300 GB NVMe disk space",
      "8 TB bandwidth",
      "Data Center Singapore",
      "FREE SETUP"
    ],
    featured: false,
    badge: "Best Seller",
    allFeature: [
    ],
  },
]
