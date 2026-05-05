import { Marker } from "../app/(age)/[...slug]/data";

interface MarkerProps {
  marker: Marker;
  isSelected: boolean;
  handleSelect: () => void;
  position: { left: number; top: number };
}

export const MarkerMap = ({ marker, handleSelect, isSelected, position }: MarkerProps) => {
  return (
    <div
      data-marker
      className="absolute cursor-pointer transition-transform duration-300"
      style={{
        left: `${(position.left / 1658) * 100}%`,
        top: `${(position.top / 762) * 100}%`,
        transform: `translate(-50%, -50%) scale(${isSelected ? 1.3 : 1})`,
        zIndex: isSelected ? 40 : 10,
        width: "clamp(30px, 5vw, 40px)",
        height: "clamp(30px, 5vw, 40px)",
        pointerEvents: "auto",
      }}
      onClick={(e) => {
        e.stopPropagation();
        handleSelect();
      }}>
      <img
        src={marker.type === "artist" ? "/brush.webp" : "/pencil.webp"}
        style={{ transform: marker.rotate ? `rotate(${marker.rotate}deg)` : "none" }}
        className="w-full h-full object-contain pointer-events-none"
        alt={marker.author}
        draggable={false}
      />
    </div>
  );
};
