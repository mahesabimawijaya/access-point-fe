import { useLocation } from "react-router";

const usePath = (position: number) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  return pathSegments[position] || "";
};

export default usePath;
