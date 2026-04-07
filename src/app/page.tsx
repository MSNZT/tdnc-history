// import Image from "next/image";
// import Link from "next/link";

// const links = [
//   { href: "/history-map", title: "Золотой век" },
//   { href: "/", title: "Серебряный век" },
//   { href: "/", title: "Современники" },
// ];

// export default function Home() {
//   return (
//     <main className="relative h-svh w-full overflow-hidden bg-black flex items-center justify-center">
//       <Image
//         src="/main-bg.webp"
//         alt="ornate frame"
//         fill
//         priority
//         quality={75}
//         className="object-cover object-center min-w-full min-h-full"
//       />

//       <div className="relative z-10 flex flex-col items-center gap-[2vh]">
//         {links.map((l) => (
//           <Link
//             href={l.href}
//             key={l.title}
//             className="
//             font-hand
//             font-bold
//             h-[clamp(100px,12vw,200px)]
//             aspect-360/172
//             bg-[url(/button.webp)] bg-contain bg-no-repeat bg-center
//             flex items-center justify-center
//             text-[clamp(1.2rem,2.2vw,2.2rem)]
//             text-[#4a3421]
//             pb-[2.5%]
//             transition-all duration-300 ease-out
//             hover:scale-105 hover:brightness-110
//             hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.8)]
//             active:scale-95
//             px-10
//   ">
//             {l.title}
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }

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
      <Image
        src="/main-bg.webp"
        alt="ornate frame"
        fill
        priority
        quality={75}
        className="object-cover object-center min-w-full min-h-full scale-105 xl:scale-100"
      />

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
            bg-[url(/button.webp)] bg-contain bg-no-repeat bg-center
            flex items-center justify-center
            text-[clamp(1.4rem,2.2vw,2.2rem)]
            text-[#4a3421]
            pb-[2.5%] 
            transition-all duration-300 ease-out
            hover:scale-105 hover:brightness-110
            hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.8)]
            active:scale-95
            px-10
  ">
            {l.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
