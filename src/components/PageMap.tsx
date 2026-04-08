"use client";

import Image from "next/image";
import { regions } from "../data/mock-regions";
import { useState } from "react";

const IMAGE_WIDTH = 1536;
const IMAGE_HEIGHT = 1024;

export const PageMap = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleBackgroundClick = () => {
    setSelectedId(null);
  };

  return (
    <div className="relative flex justify-center items-center w-full h-screen overflow-hidden">
      <Image className="pointer-events-none" src="/bg-age.avif" alt="Фон" fill priority decoding="sync" />

      <div className="relative w-[1536px] h-[1024px]">
        <Image className="pointer-events-none" src="/map.avif" alt="Карта" fill priority decoding="sync" />

        <svg
          className="absolute top-0 inset-0 w-full h-full"
          viewBox={`0 0 ${IMAGE_WIDTH} ${IMAGE_HEIGHT}`}
          preserveAspectRatio="none"
          onClick={handleBackgroundClick}>
          {regions.map((region) => (
            <path
              key={region.id}
              d={region.d}
              onMouseEnter={() => setHoveredId(region.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedId(region.id);
              }}
              className="cursor-pointer transition-all duration-200 ease-in"
              fill={hoveredId === region.id ? "rgba(255, 255, 255, 0.22)" : "transparent"}
              stroke={selectedId === region.id ? "rgba(80, 40, 10, 1)" : "none"}
              strokeWidth={selectedId === region.id ? 2 : 0}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {regions.map((region) => {
          const isSelected = selectedId === region.id;
          const iconSrc = region.type === "artist" ? "/brush.webp" : "/pencil.webp";
          const iconSize = isSelected ? 60 : 50;
          return (
            <div
              key={`icon-${region.id}`}
              className="absolute pointer-events-none transition-all duration-200"
              style={{
                left: `${region.cx}px`,
                top: `${region.cy}px`,
                transform: "translate(-50%, -50%)",
              }}>
              <Image src={iconSrc} width={iconSize} height={iconSize} alt="Иконка" className="cursor-pointer" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
