import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const paramPosition = searchParams.get("position");
  return paramPosition;
}
