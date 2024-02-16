import { NavLink, Outlet } from "react-router-dom";
import Map from "../components/Map";

export default function App() {
  return (
    <div className="container-fluid">
      <Map />
      <div>
        <div className="btn-group">
          <NavLink className="btn btn-secondary" to={`city`}>
            Cities
          </NavLink>
          <NavLink className="btn btn-secondary" to={`country`}>
            Countries
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
