import CountriesList from "../components/CountriesList";
import Spinner from "../components/Spinner";
import { useCities } from "../contexts/CitiesContext";

export default function Cities() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

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
