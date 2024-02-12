import data from "../../data/cities.json";
import CitiesList from "../components/CitiesList";

export default function Cities() {
  return <CitiesList cities={data.cities} />;
}
