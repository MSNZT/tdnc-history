import { headers } from "next/headers";

export async function generateMetadata() {
  const headerList = await headers();
  const pathname = headerList.get("x-url") || "";

  const titles: Record<string, string> = {
    "/golden-age": "Золотой век русской культуры",
    "/silver-age": "Серебряный век",
    "/contemporary": "Современники",
  };

  return {
    title: titles[pathname],
  };
}

export default function CenturiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
