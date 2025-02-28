"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function WhyChooseUs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Mengapa Memilih Kami?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Konten "Mengapa Memilih Kami" */}
        <Separator className="my-4" />
        <div>
          <h3 className="font-medium mb-2">Klien Kami</h3>
          <div className="grid grid-cols-3 gap-4">
            {["A", "B", "C", "D", "E", "F"].map((letter) => (
              <div
                key={letter}
                className="aspect-square bg-muted rounded-md flex items-center justify-center"
              >
                <div className="text-xl font-bold text-muted-foreground/40">
                  {letter}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}