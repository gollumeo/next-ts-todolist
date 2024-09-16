import type { Metadata } from "next";
import "./globals.css";

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
        className='antialiased'
      >
        {children}
      </body>
    </html>
  );
}
