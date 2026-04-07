import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/history-map", title: "Золотой век" },
  { href: "/", title: "Серебряный век" },
  { href: "/", title: "Современники" },
];

export default function Home() {
  return (
    <main className="relative h-svh w-full overflow-hidden bg-black flex items-center justify-center">
      <Image src="/main-bg.webp" alt="ornate frame" fill priority quality={75} className="object-cover object-center" />

      <div className="relative z-10 flex flex-col items-center gap-[2vh]">
        {links.map((l) => (
          <Link
            href={l.href}
            key={l.title}
            className="
              font-hand
              font-bold
              bg-[url(/button.webp)] bg-contain bg-no-repeat bg-center
              h-[14vh] max-h-[172px]
              aspect-360/172
              flex items-center justify-center
              text-xl md:text-2xl text-[#4a3421]
              transition-transform hover:scale-105 active:scale-95
              cursor-pointer
              px-10
            ">
            {l.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
