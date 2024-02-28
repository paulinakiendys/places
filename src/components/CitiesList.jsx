import Alert from "./Alert";
import CitiesListItem from "./CitiesListItem";

export default function CitiesList({ cities }) {
  if (!cities.length) {
    return (
      <Alert variant={"info"} message={"Click on the map to add a city"} />
    );
  }
  return (
    <div className="list-group">
      {cities.map((city) => (
        <CitiesListItem key={city.id} city={city} />
      ))}
    </div>
  );
}
