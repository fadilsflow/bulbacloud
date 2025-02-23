import NavService from "./_component/service-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavService/>
      <main className="flex-1">{children}</main>
    </div>
  );
}
