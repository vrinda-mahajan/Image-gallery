import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

function PrivateRoutes({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/signup" replace={true} />;
  }
  return children;
}

export default PrivateRoutes;
