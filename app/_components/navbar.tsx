"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Menu,
  Users,
  ArrowRight,
  MessageCircle,
  Gamepad,
  Cloud,
  Headphones,
  Handshake,
  ChevronRight,
  HelpCircle,
  LifeBuoy,
  ShieldCheck,
  ClipboardList,
  Scale,
  Newspaper,
  Building,
  ImageIcon,
  UsersRound,
  Mic,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ModeToggle } from "@/components/mode-toggle";
import { DialogTitle } from "@/components/ui/dialog";

// Type definitions
interface SubMenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description: string;
  children?: SubMenuItem[];
}

interface MenuItem {
  label: string;
  href: string;
  submenu: SubMenuItem[];
}

// Menu data
const menuItems: MenuItem[] = [
  {
    label: "Hosting",
    href: "/hosting",
    submenu: [
      {
        label: "VPS Hosting Dedicated Indonesia",
        href: "/vps-dedicated-indonesia",
        icon: <Cloud className="h-4 w-4" />,
        description: "Hosting fleksibel dan scalable berbasis cloud.",
      },
      {
        label: "Minecraft Hosting",
        href: "/hosting-minecraft",
        icon: <Gamepad className="h-4 w-4" />,
        description:
          "Server Minecraft dengan performa tinggi dan harga terjangkau.",
      },

      {
        label: "VPS Digital Ocean",
        href: "/vps-digital-ocean",
        icon: <Cloud className="h-4 w-4" />,
        description: "Hosting fleksibel dan scalable berbasis cloud.",
      },
    ],
  },
  {
    label: "Solusi Website Terbaik",
    href: "/solusi-website-terbaik",
    submenu: [],
  },
  {
    label: "Domain Murah",
    href: "/domain-murah",
    submenu: [],
  },
  {
    label: "Informasi",
    href: "/informasi",
    submenu: [
      {
        label: "Company",
        href: "/company",
        icon: <Building className="h-4 w-4" />, // Lebih sesuai untuk perusahaan
        description: "Informasi tentang perusahaan kami.",
        children: [
          {
            label: "About Us",
            href: "/about-us",
            icon: <Users className="h-4 w-4" />, // Lebih cocok untuk tim/perusahaan
            description: "Pelajari tentang misi dan visi kami.",
          },
          {
            label: "Blog",
            href: "/blog",
            icon: <Newspaper className="h-4 w-4" />, // Lebih sesuai untuk blog atau berita
            description: "Artikel terbaru tentang bisnis & teknologi.",
          },
          {
            label: "Media Kit",
            href: "/media-kit",
            icon: <ImageIcon className="h-4 w-4" />, // Ikon untuk branding & media
            description: "Unduh logo dan aset brand kami.",
          },
        ],
      },
      {
        label: "Legal",
        href: "/legal",
        icon: <Scale className="h-4 w-4" />, // Lebih sesuai untuk kebijakan hukum
        description: "Dokumen hukum & kebijakan privasi.",
        children: [
          {
            label: "Terms of Service",
            href: "/terms-of-service",
            icon: <ClipboardList className="h-4 w-4" />,
            description: "Syarat dan ketentuan layanan kami.",
          },
          {
            label: "Privacy Policy",
            href: "/privacy-policy",
            icon: <ShieldCheck className="h-4 w-4" />, // Lebih cocok untuk keamanan data
            description: "Kebijakan kami dalam melindungi data Anda.",
          },
        ],
      },
      {
        label: "Support",
        href: "/support",
        icon: <LifeBuoy className="h-4 w-4" />, // Ikon lebih sesuai untuk dukungan pelanggan
        description: "Dapatkan bantuan dan dukungan.",
        children: [
          {
            label: "FAQ",
            href: "/faq",
            icon: <HelpCircle className="h-4 w-4" />,
            description: "Jawaban atas pertanyaan umum.",
          },
          {
            label: "Customer Support",
            href: "/contact/support",
            icon: <Headphones className="h-4 w-4" />,
            description: "Hubungi tim dukungan pelanggan kami.",
          },
        ],
      },
      {
        label: "Community",
        href: "/community",
        icon: <UsersRound className="h-4 w-4" />, // Lebih cocok untuk komunitas
        description: "Terhubung dengan komunitas kami.",
        children: [
          {
            label: "Kemitraan",
            href: "/contact/partnership",
            icon: <Handshake className="h-4 w-4" />,
            description: "Bekerja sama dengan kami untuk solusi bisnis.",
          },
          {
            label: "Komunitas WhatsApp",
            href: "/",
            icon: (
              <Image
                src="/whatsapp.svg"
                alt="Instagram Logo"
                width={18}
                height={18}
                className="dark:invert opacity-75 hover:opacity-100 transition-all duration-300 "
              />
            ),
            description: "Gabung dengan komunitas di WhatsApp.",
          },
          {
            label: "Komunitas Discord",
            href: "https://discord.gg/kdE5QC4t",
            icon: (
              <Image
                src="/discord.svg"
                alt="Discord Logo"
                width={20}
                height={20}
                className="dark:invert"
              />
            ),
            description: "Komunitas untuk diskusi bisnis & teknologi.",
          },
        ],
      },
    ],
  },
];

function MobileMenuItem({
  item,
  pathname,
}: {
  item: SubMenuItem;
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {item.children ? (
        // Item with children
        <div className="flex flex-col">
          <button
            className={cn(
              "flex items-center justify-between w-full px-4 py-2 text-sm transition-colors",
              pathname === item.href
                ? "text-blue-500"
                : "text-foreground/80 hover:text-blue-500"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center gap-2">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <ChevronRight
              className={cn(
                "h-4 w-4 transition-transform",
                isOpen ? "rotate-90" : ""
              )}
            />
          </button>

          {/* Children submenu */}
          {isOpen && (
            <div className="flex flex-col space-y-1 pl-8 mt-1 mb-2">
              {item.children.map((child) => (
                <SheetClose key={child.label} asChild>
                  <Link
                    href={child.href}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 text-xs transition-colors",
                      pathname === child.href
                        ? "text-blue-500"
                        : "text-foreground/80 hover:text-blue-500"
                    )}
                  >
                    {child.icon}
                    <span>{child.label}</span>
                  </Link>
                </SheetClose>
              ))}
            </div>
          )}
        </div>
      ) : (
        // Item without children
        <SheetClose asChild>
          <Link
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-4 py-2 text-sm transition-colors",
              pathname === item.href
                ? "text-blue-500"
                : "text-foreground/80 hover:text-blue-500"
            )}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        </SheetClose>
      )}
    </div>
  );
}
function MenuItem({
  item,
  pathname,
  isMobile = false,
}: {
  item: MenuItem;
  pathname: string;
  isMobile?: boolean;
}) {
  // Render for mobile view
  if (isMobile) {
    return (
      <>
        {item.submenu && item.submenu.length > 0 ? (
          // Item with submenu (use Accordion)
          <AccordionItem value={item.label} className="border-b-0">
            <AccordionTrigger className="py-3 px-4 text-sm font-medium hover:no-underline">
              {item.label}
            </AccordionTrigger>
            <AccordionContent className="pb-1">
              <div className="flex flex-col space-y-1 pl-4">
                {item.submenu.map((subItem) => (
                  <MobileMenuItem
                    key={subItem.label}
                    item={subItem}
                    pathname={pathname}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ) : (
          // Item without submenu (simple Link)
          <SheetClose asChild>
            <Link
              href={item.href}
              className={cn(
                "flex items-center py-3 px-4 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-blue-500 bg-blue-50 dark:bg-blue-950/20"
                  : "text-foreground hover:text-blue-500"
              )}
            >
              {item.label}
            </Link>
          </SheetClose>
        )}
      </>
    );
  }

  // Render untuk desktop view (tambahkan kode desktop view di sini)
  return (
    <NavigationMenuItem>
      {item.submenu.length > 0 ? (
        <>
          <NavigationMenuTrigger className="hover:text-blue-500 font-bold">
            {item.label}
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            {/* Special case for Informasi menu which has nested children */}
            {item.label === "Informasi" ? (
              <div className="grid grid-cols-2 gap-3 p-4 md:w-[600px] lg:w-[700px]">
                {item.submenu.map((category) => (
                  <div key={category.label} className="col-span-1">
                    <div className="flex items-center gap-2 mb-2">
                      {category.icon}
                      <h3 className="text-sm font-medium">{category.label}</h3>
                    </div>

                    <div className="pl-6">
                      {category.children?.map((subItem) => (
                        <NavigationMenuLink asChild key={subItem.label}>
                          <Link
                            href={subItem.href}
                            className="flex items-center gap-2 p-2 text-sm rounded-md hover:bg-muted transition-colors"
                          >
                            {subItem.icon}
                            <span>{subItem.label}</span>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Regular menu without nested children */
              <ul className="grid w-[400px] gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {item.submenu.map((subItem) => (
                  <li key={subItem.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={subItem.href}
                        className="group flex  items-center gap-3 p-3 rounded-md transition-all duration-300"
                      >
                        {/* Icon Container */}
                        <div className="flex items-center justify-center p-2 rounded-md bg-background border border-slate-200 dark:border-neutral-700 group-hover:border-primary transition-colors duration-300">
                          {subItem.icon}
                        </div>

                        {/* Text Container */}
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                            {subItem.label}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {subItem.description}
                          </p>
                        </div>

                        {/* Arrow Icon */}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-muted-foreground group-hover:text-primary" />
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            )}
          </NavigationMenuContent>
        </>
      ) : (
        // without submenu
        <Link
          href={item.href}
          className={cn(
            "text-sm font-bold transition-colors p-4",
            pathname === item.href ? "text-blue-500" : "hover:text-blue-500"
          )}
        >
          {item.label}
        </Link>
      )}
    </NavigationMenuItem>
  );
}

// DesktopMenu Component
function DesktopMenu({
  menuItems,
  pathname,
}: {
  menuItems: MenuItem[];
  pathname: string;
}) {
  return (
    <div className="hidden md:flex items-center gap-8">
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((item) => (
            <MenuItem key={item.label} item={item} pathname={pathname} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

// MobileMenu Component
function MobileMenu({
  menuItems,
  pathname,
  isOpen,
  setIsOpen,
}: {
  menuItems: MenuItem[];
  pathname: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
        <VisuallyHidden>
          <DialogTitle>Mobile Navigation</DialogTitle>
        </VisuallyHidden>
        <div className="flex flex-col h-full">
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <Image
                src="/bulba.svg"
                alt="Bulba Logo"
                width={24}
                height={24}
                className="flex-shrink-0"
              />
              <span className="text-lg font-bold">BULBA.CLOUD</span>
            </div>
            <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <VisuallyHidden>Close menu</VisuallyHidden>
            </SheetClose>
          </div>

          {/* Navigation content */}
          <div className="flex-1 overflow-y-auto py-4">
            <Accordion type="single" collapsible className="w-full">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  isMobile
                />
              ))}
            </Accordion>
          </div>

          {/* Footer with social links and contact button */}
          <div className="p-4 border-t">
            <div className="flex items-center justify-center gap-6 mb-4">
              <Link
                href="https://discord.gg/kdE5QC4t"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-75 hover:opacity-100 transition-all"
              >
                <Image
                  src="/discord.svg"
                  alt="Discord Logo"
                  width={20}
                  height={20}
                  className="dark:invert"
                />
              </Link>
              <Link
                href={"https://www.instagram.com/bulba.cloud"}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-75 hover:opacity-100 transition-all"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram Logo"
                  width={20}
                  height={20}
                  className="dark:invert"
                />
              </Link>
              <ModeToggle />
            </div>
            <Button className="w-full" asChild>
              <Link
                href="https://wa.me/6285157739978?text=Bang%20mau%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="Instagram Logo"
                  width={18}
                  height={18}
                  className="dark:invert opacity-75 hover:opacity-100 transition-all duration-300 "
                />
                Hubungi via Whatsapp
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// Main Navbar Component
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 px-10 dark:bg-background border-b ",
        isScrolled
          ? "bg-background dark:bg-background  "
          : "bg-background dark:bg-background "
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <Image
              src="/bulba.svg"
              alt="Bulba Logo"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            <Image
              src="/bulba-text.svg"
              alt="Bulba Logo"
              width={60}
              height={60}
              className="flex-shrink-0 dark:invert"
            />
            {/* <h1 className="text-xl font-bold ">BULBA.CLOUD</h1> */}
          </Link>

          {/* Desktop Menu */}
          <div className="ml-3 flex-grow flex justify-between">
            <DesktopMenu menuItems={menuItems} pathname={pathname} />
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={"https://discord.gg/kdE5QC4t"}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Image
                src="/discord.svg"
                alt="Discord Logo"
                width={18}
                height={18}
                className="dark:invert opacity-75 hover:opacity-100 transition-all duration-300"
              />
            </Link>
            <Link
              href={"https://www.instagram.com/bulba.cloud"}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Image
                src="/whatsapp.svg"
                alt="Instagram Logo"
                width={18}
                height={18}
                className="dark:invert opacity-75 hover:opacity-100 transition-all duration-300 "
              />
            </Link>
            <Link
              href={"https://www.instagram.com/bulba.cloud"}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram Logo"
                width={18}
                height={18}
                className="dark:invert opacity-75 hover:opacity-100 transition-all duration-300 "
              />
            </Link>
            <ModeToggle />
            {/* <Button
              variant={"secondary"}
              className="px-3 py-1 max-h-7 rounded-md text-xs "
              asChild
            >
              <Link href="/">Daftar</Link>
            </Button> */}

            {/* <Button
              variant={"outline"}
              className="px-3 py-1 max-h-7 rounded-md text-xs bg-blue-500 text-white hover:bg-blue-600"
              asChild
            >
              <Link href="/">Login</Link>
            </Button> */}

            {/* Mobile Menu */}
            <MobileMenu
              menuItems={menuItems}
              pathname={pathname}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
