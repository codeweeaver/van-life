import { Navigate, Outlet, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const RequiresAuth = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequiresAuth;
