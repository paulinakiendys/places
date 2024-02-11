import { Link } from "react-router-dom";

export default function Index() {
  return (
    <section id="index">
      <div className="container-fluid">
        <h1>Welcome to Places</h1>
        <h2>Your Personal Journey Tracker</h2>
        <p>
          Explore the world and keep a record of your cherished moments with
          Places. Whether it&apos;s a bustling city, a serene beach, or a hidden
          gem, mark each spot on your map and create a personalized list of the
          places you&apos;ve visited. Capture memories, share experiences, and
          relive your adventures with Places.
        </p>
        <Link className="btn btn-primary btn-lg" to={"login"}>
          Start tracking
        </Link>
      </div>
    </section>
  );
}
