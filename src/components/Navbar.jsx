import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={``}>
          Places
        </NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-link" to={`about`}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
