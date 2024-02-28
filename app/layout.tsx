import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = Open_Sans({ subsets: ["latin"]});


export const metadata: Metadata = {
  metadataBase: new URL('https://port-folio-three-umber.vercel.app/'),
  title: "Portfolio Jean-Jacques Valmont",
  description: "Portfolio de Jean-Jacques Valmont. Développeur front-end React en recherche d'alternance pour mars 2024 sur Paris",
  creator: 'Jean-Jacques Valmont',
  openGraph: {
    type: 'website',
    url: 'https://port-folio-three-umber.vercel.app/', // Mettez l'URL de votre site ici
    title: 'Portfolio Jean-Jacques Valmont',
    description: 'Portfolio de Jean-Jacques Valmont. Développeur front-end React en recherche d\'alternance pour mars 2024 sur Paris',
    images: [
      {
        url: "/image/Portfolio_Jean-Jacques_Valmont.png", // Mettez l'URL de votre image Open Graph ici
        width: 1200,
        height: 630,
        alt: "Image d'une partie du portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
