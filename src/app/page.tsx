import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/golden-age", title: "Золотой век" },
  { href: "/silver-age", title: "Серебряный век" },
  { href: "/contemporary", title: "Современники" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 z-0">
        <Image
          src="/main-bg.webp"
          alt="background"
          fill
          priority
          className="
            object-cover object-center
            md:object-fill
            lg:object-cover lg:object-top
            xl:object-fill
          "
          sizes="100vw"
        />
      </div>

      <div className="mt-30 relative z-10 flex flex-col items-center justify-center w-full max-w-5xl gap-[2vh] lg:gap-[2vh]">
        <h1 className="flex flex-col items-center text-center gap-1 group">
          <span className="font-badscript text-[clamp(1.3rem,2.5vw,2rem)] leading-tight text-stone-800">
            Традиционные духовно-нравственные
          </span>
          <span className="uppercase text-red-900 font-ptserif text-[clamp(1.5rem,3vw,2.5rem)] leading-none font-bold tracking-tight">
            ценности через Российскую культуру
          </span>
          <span className="font-badscript text-[clamp(1rem,1.8vw,2rem)] text-stone-700">
            (писатели, поэты, художники)
          </span>
        </h1>

        <nav className="flex flex-col items-center gap-[2vh] w-full">
          {links.map((l) => (
            <Link
              href={l.href}
              key={l.title}
              className="
                relative
                font-hand font-bold
                w-[clamp(225px,40vw,250px)]
                aspect-360/172
                bg-[url(/button.avif)] bg-contain bg-no-repeat bg-center
                flex items-center justify-center
                text-[clamp(1.25rem,2vw,1.7rem)]
                text-[#4a3421]
                whitespace-nowrap 
                pb-[1%] 
                px-[15%]
                text-center
                leading-tight
                transition-all duration-300 ease-out
                hover:scale-105 hover:brightness-110
                hover:drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]
                active:scale-95
              ">
              {l.title}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
