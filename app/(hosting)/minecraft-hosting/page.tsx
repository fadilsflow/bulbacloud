// app/services/toko-online/page.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TokoOnline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Detail Toko Online</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Layanan pembuatan toko online yang lengkap dengan fitur pembayaran,
          manajemen produk, dan dashboard admin.
        </p>
        <div className="mt-4 space-y-4">
          <h3 className="font-medium">Apa yang Kami Tawarkan?</h3>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Integrasi payment gateway (Midtrans, Xendit, dll.)</li>
            <li>Manajemen produk dan inventaris</li>
            <li>Dashboard admin untuk memantau penjualan</li>
            <li>Desain responsif untuk mobile dan desktop</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
