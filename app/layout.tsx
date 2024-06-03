"use client"
// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const poppins = Poppins({ subsets: ['latin'],
display: 'swap',
variable: '--font-poppins',
weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen relative`}>
      <QueryClientProvider client={queryClient}>

        <Navbar />
        {children}
        <Footer />
        </QueryClientProvider>

        </body>
    </html>
  );
}
