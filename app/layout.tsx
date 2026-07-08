import type { Metadata } from "next";
import { Archivo, Fraunces } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Your Company's Name — Small-group journeys to the world's edges",
  description:
    "Handcrafted small-group tours with vetted local guides — from Aegean calderas to Serengeti plains. Browse itineraries, compare inclusions, and book your next journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
