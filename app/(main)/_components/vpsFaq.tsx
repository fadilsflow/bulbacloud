

import FAQ from "./faq";

const vpsFaqItems = [
  {
    value: "vps-1",
    question: "Apa keunggulan VPS Bulba Cloud?",
    answer:
      "VPS kami memiliki dedicated resources, NVMe SSD, dan prosesor AMD EPYC untuk performa optimal.",
  },
  {
    value: "vps-2",
    question: "Apakah VPS ini bisa digunakan untuk website atau aplikasi?",
    answer:
      "Ya, VPS Bulba Cloud cocok untuk website, aplikasi, bot, dan kebutuhan server lainnya.",
  },
  {
    value: "vps-3",
    question: "Apakah saya mendapatkan akses penuh ke server?",
    answer:
      "Ya, Anda mendapatkan full root access untuk mengelola VPS sesuai kebutuhan.",
  },
  {
    value: "vps-4",
    question: "Apakah ada batasan penggunaan VPS?",
    answer:
      "Ya, VPS tidak boleh digunakan untuk aktivitas ilegal atau yang melanggar kebijakan kami.",
  },
  {
    value: "vps-5",
    question: "Bagaimana cara membayar layanan VPS?",
    answer: "Kami menerima pembayaran via e-wallet dan transfer bank.",
  },
];

export default function VpsFaq() {
  return (
    <FAQ
      faqItems={vpsFaqItems}
      title="FAQ VPS Bulba Cloud"
      description="Temukan jawaban atas pertanyaan umum tentang layanan VPS kami."
    />
  );
}
