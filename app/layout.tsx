import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angel Lux",
  description: "Servicios de Angel Lux",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
