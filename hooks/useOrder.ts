// hooks/useOrder.ts
// Hook useOrder digunakan untuk mengelola pemesanan layanan melalui WhatsApp atau Discord.

import { DISCORD_LINK, WHATSAPP_LINK } from "@/data/data";
import { useState } from "react";

export const useOrder = () => {
  // State untuk menyimpan layanan yang dipilih
  const [selectedService, setSelectedService] = useState<any | null>(null);
  // State untuk mengontrol status dialog pemesanan
  const [dialogOpen, setDialogOpen] = useState(false);

  // Fungsi untuk menangani klik pemesanan
  const handleOrderClick = (service: any) => () => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  // Opsi pemesanan yang tersedia
  const orderOptions = [
    {
      title: "Melalui WhatsApp",
      description: "Chat langsung untuk konsultasi dan informasi harga.",
      image: "/whatsapp-payment.svg",
      action: () => {
        const message = `Halo, saya tertarik dengan paket ${selectedService?.name}. Bisa berikan informasi lebih lanjut?`;
        window.open(
          `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      },
    },
    {
      title: "Melalui Discord",
      description:
        "Bergabung dengan komunitas untuk diskusi dan informasi layanan.",
      image: "/discord-payment.svg",
      action: () => {
        window.open(`${DISCORD_LINK}`, "_blank");
      },
    },
  ];

  return {
    selectedService,
    dialogOpen,
    setDialogOpen,
    handleOrderClick,
    orderOptions,
  };
};
 