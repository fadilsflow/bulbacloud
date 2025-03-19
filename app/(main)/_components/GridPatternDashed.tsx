"use client";

import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

export function GridPatternDashed() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg p-20">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
