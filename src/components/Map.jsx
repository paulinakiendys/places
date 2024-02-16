import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCities } from "../contexts/CitiesContext";

export default function Map() {
  const { cities } = useCities();
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "50vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cities.map((city) => (
        <Marker position={city.position} key={city.id}>
          <Popup>
            <span>{city.name}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
