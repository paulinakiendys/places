export default function CountriesListItem({ country }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <h2>{country.name}</h2>
      <span className="badge rounded-pill text-bg-light">{country.count}</span>
    </li>
  );
}
