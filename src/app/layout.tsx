import { Metadata } from "next";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Programador Aos 30",
  description: "Meu portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="Icon" href="/favicon.ico" sizes="any" />
      <head />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
