// pages/minecraft-faq.tsx

import FAQ from "./faq";

const minecraftFaqItems = [
  {
    value: "mc-3",
    question: "Apakah server bisa digunakan untuk Bedrock dan Java Edition?",
    answer:
      "Ya, server kami mendukung Minecraft Java Edition dan Bedrock Edition.",
  },
  {
    value: "mc-4",
    question: "Bagaimana cara mengelola server saya?",
    answer:
      "Anda bisa mengelola server melalui panel kontrol yang mudah digunakan, dengan akses penuh ke pengaturan server.",
  },
  {
    value: "mc-5",
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: "Kami menerima pembayaran melalui e-wallet dan transfer bank",
  },
];

export default function MinecraftFaq() {
  return (
    <FAQ
      faqItems={minecraftFaqItems}
      title="FAQ Minecraft Hosting"
      description="Temukan jawaban atas pertanyaan umum tentang layanan Minecraft Hosting kami."
    />
  );
}
