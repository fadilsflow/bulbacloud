import NotFound from "./NotFoundPage";

export const metadata = {
  title: "404 - Halaman Tidak Ditemukan",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return <NotFound />;
}
