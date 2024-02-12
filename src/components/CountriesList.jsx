import CountriesListItem from "./CountriesListItem";

export default function CountriesList({ countries }) {
  return (
    <ul className="list-group">
      {countries.map((country) => (
        <CountriesListItem country={country} key={country.name} />
      ))}
    </ul>
  );
}
