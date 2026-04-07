"use client";

import { useMemo, useState } from "react";
import { regions, type Region } from "@/src/data/mock-regions";

const IMAGE_WIDTH = 1536;
const IMAGE_HEIGHT = 1024;

export default function RussiaImageMap() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedRegion = useMemo<Region | null>(() => {
    return regions.find((r) => r.id === selectedId) ?? null;
  }, [selectedId]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 360px",
        minHeight: "100vh",
        background: "#f5efe2",
      }}>
      <div
        style={{
          position: "relative",
          padding: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div
          style={{
            width: "100%",
            maxWidth: 1400,
            aspectRatio: `${IMAGE_WIDTH} / ${IMAGE_HEIGHT}`,
            boxShadow: "0 20px 50px rgba(0,0,0,.18)",
            borderRadius: 12,
            overflow: "hidden",
            background: "#e8dcc3",
          }}>
          <svg
            viewBox={`0 0 ${IMAGE_WIDTH} ${IMAGE_HEIGHT}`}
            style={{ width: "100%", height: "100%", display: "block" }}>
            <image
              href="/maps/russia-retro-bg.png"
              x="0"
              y="0"
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              preserveAspectRatio="none"
            />

            {regions.map((region) => {
              const isHovered = hoveredId === region.id;
              const isSelected = selectedId === region.id;

              return (
                <g key={region.id}>
                  <path
                    d={region.d}
                    onMouseEnter={() => setHoveredId(region.id)}
                    onMouseLeave={() => setHoveredId((prev) => (prev === region.id ? null : prev))}
                    onClick={() => setSelectedId(region.id)}
                    style={{
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    fill={
                      isSelected
                        ? "rgba(255, 196, 64, 0.35)"
                        : isHovered
                        ? "rgba(255, 255, 255, 0.22)"
                        : "rgba(80, 20, 20, 0.14)"
                    }
                    stroke={
                      isSelected ? "rgba(80, 40, 10, 1)" : isHovered ? "rgba(255,255,255,1)" : "rgba(120, 35, 20, 0.95)"
                    }
                    strokeWidth={isSelected ? 4 : 3}
                    vectorEffect="non-scaling-stroke"
                  />

                  <circle
                    cx={region.cx}
                    cy={region.cy}
                    r={8}
                    fill={isSelected ? "#f59e0b" : "#7c2d12"}
                    stroke="#fff7ed"
                    strokeWidth={2}
                    pointerEvents="none"
                  />

                  <text
                    x={region.cx + 14}
                    y={region.cy + 5}
                    fontSize="24"
                    fontWeight="700"
                    fill="#2f2418"
                    stroke="#f8f1df"
                    strokeWidth="3"
                    paintOrder="stroke"
                    pointerEvents="none">
                    {region.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <aside
        style={{
          borderLeft: "1px solid rgba(0,0,0,.08)",
          background: "rgba(255,255,255,.72)",
          backdropFilter: "blur(8px)",
          padding: 24,
        }}>
        {!selectedRegion ? (
          <>
            <div style={{ fontSize: 12, opacity: 0.55, textTransform: "uppercase" }}>Интерактивная карта</div>
            <h2 style={{ marginTop: 10, marginBottom: 12 }}>Выбери регион</h2>
            <p style={{ lineHeight: 1.7, opacity: 0.8 }}>
              Сейчас включён debug-режим: видны тестовые области, точки-центры и подписи.
            </p>
          </>
        ) : (
          <>
            <div style={{ fontSize: 12, opacity: 0.55, textTransform: "uppercase" }}>Регион</div>

            <h2 style={{ marginTop: 10, marginBottom: 12 }}>{selectedRegion.name}</h2>

            <p style={{ lineHeight: 1.7, opacity: 0.85 }}>{selectedRegion.description}</p>

            <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
              <button
                onClick={() => alert(`Открыть модалку для: ${selectedRegion.name}`)}
                style={{
                  border: "none",
                  borderRadius: 12,
                  padding: "10px 14px",
                  background: "#2f2418",
                  color: "#fff",
                  cursor: "pointer",
                }}>
                Открыть окно
              </button>

              <button
                onClick={() => setSelectedId(null)}
                style={{
                  border: "1px solid rgba(0,0,0,.12)",
                  borderRadius: 12,
                  padding: "10px 14px",
                  background: "#fff",
                  cursor: "pointer",
                }}>
                Сбросить
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
