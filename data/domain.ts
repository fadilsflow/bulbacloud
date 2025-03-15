export interface DomainServiceTypes {
  id: number;
  name: string;
  badge?: string;
  featureed: boolean;
  price: number;
}
export const DomainProduct: DomainServiceTypes[] = [
  {
    id: 1,
    name: ".my.id",
    price: 15000, // Rp 129.900
    badge: "termurah",
    featureed: true,
  },
  {
    id: 2,
    name: ".com",
    price: 114900 + 15000, // Rp 129.900
    badge: "terbaik",
    featureed: true,
  },
  {
    id: 3,
    name: ".xyz",
    price: 29900 + 15000, // Rp 44.900
    featureed: false,
  },
  {
    id: 4,
    name: ".co.id",
    price: 270000 + 15000, // Rp 285.000
    badge: "Hanya",
    featureed: false,
  },
  {
    id: 5,
    name: ".id",
    price: 210000 + 15000, // Rp 225.000
    badge: "Hanya",
    featureed: false,
  },
  {
    id: 6,
    name: ".org",
    price: 119900 + 15000, // Rp 134.900
    featureed: false,
  },
  {
    id: 7,
    name: ".info",
    price: 299900 + 15000, // Rp 314.900
    badge: "Hanya",
    featureed: false,
  },
  {
    id: 8,
    name: ".net",
    price: 219900 + 15000, // Rp 234.900
    badge: "Hanya",
    featureed: false,
  },
  {
    id: 9,
    name: ".it.com",
    price: 114900 + 15000, // Rp 129.900
    featureed: false,
  },
];
