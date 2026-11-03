import "./globals.css";

import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

import QueryProvider from "@/app/query-provider.tsx";
import Footer from "@/app/components/layout/Footer.tsx";

export const metadata: Metadata = {
  title: "Recipify SPA",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="/fonts/google-fonts.css" rel="stylesheet" />
        <link href="/fontawesome/css/fontawesome.css" rel="stylesheet" />
        <link href="/fontawesome/css/brands.css" rel="stylesheet" />
        <link href="/fontawesome/css/regular.css" rel="stylesheet" />
        <link href="/fontawesome/css/solid.css" rel="stylesheet" />
      </head>
      <body className={"overflow-y-scroll"}>
        <div className={"flex min-h-svh flex-col"}>
          <div className={"container mx-auto h-16"}>
            <div className={"flex h-full items-center"}>
              <Link
                href={"/recipes"}
                className={
                  "cursor-pointer text-gray-900 transition-all duration-500 ease-in-out hover:text-gray-400"
                }
              >
                <i className="fa-solid fa-house"></i>
              </Link>
            </div>
          </div>
          <QueryProvider>{children}</QueryProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
