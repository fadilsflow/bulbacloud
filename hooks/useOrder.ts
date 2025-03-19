// hooks/useOrder.ts
import { DISCORD_LINK, WHATSAPP_LINK } from "@/data/data";
import { useState } from "react";

export const useOrder = () => {
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOrderClick = (service: any) => () => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  const orderOptions = [
    {
      title: "Melalui Whatsapp",
      description: "Untuk konsultasi & informasi penawaran",
      image: "/whatsapp-payment.svg",
      action: () => {
        const message = `Halo, saya tertarik dengan paket ${selectedService?.name}. Boleh info lebih lanjut?`;
        window.open(
          `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      },
    },
    {
      title: "Melalui Discord",
      description: "Untuk konsultasi & informasi penawaran",
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
