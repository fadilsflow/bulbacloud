"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

interface OrderMethodOption {
  title: string;
  description: string;
  image: string;
  action: () => void;
}

interface OrderMethodDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  options: OrderMethodOption[];
  title?: string;
}


export function OrderMethodDialog({
  open,
  onOpenChange,
  options,
  title = "Pilihan Metode Order",
}: OrderMethodDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
        <DialogHeader className="p-4 pb-2">
          <DialogTitle className="text-center text-xl font-bold">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
          {options.map((option, index) => (
            <Card
              key={index}
              className="cursor-pointer border overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-primary"
              onClick={() => {
                option.action();
                onOpenChange(false);
              }}
            >
              <div className="relative w-full h-32 overflow-hidden">
                <Image
                  src={option.image || "/placeholder.svg"}
                  alt={option.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-3 text-center">
                <h3 className="text-base font-semibold mb-1">{option.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {option.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {options.length === 2 && (
          <div className="flex justify-center items-center py-2 pb-4">
            <div className="text-center px-4 py-1 bg-muted rounded-full text-xs font-medium">
              ATAU
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
