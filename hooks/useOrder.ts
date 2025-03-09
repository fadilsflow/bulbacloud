// hooks/useOrder.ts
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
      title: "Melalui Form Order",
      description: "Dengan sistem yang mudah & otomatis",
      image: "/bulba.svg",
      action: () => {
        window.location.href = selectedService?.href
          ? `${selectedService.href}/form`
          : "/order/form";
      },
    },
    {
      title: "Melalui WhatsApp",
      description: "Untuk konsultasi & informasi penawaran",
      image: "/bulba.svg",
      action: () => {
        const message = `Halo, saya tertarik dengan paket ${selectedService?.name}. Boleh info lebih lanjut?`;
        window.open(
          `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
          "_blank"
        );
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