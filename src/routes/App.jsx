import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="container-fluid">
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
  );
}
