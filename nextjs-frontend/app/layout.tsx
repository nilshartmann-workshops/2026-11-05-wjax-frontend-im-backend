import "./globals.css";

import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/app/components/layout/Footer.tsx";
import { NewsletterRegistration } from "@/app/components/layout/NewsletterRegistration.tsx";
import { SkillContextProvider } from "@/app/components/SkillContext.tsx";

export const metadata: Metadata = {
  title: "Recipify Next.js demo",
  description: "Recipes for hungry frontend devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="/hover-link.js" async></script>
        <link href="/fonts/google-fonts.css" rel="stylesheet" />
        <link href="/fontawesome/css/fontawesome.css" rel="stylesheet" />
        <link href="/fontawesome/css/brands.css" rel="stylesheet" />
        <link href="/fontawesome/css/regular.css" rel="stylesheet" />
        <link href="/fontawesome/css/solid.css" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className={"overflow-y-scroll"}>
        <div className={"flex min-h-svh flex-col"}>
          <div className={"container mx-auto h-16"}>
            <div className={"flex h-full items-center justify-between"}>
              <Link
                href={"/"}
                prefetch={false}
                className={
                  "cursor-pointer text-gray-900 transition-all duration-500 ease-in-out hover:text-gray-400"
                }
              >
                <i className="fa-solid fa-house"></i>
              </Link>
              <NewsletterRegistration />
            </div>
          </div>

          <SkillContextProvider>{children}</SkillContextProvider>

          <Footer />
        </div>
      </body>
    </html>
  );
}
