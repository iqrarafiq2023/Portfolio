import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AvatarProvider } from "@/components/avatar-context";

const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jbMono = JetBrains_Mono({ variable: "--font-jb-mono", subsets: ["latin"] });


export const metadata = {
  title: "Iqra Rafiq | Full Stack & AI Developer",
  description: "Portfolio of Iqra Rafiq, a full stack developer building real-time healthcare platforms, mobile apps and AI products. Ask the assistant about her work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${grotesk.variable} ${inter.variable} ${jbMono.variable}`}>

      <body className="min-h-full flex flex-col"><AvatarProvider>{children}</AvatarProvider></body>
    </html>
  );
}
