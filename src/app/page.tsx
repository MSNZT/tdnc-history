import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/golden-age", title: "Золотой век" },
  { href: "/", title: "Серебряный век" },
  { href: "/", title: "Современники" },
];

export default function Home() {
  return (
    <main className="relative h-full w-full overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/main-bg.avif"
          alt="ornate frame"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-[2vh]">
        {links.map((l) => (
          <Link
            href={l.href}
            key={l.title}
            className="
              font-hand
              font-bold
              h-[clamp(120px,12vw,200px)] 
              aspect-360/172
              bg-[url(/button.avif)] bg-contain bg-no-repeat bg-center
              flex items-center justify-center
              text-[clamp(1.4rem,2.2vw,2.2rem)]
              text-[#4a3421]
              pb-[2.5%] 
              transition-all duration-300 ease-out
              hover:scale-105 hover:brightness-110
              hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.8)]
              active:scale-95
              px-10">
            {l.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
