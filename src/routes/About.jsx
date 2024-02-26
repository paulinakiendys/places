import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

export default function About() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/app", { replace: true });
    }
  }, [user, navigate]);
  return (
    <section id="about">
      <div className="container-fluid">
        <h2>About Places</h2>
        <p>
          At Places, we believe that every location holds a unique story, and
          we&apos;re here to help you tell yours. Our mission is to empower
          users to curate their personal map of experiences, creating a tangible
          and visual representation of their life&apos;s journey.
        </p>
        <p>
          Whether you&apos;re a seasoned globetrotter or someone exploring your
          local surroundings, Places is designed to be your companion on every
          step of your journey.
        </p>
        <p>
          Join us in celebrating the diversity and beauty of the world, one
          place at a time. Start your adventure with Places today!
        </p>
      </div>
    </section>
  );
}
