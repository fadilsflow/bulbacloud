export interface vpsDigialOcean {
  id: number;
  name: string;
  price: number;
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    bandwidth: string;
    region: string;
  };
}
  
export const vpsDigialOceanProducts: vpsDigialOcean[] = [
  {
    id: 1,
    name: "DIGITAL OCEAN 4GB",
    price: 30000,
    specs: {
      cpu: "2 Intel CPUs",
      ram: "4 GB",
      storage: "170 GB NVMe",
      bandwidth: "6 TB",
      region: "CUSTOM",
    },
  },
  {
    id: 2,
    name: "DIGITAL OCEAN 8GB",
    price: 35000,
    specs: {
      cpu: "4 Core Intel CPUs",
      ram: "8 GB",
      storage: "240 GB NVMe",
      bandwidth: "6 TB",
      region: "CUSTOM",
    },
  },
  {
    id: 3,
    name: "DIGITAL OCEAN 16GB",
    price: 40000,
    specs: {
      cpu: "4 Core Intel CPUs",
      ram: "16 GB",
      storage: "300 GB NVMe",
      bandwidth: "8 TB",
      region: "CUSTOM",
    },
  },
];
