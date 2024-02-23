import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export const CitiesContext = createContext(null);

export function CitiesProvider({ children }) {
  const [cities, setCities] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  const createCity = async (city) => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("cities")
        .insert([city])
        .select();

      if (error) {
        throw error;
      }
      setCities((prevCities) => (prevCities ? [...prevCities, ...data] : data));
    } catch (error) {
      console.error("Error adding city:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CitiesContext.Provider value={{ cities, isLoading, createCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);
  return context;
}
