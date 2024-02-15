import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export const CitiesContext = createContext(null);

export function CitiesProvider({ children }) {
  const [cities, setCities] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        let { data: citiesData, error } = await supabase
          .from("cities")
          .select("*");

        if (error) {
          throw error;
        }

        setCities(citiesData);
      } catch (error) {
        console.error("Error fetching cities:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, loading }}>
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);
  return context;
}
