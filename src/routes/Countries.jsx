import data from "../../data/cities.json";
import CountriesList from "../components/CountriesList";

export default function Cities() {
  const countryInfo = {};

  data.cities.forEach(({ country }) => {
    countryInfo[country] = countryInfo[country] || {
      name: country,
      count: 0,
    };
    countryInfo[country].count++;
  });

  const countries = Object.values(countryInfo);

  return <CountriesList countries={countries} />;
}
