import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angel Lux Estetica",
  description: "Servicios de estetica, unas y tratamientos faciales.",

  openGraph: {
    title: "Angel Lux Estetica",
    description: "Servicios de estetica, unas y tratamientos faciales.",
    siteName: "Angel Lux Estetica",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/orquideas.png.jpeg",
        width: 1200,
        height: 1600,
        alt: "Angel Lux Estetica",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Angel Lux Estetica",
    description: "Servicios de estetica, unas y tratamientos faciales.",
    images: ["/orquideas.png.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
