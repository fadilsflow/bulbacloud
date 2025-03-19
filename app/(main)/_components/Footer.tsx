import Link from "next/link";

import Image from "next/image";

// Footer navigation items grouped by category
const footerNavItems = [
  {
    title: "Produk",
    items: [
      { title: "VPS Dedicated Indonesia", href: "/vps-dedicated-indonesia" },
      { title: "VPS Digital Ocean", href: "/vps-digital-ocean" },
      { title: "Minecraft Hosting", href: "/hosting-minecraft" },
      { title: "Domain Murah", href: "/domain-murah" },
      { title: "Solusi Website Terbaik", href: "/solusi-website-terbaik" },
    ],
  },
  {
    title: "Perusahaan",
    items: [
      { title: "Tentang Kami", href: "/about-us" },
      { title: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Bantuan",
    items: [
      { title: "FAQ", href: "/faq" },
      { title: "Kontak", href: "/contact" },
      { title: "Link", href: "/link" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Syarat dan Ketentuan", href: "/terms-of-service" },
      { title: "Kebijakan Privasi", href: "/privacy-policy" },
    ],
  },
];

// Social media links
const socialLinks = [
  {
    name: "Instagram",
    icon: "/instagram.svg",
    href: "https://instagram.com/bulbacloud",
  },
  {
    name: "Whatsapp",
    icon: "/whatsapp.svg",
    href: "https://wa.me/yourwhatsappnumber",
  },
  {
    name: "Discord",
    icon: "/discord.svg",
    href: "https://discord.gg/kdE5QC4t",
  },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className=" px-10 md:px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 py-8 md:py-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src={"/bulba.svg"}
                width={40}
                height={40}
                alt="Bulba Cloud"
                title="Bulba Cloud"
              />
              <span className="font-bold text-2xl">Bulba Cloud</span>
            </Link>

            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={40} // Sesuaikan ukuran sesuai kebutuhan
                    height={40} // Sesuaikan ukuran sesuai kebutuhan
                    className="h-5 w-5 dark:invert opacity-75 hover:opacity-100 transition-all duration-300" // Tambahkan class untuk styling
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {footerNavItems.map((group) => (
            <div key={group.title} className="space-y-3">
              <h3 className="text-sm font-medium">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6  items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-center">
            &copy; {new Date().getFullYear()} Bulba Cloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
