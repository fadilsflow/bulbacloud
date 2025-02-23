import {
  Code,
  ShoppingCart,
  Briefcase,
  Image,
  Layout,
  RefreshCw,
  Search,
  Settings,
  Terminal,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // Sesuaikan path dengan struktur proyek Anda

// Data layanan
const services = [
  { icon: Code, name: "Custom Websites" },
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: Briefcase, name: "Company Profile" },
  { icon: Image, name: "Portfolio Website" },
  { icon: Layout, name: "Landing Page" },
  { icon: RefreshCw, name: "Website Redesign" },
  { icon: Search, name: "SEO Optimization" },
  { icon: Settings, name: "Maintenance & Support" },
  { icon: Terminal, name: "Custom Development" },
];

export default function ServicesHeader() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb menggunakan shadcn */}
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/services">services</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Judul */}
      <h1 className="text-3xl font-bold mb-4">Webtron Services</h1>

      {/* Deskripsi */}
      <p className="text-gray-700 mb-8">
        Layanan Website Development Terjangkau untuk Pertumbuhan Bisnis Anda.
      </p>

      {/* Daftar Layanan */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <Icon className="h-8 w-8 mb-2" />
              <span className="text-sm">{service.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
