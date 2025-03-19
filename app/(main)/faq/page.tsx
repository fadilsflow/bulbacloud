import MainFaq from "../_components/mainFaq";
import { createMetadata, viewport } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "FAQ - Pertanyaan Umum Seputar Layanan Kami | Bulba Cloud",
  description:
    "Temukan jawaban atas pertanyaan umum seputar layanan hosting, domain, VPS, dan solusi website lainnya yang kami sediakan.",
  path: "/faq",
  keywords: [
    "FAQ hosting",
    "pertanyaan domain",
    "bantuan VPS",
    "pusat bantuan",
  ],
});

export { viewport };
export default function Page() {
  return (
    <main className="bg-background w-full my-auto pt-8 sm:pt-12 md:pt-12">
      <MainFaq />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
          }),
        }}
      />
    </main>
  );
}
