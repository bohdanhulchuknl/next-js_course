import "./globals.css";

import Link from "next/link";
import LoadingPage from "./loading";
import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex w-full gap-2">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/accounts">Accounts</Link>
        </header>
        <Suspense fallback={<LoadingPage />}>{children}</Suspense>
      </body>
    </html>
  );
}
