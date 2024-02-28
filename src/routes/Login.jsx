import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, error, isLoading, login, dispatch } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    login({ email, password });
  }

  useEffect(() => {
    if (user) {
      navigate("/app", { replace: true });
    }
    return () => {
      dispatch({ type: "CLEAR_ERROR" });
    };
  }, [user, navigate, dispatch]);

  return (
    <section id="login" className="m-3">
      {error && <Alert variant="danger" message={error} />}
      <div className="bg-light bg-opacity-75 p-3">
        <form onSubmit={handleSubmit}>
          <h2>Sign in to your account</h2>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <button
            className="btn btn-success"
            type="submit"
            disabled={isLoading}
          >
            Log in
          </button>
          <Link className="btn btn-link" to={"/signup"}>
            Create account
          </Link>
        </form>
      </div>
    </section>
  );
}
