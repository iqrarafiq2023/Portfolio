import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AvatarProvider } from "@/components/avatar-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Iqra Rafiq | Full Stack & AI Developer",
  description: "Portfolio of Iqra Rafiq, a full stack developer building real-time healthcare platforms, mobile apps and AI products. Ask the assistant about her work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><AvatarProvider>{children}</AvatarProvider></body>
    </html>
  );
}
