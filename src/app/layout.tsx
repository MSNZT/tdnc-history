import type { Metadata } from "next";
import { Marck_Script, Kurale, PT_Serif, Bad_Script } from "next/font/google";
import "./globals.css";

const marckScript = Marck_Script({
  weight: "400",
  subsets: ["cyrillic"],
  variable: "--font-handwriting",
  display: "swap",
});

const kurale = Kurale({
  weight: "400",
  subsets: ["cyrillic"],
  variable: "--font-kurale",
});

const titleFont = PT_Serif({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-pt_serif",
});

const scriptFont = Bad_Script({
  weight: "400",
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-bad_script",
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
      lang="ru"
      className={`${marckScript.variable} ${kurale.variable} ${scriptFont.variable} ${titleFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
