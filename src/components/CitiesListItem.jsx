import { NavLink } from "react-router-dom";

export default function CitiesListItem({ city }) {
  return (
    <NavLink
      to={`${city.id}`}
      className="list-group-item list-group-item-action d-flex justify-content-between"
      key={city.id}
    >
      <h2>{city.name}</h2>
      <div className="d-flex gap-3 align-items-center">
        <span>{city.date}</span>
        <button type="button" className="btn btn-danger btn-sm">
          Delete
        </button>
      </div>
    </NavLink>
  );
}
