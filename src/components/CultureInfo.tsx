"use client";

import Image from "next/image";
import Link from "next/link";
import { Marker } from "../app/(age)/[...slug]/data";
import { useMediaQuery } from "../hooks/useMediaQuery";

interface CultureInfoProps {
  cultureInfo?: Marker;
  duration: number;
  isExpanded: boolean;
  onClose?: () => void;
}

export const CultureInfo = ({ cultureInfo, duration, isExpanded, onClose }: CultureInfoProps) => {
  const isMobile = useMediaQuery("(max-width: 1023px)");

  if (isMobile) {
    return (
      <>
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-500 z-40 ${
            isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={onClose}
        />

        <div
          data-scroll
          className={`fixed inset-0 z-50 flex items-start justify-center transition-transform duration-500 ease-out ${
            isExpanded ? "translate-y-0" : "-translate-y-full"
          }`}>
          <div className="w-full h-full md:h-auto py-4 px-4">
            <div className="relative w-full h-full max-h-full md:h-auto">
              <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col">
                <div className="absolute inset-0">
                  <Image src="/paper-mobile.webp" alt="" fill className="object-cover" priority sizes="100vw" />
                </div>

                <div className="relative z-10 p-6 pt-4 overflow-y-auto flex-1">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative w-full md:w-64 h-48 rounded-xl overflow-hidden mx-auto md:mx-0 shrink-0">
                      <Image
                        src={cultureInfo?.imageUrl || ""}
                        alt={cultureInfo?.author || ""}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 256px"
                      />
                    </div>

                    <div className="flex-1 min-h-0">
                      <h2 className="text-2xl font-serif text-[#4a321f] mb-2">{cultureInfo?.author}</h2>

                      {cultureInfo?.from && (
                        <p className="text-sm italic text-[#5d4431] mb-3">
                          <span className="font-semibold not-italic">Места:</span> {cultureInfo.from}
                        </p>
                      )}

                      <p className="text-base text-[#5d4431] mb-4 leading-relaxed">{cultureInfo?.description}</p>

                      {cultureInfo?.quote && <p className="text-[#5d4431] mb-3">{cultureInfo.quote}</p>}

                      <Link
                        href={cultureInfo?.url || ""}
                        target="_blank"
                        className="inline-block w-full bg-[#3d2817] text-[#f4e4c1] py-3 px-6 rounded-lg text-center hover:bg-[#4a3320] transition-all uppercase font-kurale">
                        Подробнее
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#3d2817] text-[#f4e4c1] flex items-center justify-center hover:bg-[#4a3320] transition-colors z-20">
                ✕
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div
      data-scroll
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-none w-auto">
      <div className="scroll-container flex items-center justify-center cursor-pointer pointer-events-auto">
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
              <div className="flex flex-col gap-2 self-start mt-4 overflow-y-auto md:overflow-y-visible">
                <h2 className="text-4xl font-serif text-[#4a321f]">{cultureInfo?.author}</h2>
                {cultureInfo?.from && <p className="text-lg text-[#5d4431]">{cultureInfo.from}</p>}
                <p className="text-lg text-[#5d4431]">{cultureInfo?.description}</p>

                {cultureInfo?.quote && <p className="text-lg text-[#5d4431] mb-3">{cultureInfo.quote}</p>}
              </div>
              <Link
                href={cultureInfo?.url || ""}
                target="_blank"
                className="mb-10 self-end bg-[#3d2817] p-2 text-[#f4e4c1] font-cinzel text-2xl md:text-3xl border-4 border-[#8b6914] shadow-[0_0_30px_rgba(139,105,20,0.3),inset_0_0_20px_rgba(0,0,0,0.5)] hover:bg-[#4a3320] hover:shadow-[0_0_40px_rgba(139,105,20,0.5),inset_0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300 uppercase">
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
