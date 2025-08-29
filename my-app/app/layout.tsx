import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "First NextJS",
  description: "First NextJS"
};

const RootLayout: React.FC<Readonly<{
  children: React.ReactNode
}>> = (props) => {
  const {children} = props;

  return (
    <html>
      <body className="">
        <div className="min-h-screen min-w-screen">
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout;