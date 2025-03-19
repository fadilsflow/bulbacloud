import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Sesuaikan dengan path yang benar
import { Button } from "@/components/ui/button"; // Sesuaikan dengan path yang benar
import Link from "next/link";

interface PaketDropdownMenuProps {
  triggerLabel: string;
  triggerVariant?: "default" | "outline" | "ghost" | "link"; // Sesuaikan dengan variant yang tersedia
}

const PaketDropdownMenu: React.FC<PaketDropdownMenuProps> = ({
  triggerLabel,
  triggerVariant = "default",
}) => {
  // Daftar item kontak yang tetap
  const PaketItems = [
    {
      label: "VPS Dedicated Indonesia",
      href: "vps-dedicated-indonesia",
      target: "_self",
      rel: "noopener noreferrer",
    },
    {
      label: "Minecraft Hosting",
      href: "hosting-minecraft",
      target: "_self",
      rel: "noopener noreferrer",
    },
    {
      label: "VPS Digital Ocean",
      href: "vps-digital-ocean",
      target: "_self",
      rel: "noopener noreferrer",
    },
    {
      label: "Solusi Website Terbaik",
      href: "solusi-website-terbaik",
      target: "_self",
      rel: "noopener noreferrer",
    },
    {
      label: "Domain Murah",
      href: "domain-murah",
      target: "_self",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={triggerVariant}>{triggerLabel}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {PaketItems.map((item, index) => (
          <DropdownMenuItem key={index}>
            <Link
              href={item.href}
              target={item.target || "_self"}
              rel={item.rel || "noopener noreferrer"}
              className="w-full"
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PaketDropdownMenu;
