import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/ReduxProvider";
import { store } from "@/store/store";
import Navbar from "@/components/Header/Navbar";
import { LayoutProvider } from "@/components/LayoutProdiver";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stack",
  description: "anchorblock Job Task",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={`${inter.className} font-[${inter}]`}>
          <LayoutProvider>{children}</LayoutProvider>
        </body>
      </ReduxProvider>
    </html>
  );
}
