import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

function PrivetRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) {
    return <p>...loading</p>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/signin"></Navigate>;
}

export default PrivetRoute;
