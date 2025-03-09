import { ServiceTypes } from "@/types/services-types";

export const vpsDigitalOceanProducts: ServiceTypes[] = [
  {
    id: 1,
    name: "DIGITAL OCEAN 4GB",
    price: 30000,
    times: "bulan",
    specs: [
      "2 Intel CPUs",
      "4 GB RAM",
      "170 GB NVMe Storage",
      "6 TB Bandwidth",
      "Region: CUSTOM",
    ],

    badge: "Populer",
    featured: true,
  },
  {
    id: 2,
    name: "DIGITAL OCEAN 8GB",
    price: 35000,
    times: "bulan",
    specs: [
      "4 Core Intel CPUs",
      "8 GB RAM",
      "240 GB NVMe Storage",
      "6 TB Bandwidth",
      "Region: CUSTOM",
    ],
  },
  {
    id: 3,
    name: "DIGITAL OCEAN 16GB",
    price: 40000,
    times: "bulan",
    specs: [
      "4 Core Intel CPUs",
      "16 GB RAM",
      "300 GB NVMe Storage",
      "8 TB Bandwidth",
      "Region: CUSTOM",
    ],
  },
];
