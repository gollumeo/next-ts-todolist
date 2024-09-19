import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "My Todo List",
  description: "A simple Todo List to learn how to use React, TypeScript & Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='antialiased bg-slate-900 flex flex-col items-center min-h-screen'
      >
        {children}
      </body>
    </html>
  );
}
