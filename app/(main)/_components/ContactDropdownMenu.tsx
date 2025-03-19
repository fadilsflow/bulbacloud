import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Sesuaikan dengan path yang benar
import { Button } from "@/components/ui/button"; // Sesuaikan dengan path yang benar
import Link from "next/link";
import { DISCORD_LINK, INSTAGRAM_LINK, WHATSAPP_LINK } from "@/data/data";

interface ContactDropdownMenuProps {
  triggerLabel: string;
  triggerVariant?: "default" | "outline" | "ghost" | "link"; // Sesuaikan dengan variant yang tersedia
}

const ContactDropdownMenu: React.FC<ContactDropdownMenuProps> = ({
  triggerLabel,
  triggerVariant = "default",
}) => {
  // Daftar item kontak yang tetap
  const contactItems = [
    {
      label: "WhatsApp",
      href: `${WHATSAPP_LINK}?text=Halo%2C+saya+tertarik+dengan+layanan+Bulba+Cloud%21+Mohon+info+lebih+lanjut.`,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      label: "Discord",
      href: `${DISCORD_LINK}`,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      label: "Instagram",
      href: `${INSTAGRAM_LINK}`,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={triggerVariant}>{triggerLabel}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {contactItems.map((item, index) => (
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

export default ContactDropdownMenu;
