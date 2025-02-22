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
import { Menu, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Service", href: "/service" },
    { label: "Pricing", href: "/pricing" },
    { label: "Terms", href: "/terms-of-service" },
    { label: "Contact", href: "/contact" },
  ];

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
        "sticky top-0 bg-background/80 backdrop-blur-lg z-50 transition-all",
        isScrolled ? "border-b border-neutral-200 dark:border-neutral-800" : ""
      )}
    >
      <div className="mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <h1 className="text-2xl font-bold text-primary">Webtron</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="flex-grow flex justify-center absolute left-0 right-0">
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-blue-500"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
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
              >Get Started
                
              </Link>
            </Button>


            {/* Mobile Menu Trigger */}
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
                    {menuItems.map((item) => (
                      <SheetClose asChild key={item.label}>
                        <Link
                          href={item.href}
                          className={cn(
                            "px-4 py-3 transition-colors",
                            pathname === item.href
                              ? "text-blue-500"
                              : "text-foreground/80 hover:bg-accent hover:text-primary",
                            "focus:outline-none focus:ring-2 focus:ring-primary"
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
