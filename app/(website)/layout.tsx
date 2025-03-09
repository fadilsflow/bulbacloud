"use client";

interface ServicesLayoutProps {
  children: React.ReactNode;
  currrentService: string;
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  return (
    <>
      <div className=" space-y-5">
        <div>{children}</div>
      </div>
    </>
  );
}
