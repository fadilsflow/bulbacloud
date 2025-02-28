"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

import { cn } from "@/lib/utils";

const TechnologiesWeUse = () => {
  const technologies = [
    { name: "Next.js", logo: "/logos/nextjs.svg", url: "https://nextjs.org" },
    {
      name: "Tailwind CSS",
      logo: "/logos/tailwindcss.svg",
      url: "https://tailwindcss.com",
    },
    {
      name: "PostgreSQL",
      logo: "/logos/postgresql.svg",
      url: "https://www.postgresql.org",
    },
    {
      name: "shadcn/ui",
      logo: "/logos/shadcnui.svg",
      url: "https://ui.shadcn.com",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <TooltipProvider>
            {technologies.map((tech) => (
              <Tooltip key={tech.name}>
                <TooltipTrigger asChild>
                  <Link
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                  >
                    <div className="relative">
                      <Image
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        width={20}
                        height={20}
                        className=" invert-0 opacity-75 hover:opacity-100 transition-all duration-300 "
                      />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>

        <div className="flex items-center justify-center mt-4">
          <div
            className={cn(
              "rounded-full border border-neutral-200  bg-white px-2 py-1 text-xs font-medium text-neutral-800 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
            )}
          >
            <span>Crafted with Cutting-Edge Tools</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesWeUse;
