import Features from "./_components/Features";
import Hero from "./_components/Hero";
import MainFaq from "./_components/mainFaq";

import ServicesSection from "./_components/Services";
import { createMetadata, viewport } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Bulba Cloud - Layanan Hosting & Domain Terpercaya di Indonesia',
  description: 'Penyedia layanan hosting terbaik di Indonesia dengan uptime 99.9%, domain murah, VPS performa tinggi, dan solusi website untuk semua kebutuhan bisnis Anda.',
  path: '/',
  keywords: ['vps hosting', 'cloud hosting', 'minecraft hosting', 'jasa pembuatan website', 'domain murah', 'vps digital ocean'],
});

export { viewport };

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <ServicesSection />
      <MainFaq />
    </div>
  );
}
