import { NavLink } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

export default function CitiesListItem({ city }) {
  const { deleteCity } = useCities();
  function handleClick(e) {
    e.preventDefault();
    deleteCity(city.id);
  }
  return (
    <NavLink
      to={`${city.id}?position=${city.position}`}
      className="list-group-item list-group-item-action d-flex justify-content-between"
      key={city.id}
    >
      <h2>{city.name}</h2>
      <div className="d-flex gap-3 align-items-center">
        <span>{city.date}</span>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={handleClick}
        >
          Delete
        </button>
      </div>
    </NavLink>
  );
}
