import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import {
  DISCORD_LINK,
  INSTAGRAM_LINK,
  WEBSITE_URL,
  WHATSAPP_COMMUNITY_LINK,
  WHATSAPP_LINK,
} from "@/data/data";

export default function LinktreePage() {
  const links = [
    {
      title: "Main Website",
      href: WEBSITE_URL,
    },
    {
      title: "Discord",
      href: DISCORD_LINK,
    },
    {
      title: "Whatsapp Group",
      href: WHATSAPP_COMMUNITY_LINK,
    },
    {
      title: "Instagram",
      href: INSTAGRAM_LINK,
    },
    {
      title: "Customer Service",
      href: WHATSAPP_LINK,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-dark p-4">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Header with menu */}
        <div className="w-full flex justify-end ">
          <ModeToggle />
        </div>

        {/* Profile section */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src={"/bulba.svg"}
            alt="Bulba Cloud"
            title="Bulba Cloud"
            width={100}
            height={100}
          />

          <h1 className="text-2xl font-bold mb-1">Bulba Cloud</h1>
          <p className="text-foreground/70 text-center text-sm tracking-wide">
            Solusi Website, Domain, dan VPS Hosting terjangkau.
          </p>
        </div>

        {/* Links section */}
        <div className="w-full space-y-4 mb-8 flex flex-col justify-center ">
          <h2 className="text-center ">Official Links</h2>
          {links.map((link, index) => (
            <LinkCard key={index} title={link.title} href={link.href} />
          ))}
        </div>

        {/* Simple Footer */}
        <footer className="text-foreground/70 text-sm mt-auto py-4">
          &copy; {new Date().getFullYear()} Bulba Cloud. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

function LinkCard({ title, href }: { title: string; href: string }) {
  return (
    <Button
      asChild
      className="px-10 py-2 dark:border-primary bg-primary/90 text-white text-left  transition-all  dark:bg-primary/40 dark:hover:bg-primary/30"
      variant={"outline"}
    >
      <Link
        href={href}
        className="flex items-left text-left justify-center p-4"
      >
        {title}
      </Link>
    </Button>
  );
}
