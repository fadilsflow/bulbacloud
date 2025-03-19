"use client";

import * as React from "react";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Badge } from "@/components/ui/badge";

// Data untuk setiap layanan
const hostingData = [
  {
    id: "h1",
    name: "Basic Hosting",
    price: 50000,
    storage: "10GB",
    bandwidth: "100GB",
  },
  {
    id: "h2",
    name: "Premium Hosting",
    price: 100000,
    storage: "50GB",
    bandwidth: "500GB",
  },
];

const vpsData = [
  { id: "v1", name: "VPS Basic", price: 200, cpu: "1 Core", ram: "2GB" },
  { id: "v2", name: "VPS Advanced", price: 400, cpu: "2 Cores", ram: "4GB" },
];

const websiteData = [
  { id: "w1", name: "Website Basic", price: 300, pages: 5, support: "Email" },
  { id: "w2", name: "Website Pro", price: 600, pages: 20, support: "24/7" },
];

const domainData = [
  { id: "d1", name: ".com Domain", price: 10, duration: "1 Year" },
  { id: "d2", name: ".net Domain", price: 15, duration: "1 Year" },
];

export type Product = {
  id: string;
  name: string;
  price: number;
  storage?: string;
  bandwidth?: string;
  cpu?: string;
  ram?: string;
  pages?: number;
  support?: string;
  duration?: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    id: "details",
    header: "Details",
    cell: ({ row }) => {
      const product = row.original;
      const details = Object.entries(product)
        .filter(([key]) => !["id", "name", "price"].includes(key))
        .map(([key, value]) => (
          <div key={key}>
            {key}: {value}
          </div>
        ));

      return <div className="space-y-1">{details}</div>;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 text-foreground "
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0, // Menghilangkan desimal
      }).format(price);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <Button
          variant="link"
          onClick={() => alert(`Ordering ${product.name}`)}
          className="p-0  text-foreground"
        >
          Order Now
        </Button>
      );
    },
  },
];

export function PricingSection() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [activeTab, setActiveTab] = React.useState("hosting");

  const getData = () => {
    switch (activeTab) {
      case "hosting":
        return hostingData;
      case "vps":
        return vpsData;
      case "website":
        return websiteData;
      case "domain":
        return domainData;
      default:
        return [];
    }
  };

  const table = useReactTable<Product>({
    data: getData() as Product[],
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <section
      id="pricing"
      className="w-full min-h-screen flex items-center justify-center bg-background py-12"
    >
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-2 bg-primary/20 text-primary rounded-full"
          >
            All Pricing
          </Badge>
          <h2 className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-4xl">
            Pilih Paket Sesuai Kebutuhan
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl mt-4 mx-auto">
            Hosting, VPS, dan domain dengan performa terbaik.
          </p>
        </div>

        <Tabs
          defaultValue="hosting"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="hosting">Hosting</TabsTrigger>
            <TabsTrigger value="vps">VPS</TabsTrigger>
            <TabsTrigger value="website">Website</TabsTrigger>
            <TabsTrigger value="domain">Domain</TabsTrigger>
          </TabsList>
          <TabsContent value="hosting">
            <div className="rounded-md border overflow-x-auto">
              <Table>
                <TableHeader className="bg-primary/10 rounded-xl">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableHead key={header.id} className="px-4 py-2">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id} className="px-4 py-2">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="vps">
            {/* Similar content for VPS tab */}
          </TabsContent>
          <TabsContent value="website">
            {/* Similar content for Website tab */}
          </TabsContent>
          <TabsContent value="domain">
            {/* Similar content for Domain tab */}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
