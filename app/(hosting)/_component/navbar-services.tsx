import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Assuming you have a utility function for class names

export interface Service {
  id: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  href: string;
}

interface NavbarServiceProps {
  services: Service[];
}

export default function NavbarService({ services }: NavbarServiceProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-16 border-t  w-full z-50 border-b bg-background dark:bg-background">
      <nav className=" mx-auto px-4 md:px-6 bg-background">
        <div className="flex items-center h-16">
          <div className="flex space-x-6 overflow-x-auto no-scrollbar">
            {services.map((service) => {
              const isActive = pathname === service.href;
              const Icon = service.icon;

              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className={cn(
                    "flex items-center gap-2 h-16 px-10 font-medium transition-all border-b-2",
                    isActive
                      ? "text-foreground border-foreground"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 border-transparent "
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5 transition-colors",
                      isActive ? "text-foreground" : ""
                    )}
                  />
                  <span>{service.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
