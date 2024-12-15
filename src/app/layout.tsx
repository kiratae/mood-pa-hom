import type { Metadata } from "next";
import { Noto_Sans_Thai, Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import { AppHeader } from "@/components/header";
import { AppFooter } from "@/components/footer";
// import { AppFooter } from "@/components/footer";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const notoSansThai = Noto_Sans_Thai({ subsets: ["thai"] });

export const metadata: Metadata = {
  title: "มุดผ้าห่ม",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${notoSansThai.className} ${notoSans.className} antialiased dark:bg-gray-800 flex flex-col h-screen justify-between`}
      >
        <header className="mb-4">
          <AppHeader></AppHeader>
        </header>
        <main className="container mx-auto h-full overflow-x-hidden overflow-y-auto">{children}</main>
        <footer>
          <AppFooter></AppFooter>
        </footer>
        
        {/* <main className="flex min-h-full items-center justify-center gap-2">
          {children}
        </main> */}
      </body>
    </html>
  );
}
