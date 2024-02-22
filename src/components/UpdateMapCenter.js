import { useMap } from "react-leaflet";

export default function UpdateMapCenter({ center }) {
  const map = useMap();
  map.flyTo(center);
  return null;
}
