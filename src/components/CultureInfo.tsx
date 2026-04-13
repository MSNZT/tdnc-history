import Link from "next/link";
import { Marker } from "../app/(age)/[...slug]/data";

interface CultureInfoProps {
  cultureInfo?: Marker;
  duration: number;
  isExpanded: boolean;
}

export const CultureInfo = ({ cultureInfo, duration, isExpanded }: CultureInfoProps) => {
  return (
    <div className="absolute bottom-10 z-50 flex items-center justify-center pointer-events-none w-full">
      <div className="flex items-center justify-center cursor-pointer pointer-events-auto">
        <img
          src="/roller-1.webp"
          className="w-[80px] h-[300px] shrink-0 block relative z-30 -mr-[15px] select-none"
          alt=""
        />

        <div
          className="relative z-10 overflow-hidden flex shrink-0 will-change-[width]"
          style={{
            width: isExpanded ? "1202px" : "25px",
            transition: `width ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          }}>
          <div className="relative w-[1202px] h-[290px] shrink-0">
            <img src="/paper.webp" className="w-[1202px] h-[290px] block shrink-0 max-w-none" alt="" />

            <div
              className={`absolute inset-0 flex items-center gap-5 pl-14 pr-32 transition-opacity duration-500 ${
                isExpanded ? "opacity-100 delay-700" : "opacity-0"
              }`}>
              <img className="w-[300px] h-[250px] object-cover rounded-xl" src={cultureInfo?.imageUrl} alt="" />
              <div className="flex justify-center items-center h-64">
                <div className="w-[1.5px] h-full bg-stone-500 mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
              </div>
              <div className="flex flex-col gap-2 self-start mt-4">
                <h2 className="text-4xl font-serif text-[#4a321f]">{cultureInfo?.name}</h2>
                <p className="text-lg italic text-[#5d4431] mt-2">{cultureInfo?.description}</p>
                <p className="text-lg italic text-[#5d4431] mt-2">{cultureInfo?.from}</p>
              </div>
              <Link
                href={cultureInfo?.url || ""}
                target="_blank"
                className="mb-10 self-end relative height-[65px] bg-[#3d2817] p-2
                      text-[#f4e4c1]
                      font-cinzel
                      text-2xl md:text-3xl
                      border-4 double border-[#8b6914]
                      shadow-[0_0_30px_rgba(139,105,20,0.3),inset_0_0_20px_rgba(0,0,0,0.5)]
                      hover:bg-[#4a3320]
                      hover:shadow-[0_0_40px_rgba(139,105,20,0.5),inset_0_0_20px_rgba(0,0,0,0.5)]
                      transition-all duration-300
                      uppercase">
                <span className="font-kurale">Подробнее</span>
              </Link>
            </div>
          </div>
        </div>

        <img
          src="/roller-2.webp"
          className="w-[80px] h-[300px] shrink-0 block relative z-30 -ml-[15px] select-none"
          alt=""
        />
      </div>
    </div>
  );
};
