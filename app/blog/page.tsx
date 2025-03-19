import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  AlertCircle,
  Mail,
  Clock,
  Tag,
  ArrowRight,
  BookOpen,
  Rss,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import ContactDropdownMenu from "../_components/ContactDropdownMenu";
import { createMetadata, viewport } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog - Tips dan Panduan Web Hosting & Domain | Bulba Cloud",
  description:
    "Temukan tips dan panduan lengkap seputar web hosting, domain, VPS, keamanan website, SEO, dan optimasi performa website untuk bisnis Anda.",
  path: "/blog",
  ogImage: "/bulba.png",
  ogImageAlt: "Blog Bulba Cloud - Tips dan Panduan Web Hosting",
  keywords: [
    "tips hosting",
    "tutorial wordpress",
    "panduan website",
    "optimasi SEO",
  ],
});
export { viewport };

export default function Blog() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog Bulba Cloud",
            description:
              "Tips dan panduan lengkap seputar web hosting dan domain",
            url: "https://bulba.cloud/blog",
            publisher: {
              "@type": "Organization",
              name: "Bulba Cloud",
              logo: {
                "@type": "ImageObject",
                url: "https://bulba.cloud/bulba.png",
              },
            },
          }),
        }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl  tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Blog Bulba Cloud
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Wawasan, tips, dan berita terbaru tentang cloud hosting,
                  domain, dan pengembangan website
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* No Blog Posts Alert */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Alert className="max-w-3xl mx-auto">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Belum Ada Artikel</AlertTitle>
              <AlertDescription>
                Kami sedang menyiapkan konten menarik untuk blog kami.
              </AlertDescription>
            </Alert>

            {/* Coming Soon */}
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl  tracking-tight">Konten Segera Hadir</h2>
              <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
                Tim kami sedang bekerja keras untuk menyiapkan artikel-artikel
                informatif dan bermanfaat. Kami akan segera meluncurkan blog
                kami dengan konten yang akan membantu Anda memaksimalkan
                penggunaan layanan cloud.
              </p>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl  tracking-tighter sm:text-4xl md:text-5xl">
                  Apa yang Dapat Anda Harapkan
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Blog kami akan mencakup berbagai topik menarik seputar
                  teknologi cloud dan pengembangan web
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {[
                {
                  icon: <BookOpen className="h-8 w-8" />,
                  title: "Tutorial & Panduan",
                  description:
                    "Panduan langkah demi langkah untuk memaksimalkan penggunaan layanan cloud dan pengembangan website.",
                },
                {
                  icon: <Rss className="h-8 w-8" />,
                  title: "Berita Industri",
                  description:
                    "Update terbaru tentang tren dan perkembangan di industri cloud hosting dan teknologi web.",
                },
                {
                  icon: <Tag className="h-8 w-8" />,
                  title: "Tips & Trik",
                  description:
                    "Kiat praktis untuk mengoptimalkan performa, keamanan, dan efisiensi website Anda.",
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Studi Kasus",
                  description:
                    "Cerita sukses dan pembelajaran dari pelanggan yang telah menggunakan layanan Bulba Cloud.",
                },
                {
                  icon: <Mail className="h-8 w-8" />,
                  title: "Pengumuman Produk",
                  description:
                    "Informasi tentang fitur dan layanan baru yang kami luncurkan di Bulba Cloud.",
                },
                {
                  icon: <AlertCircle className="h-8 w-8" />,
                  title: "Keamanan & Praktik Terbaik",
                  description:
                    "Panduan keamanan dan praktik terbaik untuk melindungi website dan data Anda.",
                },
              ].map((item, i) => (
                <Card key={i} className="bg-background">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {item.icon}
                    </div>
                    <h3 className="text-xl ">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Example Blog Posts Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl  tracking-tighter sm:text-4xl md:text-5xl">
                  Pratinjau Konten
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Berikut adalah contoh artikel yang akan segera hadir di blog
                  kami
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {[
                {
                  title: "10 Cara Mengoptimalkan Performa Website Anda",
                  excerpt:
                    "Pelajari cara meningkatkan kecepatan dan performa website Anda dengan tips dan trik yang mudah diterapkan.",
                  category: "Tutorial",
                  readTime: "8 menit",
                },
                {
                  title: "Panduan Lengkap Keamanan VPS Hosting",
                  excerpt:
                    "Lindungi server VPS Anda dari ancaman keamanan dengan panduan komprehensif ini.",
                  category: "Keamanan",
                  readTime: "12 menit",
                },
                {
                  title: "Tren Cloud Hosting yang Perlu Anda Ketahui di 2023",
                  excerpt:
                    "Temukan tren terbaru dalam industri cloud hosting dan bagaimana hal tersebut dapat memengaruhi bisnis Anda.",
                  category: "Industri",
                  readTime: "6 menit",
                },
              ].map((post, i) => (
                <Card key={i} className="flex flex-col h-full opacity-70">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg ">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground font-medium">
                        Gambar Pratinjau
                      </p>
                    </div>
                  </div>
                  <CardContent className="flex-grow p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <Separator orientation="vertical" className="h-4" />
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-normal">{post.title}</h3>
                      <p className="mt-2 text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button variant="ghost" className="w-full" disabled>
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl  tracking-tighter sm:text-4xl md:text-5xl">
                  Ada Pertanyaan Seputar Layanan Kami?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Sambil menunggu blog kami diluncurkan, Anda dapat menjelajahi
                  halaman FAQ atau menghubungi tim dukungan kami
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/faq">Lihat FAQ</Link>
                </Button>
                <ContactDropdownMenu
                  triggerLabel="Hubungi Kami"
                  triggerVariant="outline"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
