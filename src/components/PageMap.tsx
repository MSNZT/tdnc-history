"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { regions } from "../data/mock-regions";

const arr = [
  {
    id: 1,
    imgUrl: "1.png",
    info: "Суриков Василий Иванович (1848-1916)",
    description: "Сибирская красавица(1891)- написана в Красноярске",
  },
  {
    id: 2,
    imgUrl: "2.jpeg",
    info: "Борисов Александр Алексеевич (1866-1934)",
    description: "На Мурмане. Близ гавани(1896) - была написана в Мурмане (ныне Кольский полуостров)",
  },
];

const ANIMATION_DURATION = 1200;

export const PageMap = () => {
  const [activePathId, setActivePathId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [displayId, setDisplayId] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSelect = (id: number) => {
    if (activePathId === id) return;
    setActivePathId(id);

    if (selectedId !== null) {
      setIsExpanded(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setSelectedId(id);
        setDisplayId(id);
        setTimeout(() => setIsExpanded(true), 50);
      }, ANIMATION_DURATION);
    } else {
      setSelectedId(id);
      setDisplayId(id);
      setTimeout(() => setIsExpanded(true), 50);
    }
  };

  const activeRegion = arr.find((r) => r.id === selectedId);
  console.log(activeRegion, selectedId);

  return (
    <div className="relative flex justify-center items-center w-full h-screen overflow-hidden bg-stone-900">
      <Image className="pointer-events-none object-cover" src="/bg.png" alt="" fill priority />

      <div className="relative w-[1658px] h-[762px]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1658 762"
          preserveAspectRatio="none"
          onClick={() => {
            setActivePathId(null);
            setIsExpanded(false);
            setTimeout(() => {
              setSelectedId(null);
              setDisplayId(null);
            }, ANIMATION_DURATION);
          }}>
          {regions.map((region) => (
            <path
              key={region.id}
              d={region.d}
              className="transition-colors duration-300"
              fill={activePathId === region.id ? "rgb(212, 180, 131)" : "rgb(231, 208, 172)"}
              stroke="rgb(106, 80, 46)"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {regions.map((region) => {
          if (!region.active) return null;
          const isSelected = activePathId === region.id;
          return (
            <div
              key={`icon-${region.id}`}
              className="absolute transition-transform duration-300 cursor-pointer"
              style={{
                left: `${region.cx}px`,
                top: `${region.cy}px`,
                transform: `translate(-50%, -50%) scale(${isSelected ? 1.3 : 1})`,
                zIndex: isSelected ? 40 : 10,
              }}>
              <img
                onClick={(e) => {
                  console.log(e);
                  e.stopPropagation();
                  handleSelect(region.id);
                }}
                src={region.type === "artist" ? "/brush.webp" : "/pencil.webp"}
                className="w-[50px] h-[50px]"
                alt=""
              />
            </div>
          );
        })}
      </div>

      {selectedId && (
        <div className="absolute bottom-10 z-50 flex items-center justify-center pointer-events-none w-full">
          <div className="flex items-center justify-center cursor-pointer pointer-events-auto">
            <img
              src="/roller-1.png"
              className="w-[80px] h-[300px] shrink-0 block relative z-30 -mr-[15px] select-none"
              alt=""
            />

            <div
              className="relative z-10 overflow-hidden flex shrink-0 will-change-[width]"
              style={{
                width: isExpanded ? "1202px" : "25px",
                transition: `width ${ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              }}>
              <div className="relative w-[1202px] h-[290px] shrink-0">
                <img src="/paper.png" className="w-[1202px] h-[290px] block shrink-0 max-w-none" alt="" />

                <div
                  className={`absolute inset-0 flex items-center gap-5 pl-14 pr-32 transition-opacity duration-500 ${
                    isExpanded ? "opacity-100 delay-700" : "opacity-0"
                  }`}>
                  <img className="w-[300px] h-[250px] object-cover rounded-xl" src={activeRegion?.imgUrl} alt="" />
                  <div className="flex justify-center items-center h-64">
                    <div className="w-[1.5px] h-full bg-stone-500 mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
                  </div>
                  <div className="self-start mt-4">
                    <h2 className="text-4xl font-serif text-[#4a321f]">{activeRegion?.info}</h2>
                    <p className="text-lg italic text-[#5d4431] mt-2">{activeRegion?.description}</p>
                  </div>
                  <button className="cursor-pointer outline-1 bg-black/50 self-end mb-10">Подробнее</button>
                </div>
              </div>
            </div>

            <img
              src="/roller-2.png"
              className="w-[80px] h-[300px] shrink-0 block relative z-30 -ml-[15px] select-none"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};
