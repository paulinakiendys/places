import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={``}>
          Places
        </NavLink>
        <div className="navbar-nav d-flex flex-row gap-3">
          <NavLink className="nav-link" to={`about`}>
            About
          </NavLink>
          <NavLink className="btn btn-primary" to={`login`}>
            Log in
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
