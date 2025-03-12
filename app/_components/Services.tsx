import { Badge } from "@/components/ui/badge";

export default function Services() {
  return (
    <section
      id="features"
      className="w-full min-h-screen flex items-center justify-center  bg-background"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="mb-2 rounded-full">
              <Badge variant={"default"} className="rounded-full">new</Badge>Services
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tighter md:text-4xl">
            Expert Services That Define Our Excellence.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Hosting, VPS, Website, dan Domain untuk mendukung pertumbuhan
              bisnis Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
