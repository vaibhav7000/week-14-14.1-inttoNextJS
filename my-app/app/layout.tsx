import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { FC, ReactElement } from "react";

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

const RootLayout: React.FC<LayoutProps<'/'>> = ({
  children,
  params
}) => {

  

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


const FinalElement: FC = () => {
  return 1
    
}


interface Person {
  firstname?: string;
  lastname?: string;
  (value: string): string;
}

const vaibhav: Person = (value) => value
vaibhav("vaibhav");


export default RootLayout;