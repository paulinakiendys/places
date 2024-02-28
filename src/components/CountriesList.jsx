import Alert from "./Alert";
import CountriesListItem from "./CountriesListItem";

export default function CountriesList({ countries }) {
  if (!countries.length) {
    return (
      <Alert variant={"info"} message={"Click on the map to add a country"} />
    );
  }
  return (
    <ul className="list-group">
      {countries.map((country) => (
        <CountriesListItem country={country} key={country.name} />
      ))}
    </ul>
  );
}
