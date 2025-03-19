import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  ); // Tidak ada layout utama
}
