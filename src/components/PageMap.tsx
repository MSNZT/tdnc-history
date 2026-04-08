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
      <Image src="/bg-age.avif" alt="Карта" fill priority />

      <div className="relative w-[1536px] h-[1024px]">
        <Image src="/map.avif" alt="Карта" fill priority />

        <svg
          className="absolute top-0 inset-0 w-full h-full"
          viewBox={`0 0 ${IMAGE_WIDTH} ${IMAGE_HEIGHT}`}
          preserveAspectRatio="none"
          onClick={handleBackgroundClick}>
          {regions.map((region) => {
            const isHovered = hoveredId === region.id;
            const isSelected = selectedId === region.id;

            const iconSrc = region.type === "artist" ? "/brush.webp" : "/pencil.webp";
            const iconSize = isSelected ? 60 : 50;

            return (
              <g key={region.id}>
                <path
                  d={region.d}
                  onMouseEnter={() => setHoveredId(region.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(region.id);
                  }}
                  className="cursor-pointer transition-all duration-200 ease-in"
                  fill={isHovered ? "rgba(255, 255, 255, 0.22)" : "transparent"}
                  stroke={isSelected ? "rgba(80, 40, 10, 1)" : "none"}
                  strokeWidth={isSelected ? 2 : 0}
                  vectorEffect="non-scaling-stroke"
                />

                <image
                  href={iconSrc}
                  x={region.cx - iconSize / 2}
                  y={region.cy - iconSize / 2}
                  width={iconSize}
                  height={iconSize}
                  className="cursor-pointer transition-all duration-200 ease-in"
                  pointerEvents="none"
                />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
