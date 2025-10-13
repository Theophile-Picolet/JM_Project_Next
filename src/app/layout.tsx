import type { Metadata } from "next";
import { Anaheim, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const anaheim = Anaheim({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-anaheim",
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Jean-Marie Picolet - Psychologue à Craponne",
  description: "Cabinet de Jean-Marie Picolet, psychologue du développement à Craponne. Consultations, bilans psychologiques pour enfants, adolescents, adultes et familles.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${anaheim.variable} ${lora.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
