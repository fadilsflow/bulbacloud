import { ServiceTypes } from "@/types/services-types";
export const vpsDigitalOcean: ServiceTypes[] = [
  {
    id: 1,
    name: "VPS Digital Ocean I",
    price: 30000,
    originalPrice: 40000,
    discount: 25, // (40000 - 30000) / 40000 * 100 = 25%
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
    price: 40000,
    originalPrice: 55000,
    discount: 27.27, // (55000 - 40000) / 55000 * 100 = 27.27%
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
    price: 45000,
    originalPrice: 65000,
    discount: 30.77, // (65000 - 45000) / 65000 * 100 = 30.77%
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
