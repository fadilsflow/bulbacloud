"use client";

interface ServicesLayoutProps {
  children: React.ReactNode;
  currrentService: string;
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
