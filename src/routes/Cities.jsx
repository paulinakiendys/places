import Alert from "../components/Alert";
import CitiesList from "../components/CitiesList";
import Spinner from "../components/Spinner";
import { useCities } from "../contexts/CitiesContext";

export default function Cities() {
  const { cities, loading } = useCities();
  if (loading) return <Spinner />;
  if (!cities)
    return <Alert variant="info" message="Click on the map to add a city" />;

  return <CitiesList cities={cities} />;
}
