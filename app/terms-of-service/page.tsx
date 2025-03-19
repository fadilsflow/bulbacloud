import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, FileText } from "lucide-react";
import { createMetadata, viewport } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Syarat dan Ketentuan - Bulba Cloud",
  description:
    "Baca syarat dan ketentuan penggunaan layanan Bulba Cloud. Ketahui hak dan kewajiban Anda sebagai pengguna layanan hosting, domain, dan server kami.",
  path: "/terms-of-service",
  ogImage: "/bulba.png",
  ogImageAlt: "Syarat dan Ketentuan Bulba Cloud",
  keywords: [
    "Syarat dan Ketentuan",
    "Terms of Service",
    "Ketentuan Penggunaan",
    "Bulba Cloud",
    "Layanan Hosting",
    "Layanan Domain",
  ],
  noIndex: false, // Opsional: Jika halaman ini tidak perlu diindeks oleh mesin pencari
});

export { viewport };

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Syarat dan Ketentuan
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
                        href="#acceptance"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        1. Penerimaan Syarat
                      </a>
                    </li>
                    <li>
                      <a
                        href="#services"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        2. Deskripsi Layanan
                      </a>
                    </li>
                    <li>
                      <a
                        href="#account"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        3. Akun Pengguna
                      </a>
                    </li>
                    <li>
                      <a
                        href="#payment"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        4. Pembayaran dan Penagihan
                      </a>
                    </li>
                    <li>
                      <a
                        href="#usage"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        5. Penggunaan yang Dilarang
                      </a>
                    </li>
                    <li>
                      <a
                        href="#content"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        6. Konten Pengguna
                      </a>
                    </li>
                    <li>
                      <a
                        href="#intellectual"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        7. Hak Kekayaan Intelektual
                      </a>
                    </li>
                    <li>
                      <a
                        href="#termination"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        8. Penghentian Layanan
                      </a>
                    </li>
                    <li>
                      <a
                        href="#warranty"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        9. Jaminan dan Batasan Tanggung Jawab
                      </a>
                    </li>
                    <li>
                      <a
                        href="#indemnification"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        10. Ganti Rugi
                      </a>
                    </li>
                    <li>
                      <a
                        href="#governing"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        11. Hukum yang Berlaku
                      </a>
                    </li>
                    <li>
                      <a
                        href="#changes"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        12. Perubahan Syarat
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        13. Hubungi Kami
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    Dokumen ini mengatur penggunaan layanan Bulba Cloud. Harap
                    baca dengan seksama.
                  </p>
                </div>

                <div id="acceptance" className="scroll-mt-20">
                  <h2 className="text-2xl font-normal tracking-tight">
                    1. Penerimaan Syarat
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Dengan mengakses atau menggunakan layanan Bulba Cloud, Anda
                    menyetujui untuk terikat oleh syarat dan ketentuan ini. Jika
                    Anda tidak setuju dengan bagian apa pun dari syarat ini,
                    Anda tidak boleh mengakses layanan.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Syarat dan Ketentuan ini berlaku untuk semua pengunjung,
                    pengguna, dan pihak lain yang mengakses atau menggunakan
                    layanan Bulba Cloud. Dengan mengakses atau menggunakan
                    layanan, Anda setuju untuk terikat oleh Syarat dan Ketentuan
                    ini. Jika Anda tidak setuju dengan bagian apa pun dari
                    Syarat dan Ketentuan, maka Anda tidak boleh mengakses
                    layanan.
                  </p>
                </div>

                <Separator />

                <div id="services" className="scroll-mt-20">
                  <h2 className="text-2xl font-normal tracking-tight">
                    2. Deskripsi Layanan
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Bulba Cloud menyediakan berbagai layanan hosting, termasuk
                    namun tidak terbatas pada VPS hosting, domain, dan layanan
                    website. Layanan ini disediakan sebagaimana adanya dan
                    sebagaimana tersedia tanpa jaminan apa pun.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Bulba Cloud berhak untuk mengubah, menangguhkan, atau
                    menghentikan, sementara atau permanen, layanan (atau bagian
                    apa pun dari layanan) dengan atau tanpa pemberitahuan kapan
                    saja dan dari waktu ke waktu. Bulba Cloud tidak akan
                    bertanggung jawab kepada Anda atau pihak ketiga mana pun
                    atas perubahan, penangguhan, atau penghentian layanan.
                  </p>
                </div>

                <Separator />

                <div id="account" className="scroll-mt-20">
                  <h2 className="text-2xl font-normal tracking-tight">
                    3. Akun Pengguna
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Untuk menggunakan layanan tertentu, Anda mungkin perlu
                    membuat akun. Anda bertanggung jawab untuk menjaga
                    kerahasiaan kredensial akun Anda dan untuk semua aktivitas
                    yang terjadi di bawah akun Anda.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Anda setuju untuk segera memberi tahu Bulba Cloud tentang
                    penggunaan yang tidak sah dari akun Anda atau pelanggaran
                    keamanan lainnya. Bulba Cloud tidak akan bertanggung jawab
                    atas kerugian apa pun yang timbul dari penggunaan akun Anda
                    yang tidak sah, dengan ketentuan bahwa Anda telah memberi
                    tahu Bulba Cloud tentang penyalahgunaan tersebut.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Anda harus berusia minimal 18 tahun untuk membuat akun dan
                    menggunakan layanan. Dengan membuat akun dan menggunakan
                    layanan, Anda menyatakan dan menjamin bahwa Anda berusia 18
                    tahun ke atas.
                  </p>
                </div>

                <Separator />

                <div id="payment" className="scroll-mt-20">
                  <h2 className="text-2xl font-normal tracking-tight">
                    4. Pembayaran dan Penagihan
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Beberapa layanan Bulba Cloud memerlukan pembayaran. Anda
                    setuju untuk membayar semua biaya yang terkait dengan
                    penggunaan layanan tersebut. Bulba Cloud dapat mengubah
                    harga layanan kapan saja dengan pemberitahuan sebelumnya.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Untuk layanan berlangganan, Anda akan ditagih di muka secara
                    berkala. Pembayaran akan dikenakan pada awal periode
                    berlangganan, dan pembayaran tidak dapat dikembalikan. Tidak
                    akan ada pengembalian atau kredit untuk periode berlangganan
                    yang sebagian, kecuali dinyatakan lain dalam kebijakan
                    pengembalian dana kami.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Anda bertanggung jawab untuk semua pajak yang berlaku, dan
                    Bulba Cloud tidak bertanggung jawab untuk menghitung,
                    mengumpulkan, melaporkan, atau mengirimkan pajak yang timbul
                    dari transaksi apa pun.
                  </p>
                </div>

                <Separator />

                <div id="usage" className="scroll-mt-20">
                  <h2 className="text-2xl font-normal tracking-tight">
                    5. Penggunaan yang Dilarang
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Anda setuju untuk tidak menggunakan layanan Bulba Cloud
                    untuk tujuan ilegal atau yang dilarang oleh syarat ini. Anda
                    tidak boleh menggunakan layanan dengan cara yang dapat
                    merusak, menonaktifkan, membebani, atau mengganggu server
                    atau jaringan Bulba Cloud.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Penggunaan yang dilarang termasuk, namun tidak terbatas
                    pada:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Melanggar hukum atau peraturan yang berlaku</li>
                    <li>
                      Menyebarkan malware, virus, atau kode berbahaya lainnya
                    </li>
                    <li>
                      Melakukan serangan DDoS atau aktivitas hacking lainnya
                    </li>
                    <li>
                      Menyebarkan konten yang melanggar hak kekayaan intelektual
                    </li>
                    <li>
                      Menyebarkan konten yang bersifat pornografi, kekerasan,
                      atau kebencian
                    </li>
                    <li>Mengirim spam atau pesan yang tidak diminta</li>
                    <li>
                      Mengumpulkan informasi pribadi pengguna lain tanpa izin
                    </li>
                  </ul>
                </div>

                <Separator />

                <div id="content" className="scroll-mt-20">
                  <h2 className="text-2xl font-normal tracking-tight">
                    6. Konten Pengguna
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Anda bertanggung jawab penuh atas semua konten yang Anda
                    unggah, posting, atau bagikan melalui layanan Bulba Cloud.
                    Anda menjamin bahwa Anda memiliki semua hak yang diperlukan
                    untuk konten tersebut dan bahwa konten tersebut tidak
                    melanggar hak pihak ketiga.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Bulba Cloud tidak mengklaim kepemilikan atas konten yang
                    Anda kirimkan, tetapi Anda memberikan Bulba Cloud lisensi
                    non-eksklusif, bebas royalti, dapat ditransfer, dan dapat
                    disublisensikan untuk menggunakan, menyalin, memodifikasi,
                    mendistribusikan, dan menampilkan konten tersebut sehubungan
                    dengan layanan yang disediakan.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Bulba Cloud berhak, tetapi tidak berkewajiban, untuk
                    memantau dan mengedit atau menghapus konten yang, menurut
                    kebijaksanaan Bulba Cloud, melanggar Syarat dan Ketentuan
                    ini atau dapat menyinggung, ilegal, atau melanggar hak pihak
                    lain, atau membahayakan atau mengancam keselamatan siapa
                    pun.
                  </p>
                </div>

                <Separator />

                <div id="intellectual" className="scroll-mt-20">
                  <h2 className="text-2xl font-normal tracking-tight">
                    7. Hak Kekayaan Intelektual
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Layanan dan konten asli (tidak termasuk konten yang
                    disediakan oleh pengguna), fitur, dan fungsi adalah dan akan
                    tetap menjadi properti eksklusif Bulba Cloud dan pemberi
                    lisensinya. Layanan dilindungi oleh hak cipta, merek dagang,
                    dan undang-undang lain di Indonesia dan negara lain.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Merek dagang, logo, nama layanan, dan nama merek Bulba Cloud
                    tidak boleh digunakan tanpa persetujuan tertulis sebelumnya
                    dari Bulba Cloud. Anda tidak boleh menggunakan merek dagang,
                    logo, atau materi berhak cipta lainnya untuk tujuan
                    komersial tanpa persetujuan tertulis dari Bulba Cloud.
                  </p>
                </div>

                <Separator />

                <div id="termination" className="scroll-mt-20">
                  <h2 className="text-2xl font-normal tracking-tight">
                    8. Penghentian Layanan
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Bulba Cloud dapat menghentikan atau menangguhkan akses Anda
                    ke layanan segera, tanpa pemberitahuan atau kewajiban
                    sebelumnya, untuk alasan apa pun, termasuk tanpa batasan
                    jika Anda melanggar Syarat dan Ketentuan.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Setelah penghentian, hak Anda untuk menggunakan layanan akan
                    segera berhenti. Jika Anda ingin menghentikan akun Anda,
                    Anda dapat berhenti menggunakan layanan atau menghubungi
                    Bulba Cloud untuk meminta penghapusan akun.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Semua ketentuan dalam Syarat dan Ketentuan yang menurut
                    sifatnya harus tetap berlaku setelah penghentian akan tetap
                    berlaku, termasuk, tanpa batasan, ketentuan kepemilikan,
                    penafian jaminan, ganti rugi, dan batasan tanggung jawab.
                  </p>
                </div>

                <Separator />

                <div id="warranty" className="scroll-mt-20">
                  <h2 className="text-2xl font-normal tracking-tight">
                    9. Jaminan dan Batasan Tanggung Jawab
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Layanan Bulba Cloud disediakan sebagaimana adanya dan
                    sebagaimana tersedia tanpa jaminan apa pun, baik tersurat
                    maupun tersirat, termasuk, namun tidak terbatas pada,
                    jaminan tersirat tentang kelayakan untuk diperdagangkan,
                    kesesuaian untuk tujuan tertentu, atau non-pelanggaran.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Bulba Cloud tidak menjamin bahwa layanan akan tidak
                    terganggu, bebas dari kesalahan, atau bebas dari komponen
                    berbahaya, atau bahwa konten atau server yang menyediakan
                    konten bebas dari virus atau komponen berbahaya lainnya.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Dalam keadaan apa pun, Bulba Cloud tidak akan bertanggung
                    jawab atas kerugian tidak langsung, insidental, khusus,
                    konsekuensial, atau kerusakan hukuman, termasuk, tanpa
                    batasan, kehilangan keuntungan, data, penggunaan, niat baik,
                    atau kerugian tidak berwujud lainnya yang diakibatkan oleh
                    (i) penggunaan atau ketidakmampuan Anda untuk menggunakan
                    layanan; (ii) akses tidak sah ke atau perubahan transmisi
                    atau data Anda; (iii) pernyataan atau perilaku pihak ketiga
                    mana pun di layanan; atau (iv) masalah lain yang terkait
                    dengan layanan.
                  </p>
                </div>

                <Separator />

                <div id="indemnification" className="scroll-mt-20">
                  <h2 className="text-2xl font-normal tracking-tight">
                    10. Ganti Rugi
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Anda setuju untuk membela, mengganti rugi, dan membebaskan
                    Bulba Cloud, afiliasinya, pemberi lisensi, dan penyedia
                    layanannya, serta masing-masing pejabat, direktur, karyawan,
                    kontraktor, agen, pemberi lisensi, pemasok, penerus, dan
                    penerima haknya dari dan terhadap klaim, kewajiban,
                    kerusakan, penilaian, penghargaan, kerugian, biaya,
                    pengeluaran, atau biaya (termasuk biaya pengacara yang
                    wajar) yang timbul dari atau terkait dengan pelanggaran Anda
                    terhadap Syarat dan Ketentuan ini atau penggunaan layanan
                    Anda, termasuk, namun tidak terbatas pada, konten pengguna
                    Anda, pelanggaran hak pihak ketiga, atau tindakan atau
                    kelalaian Anda.
                  </p>
                </div>

                <Separator />

                <div id="governing" className="scroll-mt-20">
                  <h2 className="text-2xl font-normal tracking-tight">
                    11. Hukum yang Berlaku
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Syarat dan Ketentuan ini akan diatur dan ditafsirkan sesuai
                    dengan hukum Indonesia, tanpa memperhatikan ketentuan
                    konflik hukumnya.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Kegagalan kami untuk menegakkan hak atau ketentuan apa pun
                    dari Syarat dan Ketentuan ini tidak akan dianggap sebagai
                    pengabaian hak-hak tersebut. Jika ada ketentuan dari Syarat
                    dan Ketentuan ini yang dianggap tidak sah atau tidak dapat
                    dilaksanakan oleh pengadilan, ketentuan yang tersisa dari
                    Syarat dan Ketentuan ini akan tetap berlaku.
                  </p>
                </div>

                <Separator />

                <div id="changes" className="scroll-mt-20">
                  <h2 className="text-2xl font-normal tracking-tight">
                    12. Perubahan Syarat
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Bulba Cloud berhak, atas kebijakannya sendiri, untuk
                    mengubah atau mengganti Syarat dan Ketentuan ini kapan saja.
                    Jika revisi bersifat material, kami akan memberikan
                    pemberitahuan setidaknya 30 hari sebelum syarat baru
                    berlaku. Apa yang merupakan perubahan material akan
                    ditentukan atas kebijakan kami sendiri.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Dengan terus mengakses atau menggunakan layanan kami setelah
                    revisi tersebut berlaku, Anda setuju untuk terikat oleh
                    syarat yang direvisi. Jika Anda tidak setuju dengan syarat
                    baru, Anda tidak lagi diizinkan untuk menggunakan layanan.
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
                  <span>Terakhir diperbarui: 18 Maret 2025</span>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/privacy-policy">
                      Kebijakan Privasi
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
