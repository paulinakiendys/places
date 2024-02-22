import { useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";

export default function HandleMapClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      navigate(`form?position=${lat},${lng}`);
    },
  });
}
