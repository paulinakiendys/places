import Alert from "../components/Alert";
import CountriesList from "../components/CountriesList";
import { useCities } from "../contexts/CitiesContext";

export default function Cities() {
  const { cities } = useCities();

  if (!cities)
    return <Alert variant="info" message="Click on the map to add a country" />;

  const countryInfo = {};

  cities.forEach(({ country }) => {
    countryInfo[country] = countryInfo[country] || {
      name: country,
      count: 0,
    };
    countryInfo[country].count++;
  });

  const countries = Object.values(countryInfo);

  return <CountriesList countries={countries} />;
}
