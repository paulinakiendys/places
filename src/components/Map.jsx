import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCities } from "../contexts/CitiesContext";
import UpdateMapCenter from "./UpdateMapCenter";
import CitiesMarkers from "./CitiesMarkers";
import Spinner from "./Spinner";
import HandleMapClick from "./HandleMapClick";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";

export default function Map() {
  const { cities, isLoading: isLoadingCities } = useCities();
  const [mapPosition, setMapPosition] = useState([51.505, 10]);
  const paramPosition = useUrlPosition();

  const {
    getPosition,
    isLoading: isLoadingGeolocation,
    position: geolocationPosition,
  } = useGeolocation();

  useEffect(() => {
    if (paramPosition) {
      const [lat, lng] = paramPosition.split(",").map(Number);
      setMapPosition([lat, lng]);
    }
  }, [paramPosition]);

  useEffect(() => {
    if (geolocationPosition) {
      const [lat, lng] = geolocationPosition;
      setMapPosition([lat, lng]);
    }
  }, [geolocationPosition]);

  if (isLoadingCities) return <Spinner />;

  return (
    <>
      {!geolocationPosition && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={getPosition}
          disabled={isLoadingGeolocation}
        >
          {isLoadingGeolocation ? "Loading" : "Use my position"}
        </button>
      )}
      <MapContainer
        center={mapPosition}
        zoom={4}
        scrollWheelZoom={true}
        style={{ height: "50vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CitiesMarkers cities={cities} />
        <UpdateMapCenter center={mapPosition} />
        <HandleMapClick />
      </MapContainer>
    </>
  );
}
