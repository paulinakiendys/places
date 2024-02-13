import { useParams } from "react-router-dom";
import data from "../../data/cities.json";
import Alert from "../components/Alert";

export default function City() {
  const { cityId } = useParams();
  const city = data.cities.find((city) => city.id === cityId);
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
