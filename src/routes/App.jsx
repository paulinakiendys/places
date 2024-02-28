import { NavLink, Outlet } from "react-router-dom";
import Map from "../components/Map";

export default function App() {
  return (
    <div className="container-fluid d-flex flex-column flex-lg-row">
      <div className="position-relative col-12 col-lg-6 order-lg-2">
        <Map />
      </div>
      <div className="col-12 col-lg-6 order-lg-1 my-3 my-lg-0 pe-lg-3">
        <div className="btn-group mb-3">
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
