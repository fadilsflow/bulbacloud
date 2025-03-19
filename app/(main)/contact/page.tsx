import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageSquare } from "lucide-react";

import { createMetadata, viewport } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Hubungi Kami - Bulba Cloud",
  description:
    "Hubungi tim dukungan kami untuk pertanyaan seputar layanan hosting, domain, VPS atau bantuan teknis lainnya. Dukungan 24/7 siap membantu Anda.",
  path: "/contact",
  ogImage: "bulba.png",
  ogImageAlt: "Bulba Cloud",
  keywords: [
    "kontak",
    "layanan pelanggan",
    "dukungan teknis",
    "bantuan hosting",
  ],
});

export { viewport };

export default function Contact() {
  return (
    <main>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Hubungi Kami
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Kami siap membantu Anda. Pilih cara yang paling nyaman untuk
                  menghubungi kami.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {/* Email Card */}
              <Card className="bg-background">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-normal">Email</h3>
                    <p className="text-muted-foreground">
                      service.bulbacloud@gmail.com
                    </p>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="mailto:support@bulbacloud.com">
                      Kirim Email
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* WhatsApp Card */}
              <Card className="bg-background">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-normal">WhatsApp</h3>
                    <p className="text-muted-foreground">+62 812 3456 7890</p>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card className="bg-background">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-normal">Telepon</h3>
                    <p className="text-muted-foreground">+62 21 1234 5678</p>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="tel:+622112345678">Hubungi Kami</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Discord Card */}
              <Card className="bg-background">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <circle cx="9" cy="12" r="1" />
                      <circle cx="15" cy="12" r="1" />
                      <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
                      <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                      <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
                      <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.48-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-normal">Discord</h3>
                    <p className="text-muted-foreground">
                      Bergabung dengan komunitas kami
                    </p>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href="https://discord.gg/bulbacloud"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Discord
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Hours Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-normal tracking-tighter mb-6">
                Jam Operasional
              </h2>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-center">
                <div className="font-medium">Senin - Jumat:</div>
                <div>08:00 - 20:00 WIB</div>
                <div className="font-medium">Sabtu:</div>
                <div>09:00 - 16:00 WIB</div>
                <div className="font-medium">Minggu & Hari Libur:</div>
                <div>Tutup</div>
              </div>
              <p className="mt-6 text-muted-foreground">
                Dukungan teknis tersedia 24/7 melalui email dan tiket dukungan.
              </p>
            </div>
          </div>
        </section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Bulba Cloud",
            image: "https://bulba.cloud/bulba.png",
            url: "https://bulba.cloud",
            telephone: "+62-851-5773-9978",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jalan Contoh No. 123",
              addressLocality: "Jakarta",
              postalCode: "12345",
              addressCountry: "ID",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -6.123456,
              longitude: 106.789012,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "17:00",
            },
          }),
        }}
      />
    </main>
  );
}
