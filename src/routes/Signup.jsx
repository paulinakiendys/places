import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, error, isLoading, signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    signup({ email, password });
  }

  useEffect(() => {
    if (user) {
      navigate("/app", { replace: true });
    }
  }, [user, navigate]);

  return (
    <section id="signup">
      <div className="container-fluid">
        <form onSubmit={handleSubmit}>
          <h2>Create an account</h2>
          {error && <Alert variant="danger" message={error} />}
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
            />
            <div id="emailHelp" className="form-text">
              We&apos;ll never share your email with anyone else.
            </div>
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
            />
            <div id="passwordHelp" className="form-text">
              Your password must be at least 6 characters long.
            </div>
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isLoading}
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}
