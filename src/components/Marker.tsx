import { Marker } from "../app/(age)/[...slug]/data";

interface MarkerProps {
  marker: Marker;
  isSelected: boolean;
  handleSelect: () => void;
}

export const MarkerMap = ({ marker, handleSelect, isSelected }: MarkerProps) => {
  return (
    <div
      key={`icon-${marker.id}`}
      className="absolute transition-transform duration-300 cursor-pointer"
      style={{
        left: `${marker.cx}px`,
        top: `${marker.cy}px`,
        transform: `translate(-50%, -50%) scale(${isSelected ? 1.3 : 1})`,
        zIndex: isSelected ? 40 : 10,
      }}>
      <img
        onClick={handleSelect}
        src={marker.type === "artist" ? "/brush.webp" : "/pencil.webp"}
        className="w-[50px] h-[50px]"
        alt=""
      />
    </div>
  );
};
