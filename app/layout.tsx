import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

// Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// Metadata
export const metadata: Metadata = {
  title: "Shubham Raj Pandey ",
};

// Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${poppins.variable} 
          ${geistSans.variable} 
          ${geistMono.variable} 
          bg-[#0b0b0b] 
          text-gray-200 
          antialiased 
          transition-colors 
          duration-500
        `}
      >
        {children}
      </body>
    </html>
  );
}
