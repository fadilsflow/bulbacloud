import FAQ from "./faq";

const websiteFaqItems = [
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
];

export default function WebsiteFaq() {
  return (
    <FAQ
      faqItems={websiteFaqItems}
      title="FAQ Website Development"
      description="Temukan jawaban atas pertanyaan umum tentang layanan pembuatan website kami."
    />
  );
}
