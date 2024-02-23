import { useNavigate } from "react-router-dom";

export default function BackButton({ url = -1 }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        navigate(url);
      }}
      className="btn btn-outline-secondary"
      type="button"
    >
      Back
    </button>
  );
}
