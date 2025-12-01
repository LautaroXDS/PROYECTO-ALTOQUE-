import type { Metadata } from "next";
// 1. Mantenemos las fuentes modernas
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";



// Configuración de las fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//  título para tu negocio
export const metadata: Metadata = {
  title: "AlToque - Reserva canchas de fútbol, pádel y tenis al instante",
  description: "Plataforma para reservar canchas deportivas en tu ciudad de forma rápida y sencilla.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="es" data-theme="emerald">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Navbar />
        
        
        {children}

        
        
      </body>
    </html>
  );
}