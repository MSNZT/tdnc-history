"use client";

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
      <div className="absolute inset-0 -z-10 bg-[url(/bg-age.png)] bg-no-repeat bg-size-[100%_100%]"></div>

      <div className="relative">
        <img className="w-full" src="/map3.png" alt="Карта" />

        <svg
          className="absolute top-0 inset-0"
          viewBox={`0 0 ${IMAGE_WIDTH} ${IMAGE_HEIGHT}`}
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
          onClick={handleBackgroundClick}>
          {regions.map((region) => {
            const isHovered = hoveredId === region.id;
            const isSelected = selectedId === region.id;

            const iconSrc = region.type === "artist" ? "/brush.png" : "/pencil.png";
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
                  style={{
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
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
                  style={{
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
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
