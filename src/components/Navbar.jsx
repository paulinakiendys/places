import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, logout, isLoading } = useAuth();

  function handleClick(e) {
    e.preventDefault();
    logout();
  }

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink className="navbar-brand" to={``}>
          🌐 Places
        </NavLink>
        <div className="navbar-nav d-flex flex-row gap-3">
          {!user && (
            <>
              <NavLink className="nav-link" to={`about`}>
                About
              </NavLink>
              <NavLink className="btn btn-primary" to={`signup`}>
                Sign up
              </NavLink>
            </>
          )}
          {user ? (
            <button
              className="btn btn-primary"
              onClick={handleClick}
              disabled={isLoading}
            >
              Log out
            </button>
          ) : (
            <NavLink className="btn btn-link" to={`login`}>
              Log in
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
