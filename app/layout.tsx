import type { Metadata } from "next";
import { Goldman } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const goldman = Goldman({ subsets: ["latin"], weight:"400"});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={goldman.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
