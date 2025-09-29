import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets : ["latin"]});

export const metadata: Metadata = {
  title: "Innovative Startup",
  description: "The world is building on ideas let your idea shine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-900 text-white overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}
