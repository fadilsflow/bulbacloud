import { Home, Server, Globe, Code, Cloud, Database, Box } from "lucide-react";
import { Service } from "./navbar-services";

export const hostingServices: Service[] = [
  {
    id: 1,
    icon: Server, // Ikon untuk hosting
    name: "Minecraft",
    href: "/minecraft-hosting",
  },
  {
    id: 2,
    icon: Cloud, // Ikon untuk hosting
    name: "Database",
    href: "/database-hosting",
  },
  {
    id: 3,
    icon: Cloud,
    name: "Docker",
    href: "/docker-hosting"
  },
];

export const domainServices: Service[] = [
  {
    id: 3,
    icon: Globe, // Ikon untuk domain
    name: "Domain Example 1",
    href: "/domain/example1",
  },
  {
    id: 4,
    icon: Globe, // Ikon untuk domain
    name: "Domain Example 2",
    href: "/domain/example2",
  },
];

export const vpsServices: Service[] = [
  {
    id: 5,
    icon: Database, // Ikon untuk VPS
    name: "VPS Example 1",
    href: "/vps/example1",
  },
  {
    id: 6,
    icon: Box, // Ikon untuk VPS
    name: "VPS Example 2",
    href: "/vps/example2",
  },
];

export const websiteServices: Service[] = [
  {
    id: 7,
    icon: Code, // Ikon untuk jasa website
    name: "Website Example 1",
    href: "/website/example1",
  },
  {
    id: 8,
    icon: Home, // Ikon untuk jasa website
    name: "Website Example 2",
    href: "/website/example2",
  },
];
