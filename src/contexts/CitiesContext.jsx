import { createContext, useContext, useEffect, useReducer } from "react";
import { supabase } from "../services/supabase";
import { getUser } from "../services/apiAuth";

const initialState = {
  cities: null,
  isLoading: true,
};

const citiesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        cities: action.payload,
        isLoading: false,
      };
    case "ADD_CITY":
      return {
        ...state,
        cities: state.cities
          ? [...state.cities, ...action.payload]
          : action.payload,
        isLoading: false,
      };
    case "DELETE_CITY":
      return {
        ...state,
        cities: state.cities
          ? state.cities.filter((city) => city.id !== action.payload)
          : [],
        isLoading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export const CitiesContext = createContext(null);

export function CitiesProvider({ children }) {
  const [{ cities, isLoading }, dispatch] = useReducer(
    citiesReducer,
    initialState
  );

  useEffect(() => {
    const fetchCities = async () => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });

        const user = await getUser();

        if (user) {
          const { data: citiesData, error } = await supabase
            .from("cities")
            .select("*")
            .eq("user_id", user.id);

          if (error) {
            throw error;
          }

          dispatch({ type: "FETCH_SUCCESS", payload: citiesData });
        }
      } catch (error) {
        console.error("Error fetching cities:", error.message);
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    fetchCities();
  }, []);

  const createCity = async (city) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const user = await getUser();

      if (user) {
        const { data, error } = await supabase
          .from("cities")
          .insert([{ ...city, user_id: user.id }])
          .select();

        if (error) {
          throw error;
        }

        dispatch({ type: "ADD_CITY", payload: data });
      }
    } catch (error) {
      console.error("Error adding city:", error.message);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const deleteCity = async (cityId) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const user = await getUser();

      if (user) {
        const { error } = await supabase
          .from("cities")
          .delete()
          .eq("id", cityId)
          .eq("user_id", user.id);

        if (error) {
          throw error;
        }

        dispatch({ type: "DELETE_CITY", payload: cityId });
      }
    } catch (error) {
      console.error("Error deleting city:", error.message);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);
  return context;
}
