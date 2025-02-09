import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";


export const metadata: Metadata = {
  title: "Car Rental Hub",
  description: "Discover the best cars in the world around your budget",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='relative'
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
