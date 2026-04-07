import type { Metadata } from "next";
import { Geist, Geist_Mono, Marck_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const marckScript = Marck_Script({
  weight: "400",
  subsets: ["cyrillic"],
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Проект: Традиционные духовно-нравственные ценности через российскую культуру (писатели, поэты, художники)",
  description: "Исследование российских культурных ценностей через творчество великих мастеров",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${marckScript.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
