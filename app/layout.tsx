import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angel Lux Estética",
  description: "Servicios de estética, uñas y tratamientos faciales.",

  openGraph: {
    title: "Angel Lux Estética",
    description: "Servicios de estética, uñas y tratamientos faciales.",
    siteName: "Angel Lux Estética",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/orquideas.png.jpeg",
        width: 1200,
        height: 1600,
        alt: "Angel Lux Estética",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Angel Lux Estética",
    description: "Servicios de estética, uñas y tratamientos faciales.",
    images: ["/orquideas.png.jpeg"],
  },
  other: {
    "instagram:site": "@angel.lux_sanjuan",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
