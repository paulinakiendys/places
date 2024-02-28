import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

export default function Index() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/app", { replace: true });
    }
  }, [user, navigate]);

  return (
    <section
      id="index"
      className="d-flex justify-content-center align-items-center"
    >
      <div className="bg-light bg-opacity-75 p-3 m-3 col-sm-10 col-md-8 col-lg-6">
        <h1>Welcome to Places</h1>
        <h2>Your Personal Journey Tracker</h2>
        <p>
          Explore the world and keep a record of your cherished moments with
          Places. Whether it&apos;s a bustling city, a serene beach, or a hidden
          gem, mark each spot on your map and create a personalized list of the
          places you&apos;ve visited. Capture memories, share experiences, and
          relive your adventures with Places.
        </p>
        <div className="text-center">
          <Link className="btn btn-success btn-lg" to={"login"}>
            Start tracking
          </Link>
        </div>
      </div>
    </section>
  );
}
