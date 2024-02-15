import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { supabase } from "../services/supabase";

export default function City() {
  const { cityId } = useParams();
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        setLoading(true);

        let { data: cityData, error } = await supabase
          .from("cities")
          .select("*")
          .eq("id", cityId)
          .single();

        if (error) {
          throw error;
        }

        setCity(cityData);
      } catch (error) {
        console.error("Error fetching city:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCity();
  }, [cityId]);

  if (loading) return <Spinner />;

  if (!city) return <Alert variant="secondary" message="City not found" />;

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{city.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {city.country}
          </h6>
          <p className="card-text">{city.note}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              Date visited: {city.date}
            </small>
          </p>
          <BackButton />
        </div>
      </div>
    </>
  );
}
