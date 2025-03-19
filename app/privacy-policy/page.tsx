import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, FileText, Shield } from "lucide-react";

import { createMetadata, viewport } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Kebijakan Privasi - Bulba Cloud",
  description:
    "Baca Kebijakan Privasi Bulba Cloud untuk memahami bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda. Keamanan data Anda adalah prioritas kami.",
  path: "/privacy-policy",
  ogImage: "/privacy-policy.png",
  ogImageAlt: "Kebijakan Privasi Bulba Cloud",
  keywords: [
    "Kebijakan Privasi",
    "Privacy Policy",
    "Data Pribadi",
    "Keamanan Data",
    "Bulba Cloud",
    "Perlindungan Data",
  ],
  noIndex: true, // Opsional: Jika halaman ini tidak perlu diindeks oleh mesin pencari
});

export { viewport };

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl  tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Kebijakan Privasi
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Terakhir diperbarui: 18 Maret 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
            <div className="hidden lg:block">
              <div className="sticky top-20">
                <div className="space-y-4">
                  <h3 className="font-medium">Daftar Isi</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="#introduction"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        1. Pendahuluan
                      </a>
                    </li>
                    <li>
                      <a
                        href="#collection"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        2. Informasi yang Kami Kumpulkan
                      </a>
                    </li>
                    <li>
                      <a
                        href="#use"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        3. Penggunaan Informasi
                      </a>
                    </li>
                    <li>
                      <a
                        href="#sharing"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        4. Pembagian Informasi
                      </a>
                    </li>
                    <li>
                      <a
                        href="#cookies"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        5. Cookies dan Teknologi Pelacakan
                      </a>
                    </li>
                    <li>
                      <a
                        href="#security"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        6. Keamanan Data
                      </a>
                    </li>
                    <li>
                      <a
                        href="#rights"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        7. Hak Privasi Anda
                      </a>
                    </li>
                    <li>
                      <a
                        href="#children"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        8. Privasi Anak-anak
                      </a>
                    </li>
                    <li>
                      <a
                        href="#international"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        9. Transfer Data Internasional
                      </a>
                    </li>
                    <li>
                      <a
                        href="#changes"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        10. Perubahan Kebijakan Privasi
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        11. Hubungi Kami
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    Dokumen ini menjelaskan bagaimana kami mengumpulkan,
                    menggunakan, dan melindungi data pribadi Anda.
                  </p>
                </div>

                <div id="introduction" className="scroll-mt-20">
                  <h2 className="text-2xl  tracking-tight">1. Pendahuluan</h2>
                  <p className="mt-2 text-muted-foreground">
                    Bulba Cloud (&quote;kami&quote;, &quote;kita&quote;, atau
                    &quote;milik kami&quote;) menghargai privasi Anda dan
                    berkomitmen untuk melindungi data pribadi Anda. Kebijakan
                    Privasi ini akan memberi tahu Anda tentang bagaimana kami
                    menjaga informasi pribadi Anda ketika Anda mengunjungi
                    website kami atau menggunakan layanan kami.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Kebijakan ini juga memberi tahu Anda tentang hak privasi
                    Anda dan bagaimana hukum melindungi Anda. Harap baca
                    Kebijakan Privasi ini dengan seksama untuk memahami
                    pandangan dan praktik kami mengenai data pribadi Anda dan
                    bagaimana kami akan memperlakukannya.
                  </p>
                </div>

                <Separator />

                <div id="collection" className="scroll-mt-20">
                  <h2 className="text-2xl  tracking-tight">
                    2. Informasi yang Kami Kumpulkan
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Kami mengumpulkan beberapa jenis informasi dari dan tentang
                    pengguna website dan layanan kami, termasuk:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                    <li>
                      Informasi identitas pribadi (seperti nama, alamat email,
                      nomor telepon, alamat, dan informasi penagihan)
                    </li>
                    <li>
                      Informasi teknis (seperti alamat IP, jenis browser,
                      informasi perangkat, data log, dan statistik penggunaan)
                    </li>
                    <li>
                      Informasi profil (seperti nama pengguna, kata sandi,
                      preferensi, dan umpan balik)
                    </li>
                    <li>
                      Informasi penggunaan (seperti bagaimana dan kapan Anda
                      menggunakan layanan kami, lalu lintas ke dan dari website
                      kami)
                    </li>
                    <li>
                      Informasi pemasaran dan komunikasi (seperti preferensi
                      Anda dalam menerima pemasaran dari kami)
                    </li>
                  </ul>
                  <p className="mt-2 text-muted-foreground">
                    Kami mengumpulkan informasi ini melalui berbagai metode,
                    termasuk:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                    <li>
                      Informasi yang Anda berikan secara langsung (seperti saat
                      mendaftar, berlangganan, atau menghubungi kami)
                    </li>
                    <li>
                      Pengumpulan otomatis melalui cookies dan teknologi
                      pelacakan lainnya
                    </li>
                    <li>Pihak ketiga atau sumber yang tersedia untuk umum</li>
                  </ul>
                </div>

                <Separator />

                <div id="use" className="scroll-mt-20">
                  <h2 className="text-2xl  tracking-tight">
                    3. Penggunaan Informasi
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Kami menggunakan informasi yang kami kumpulkan tentang Anda
                    untuk tujuan berikut:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Menyediakan, mengelola, dan memelihara layanan kami</li>
                    <li>Memproses dan menyelesaikan transaksi</li>
                    <li>Mengirim informasi administratif</li>
                    <li>Mengirim materi pemasaran dan promosi</li>
                    <li>Meningkatkan website dan layanan kami</li>
                    <li>Merespons pertanyaan dan permintaan</li>
                    <li>Melindungi hak dan kepentingan kami</li>
                    <li>Mematuhi kewajiban hukum</li>
                    <li>Untuk tujuan lain dengan persetujuan Anda</li>
                  </ul>
                </div>

                <Separator />

                <div id="sharing" className="scroll-mt-20">
                  <h2 className="text-2xl  tracking-tight">
                    4. Pembagian Informasi
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Kami dapat membagikan informasi pribadi Anda dengan:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                    <li>
                      Penyedia layanan yang membantu kami dalam menjalankan
                      bisnis dan layanan kami
                    </li>
                    <li>Afiliasi dan mitra bisnis</li>
                    <li>Otoritas hukum ketika diwajibkan oleh hukum</li>
                    <li>
                      Pihak ketiga dalam kasus merger, akuisisi, atau penjualan
                      aset
                    </li>
                  </ul>
                  <p className="mt-2 text-muted-foreground">
                    Kami tidak menjual informasi pribadi Anda kepada pihak
                    ketiga. Ketika kami membagikan data dengan penyedia layanan,
                    mereka hanya diizinkan untuk memproses data Anda untuk
                    tujuan tertentu sesuai dengan instruksi kami dan tunduk pada
                    kewajiban kerahasiaan.
                  </p>
                </div>

                <Separator />

                <div id="cookies" className="scroll-mt-20">
                  <h2 className="text-2xl  tracking-tight">
                    5. Cookies dan Teknologi Pelacakan
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Kami menggunakan cookies dan teknologi pelacakan serupa
                    untuk melacak aktivitas di website kami dan menyimpan
                    informasi tertentu. Cookies adalah file dengan jumlah data
                    kecil yang mungkin menyertakan pengidentifikasi unik anonim.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Kami menggunakan cookies untuk tujuan berikut:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Cookies yang diperlukan: untuk operasi website</li>
                    <li>
                      Cookies preferensi: untuk mengingat preferensi dan
                      pengaturan Anda
                    </li>
                    <li>
                      Cookies statistik: untuk mengumpulkan data tentang
                      bagaimana pengunjung menggunakan website kami
                    </li>
                    <li>
                      Cookies pemasaran: untuk melacak pengunjung di seluruh
                      website untuk tujuan pemasaran
                    </li>
                  </ul>
                  <p className="mt-2 text-muted-foreground">
                    Anda dapat mengatur browser Anda untuk menolak semua atau
                    beberapa cookies, atau untuk memberi tahu Anda ketika
                    cookies dikirim. Namun, jika Anda tidak menerima cookies,
                    Anda mungkin tidak dapat menggunakan beberapa bagian dari
                    layanan kami.
                  </p>
                </div>

                <Separator />

                <div id="security" className="scroll-mt-20">
                  <h2 className="text-2xl  tracking-tight">6. Keamanan Data</h2>
                  <p className="mt-2 text-muted-foreground">
                    Keamanan data Anda penting bagi kami. Kami menggunakan
                    langkah-langkah keamanan teknis dan organisasi yang sesuai
                    untuk melindungi informasi pribadi Anda dari kehilangan,
                    penyalahgunaan, dan akses, pengungkapan, perubahan, atau
                    penghancuran yang tidak sah.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Langkah-langkah keamanan kami meliputi:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Enkripsi data sensitif</li>
                    <li>Firewall dan sistem deteksi intrusi</li>
                    <li>Akses terbatas ke informasi pribadi</li>
                    <li>Pemantauan keamanan 24/7</li>
                    <li>Pelatihan keamanan untuk karyawan</li>
                  </ul>
                  <p className="mt-2 text-muted-foreground">
                    Meskipun kami berusaha untuk melindungi informasi pribadi
                    Anda, tidak ada metode transmisi melalui internet atau
                    metode penyimpanan elektronik yang 100% aman. Oleh karena
                    itu, kami tidak dapat menjamin keamanan absolutnya.
                  </p>
                </div>

                <Separator />

                <div id="rights" className="scroll-mt-20">
                  <h2 className="text-2xl  tracking-tight">
                    7. Hak Privasi Anda
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Tergantung pada lokasi Anda, Anda mungkin memiliki hak-hak
                    tertentu terkait dengan data pribadi Anda, termasuk:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Hak untuk mengakses informasi pribadi Anda</li>
                    <li>Hak untuk memperbaiki informasi yang tidak akurat</li>
                    <li>Hak untuk menghapus informasi Anda</li>
                    <li>Hak untuk membatasi pemrosesan</li>
                    <li>Hak untuk portabilitas data</li>
                    <li>Hak untuk menolak pemrosesan</li>
                    <li>
                      Hak untuk tidak tunduk pada pengambilan keputusan otomatis
                    </li>
                  </ul>
                  <p className="mt-2 text-muted-foreground">
                    Untuk menggunakan hak-hak ini, silakan hubungi kami
                    menggunakan detail kontak yang disediakan di bawah. Kami
                    akan merespons permintaan Anda dalam jangka waktu yang
                    sesuai dengan hukum yang berlaku.
                  </p>
                </div>

                <Separator />

                <div id="children" className="scroll-mt-20">
                  <h2 className="text-2xl  tracking-tight">
                    8. Privasi Anak-anak
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Layanan kami tidak ditujukan untuk digunakan oleh anak-anak
                    di bawah usia 18 tahun. Kami tidak dengan sengaja
                    mengumpulkan informasi pribadi dari anak-anak di bawah 18
                    tahun. Jika Anda adalah orang tua atau wali dan Anda
                    mengetahui bahwa anak Anda telah memberikan kami informasi
                    pribadi, silakan hubungi kami. Jika kami mengetahui bahwa
                    kami telah mengumpulkan informasi pribadi dari anak-anak
                    tanpa verifikasi persetujuan orang tua, kami akan mengambil
                    langkah-langkah untuk menghapus informasi tersebut dari
                    server kami.
                  </p>
                </div>

                <Separator />

                <div id="international" className="scroll-mt-20">
                  <h2 className="text-2xl  tracking-tight">
                    9. Transfer Data Internasional
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Informasi pribadi Anda dapat ditransfer ke, dan diproses di,
                    negara-negara selain negara tempat tinggal Anda.
                    Negara-negara ini mungkin memiliki undang-undang
                    perlindungan data yang berbeda dari negara Anda.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Jika kami mentransfer data Anda ke negara lain, kami akan
                    mengambil langkah-langkah untuk memastikan bahwa informasi
                    pribadi Anda tetap dilindungi sesuai dengan Kebijakan
                    Privasi ini dan hukum yang berlaku. Langkah-langkah ini
                    mungkin termasuk menerapkan klausul kontrak standar yang
                    disetujui oleh otoritas perlindungan data yang relevan.
                  </p>
                </div>

                <Separator />

                <div id="changes" className="scroll-mt-20">
                  <h2 className="text-2xl  tracking-tight">
                    10. Perubahan Kebijakan Privasi
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke
                    waktu. Kami akan memberi tahu Anda tentang perubahan apa pun
                    dengan memposting Kebijakan Privasi baru di halaman ini dan,
                    jika perubahan bersifat signifikan, kami akan memberi tahu
                    Anda melalui email atau pemberitahuan pada website kami.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Kami mendorong Anda untuk meninjau Kebijakan Privasi ini
                    secara berkala untuk mengetahui perubahan apa pun. Perubahan
                    pada Kebijakan Privasi ini berlaku ketika diposting di
                    halaman ini.
                  </p>
                </div>

                <Separator />

                <div id="contact" className="scroll-mt-20">
                  <h2 className="text-2xl font-normal tracking-tight">
                    13. Hubungi Kami
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan
                    ini, silakan hubungi kami di:
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    <br />
                    Email: service.bulbacloud@gmail.com
                    <br />
                    Telepon: +62 851 5773 9978
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span>Terakhir diperbarui: 1 Maret 2023</span>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/terms-of-service">
                      Syarat dan Ketentuan
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
