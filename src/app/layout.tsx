import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BBS News",
  description: "BBS News - Latest news from around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} antialiased`}
    >
      <body className="font-sans text-[#141414] bg-[#F6F6F6] min-h-screen flex flex-col">
        <Header />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
