// pages/digitalocean-faq.tsx

import FAQ from "./faq";

const digitalOceanFaqItems = [
  {
    value: "do-2",
    question: "Bagaimana cara order VPS Digital Ocean?",
    answer:
      "Hubungi tim kami, pilih paket yang sesuai, dan VPS Anda siap dalam hitungan menit.",
  },
  {
    value: "do-3",
    question: "Apakah ada garansi?",
    answer:
      "Ya, kami memberikan garansi 15 hari untuk memastikan kepuasan Anda.",
  },
  {
    value: "do-4",
    question: "Apakah saya mendapatkan akses root?",
    answer:
      "Ya, Anda mendapatkan akses root penuh untuk mengelola server Anda.",
  },
  {
    value: "do-5",
    question: "Apakah bisa upgrade spesifikasi VPS?",
    answer: "Tidak Bisa",
  },
];

export default function DigitalOceanFaq() {
  return (
    <FAQ
      faqItems={digitalOceanFaqItems}
      title="FAQ VPS Digital Ocean"
      description="Jawaban atas pertanyaan umum tentang layanan VPS Digital Ocean kami."
    />
  );
}
