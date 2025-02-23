"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Menu,
  Search,
  Code,
  ShoppingCart,
  Layout,
  Settings,
  Rocket,
  BookOpen,
  Users,
  HelpCircle,
  ArrowRight,
  Image as ImageIcon,
  Star,
  MessageSquare,
  MessageCircle,
  Terminal,
  Briefcase,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
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

const menuItems = [
  {
    label: "Services",
    href: "/",
    submenu: [
      {
        label: "Custom Websites",
        href: "/custom-websites",
        icon: <Code className="h-4 w-4" />,
        description: "Buat website sesuai kebutuhan bisnis Anda.",
      },
      {
        label: "E-commerce",
        href: "/ecommerce",
        icon: <ShoppingCart className="h-4 w-4" />,
        description: "Toko online dengan fitur lengkap untuk penjualan.",
      },
      {
        label: "Company Profile",
        href: "/company-profile",
        icon: <Briefcase className="h-4 w-4" />,
        description:
          "Website profesional untuk memperkenalkan perusahaan Anda.",
      },
      {
        label: "Portfolio Website",
        href: "/portfolio-website",
        icon: <ImageIcon className="h-4 w-4" />,
        description:
          "Tampilkan karya atau proyek Anda dengan website portofolio.",
      },
      {
        label: "Landing Page",
        href: "/landing-page",
        icon: <Layout className="h-4 w-4" />,
        description: "Halaman khusus untuk promosi produk atau layanan.",
      },
      {
        label: "Website Redesign",
        href: "/redesign",
        icon: <RefreshCw className="h-4 w-4" />,
        description: "Perbarui tampilan dan kinerja website lama Anda.",
      },
      {
        label: "SEO Optimization",
        href: "/seo-optimization",
        icon: <Search className="h-4 w-4" />,
        description: "Tingkatkan visibilitas website di mesin pencari.",
      },
      {
        label: "Maintenance & Support",
        href: "/maintenance",
        icon: <Settings className="h-4 w-4" />,
        description: "Layanan perawatan untuk menjaga website tetap optimal.",
      },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    submenu: [
      {
        label: "Our Work",
        href: "/work",
        icon: <Rocket className="h-4 w-4" />,
        description: "Lihat proyek-proyek terbaik yang telah kami selesaikan.",
      },
      {
        label: "Client Stories",
        href: "/stories",
        icon: <Users className="h-4 w-4" />,
        description: "Cerita sukses dari klien kami.",
      },
    ],
  },
  {
    label: "Community",
    href: "/community",
    submenu: [
      {
        label: "WhatsApp Group",
        href: "/whatsapp",
        icon: <MessageCircle className="h-4 w-4" />,
        description: "Bergabung dengan grup WhatsApp kami.",
      },
      {
        label: "Discord",
        href: "/discord",
        icon: <MessageSquare className="h-4 w-4" />,
        description: "Komunitas diskusi untuk pengembang dan bisnis.",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    submenu: [
      {
        label: "Blog",
        href: "/blog",
        icon: <BookOpen className="h-4 w-4" />,
        description: "Artikel terbaru seputar bisnis dan teknologi.",
      },
      {
        label: "Guides",
        href: "/guides",
        icon: <HelpCircle className="h-4 w-4" />,
        description: "Panduan praktis untuk mengelola website.",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    submenu: [
      {
        label: "Our Team",
        href: "/about/team",
        icon: <Users className="h-4 w-4" />,
        description: "Kenali tim profesional kami.",
      },
      {
        label: "Why Us?",
        href: "/about/why-choose-us",
        icon: <Star className="h-4 w-4" />,
        description: "Alasan memilih layanan kami.",
      },
    ],
  },
];

interface MenuItem {
  label: string;
  href: string;
  submenu: {
    label: string;
    href: string;
    icon: React.ReactNode;
    description: string;
  }[];
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
  if (isMobile) {
    return (
      <AccordionItem value={item.label}>
        <AccordionTrigger className="text-sm font-medium">
          {item.label}
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2 pl-4">
            {item.submenu.map((subItem) => (
              <Link
                key={subItem.label}
                href={subItem.href}
                className={cn(
                  "px-4 py-2 transition-colors",
                  pathname === subItem.href
                    ? "text-blue-500"
                    : "text-foreground/80 hover:bg-accent hover:text-primary"
                )}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <NavigationMenuItem>
      {item.submenu.length > 0 ? (
        <>
          <NavigationMenuTrigger className="hover:text-blue-500">
            {item.label}
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {item.submenu.map((subItem) => (
                <li key={subItem.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={subItem.href}
                      className="group flex items-center gap-3 p-3 rounded-md transition-all duration-300 "
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

                      {/* Animated Arrow Icon */}
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-muted-foreground group-hover:text-primary" />
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </>
      ) : (
        <Link
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors",
            pathname === item.href ? "text-blue-500" : " hover:text-blue-500"
          )}
        >
          {item.label}
        </Link>
      )}
    </NavigationMenuItem>
  );
}

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
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85vw] max-w-sm">
        <VisuallyHidden>
          <DialogTitle>Mobile Navigation</DialogTitle>
        </VisuallyHidden>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-bold">Menu</h2>
            <SheetClose className="opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <VisuallyHidden>Close menu</VisuallyHidden>
            </SheetClose>
          </div>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-10" />
          </div>
          <nav className="flex-1 flex flex-col gap-2">
            <Accordion type="single" collapsible>
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  isMobile
                />
              ))}
            </Accordion>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 bg-inherit z-50 transition-all",
        isScrolled ? " border-slate-6 dark:border-neutral-800" : ""
      )}
    >
      <div className="mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Image
            src="/vercel.svg"
            alt="Webtron Logo"
            width={20}
            height={20}
            className="flex-shrink-0 mr-2"
          />
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <h1 className="text-2xl font-bold text-primary ">Webtron</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="flex-grow flex justify-center z-10">
            <DesktopMenu menuItems={menuItems} pathname={pathname} />
          </div>

          {/* CTA and Mobile Menu */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden md:flex items-center gap-2 rounded-full"
              asChild
            >
              <Link
                href="https://wa.me/6285157739978?text=Bang%20mau%20order"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign in
              </Link>
            </Button>
            <Button
              variant="default"
              className="hidden md:flex items-center gap-2 rounded-full"
              asChild
            >
              <Link
                href="https://wa.me/6285157739978?text=Bang%20mau%20order"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <MobileMenu
              menuItems={menuItems}
              pathname={pathname}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
