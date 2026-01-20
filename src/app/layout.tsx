import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/query-provider";
import { CartProvider } from "@/contexts/CartContext";
import { MainLayout } from "@/components/layout/MainLayout";
import { Toaster } from "sonner";
import NextTopLoader from 'nextjs-toploader';

import { WhatsApp } from "@/components/common/whatsapp/WhatsApp";
import Popup from "@/components/common/popup/Popup";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <CartProvider>  
            <MainLayout>
              <NextTopLoader color="#6f57cfp" />
              {children}
            </MainLayout>
          </CartProvider>
          <WhatsApp />
          <Popup />
        </QueryProvider>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
