import { useParams } from "react-router-dom";
import Alert from "../components/Alert";
import { useCities } from "../contexts/CitiesContext";

export default function City() {
  const { cityId } = useParams();
  const { cities } = useCities();
  const city = cities.find((city) => city.id === cityId);
  if (!city) {
    return <Alert variant={"secondary"} message={"City not found"} />;
  }

  return (
    <div>
      <h2>{city.name}</h2>
      <p>Country: {city.country}</p>
      <p>Date: {city.date}</p>
      <p>Note: {city.note}</p>
      <p>Latitude: {city.position.lat}</p>
      <p>Longitude: {city.position.lng}</p>
    </div>
  );
}
