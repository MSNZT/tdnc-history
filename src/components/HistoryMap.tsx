"use client";

import { useMemo, useRef, useState } from "react";
import Map, {
  Layer,
  NavigationControl,
  Popup,
  Source,
  type LayerProps,
  type MapLayerMouseEvent,
  type MapRef,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

import type { Feature, Polygon } from "geojson";
import type { RegionProperties, RegionsFC } from "@/src/data/mock-regions";

type RegionFeature = Feature<Polygon, RegionProperties>;

const fillLayer: LayerProps = {
  id: "regions-fill",
  type: "fill",
  paint: {
    "fill-color": ["get", "color"],
    "fill-opacity": 0.45,
  },
};

const lineLayer: LayerProps = {
  id: "regions-line",
  type: "line",
  paint: {
    "line-color": "#1f2937",
    "line-width": 1.5,
  },
};

type Props = {
  data: RegionsFC;
};

export default function HistoryMap({ data }: Props) {
  const mapRef = useRef<MapRef>(null);

  const [year, setYear] = useState(1250);
  const [selected, setSelected] = useState<RegionFeature | null>(null);

  const filteredData = useMemo<RegionsFC>(() => {
    return {
      ...data,
      features: data.features.filter((feature) => {
        const { from, to } = feature.properties;
        return from <= year && year <= to;
      }),
    };
  }, [data, year]);

  function handleRegionClick(e: MapLayerMouseEvent) {
    const feature = e.features?.[0] as RegionFeature | undefined;
    if (!feature) return;

    setSelected(feature);

    const lng = Number(feature.properties.centerLng);
    const lat = Number(feature.properties.centerLat);

    mapRef.current?.flyTo({
      center: [Number.isFinite(lng) ? lng : e.lngLat.lng, Number.isFinite(lat) ? lat : e.lngLat.lat],
      zoom: 5.2,
      duration: 1400,
      essential: true,
    });
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 360px",
        height: "100vh",
      }}>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            zIndex: 2,
            background: "rgba(255,255,255,0.96)",
            borderRadius: 16,
            padding: 14,
            width: 320,
            boxShadow: "0 12px 32px rgba(0,0,0,.16)",
          }}>
          <div style={{ fontSize: 12, opacity: 0.65, marginBottom: 6 }}>Историческая карта</div>

          <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>{year} год</div>

          <input
            type="range"
            min={1100}
            max={1500}
            step={1}
            value={year}
            onChange={(e) => {
              setSelected(null);
              setYear(Number(e.target.value));
            }}
            style={{ width: "100%" }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 8,
              fontSize: 12,
              opacity: 0.65,
            }}>
            <span>1100</span>
            <span>1500</span>
          </div>
        </div>

        <Map
          ref={mapRef}
          initialViewState={{
            longitude: 34,
            latitude: 55,
            zoom: 3.3,
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="https://demotiles.maplibre.org/style.json"
          interactiveLayerIds={["regions-fill"]}
          onClick={handleRegionClick}>
          <NavigationControl position="top-right" />

          <Source id="regions" type="geojson" data={filteredData}>
            <Layer {...fillLayer} />
            <Layer {...lineLayer} />
          </Source>

          {selected && (
            <Popup
              longitude={Number(selected.properties.centerLng)}
              latitude={Number(selected.properties.centerLat)}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setSelected(null)}>
              <div style={{ minWidth: 220 }}>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>{selected.properties.name}</div>
                <div style={{ fontSize: 13, marginBottom: 8 }}>
                  {selected.properties.from} — {selected.properties.to}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.4 }}>{selected.properties.description}</div>
              </div>
            </Popup>
          )}
        </Map>
      </div>

      <aside
        style={{
          borderLeft: "1px solid #e5e7eb",
          padding: 24,
          overflow: "auto",
          background: "#fff",
        }}>
        {!selected ? (
          <>
            <div style={{ fontSize: 12, textTransform: "uppercase", opacity: 0.5 }}>Панель региона</div>
            <h2 style={{ marginTop: 8 }}>Выбери область на карте</h2>
            <p style={{ lineHeight: 1.6, opacity: 0.8 }}>
              Сейчас ты видишь только те регионы, которые существуют в выбранный год. Клик по полигону открывает
              карточку справа и делает перелёт камеры.
            </p>
          </>
        ) : (
          <>
            <div style={{ fontSize: 12, textTransform: "uppercase", opacity: 0.5 }}>Регион</div>

            <h2 style={{ marginTop: 8, marginBottom: 8 }}>{selected.properties.name}</h2>

            <div style={{ marginBottom: 16, opacity: 0.7 }}>
              {selected.properties.from} — {selected.properties.to}
            </div>

            <p style={{ lineHeight: 1.7 }}>{selected.properties.description}</p>

            <button
              onClick={() => {
                const lng = Number(selected.properties.centerLng);
                const lat = Number(selected.properties.centerLat);

                mapRef.current?.flyTo({
                  center: [lng, lat],
                  zoom: 6,
                  duration: 1200,
                  essential: true,
                });
              }}
              style={{
                marginTop: 16,
                border: "none",
                borderRadius: 12,
                padding: "10px 14px",
                background: "#111827",
                color: "#fff",
                cursor: "pointer",
              }}>
              Сфокусироваться на регионе
            </button>
          </>
        )}
      </aside>
    </div>
  );
}
