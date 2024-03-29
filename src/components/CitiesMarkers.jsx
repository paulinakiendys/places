import { Marker, Popup } from "react-leaflet";

export default function CitiesMarkers({ cities }) {
  if (!cities) return;
  return (
    <>
      {cities.map((city) => (
        <Marker position={city.position} key={city.id}>
          <Popup>
            <span>
              {city.name}, {city.country}
            </span>
          </Popup>
        </Marker>
      ))}
    </>
  );
}
