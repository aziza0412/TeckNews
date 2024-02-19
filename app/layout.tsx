import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./conponents/navBar";
import Footer from "./conponents/Footer";
import { NextAuthProvider } from "./conponents/Providers";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <NextAuthProvider>
        <div className="lg:max-w-[900px] lg:px-16 mx-auto py-8 shadow-xl 
        min-h-screen flex flex-col px-8">
        <NavBar/>
       <div className="flex-auto"> {children}</div>
        <Footer/>
        </div>
        </NextAuthProvider>
        </body>
    </html>
  );
}
