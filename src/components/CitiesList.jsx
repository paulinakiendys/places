import Alert from "./Alert";
import CitiesListItem from "./CitiesListItem";

export default function CitiesList({ cities }) {
  if (!cities.length) {
    return (
      <Alert variant={"info"} message={"Add city by clicking on the map"} />
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
