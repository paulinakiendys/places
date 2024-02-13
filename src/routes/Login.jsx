import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section id="login">
      <div className="container-fluid">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              defaultValue={"email@example.com"}
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
              aria-describedby="passwordHelp"
              defaultValue={"password"}
            />
            <div id="passwordHelp" className="form-text">
              Your password must be 8-20 characters long, contain letters and
              numbers and special characters.
            </div>
          </div>
          <Link className="btn btn-primary" to={"/app"}>
            Log in
          </Link>
        </form>
      </div>
    </section>
  );
}
