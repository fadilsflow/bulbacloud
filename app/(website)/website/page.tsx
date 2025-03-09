import WebsiteServicesPricingGrid from "@/app/_components/WebServicesPricingGrid";
import { WebsiteServicesProduct } from "@/data/WebsiteServicesProduct";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <WebsiteServicesPricingGrid services={WebsiteServicesProduct} />
    </main>
  );
}
