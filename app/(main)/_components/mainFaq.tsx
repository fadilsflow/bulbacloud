// pages/faq.tsx

import FAQ from "./faq";

const mainFaqItems = [
  {
    value: "item-1",
    question: "Apa itu Bulba Cloud?",
    answer:
      "Bulba Cloud adalah penyedia layanan cloud dengan hosting cepat, aman, dan modern.",
  },
  {
    value: "item-2",
    question: "Bagaimana cara memesan layanan?",
    answer: "Hubungi admin via WhatsApp atau Discord untuk pemesanan.",
  },
  {
    value: "item-3",
    question: "Apakah saya bisa mengupgrade VPS?",
    answer: "Ya, Anda bisa mengupgrade paket VPS kapan saja sesuai kebutuhan.",
  },
  {
    value: "item-4",
    question: "Apa metode pembayaran yang tersedia?",
    answer: "Kami menerima pembayaran via e-wallet dan transfer bank",
  },
  {
    value: "mc-5",
    question: "Apakah server bisa digunakan untuk Bedrock dan Java Edition?",
    answer:
      "Ya, server kami mendukung Minecraft Java Edition dan Bedrock Edition.",
  },
  {
    value: "mc-6",
    question: "Bagaimana cara mengelola server saya?",
    answer:
      "Anda bisa mengelola server melalui panel kontrol yang mudah digunakan, dengan akses penuh ke pengaturan server.",
  },
  {
    value: "web-1",
    question: "Paket website mana yang cocok untuk bisnis saya?",
    answer:
      "Paket Elite cocok untuk UMKM, Professional untuk bisnis berkembang, dan Advanced untuk solusi kustom seperti e-commerce atau sistem kompleks.",
  },
  {
    value: "web-2",
    question: "Apakah saya mendapatkan domain dan hosting gratis?",
    answer:
      "Ya, semua paket termasuk domain dan hosting gratis untuk tahun pertama.",
  },
  {
    value: "web-3",
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Tergantung paket yang dipilih: Elite (5 hari), Professional (15 hari), dan Advanced (sesuai kompleksitas proyek).",
  },
  {
    value: "web-4",
    question: "Apakah website saya bisa diakses di HP dan tablet?",
    answer:
      "Ya, semua website yang kami buat responsif dan kompatibel dengan semua perangkat.",
  },
  {
    value: "web-5",
    question: "Apakah saya bisa meminta fitur tambahan?",
    answer:
      "Ya, kami bisa menambahkan fitur kustom sesuai kebutuhan pada paket Advanced.",
  },
  {
    value: "domain-1",
    question: "Bagaimana cara membeli domain di sini?",
    answer:
      "Cek ketersediaan domain di platform lain, ajukan ke kami, dan kami akan setup dengan Cloudflare untuk Anda.",
  },
  {
    value: "domain-2",
    question: "Apakah saya bisa menggunakan domain untuk website saya?",
    answer:
      "Ya, setelah setup Cloudflare selesai, Anda bisa langsung menghubungkannya ke website Anda.",
  },
  {
    value: "domain-3",
    question: "Apakah saya mendapatkan kontrol penuh atas domain saya?",
    answer:
      "Ya, Anda tetap memiliki akses penuh, termasuk pengaturan DNS di Cloudflare.",
  },
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
];

export default function MainFaq() {
  return (
    <FAQ
      faqItems={mainFaqItems}
      title="Pertanyaan yang Sering Diajukan"
      description="Temukan jawaban untuk pertanyaan umum tentang layanan Bulba Cloud."
    />
  );
}
