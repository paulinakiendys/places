import { Link } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";

export default function Form() {
  const paramPosition = useUrlPosition();

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCityData() {
      try {
        setIsLoading(true);
        setError("");
        const [latitude, longitude] = paramPosition.split(",");
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
        );
        const data = await res.json();
        if (!data.countryCode) {
          throw new Error("Click on a city");
        }
        setName(data.city || data.locality || "");
        setCountry(data.countryName);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCityData();
  }, [paramPosition]);

  if (isLoading) return <Spinner />;

  if (error) return <Alert variant="danger" message={error} />;

  return (
    <section id="addCity">
      <div className="container-fluid">
        <form>
          <h2>Add a city</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div id="nameHelp" className="form-text">
              Enter the name of a city you visited.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              aria-describedby="dateHelp"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <div id="dateHelp" className="form-text">
              Enter the date you visited the city.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="note" className="form-label">
              Note
            </label>
            <textarea
              className="form-control"
              id="note"
              rows="3"
              aria-describedby="noteHelp"
            ></textarea>
            <div id="noteHelp" className="form-text">
              Enter some notes about your visit.
            </div>
          </div>
          <Link className="btn btn-primary" to={"/app"}>
            Add city
          </Link>
        </form>
      </div>
    </section>
  );
}
