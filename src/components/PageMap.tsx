"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { regions } from "../data/mock-regions";
import Link from "next/link";
import { Marker } from "../app/(age)/[...slug]/data";
import { CultureInfo } from "./CultureInfo";
import { MarkerMap } from "./Marker";

const ANIMATION_DURATION = 1000;

export const PageMap = ({ markers }: { markers: Marker[] }) => {
  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);
  const [activeMapId, setActiveMapId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSelect = (markerId: number, mapId: number) => {
    if (activeMarkerId === markerId) return;
    setActiveMarkerId(markerId);
    setActiveMapId(mapId);

    if (selectedId !== null) {
      setIsExpanded(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setSelectedId(markerId);
        setTimeout(() => setIsExpanded(true), 50);
      }, ANIMATION_DURATION);
    } else {
      setSelectedId(markerId);
      setTimeout(() => setIsExpanded(true), 50);
    }
  };

  const handleClickOutside = () => {
    setActiveMarkerId(null);
    setActiveMapId(null);
    setIsExpanded(false);
    setTimeout(() => {
      setSelectedId(null);
    }, ANIMATION_DURATION);
  };

  const activeRegion = markers.find((r) => r.id === selectedId);

  return (
    <div className="relative flex justify-center items-center w-full h-screen overflow-hidden bg-stone-900">
      <Image className="pointer-events-none object-cover" src="/bg.webp" alt="" fill priority />

      <Link
        className="absolute top-10 left-10 bg-[url('/btn.png')] w-[100px] h-[101px] bg-size-[100%_100%] bg-center hover:shadow-2xl rounded-full block z-20"
        href="/"
      />

      <div className="relative w-[1658px] h-[762px]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1658 762"
          preserveAspectRatio="none"
          onClick={handleClickOutside}>
          {regions.map((region) => (
            <path
              key={region.id}
              d={region.d}
              className="transition-colors duration-300"
              fill={activeMapId === region.id ? "rgb(212, 180, 131)" : "rgb(231, 208, 172)"}
              stroke="rgb(106, 80, 46)"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {markers.map((marker) => (
          <MarkerMap
            key={marker.id}
            marker={marker}
            isSelected={activeMapId === marker.mapId && activeMarkerId === marker.id}
            handleSelect={() => handleSelect(marker.id, marker.mapId)}
          />
        ))}
      </div>

      {selectedId && <CultureInfo duration={ANIMATION_DURATION} cultureInfo={activeRegion} isExpanded={isExpanded} />}
    </div>
  );
};
