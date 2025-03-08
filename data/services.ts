// data/services.ts

export interface Services {
  id: number;
  name: string;
  desc: string;
  priceStart: number;
  href: string;
}
export const ServicesProducts: Services[] = [
  {
    id: 1,
    name: "Layanan Hosting",
    desc: "Hosting stabil dan cepat untuk website, aplikasi, atau game.",
    priceStart: 500000,
    href: "/hosting",
  },
  {
    id: 2,
    name: "VPS Berkualitas",
    desc: "VPS handal dengan performa tinggi dan sumber daya dedicated.",
    priceStart: 1500000,
    href: "/vps",
  },
  {
    id: 3,
    name: "Website Modern",
    desc: "Website cepat, modern, dan responsif untuk bisnis atau personal.",
    priceStart: 625000,
    href: "/website",
  },
  {
    id: 4,
    name: "Domain Premium",
    desc: "Domain siap pakai dengan proteksi Cloudflare dan Google Account.",
    priceStart: 10000,
    href: "/domain",
  },
];
