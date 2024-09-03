import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WindowSizeContextProvider } from "@/context/WindowSizeContext";

const inter = Inter({ subsets: ["latin"], display: "swap" }); // font 'Inter' in next js

export const metadata: Metadata = {
  title: "Old Duck - VHS Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
          as="font"
        />
      </head>
      <WindowSizeContextProvider>
        <body className={inter.className}>{children}</body>
      </WindowSizeContextProvider>
    </html>
  );
}
