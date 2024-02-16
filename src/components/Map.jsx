import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

export default function Map() {
  const { cities } = useCities();
  const [defaultPosition, setDefaultPosition] = useState([51.505, 10]);
  const [searchParams] = useSearchParams();

  const position = searchParams.get("position");

  useEffect(() => {
    if (position) {
      setDefaultPosition(position.split(",").map(parseFloat));
    }
  }, [position]);

  return (
    <MapContainer
      center={defaultPosition}
      zoom={4}
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
      <ChangeMapView position={position} zoom={9} />
      <HandleMapClick />
    </MapContainer>
  );
}

function ChangeMapView({ position, zoom }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position.split(",").map(parseFloat), zoom);
    }
  }, [position, map, zoom]);

  return null;
}

function HandleMapClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: () => {
      navigate("form");
    },
  });
}
