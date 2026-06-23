import { Navigate } from "react-router-dom";

function CreatorRoute({ children }) {
  const role = localStorage.getItem("role");

  return role === "CREATOR"
    ? children
    : <Navigate to="/" />;
}

export default CreatorRoute;