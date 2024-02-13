import CitiesList from "../components/CitiesList";
import { useCities } from "../contexts/CitiesContext";

export default function Cities() {
  const { cities } = useCities();
  return <CitiesList cities={cities} />;
}
