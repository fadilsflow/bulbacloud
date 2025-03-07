export interface VPS {
  id: number;
  name: string;
  price: number;
  times: string;
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    publicIPv4: number;
    publicIPv6: number;
    bandwidth: string;
    ddosProtection: boolean;
    location: string;
    setupFee: string;
  };
}

export const vpsProducts: VPS[] = [
  {
    id: 1,
    name: "Bulba VPS S",
    price: 159000, // Harga dinaikkan dari Rp145.000
    times: "Bulanan",
    specs: {
      cpu: "5 vCPU Cores (EPYC 3GHz)",
      ram: "9 GB RAM",
      storage: "50 GB NVMe",
      publicIPv4: 1,
      publicIPv6: 1,
      bandwidth: "5 TB /bulan",
      ddosProtection: true,
      location: "Jakarta, Indonesia",
      setupFee: "Gratis",
    },
  },
  {
    id: 2,
    name: "Bulba VPS M",
    price: 349000, // Harga dinaikkan dari Rp325.000
    times: "Bulanan",
    specs: {
      cpu: "7 vCPU Cores (EPYC 3GHz)",
      ram: "17 GB RAM",
      storage: "100 GB NVMe",
      publicIPv4: 1,
      publicIPv6: 1,
      bandwidth: "7 TB/bulan",
      ddosProtection: true,
      location: "Jakarta, Indonesia",
      setupFee: "Gratis",
    },
  },
  {
    id: 3,
    name: "Bulba VPS L",
    price: 559000, // Harga dinaikkan dari Rp535.000
    times: "Bulanan",
    specs: {
      cpu: "9 vCPU Cores (EPYC 3GHz)",
      ram: "31 GB RAM",
      storage: "200 GB NVMe",
      publicIPv4: 1,
      publicIPv6: 1,
      bandwidth: "9 TB/bulan",
      ddosProtection: true,
      location: "Jakarta, Indonesia",
      setupFee: "Gratis",
    },
  },
  {
    id: 4,
    name: "Bulba VPS XL",
    price: 985000, // Harga dinaikkan dari Rp945.000
    times: "Bulanan",
    specs: {
      cpu: "11 vCPU Cores (EPYC 3GHz)",
      ram: "61 GB RAM",
      storage: "400 GB NVMe",
      publicIPv4: 1,
      publicIPv6: 1,
      bandwidth: "11 TB/bulan",
      ddosProtection: true,
      location: "Jakarta, Indonesia",
      setupFee: "Gratis",
    },
  },
];
