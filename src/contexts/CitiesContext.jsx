import { createContext, useContext } from "react";
import data from "../../data/cities.json";

export const CitiesContext = createContext(null);

export function CitiesProvider({ children }) {
  const cities = data.cities;

  return (
    <CitiesContext.Provider value={{ cities }}>
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);
  return context;
}
