"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { regions } from "../data/mock-regions";
import { Marker } from "../app/(age)/[...slug]/data";
import { CultureInfo } from "./CultureInfo";
import { MarkerMap } from "./Marker";

const ANIMATION_DURATION = 1000;
const MAP_BASE_WIDTH = 1658;
const MAP_BASE_HEIGHT = 762;

export const PageMap = ({ markers }: { markers: Marker[] }) => {
  const [selectedMarkerId, setSelectedMarkerId] = useState<number | null>(null);
  const [highlightedMapId, setHighlightedMapId] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [initialScale, setInitialScale] = useState(1);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pendingMarkerIdRef = useRef<number | null>(null);

  useEffect(() => {
    const getInitialScale = () => {
      const width = window.innerWidth;
      if (width < 640) {
        return 0.8;
      } else if (width < 1024) {
        return 1.0;
      } else {
        return 1.4;
      }
    };

    setInitialScale(getInitialScale());

    const handleResize = () => {
      setInitialScale(getInitialScale());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleSelect = useCallback(
    (markerId: number, mapId: number) => {
      if (selectedMarkerId === markerId && isExpanded) return;
      setHighlightedMapId(mapId);
      cleanup();

      if (isExpanded) {
        setIsExpanded(false);
        pendingMarkerIdRef.current = markerId;
        timeoutRef.current = setTimeout(() => {
          setSelectedMarkerId(pendingMarkerIdRef.current);
          setIsExpanded(true);
          pendingMarkerIdRef.current = null;
        }, ANIMATION_DURATION);
      } else {
        setSelectedMarkerId(markerId);
        setTimeout(() => setIsExpanded(true), 50);
      }
    },
    [selectedMarkerId, isExpanded, cleanup]
  );

  const handleClickOutside = useCallback(() => {
    if (!isExpanded) return;
    cleanup();
    setIsExpanded(false);
    timeoutRef.current = setTimeout(() => {
      setSelectedMarkerId(null);
      setHighlightedMapId(null);
    }, ANIMATION_DURATION);
  }, [isExpanded, cleanup]);

  useEffect(() => cleanup, [cleanup]);

  const activeMarker = markers.find((m) => m.id === selectedMarkerId);

  return (
    <div className="relative flex justify-center items-center w-full h-screen overflow-hidden bg-stone-900">
      <Image className="pointer-events-none object-cover" src="/bg.webp" alt="" fill priority />
      <Link
        className="absolute top-5 left-5 md:top-10 md:left-10 bg-[url('/btn.png')] w-[60px] h-[61px] md:w-[90px] md:h-[91px] bg-size-[100%_100%] bg-center hover:shadow-2xl rounded-full block z-20"
        href="/"
      />

      <TransformWrapper
        key={initialScale}
        initialScale={initialScale}
        minScale={0.5}
        maxScale={3}
        limitToBounds={false}
        centerOnInit={true}
        wheel={{ step: 0.03 }}
        pinch={{ step: 0.1 }}
        panning={{ disabled: false }}
        doubleClick={{ disabled: true }}>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-30 md:hidden">
              <button
                onClick={() => zoomIn()}
                className="w-10 h-10 bg-stone-800/80 text-stone-100 rounded-full flex items-center justify-center active:bg-stone-700">
                +
              </button>
              <button
                onClick={() => zoomOut()}
                className="w-10 h-10 bg-stone-800/80 text-stone-100 rounded-full flex items-center justify-center active:bg-stone-700">
                −
              </button>
              <button
                onClick={() => resetTransform()}
                className="w-10 h-10 bg-stone-800/80 text-stone-100 rounded-full flex items-center justify-center active:bg-stone-700 text-xs">
                ⟲
              </button>
            </div>

            <TransformComponent
              wrapperStyle={{
                width: "100%",
                height: "100%",
              }}
              contentStyle={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <div
                className="relative"
                style={{
                  width: MAP_BASE_WIDTH,
                  height: MAP_BASE_HEIGHT,
                  flexShrink: 0,
                }}>
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox={`0 0 ${MAP_BASE_WIDTH} ${MAP_BASE_HEIGHT}`}
                  preserveAspectRatio="xMidYMid meet"
                  onClick={handleClickOutside}>
                  {regions.map((region) => (
                    <path
                      key={region.id}
                      d={region.d}
                      className="transition-colors duration-300"
                      fill={highlightedMapId === region.id ? "rgb(212, 180, 131)" : "rgb(231, 208, 172)"}
                      stroke="rgb(106, 80, 46)"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                </svg>

                {markers.map((marker) => (
                  <MarkerMap
                    key={marker.id}
                    marker={marker}
                    isSelected={selectedMarkerId === marker.id}
                    handleSelect={() => handleSelect(marker.id, marker.mapId)}
                    position={{ left: marker.cx, top: marker.cy }}
                  />
                ))}
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>

      {selectedMarkerId !== null && (
        <CultureInfo
          key={selectedMarkerId}
          duration={ANIMATION_DURATION}
          cultureInfo={activeMarker}
          isExpanded={isExpanded}
        />
      )}
    </div>
  );
};
