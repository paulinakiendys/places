export default function CountriesListItem({ country }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <h2>{country.name}</h2>
      <span className="badge bg-primary rounded-pill">{country.count}</span>
    </li>
  );
}
