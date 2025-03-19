// pages/domain-faq.tsx

import FAQ from "./faq";

const domainFaqItems = [
  {
    value: "domain-1",
    question: "Bagaimana cara membeli domain di sini?",
    answer: "Cek ketersediaan domain di platform lain, ajukan ke kami, dan kami akan setup dengan Cloudflare untuk Anda.",
  },
  {
    value: "domain-2",
    question: "Apakah saya bisa menggunakan domain untuk website saya?",
    answer: "Ya, setelah setup Cloudflare selesai, Anda bisa langsung menghubungkannya ke website Anda.",
  },
  {
    value: "domain-3",
    question: "Apakah saya mendapatkan kontrol penuh atas domain saya?",
    answer: "Ya, Anda tetap memiliki akses penuh, termasuk pengaturan DNS di Cloudflare.",
  },
  {
    value: "domain-4",
    question: "Berapa lama proses setup domain di Cloudflare?",
    answer: "Biasanya memakan waktu 1-2 jam setelah pembayaran dikonfirmasi.",
  },
  {
    value: "domain-5",
    question: "Apakah saya bisa mentransfer domain ke layanan lain?",
    answer: "Ya, Anda bisa mentransfer domain kapan saja dengan memberikan kode EPP.",
  },
];

export default function DomainFaq() {
  return (
    <FAQ
      faqItems={domainFaqItems}
      title="FAQ Domain"
      description="Jawaban atas pertanyaan umum tentang pembelian dan pengelolaan domain dengan Cloudflare."
    />
  );
}
